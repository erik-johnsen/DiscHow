
//nav buttons

const navButtons = document.querySelectorAll(".header-button")
const pages = document.querySelectorAll(".pages")

navButtons.forEach(button => {
	function ShowPages(event) {

		const button = event.currentTarget
		const pageToDisplay = button.dataset.button
	
		pages.forEach(site => {
			site.classList.remove("visible")
	
			if (site.dataset.page === pageToDisplay) {
				site.classList.add("visible")
			}
		})
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