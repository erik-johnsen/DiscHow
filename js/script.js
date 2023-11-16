
import { discs } from './discs.js';
import { newDiscs } from './discs.js';

// adding discs to DOM "Discer" page

const gridDiscer = document.querySelector(".grid-discer")

discs.forEach(disc => {
	
	let discString = `<div class="disc" data-brand="${disc.brand}" data-disc-type="${disc.discType}">`+  
						`<a class="disc-img" href="">` +
							`<img src="${disc.image}" alt="Image of the disc ${disc.name}">` +
						`</a>`+
						`<div class="disc-info">`+
							`<div class="disc-tall">${disc.speed} ${disc.glide} ${disc.turn} ${disc.fade}</div>`+
							`<div class="disc-navn">${disc.name}</div>`+
							`<div class="disc-merke">${disc.brand}</div>` +
						`</div>`+
					`</div>`

	
	const discHtml = new DOMParser().parseFromString(discString, 'text/html')
	const divDiscs = discHtml.querySelector(".disc")
	gridDiscer.append(divDiscs)
})

// adding discs to DOM "Nybegynner discer" page

const gridNyDiscer = document.querySelector(".grid-nydiscer")

newDiscs.forEach(disc => {
	
	let discString = `<div class="disc">`+  
						`<a class="disc-img" href="">` +
							`<img src="${disc.image}" alt="Image of the disc ${disc.name}">` +
						`</a>`+
						`<div class="disc-info">`+
							`<div class="disc-tall">${disc.speed} ${disc.glide} ${disc.turn} ${disc.fade}</div>`+
							`<div class="disc-navn">${disc.name}</div>`+
							`<div class="disc-merke">${disc.brand}</div>` +
						`</div>`+
					`</div>`

	
	const discHtml = new DOMParser().parseFromString(discString, 'text/html')
	const divDiscs = discHtml.querySelector(".disc")
	gridNyDiscer.append(divDiscs)
})

//nav buttons

const navButtons = document.querySelectorAll(".nav-button")
const pages = document.querySelectorAll(".pages")

const footer = document.querySelector(".footer-container")

function ShowPages(event) {

	const button = event.currentTarget
	const pageToDisplay = button.dataset.button

	pages.forEach(site => {
		site.classList.remove("visible")

		if (site.dataset.page === pageToDisplay) {
			site.classList.add("visible")
		}

		if (button.dataset.button === "discer") {
			footer.classList.add("visible")
		} else {
			footer.classList.remove("visible")
		}

	})
	
	window.scrollTo({top: 0, behavior: "instant"})
}

navButtons.forEach(button => {
	button.addEventListener("click", ShowPages)
})

// sidebar

const sidebarButtons = document.querySelectorAll(".filter-buttons-title")

const brandButton = document.querySelector(".merke-title")
const typeButton = document.querySelector(".type-title")

const brandContent = document.querySelectorAll(".merke-checkbox_label")
const typeContent = document.querySelectorAll(".type-checkbox_label")

// sidebar dropdown function

function showFilters(event) {
	const button = event.currentTarget
	
	if(button.textContent === "Merke") {

		brandContent.forEach(element => {
			element.classList.toggle("sidebar-filter_visible")
		})

	} else if(button.textContent === "Type") {

		typeContent.forEach(element => {
			element.classList.toggle("sidebar-filter_visible")
		})
	} 

}

sidebarButtons.forEach(button => {
	button.addEventListener("click", showFilters)
})


// sidebar filter function 

const filterButtons = document.querySelectorAll(".filter-button")


const filterItems = () => {

	const filterButtons = document.querySelectorAll(".filter-button")
	const divDiscs = document.querySelectorAll(".disc")

	let activeFilters = [...filterButtons].filter(item => {
		return item.checked === true
	})
	divDiscs.forEach(item => {
	
		let shouldInclude = activeFilters.every(element => {
			let filterBy = element.dataset.filterBy
			let filterValue = element.dataset.filterValue
			return item.dataset[filterBy] === filterValue 
		})

		if(shouldInclude === false) {
			item.classList.add("not-visible")
		} else {
			item.classList.remove("not-visible")
		}	
	})
}

filterButtons.forEach(button => {
	button.addEventListener("click", filterItems)
})

// Kontakt oss form, check if every field is filled out function
const contactForm = document.querySelector(".kontakt-skjema")
const contactInputFields = document.querySelectorAll(".kontakt-skjema_felt")


const validateForm = () => {
	if(contactForm.checkValidity() === true) {
		storingInputValue()
	}
	contactInputFields.forEach(input => {
		if(input.checkValidity() === false) {
			input.classList.add("invalid-contact-form")
		} else {
			input.classList.remove("invalid-contact-form")
		}
	})	
}

// Kontakt oss form, extract the value function


const submitButton = document.querySelector(".kontakt-skjema_submit")

let storedContactInfo = []
const storingInputValue = () => {

	let personInfo = {
		name: document.querySelector(".kontakt-skjema_navn").value,
		number: document.querySelector(".kontakt-skjema_telefon").value,
		email: document.querySelector(".kontakt-skjema_mail").value,
		comment: document.querySelector(".kontakt-skjema_kommentar").value
	}

	storedContactInfo.push(personInfo)
	console.log(storedContactInfo);
}

submitButton.addEventListener("click", validateForm)
