const ap=document.getElementById('app');
const close=document.querySelector('.close');

ap.addEventListener('click',()=>{
    const full=document.querySelector('.full-page');
    full.classList.toggle('show');
})

close.addEventListener('click',()=>{
    const full=document.querySelector('.full-page');
    full.classList.add('none'); 
    console.log('close');
})