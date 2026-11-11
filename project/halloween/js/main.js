
document.addEventListener('DOMContentLoaded', () => {
	/* menu */
	const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close');
	
	if (navToggle) {
		navToggle.addEventListener('click', () => {
			console.log('ok')
			navMenu.classList.add('show_menu')
		})
	}

	if (navClose) {
		navClose.addEventListener('click', () => {
			navMenu.classList.remove('show_menu')
		})
	}

	/* remove menu */
	const navLink = document.querySelectorAll('.nav_link')
	const linkAction = () => {
		const navMenu = document.getElementById('nav-menu')
		navMenu.classList.remove('show_menu')
	}
	navLink.forEach(n => {
		n.addEventListener('click', linkAction)
	})

	/* change bg header */
	const scrollHeader = () => {
		const header = document.getElementById('header')
		this.scrollY >=50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
	}

	window.addEventListener('scroll', scrollHeader)

	/* active */
	const sections = document.querySelectorAll('section[id]')
	const scrollActive = () => {
		const scrollY = window.pageYOffset

		sections.forEach(current => {
			const sectionHeight = current.offsetHeight,
				sectionTop = current.offsetTop - 58,
				sectionId = current.getAttribute('id'),
				sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId);
			
			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				sectionClass.classList.add('active_link')
			} else {
				sectionClass.classList.remove('active_link')
			}
		})
	}

	window.addEventListener('scroll', scrollActive)



	/* show scroll up  */
	const scrollUp = () => {
		const scrollUp = document.getElementById('scroll-up')
		this.scrollY >= 350 ? scrollUp.classList.add('show_scroll') : scrollUp.classList.remove('show_scroll')
	}
	window.addEventListener('scroll', scrollUp)



	/* scroll reveal */
	const sr = ScrollReveal({
		origin: 'top',
		distance: '60px',
		duration: 2500,
		delay: 400,
	})
	sr.reveal(`.home_data, .footer_logo, .footer_description, .footer_content`)
	sr.reveal(`.home_tree1`, { origin: 'left',delay:800 })
	sr.reveal(`.home_tree2`, { origin: 'right',delay:800 })
	sr.reveal(`.home_img`, { delay:800 })
	sr.reveal(`.category_card, .items_card`, { interval:100 })
	sr.reveal(`.about_img, .about_data, .footer_tree2`, { origin: 'left' })
	sr.reveal(`.party_images, .party_data, .footer_tree1`, { origin: 'right' })

})