
import { discs } from './discs.js';
import { newDiscs } from './discs.js';

// MOVE ALL OFF QUERYSELECTORS AND EMPTY ARRAYS HERE

const gridDiscer = document.querySelector(".grid-discer")
const gridNyDiscer = document.querySelector(".grid-nydiscer")

// discs popup

const discerPage = document.querySelector(".discer")
const everyDiscInGrid = document.querySelectorAll(".disc")

// nav buttons 

const navButtons = document.querySelectorAll(".nav-button")
const pages = document.querySelectorAll(".pages")
const footer = document.querySelector(".footer-container")

// sidebar filtering

const sidebar = document.querySelector('.sidebar')
const sidebarButtons = document.querySelectorAll(".filter-buttons-title")
const brandContent = document.querySelectorAll(".merke-checkbox_label")
const typeContent = document.querySelectorAll(".type-checkbox_label")

const filterButtons = document.querySelectorAll(".filter-button")

// responsive mobile filter button

const sidebarCloseButton = document.querySelector('.sidebar-mobile-close')
const mobileFilterButton = document.querySelector('.mobile-filter-button')

// contact us, valdate form 

const contactForm = document.querySelector(".kontakt-skjema")
const contactInputFields = document.querySelectorAll(".kontakt-skjema_felt")
const submitButton = document.querySelector(".kontakt-skjema_submit")

// contact us form storing value

const formNameInput = document.querySelector(".kontakt-skjema_navn")
const formNumberInput = document.querySelector(".kontakt-skjema_telefon")
const formMailInput = document.querySelector(".kontakt-skjema_mail")
const formCommentInput = document.querySelector(".kontakt-skjema_kommentar")

let storedContactInfo = []

// adding discs to DOM "Discer" page

discs.forEach(disc => {
	
	let discString = `<div class="disc filter-discs" data-brand="${disc.brand}" data-disc-type="${disc.discType}" data-name="${disc.name}">`+  
						`<div class="disc-img">` +
							`<img src="${disc.image}" alt="Image of the disc ${disc.name}">` +
						`</div>`+
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

newDiscs.forEach(disc => {
	
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


// disc description popup

const discPopup = (event) => {
	const button = event.currentTarget
	const discThatPopup = button.dataset.name

	discs.forEach(disc => {
		if(discThatPopup === disc.name) {
			let discPopupTemplate = `<div class="disc-popup">` +
										`<span class="disc-popup-title">`+
											`<img class="disc-popup-img" src="${disc.image}" alt="Image of the disc ${disc.name}">`+
											`<div class="disc-popup-title-text">`+
												`<div class="disc-popup-title_name">${disc.name}</div>` +
												`<div class="disc-popup-title_number">${disc.speed} ${disc.glide} ${disc.turn} ${disc.fade}</div>`+
												`<div class="disc-popup-title_brand">${disc.brand}</div>`+
											`</div>`+
											`<button class="button-popup-close">close</button>`+
										`</span>`+
										`<div class="disc-popup-description">`+
												`<div class="disc-popup_description">`+
													`<div class="disc-popup-description_title">Informasjon om discen</div>`+
													`<div class="disc-popup-description_description">${disc.description}</div>`+
												`</div>`+
										`</div>` +
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
	if(contactForm.checkValidity() === true) {
		storingInputValue()

		submitButton.textContent = ""
		submitButton.classList.remove("kontakt-skjema_submit")
		submitButton.classList.add("kontakt-skjema_checkmark")
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
}

submitButton.addEventListener("click", validateForm)
