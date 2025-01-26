export const log = (message?: string) => {
  return (target: unknown, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      console.log(message ?? originalMethod.name);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
};
