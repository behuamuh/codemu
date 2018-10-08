import React from 'react';

export const Task9 = () => {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const list = arr.map(item => {
    return <li key={item}>{item}</li>;
  });
  return <ul>{list}</ul>;
};
