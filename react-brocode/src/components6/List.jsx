import React from "react";

function List(props) {
  const fruits = [
    { id: "1", name: "apple", calories: 95 },
    { id: "2", name: "orange", calories: 45 },
    { id: "3", name: "banana", calories: 95 },
    { id: "4", name: "coconut", calories: 295 },
    { id: "5", name: "pineapple", calories: 23 }
  ];
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}:&nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));
  return (
    <div>
      <ol>{listItems}</ol>
    </div>
  );
}

export default List;
