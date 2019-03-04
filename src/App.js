import React from 'react';
import {Task} from './Task';


export const App = () => {
  const tasks = [
    {
      id: 0,
      title: 'Купить хлеба',
      description: 'По пути домой',
      done: false,
    },
    {
      id: 1,
      title: 'Задеплоить сервис',
      done: true,
    },
    {
      id: 2,
      title: 'Погладить кота',
      done: false,
    },
  ];

  return (
    <ul>
      {tasks.map((task, i) => (
        <Task
          {...task}
          key={i.toString()}
        />
      ))}
    </ul>
  );
};
