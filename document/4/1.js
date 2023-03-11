//Таблицу с id="age-table".
let table =  document.getElementById('age-table')
//Все элементы label внутри этой таблицы (их три).
table.getElementsByTagName('label')
//Первый td в этой таблице (со словом «Age»).
table.querySelector('td')
//Форму form с именем name="search".
let form = document.getElementsByName('search')[0]
//Первый input в этой форме.
form.querySelector('input')
//Последний input в этой форме.
form.querySelectorAll('input')[form.querySelectorAll('input').length - 1] 