
import { discs } from './discs.js';

// adding discs to DOM

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

//nav buttons

const navButtons = document.querySelectorAll(".nav-button")
const pages = document.querySelectorAll(".pages")

const footer = document.querySelector(".footer-container")

navButtons.forEach(button => {
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

	button.addEventListener("click", ShowPages)
})

// sidebar

const sidebarButtons = document.querySelectorAll(".filter-buttons-title")

const brandButton = document.querySelector(".merke-title")
const typeButton = document.querySelector(".type-title")
const tallButton = document.querySelector(".tall-title")

const brandContent = document.querySelectorAll(".merke-checkbox_label")
const typeContent = document.querySelectorAll(".type-checkbox_label")
const numberContent = document.querySelectorAll(".tall-label")

// sidebar dropdown function

sidebarButtons.forEach(button => {

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

		} else {

			numberContent.forEach(element => {
				element.classList.toggle("sidebar-filter_visible")
			})

		}
	}

	button.addEventListener("click", showFilters)
})

// sidebar slider outputvalue

const sliders = document.querySelectorAll(".filter-slider")

const connectSliderAndOutput = {
	"range-speed": "outputValue-speed",
	"range-glide": "outputValue-glide",
	"range-turn": "outputValue-turn",
	"range-fade": "outputValue-fade"
}

const displaySliderOutput = () => {

	sliders.forEach(slider => {
		const outputValue = document.getElementById(connectSliderAndOutput[slider.id])
				
		if(slider && outputValue) {
			outputValue.innerHTML = slider.value

			slider.oninput = function() {
				outputValue.innerHTML = this.value
			}
		}
	})
}

sliders.forEach(slider => {
    slider.addEventListener("input", displaySliderOutput);
});

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