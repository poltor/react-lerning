import React from 'react';


export const Task = (props) => {
  const { description, title } = props;

  return (
    <li className="task">
      <b>{title}</b>

      {description && (
        <p>
          {description}
        </p>
      )}
    </li>
  );
};
