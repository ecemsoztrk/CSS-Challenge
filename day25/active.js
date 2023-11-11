const marker = document.querySelector(".marker");
const shadow = document.querySelector(".shadow");
const card = document.querySelector(".card");
const links = document.querySelector(".card-content__links");

marker.addEventListener("click", () => {
	marker.classList.add("active");
	shadow.classList.add("active");
	card.classList.add("active");
});

links.addEventListener("click", () => {
	marker.classList.remove("active");
	shadow.classList.remove("active");
	card.classList.remove("active");
});