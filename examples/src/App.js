import Costs from "./components/Costs";

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

  // Удаляем нахрен лишний код из App для этого используем компонент Costs

  return (
      <div>
        {/* В props компонента передаем "реквизит" с именем costs в него записываем
        массив данных costs.
         Возвращается из компонента Costs компонент CostItem */}
        <Costs costs={costs}/>
      </div>
  );
}

export default App;