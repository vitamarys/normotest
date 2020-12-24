window.addEventListener('DOMContentLoaded',() =>{
    //валюта
    let currency = document.querySelectorAll('.money-section__item__course__name__currency');

  
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return a = Math.random() * (max - min) + min; 
      }
      getRandomInt(1200, 4599)
      console.log(a);
      currency.forEach(item =>{
        item.innerText = `€${a.toFixed(2)}`;
        
    }) 
    //форма
    const form = document.querySelector('form'),
          firstName = document.querySelector('#firstname'),
          secondName = document.querySelector('#lastname'),
          email = document.querySelector('#email'),
          btn = document.querySelector('.general-item__form__btn'),
          popUp = document.querySelector('.pop-up'),
          popUpName = document.querySelector('.pop-up__name'),
          popUpSecondName = document.querySelector('.pop-up__second-name'),
          popUpEmail = document.querySelector('.pop-up__email'),
          close = document.querySelector('.close');
    
    btn.addEventListener('click',(e)=>{
        e.preventDefault;
        
        popUp.classList.add('active');
        popUpName.innerText= `First name: ${firstName.value}`;
        popUpSecondName.innerText= `Second name: ${secondName.value}`;
        popUpEmail.innerText = `Email: ${email.value}`;
        form.reset();
    })
    close.addEventListener('click',()=>{
        popUp.classList.remove('active');
    })
});