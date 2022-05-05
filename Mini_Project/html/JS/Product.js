const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function profile(){
  const x=document.getElementById('avatar-wrapper')
  if(x.style.display==="none"){
    x.style.display="block";
  }
  else{
    x.style.display="none";
  }
}
function Ingredients1(){
  const x=document.getElementById('para1');
  if(x.style.display==="none"){
    x.style.display = "block";
  }else{
    x.style.display ="none";
  }
}
function Ingredients2(){
  const x=document.getElementById('para2');
  if(x.style.display==="none"){
    x.style.display = "block";
  }else{
    x.style.display ="none";
  }
}
function Ingredients3(){
  const x=document.getElementById('para3');
  if(x.style.display==="none"){
    x.style.display = "block";
  }else{
    x.style.display ="none";
  }
}
function Ingredients4(){
  const x=document.getElementById('para4');
  if(x.style.display==="none"){
    x.style.display = "block";
  }else{
    x.style.display ="none";
  }
}
function Ingredients5(){
  const x=document.getElementById('para5');
  if(x.style.display==="none"){
    x.style.display = "block";
  }else{
    x.style.display ="none";
  }
}