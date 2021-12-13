import { RouteObject } from 'react-router-dom';
import { Example1 } from './Example1';
import { Example2 } from './Example2';
import { Example3 } from './Example3';
import { Example4 } from './Example4';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Example1 />,
  },
  {
    path: '/example-1',
    element: <Example1 />,
  },
  {
    path: '/example-2',
    element: <Example2 />,
  },
  {
    path: '/example-3',
    element: <Example3 />,
  },
  {
    path: '/example-4',
    element: <Example4 />,
  },
];
