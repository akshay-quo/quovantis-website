let theButton = document.getElementById('hamburger-menu-btn');
let bgWhite = document.querySelectorAll('.header-main');
let expandedMenu = document.querySelectorAll('.expanded-menu');
let headerListItems = document.getElementsByClassName('header-navigation__wrapper');

theButton.onclick = function () {
	for (let x of bgWhite) {
		x.classList.toggle('header-white');
	}
	for (let y of expandedMenu) {
		y.classList.toggle('active');
	}
	headerListItems[0].classList.toggle('hide-it');
};
