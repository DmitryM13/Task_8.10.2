const btn = document.querySelector('form');

btn.addEventListener('submit', function(event){
    event.preventDefault();
    const text = document.querySelector('#text').value;
    alert('Спасибо за нажатие на нашу замечательную кнопку. Значение вашего поля — ' + text);
})