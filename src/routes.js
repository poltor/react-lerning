import React from 'react';

import RandomCatPic from './containers/RandomCat';
import Todos from './containers/Todos';



const routes = [
  {
    path: '/',
    component: RandomCatPic,
    exact: true,
  },
  {
    path: '/todos',
    component: Todos,
    exact: true,
  },
  {
    component: () => (<div>404</div>)
  },
];


export default routes;
