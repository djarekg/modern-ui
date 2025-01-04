import type { CreateContextType } from '@/types/context-type.js';
import { createContext } from '@lit/context';

export const context: CreateContextType = createContext<string>(Symbol.for('auth'));
