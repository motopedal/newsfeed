import ParentA from './ParentA';
import ChildA from './child-a/ChildA';
import ChildB from './child-b/ChildB';

const routes = [
  {
    path: '/a',
    component: ParentA,
    routes: [
      {
        path: '/a/a',
        component: ChildA,
      },
      {
        path: '/a/b',
        component: ChildB,
      },
    ],
  },
];

export default routes;