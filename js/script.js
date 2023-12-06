
import { discs } from './discs.js';
import { newDiscs } from './discs.js';

// Queryselectors and 

const gridDiscer = document.querySelector(".grid__discer")
const gridNyDiscer = document.querySelector(".grid__new-discer")

// nav buttons 

const navButtons = document.querySelectorAll(".nav-button")
const pages = document.querySelectorAll(".pages")
const footer = document.querySelector(".footer-container")

// sidebar filtering

const sidebar = document.querySelector('.sidebar')
const sidebarButtons = document.querySelectorAll(".filter-buttons-title")
const brandContent = document.querySelectorAll(".brand__checkbox-label")
const typeContent = document.querySelectorAll(".type__checkbox-label")

const filterButtons = document.querySelectorAll(".filter-button")

// responsive mobile filter button

const sidebarCloseButton = document.querySelector('.sidebar-mobile-close')
const mobileFilterButton = document.querySelector('.mobile-filter-button')

// contact us, valdate form 

const contactForm = document.querySelector(".contact-form")
const contactInputFields = document.querySelectorAll(".contact-form_field")
const submitButton = document.querySelector(".contact-form_submit")

// contact us form storing value

const formNameInput = document.querySelector(".contact-form_name")
const formNumberInput = document.querySelector(".contact-form_phone")
const formMailInput = document.querySelector(".contact-form_mail")
const formCommentInput = document.querySelector(".contact-form_comment")

let storedContactInfo = []

let brandWithUppercase
// adding discs to DOM "Discer" page

discs.forEach(disc => {
	if(disc.brand === "mvp") {
		brandWithUppercase = disc.brand.toUpperCase()
	} else {
		brandWithUppercase = disc.brand.charAt(0).toUpperCase() + disc.brand.slice(1)
	}
	
	
	let discString = `<div class="disc filter-discs" data-brand="${disc.brand}" data-disc-type="${disc.discType}" data-name="${disc.name}">`+  
						`<div class="disc-img">` +
							`<img src="${disc.image}" alt="Image of the disc ${disc.name}">` +
						`</div>`+
						`<div class="disc-info">`+
							`<div class="disc-tall">${disc.speed} ${disc.glide} ${disc.turn} ${disc.fade}</div>`+
							`<div class="disc-navn">${disc.name}</div>`+
							`<div class="disc-merke">${brandWithUppercase}</div>` +
						`</div>`+
					`</div>`

	
	const discHtml = new DOMParser().parseFromString(discString, 'text/html')
	const divDiscs = discHtml.querySelector(".disc")
	gridDiscer.append(divDiscs)
})


// adding discs to DOM "Nybegynner discer" page

newDiscs.forEach(disc => {
	if(disc.brand === "mvp") {
		brandWithUppercase = disc.brand.toUpperCase()
	} else {
		brandWithUppercase = disc.brand.charAt(0).toUpperCase() + disc.brand.slice(1)
	}
	
	let discString = `<div class="disc" data-name="${disc.name}">`+  
						`<img class="disc-img" src="${disc.image}" alt="Image of the disc ${disc.name}"">` +
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


// disc description popup, i need to have the queryselectors below where i add the elements to DOM

const discerPage = document.querySelector(".discer")
const everyDiscInGrid = document.querySelectorAll(".disc")

const discPopup = (event) => {
	const button = event.currentTarget
	const discThatPopup = button.dataset.name

	discs.forEach(disc => {

		if(disc.brand === "mvp") {
			brandWithUppercase = disc.brand.toUpperCase()
		} else {
			brandWithUppercase = disc.brand.charAt(0).toUpperCase() + disc.brand.slice(1)
		}

		if(discThatPopup === disc.name) {
			let discPopupTemplate = `<div class="disc-popup">` +
										`<img class="disc-popup-img" src="${disc.image}" alt="Image of the disc ${disc.name}">`+
										`<div class="disc-popup-content">`+
											`<div class="disc-popup-text">`+

												`<div class="disc-popup-text_name">${disc.name}</div>` +

												`<span class="disc-popup-text_number">` +
													`<span>Nummer</span>`+
													`<span>${disc.speed} ${disc.glide} ${disc.turn} ${disc.fade}</span>`+
												`</span>` +

												`<span class="disc-popup-text_brand">` +
													`<span>Merke</span>`+
													`<span>${brandWithUppercase}</span>`+
												`</span>` +
												
												`<div class="disc-popup-description">${disc.description}</div>`+
											`</div>`+
											`<button class="button-popup-close">close</button>`+
										`</div>`+
									`</div>`

			const discHtml = new DOMParser().parseFromString(discPopupTemplate, "text/html")
			const discPopupDiv = discHtml.querySelector(".disc-popup")

			if (button.classList.contains("filter-discs")) {
				discerPage.append(discPopupDiv)
			} else {
				gridNyDiscer.append(discPopupDiv)
			}


			const closePopUpButton = document.querySelector(".button-popup-close")
			closePopUpButton.addEventListener("click", () => {
				const discPopupDiv = document.querySelector(".disc-popup")
				discPopupDiv.remove()
				
			})

			discPopupDiv.classList.add("fade-in")
		}
	})
}

everyDiscInGrid.forEach(disc => {
	disc.addEventListener("click", discPopup)
})

//nav buttons

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

const filterItems = () => {

	const filterButtons = document.querySelectorAll(".filter-button")
	const divDiscs = document.querySelectorAll(".filter-discs")

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

// responsive mobile filter button

const mobileShowFilters = () => {
	sidebar.classList.add('visible')
}

const mobileHideFilters = () => {
	sidebar.classList.remove('visible')
}

mobileFilterButton.addEventListener('click', mobileShowFilters)
sidebarCloseButton.addEventListener('click', mobileHideFilters)


// Kontakt oss form, check if every field is filled out function

const validateForm = () => {
	if(contactForm.checkValidity() === true && !submitButton.classList.contains("contact-form_checkmark")) {
		
		submitButton.textContent = ""
		submitButton.classList.remove("contact-form_submit")
		submitButton.classList.add("contact-form_checkmark")
		setTimeout(() => {
			storingInputValue()

			submitButton.textContent = "Send inn!"
			submitButton.classList.add("contact-form_submit")
			submitButton.classList.remove("contact-form_checkmark")
		}, 1500)
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

const storingInputValue = () => {


	let personInfo = {
		name: formNameInput.value,
		number: formNumberInput.value,
		email: formMailInput.value,
		comment: formCommentInput.value
	}

	storedContactInfo.push(personInfo)
	console.log(storedContactInfo);
	formNameInput.value = ""
	formNumberInput.value = ""
	formMailInput.value = ""
	formCommentInput.value = ""
}

submitButton.addEventListener("click", validateForm)
