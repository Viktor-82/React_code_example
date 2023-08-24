import React, {useState} from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
import CostsFilter from "./components/Costs/CostsFilter";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    description: "MackBook",
    amount: 1254.72
  },
  {
    id: 'c3',
    date: new Date(2021, 4, 1),
    description: "Джинсы",
    amount: 49.99
  },
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) =>  {
    // Запускаем функцию setState обновляющую состояние переменной, внутрь вкладываем функцию получения последнего состояния переменной
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  };

  console.log(costs);

  /* Для решения задачи вывода данных по фильтру год создам метод который будет получать из компонента
  * CostFilter значение выбранного года и делать выборку из массива методом .filter() образовывая новый массив
  * с даными который я и буду выводить в копоненте Costs */

  // const getYearFromFilter = (year) => {
  //   const filterCost = costs.filter(year)
  // };
  // console.log(getYearFromFilter)

  return (
      <div>
        <NewCost onAddCost={addCostHandler} />
        <Costs costs={costs} />
      </div>
  );
}

export default App;