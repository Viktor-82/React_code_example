// Строчка импорта реакта из реакта необходима только в старой форме записи
import React from "react";
import Costs from "./components/Costs/Costs";

function App() {

  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99
    },
    {
      date: new Date(2021, 11, 25),
      description: "MackBook",
      amount: 1254.72
    },
    {
      date: new Date(2021, 4, 1),
      description: "Джинсы",
      amount: 49.99
    }

  ];

  // Как на самом деле реакт пишет код "под капотом"
  return React.createElement(
      "div",
      {},
      React.createElement(Costs, {costs: costs})
  );
  // return (
  //     <div>
  //       <Costs costs={costs}/>
  //     </div>
  // );
}

export default App;