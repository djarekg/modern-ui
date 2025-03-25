import { toDateTime } from '../common/i18n/date-time.js';

export const log = (message?: string) => {
  return (_target: unknown, _key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      console.log(`${toDateTime()}: ${message ?? originalMethod.name}`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
};
