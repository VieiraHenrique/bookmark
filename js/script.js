const header = document.querySelector('.header');
const menu = document.getElementById('menu');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('open');
	header.classList.toggle('mobile-open');
	body.classList.toggle('overflow');
});

//////////////////////////////////////////////
