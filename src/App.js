import React from 'react';


export const App = () => {
  return (
    <div>
      Hello world!!!
    </div>
  );
};

























export const HelloByName = (props) => {
  const { name } = props;
  return (
    <div>
      Hello, {name}!!!
    </div>
  );
};


















export const HelloByNameClass = (props) => {
  const { name } = props;
  return (
    <div className="class" style={{background: '#ccc'}}>
      Hello, {name}!!!
    </div>
  );
};