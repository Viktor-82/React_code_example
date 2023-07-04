// 1 Синтаксис написания компонента
// Импортируем стили .css и другие компоненты которые должны быть использованы в данном компоненте

import CostItem from "./CostItem";
import './Costs.css';
import Card from "./Card";

// Сам компонент представляет собой функцию которая возвращает разметку JSX (js+css+html)
function Costs(props) {
     return (
          <div className='costs'>

          </div>
     )
}
// Чтобы компонент можно было использовать в других частях приложения экспортируем его
export default Costs;