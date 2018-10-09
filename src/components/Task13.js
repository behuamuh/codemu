import React from 'react';

export const Task13 = () => {
  function showMessage() {
    alert('hello');
  }
  return <button onClick={showMessage}>Click me</button>;
};
