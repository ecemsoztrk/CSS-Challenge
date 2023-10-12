/*******
Showcase: https://css100.aniqa.dev/
GitHub repository with notes for each day: https://github.com/aniqatc/css-100 
********/

const openActive = document.querySelectorAll(".image span");
const activeElements = document.querySelectorAll(
	".profile-bottom, .profile-cover, .profile-avatar, .close-icon, .profile"
);
const closeActive = document.querySelector(".close-icon");

openActive.forEach((button) => {
	button.addEventListener("click", () => {
		activeElements.forEach((el) => {
			el.classList.add("active");
		});
	});
});

closeActive.addEventListener("click", () => {
	activeElements.forEach((el) => {
		el.classList.remove("active");
	});
});
