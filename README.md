#### Передача данных по иерархии вверх (алгоритм действий):  
- создаем функцию в родителе,
- вызываем ее в наследнике. Цель работы функции - передача данных родителю.  
! Важно что если есть цепочка взаимосвязей передачи данных между компонентами то передача 
данных в родитель будет происходить по этой цепочке, а не напрямую.

#### Реализация.  
- `В родителе` (файле `NewCost.js`) пишем в компонент `CostForm` атрибут с названием начинающимся на `on` (далее произвольно) 
и передаем этому атрибуту функцию при срабатывании которой в компоненте-наследнике данные будут передаваться в родитель.
- `В наследнике` передаем атрибут через props. 
- `В наследнике` вызываем атрибут `props.onSaveCostData(costData);` в области видимости обработчика из которого забираем данные (внутри {} этого обработчика) 
и передаем в вызванный атрибут объект с данными для `родителя`.
- `В родителе` в обработчике получаем и используем данные.
- Тот же процесс повторяем для связки `родитель (App)` - `потомок (NewCost)`.

###### Ну и используем вывод в консоль чтобы проверить работают эти связки или нет.
####  Коммиты в `CostForm.js` -> `NewCost.js` -> `App.js` иерархия передачи данных обозначена стрелками.
