let i = 0;

let menu = document.querySelector('#menu').addEventListener('click', function(){
  
  if(!i){
    document.getElementById('buscador').style.display = 'none';
    i = 1;
  }
  else{
    document.getElementById('buscador').style.display = 'inline';
    i = 0;
  }
})

const menus = document.querySelector('#menu')
menus.addEventListener('click', () => {
    document.body.classList.toggle('anime');
     menus.classList.toggle('actives')

    
     });

     const menuss = document.querySelector('#menu')
menuss.addEventListener('click', () => {
    document.classList.toggle('animee');
     menuss.classList.toggle('activess')

    
     });

     



      