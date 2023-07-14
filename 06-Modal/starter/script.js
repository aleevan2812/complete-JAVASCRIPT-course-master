'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open Modal
btnsOpenModal.forEach(function (btnOpenModal) {
  btnOpenModal.addEventListener('click', openModal);
});

// close Modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// btnCloseModal.addEventListener('click', () => {
//   console.log('.close-modal button clicked');
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
// overlay.addEventListener('click', () => {
//   console.log('.overlay button clicked');
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

document.addEventListener('keydown', e => {
  console.log('A key was press');
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
