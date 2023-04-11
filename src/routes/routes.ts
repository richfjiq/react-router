import { LazyExoticComponent, lazy } from 'react';

import NoLazy from '../lazyload/pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(/* webpackChunkName: "LazyLayout" */ '../lazyload/layout/LazyLayout')
);

export const routes: Route[] = [
  {
    to: '/lazyload',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'Lazy Layout',
  },
  {
    to: '/no-lazy',
    path: '/no-lazy',
    Component: NoLazy,
    name: 'Lazy 2',
  },
];
