
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
