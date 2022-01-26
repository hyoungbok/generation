const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');

if(menuBtn){
	menuBtn.addEventListener('click', () => {
		sideMenu.classList.add('show-menu');
	});
}

if(closeBtn){
	closeBtn.addEventListener('click', () => {
		sideMenu.classList.remove('show-menu')
	});
}

// chang theme
themeToggler.addEventListener('click', () => {

	// console.log('ok')
	document.body.classList.toggle('dark-theme-varaibles')
	themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
	themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})

// fill orders in table
Oders.forEach(order => {
	const tr = document.createElement('tr');
	const trContent = `
							<td>${order.productName}</td>
							<td>${order.productNumber}</td>
							<td>${order.paymentStatus}</td>
							<td class="${order.shipping === 'Delivered' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
							<td class="primary">Pending</td>
	`;
	tr.innerHTML = trContent;
	document.querySelector('table tbody').appendChild(tr)
})