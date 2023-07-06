Используем одно состояние для всех полей формы (form).

Передаем в обработчик функцию которая возвращает предыдущие состояния. 
Такой подход решает проблему ошибок получения старых данных от React. 
Функция previousState отработает в стеке задач в последнюю очередь по 
завершению работы остального кода React и данные который она вернет будут
гарантированно актуальными. Коммиты в CostForm.js