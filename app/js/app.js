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
				});

	};
	hamburger('.hamburger', '.menu', 'menu--active', 'hamburger--active', '.header', 'header--menu');

	const anchorLinks = document.querySelectorAll('a[href^="#"]');
 
	anchorLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
	 
			const href = this.getAttribute('href');
			const target = document.querySelector(href);
			const headerHeight = document.querySelector('header').offsetHeight;
	 
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
				offset: -headerHeight
			});
		});
	});

})


