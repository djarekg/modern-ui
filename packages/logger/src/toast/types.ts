export type ToastType = 'info' | 'debug' | 'warning' | 'error';

export type ToastOptions = {
  message: string;
  type?: ToastType;
  duration?: number;
  appendToLitElement?: string;
};
