document.addEventListener("DOMContentLoaded", function(){



	const hamburger = (ham, leng, active, hamActive, header, headerActive) => {
			const button = document.querySelector(ham),
					headerLeng = document.querySelector(leng),
					head = document.querySelector(header);
					console.log(head);

				button.addEventListener('click', () => {
					headerLeng.classList.toggle(active);
					button.classList.toggle(hamActive);
					head.classList.toggle(headerActive);
					head.classList.toggle(headerActive);
				});

	};
	hamburger('.hamburger', '.menu', 'menu--active', 'hamburger--active', '.header', 'header--menu');





})


