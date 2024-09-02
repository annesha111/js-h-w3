const btn = document.querySelector('.btn')

const sideber = document.querySelector('.sideber')
const cancel = document.querySelector('.cancel')


btn.addEventListener('click',function(){
    sideber.classList.add('active')
})

cancel.addEventListener('click',function(){
    sideber.classList.remove('active')
})

sideber.addEventListener('click',function(){
    sideber.classList.remove('active') 
})