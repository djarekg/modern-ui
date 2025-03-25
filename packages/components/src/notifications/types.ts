export type ToastType = 'info' | 'success' | 'warning' | 'error';

export type ToastOptions = {
  message: string;
  type?: ToastType;
  duration?: number;
  appendToLitElement?: string;
};
