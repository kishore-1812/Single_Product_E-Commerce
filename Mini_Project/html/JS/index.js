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

function check1(){
  const x=document.getElementById('bulkr');
  if(x.style.display === "none"){
    x.style.display = "block";
  }else{
    x.style.display ="block";
  }
}
function check2(){
  const x=document.getElementById('payr');
  if(x.style.display === "none"){
    x.style.display = "block";
  }else{
    x.style.display ="block";
  }
}
function check3(){
  const x=document.getElementById('delr');
  if(x.style.display === "none"){
    x.style.display = "block";
  }else{
    x.style.display ="none";
  }
}
function check4(){
  const x=document.getElementById('bulkr');
  if(x.style.display === "block"){
    x.style.display = "none";
  }else{
    x.style.display ="none";
  }
}
function check5(){
  const x=document.getElementById('payr');
  if(x.style.display === "block"){
    x.style.display = "none";
  }else{
    x.style.display ="none";
  }
}
function check6(){
  const x=document.getElementById('delr');
  if(x.style.display === "block"){
    x.style.display = "none";
  }else{
    x.style.display ="none";
  }
}