import type { Router } from '@lit-labs/router';
import { createContext } from '@lit/context';

export const RouterContext = createContext<Router>(Symbol.for('router'));
