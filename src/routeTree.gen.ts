/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ThingsIndexImport } from './routes/things/index'
import { Route as ThingsCssClampCalculatorImport } from './routes/things/css-clamp-calculator'
import { Route as ThingsAuthBookmarkMakerImport } from './routes/things/auth-bookmark-maker'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ThingsIndexRoute = ThingsIndexImport.update({
  id: '/things/',
  path: '/things/',
  getParentRoute: () => rootRoute,
} as any)

const ThingsCssClampCalculatorRoute = ThingsCssClampCalculatorImport.update({
  id: '/things/css-clamp-calculator',
  path: '/things/css-clamp-calculator',
  getParentRoute: () => rootRoute,
} as any)

const ThingsAuthBookmarkMakerRoute = ThingsAuthBookmarkMakerImport.update({
  id: '/things/auth-bookmark-maker',
  path: '/things/auth-bookmark-maker',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/things/auth-bookmark-maker': {
      id: '/things/auth-bookmark-maker'
      path: '/things/auth-bookmark-maker'
      fullPath: '/things/auth-bookmark-maker'
      preLoaderRoute: typeof ThingsAuthBookmarkMakerImport
      parentRoute: typeof rootRoute
    }
    '/things/css-clamp-calculator': {
      id: '/things/css-clamp-calculator'
      path: '/things/css-clamp-calculator'
      fullPath: '/things/css-clamp-calculator'
      preLoaderRoute: typeof ThingsCssClampCalculatorImport
      parentRoute: typeof rootRoute
    }
    '/things/': {
      id: '/things/'
      path: '/things'
      fullPath: '/things'
      preLoaderRoute: typeof ThingsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/things/auth-bookmark-maker': typeof ThingsAuthBookmarkMakerRoute
  '/things/css-clamp-calculator': typeof ThingsCssClampCalculatorRoute
  '/things': typeof ThingsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/things/auth-bookmark-maker': typeof ThingsAuthBookmarkMakerRoute
  '/things/css-clamp-calculator': typeof ThingsCssClampCalculatorRoute
  '/things': typeof ThingsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/things/auth-bookmark-maker': typeof ThingsAuthBookmarkMakerRoute
  '/things/css-clamp-calculator': typeof ThingsCssClampCalculatorRoute
  '/things/': typeof ThingsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/things/auth-bookmark-maker'
    | '/things/css-clamp-calculator'
    | '/things'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/things/auth-bookmark-maker'
    | '/things/css-clamp-calculator'
    | '/things'
  id:
    | '__root__'
    | '/'
    | '/things/auth-bookmark-maker'
    | '/things/css-clamp-calculator'
    | '/things/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ThingsAuthBookmarkMakerRoute: typeof ThingsAuthBookmarkMakerRoute
  ThingsCssClampCalculatorRoute: typeof ThingsCssClampCalculatorRoute
  ThingsIndexRoute: typeof ThingsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ThingsAuthBookmarkMakerRoute: ThingsAuthBookmarkMakerRoute,
  ThingsCssClampCalculatorRoute: ThingsCssClampCalculatorRoute,
  ThingsIndexRoute: ThingsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/things/auth-bookmark-maker",
        "/things/css-clamp-calculator",
        "/things/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/things/auth-bookmark-maker": {
      "filePath": "things/auth-bookmark-maker.tsx"
    },
    "/things/css-clamp-calculator": {
      "filePath": "things/css-clamp-calculator.tsx"
    },
    "/things/": {
      "filePath": "things/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
