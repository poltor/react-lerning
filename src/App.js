import React from 'react';
import {Task} from './Task';


export const App = () => {
  return (
    <ul>
      <Task
        title="Купить хлеба"
        description="По пути домой"
      />
      <Task
        title="Задеплоить сервис"
      />
      <Task
        title="Погладить кота"
      />
    </ul>
  );
};


















// export const App = () => {
//   const tasks = [
//     {
//       title: 'Купить хлеба',
//       description: 'По пути домой'
//     },
//     {
//       title: 'Задеплоить сервис',
//     },
//     {
//       title: 'Погладить кота',
//     },
//   ];
//
//   return (
//     <ul>
//       {tasks.map((task, i) => (
//         <Task {...task} />
//       ))}
//     </ul>
//   );
// };
