const modals = document.querySelectorAll(".modal");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		modals[index].classList.remove("active");
		modals[index].classList.add("inactive");
		/* original formula: modals[index === 2 ? index - 2 : index + 1] */
		modals[(index + 1) % modals.length].classList.add("active");
		modals[(index + 1) % modals.length].classList.remove("inactive");
	});
});
