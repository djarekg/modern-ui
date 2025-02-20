export const ISO8601_DATE_REGEX =
  /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;

export interface FormatOptions extends Pick<Intl.DateTimeFormatOptions, 'day' | 'month' | 'year'> {
  locale?: string;
}

function isoStringToDate(match: RegExpMatchArray): Date {
  const date = new Date(0);
  let tzHour = 0;
  let tzMin = 0;

  // match[8] means that the string contains "Z" (UTC) or a timezone like "+01:00" or "+0100"
  const dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
  const timeSetter = match[8] ? date.setUTCHours : date.setHours;

  // if there is a timezone defined like "+01:00" or "+0100"
  if (match[9]) {
    tzHour = Number(match[9] + match[10]);
    tzMin = Number(match[9] + match[11]);
  }
  dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  const h = Number(match[4] || 0) - tzHour;
  const m = Number(match[5] || 0) - tzMin;
  const s = Number(match[6] || 0);
  // The ECMAScript specification (https://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.11)
  // defines that `DateTime` milliseconds should always be rounded down, so that `999.9ms`
  // becomes `999ms`.
  const ms = Math.floor(Number.parseFloat(`0.${match[7] || 0}`) * 1000);
  timeSetter.call(date, h, m, s, ms);
  return date;
}

function createDate(year: number, month: number, date: number): Date {
  // The `newDate` is set to midnight (UTC) on January 1st 1970.
  // - In PST this will be December 31st 1969 at 4pm.
  // - In GMT this will be January 1st 1970 at 1am.
  // Note that they even have different years, dates and months!
  const newDate = new Date(0);

  // `setFullYear()` allows years like 0001 to be set correctly. This function does not
  // change the internal time of the date.
  // Consider calling `setFullYear(2019, 8, 20)` (September 20, 2019).
  // - In PST this will now be September 20, 2019 at 4pm
  // - In GMT this will now be September 20, 2019 at 1am

  newDate.setFullYear(year, month, date);
  // We want the final date to be at local midnight, so we reset the time.
  // - In PST this will now be September 20, 2019 at 12am
  // - In GMT this will now be September 20, 2019 at 12am
  newDate.setHours(0, 0, 0);

  return newDate;
}

export const format = (value: Date | number | string, format?: FormatOptions): string => {
  const date = toDate(value);
  const {
    locale = navigator.language,
    year = 'numeric',
    month = '2-digit',
    day = '2-digit',
  } = format ?? {};
  const text = date.toLocaleString(locale, {
    year,
    month,
    day,
  });

  return text;
};

export const toISODate = (value: Date | number | string): string => {
  const date = toDate(value);
  return date.toISOString().split('T')[0];
};

export const toDate = (value: Date | number | string): Date => {
  if (isDate(value)) {
    return value;
  }

  if (typeof value === 'number' && !Number.isNaN(value)) {
    return new Date(value);
  }

  if (typeof value === 'string') {
    // biome-ignore lint/style/noParameterAssign: <explanation>
    value = value.trim();

    if (/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(value)) {
      /* For ISO Strings without time the day, month and year must be extracted from the ISO String
      before Date creation to avoid time offset and errors in the new Date.
      If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
      date, some browsers (e.g. IE 9) will throw an invalid Date error.
      If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
      is applied.
      Note: ISO months are 0 for January, 1 for February, ... */
      const [y, m = 1, d = 1] = value.split('-').map((val: string) => +val);
      return createDate(y, m - 1, d);
    }

    const parsedNb = Number.parseFloat(value);

    // any string that only contains numbers, like "1234" but not like "1234hello"
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    if (!Number.isNaN((value as any) - parsedNb)) {
      return new Date(parsedNb);
    }

    let match: RegExpMatchArray | null;
    // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
    if ((match = value.match(ISO8601_DATE_REGEX))) {
      return isoStringToDate(match);
    }
  }

  const date = new Date(value as number);
  if (!isDate(date)) {
    throw new Error(`Unable to convert "${value}" into a date`);
  }
  return date;
};

export const toDateTime = (value: Date | number | string = new Date()): string => {
  return toDate(value).toLocaleString().replace(/,/g, '');
};

export const isDate = (value: unknown): value is Date => {
  return value instanceof Date && !Number.isNaN(value.valueOf());
};
