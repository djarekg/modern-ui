import { component, createContext, html, useContext } from 'haunted';

import { useSearchParams } from './use-search-params.js';

export type Route = {
  ready: boolean;
  params: unknown;
  query: unknown;
};

const RouteContext = createContext({} as Route);
customElements.define('mui-route-context', RouteContext.Provider);

export const useRouteProvider = (params: unknown): Route => {
  const query = useSearchParams();

  return {
    ready: params !== undefined,
    params: params || {},
    query,
  };
};

const RouteProvider = ({ params }: { params: unknown }) => {
  const ctx = useRouteProvider(params || undefined);
  return html`<mui-route-context .value=${ctx}><slot></slot></mui-route-context>`;
};
customElements.define('mui-route-provider', component<Route & HTMLElement>(RouteProvider));

export const useRoute = (): Route => useContext(RouteContext);
