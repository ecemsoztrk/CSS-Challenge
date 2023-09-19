function toggleHamburger(x) {

	if (x.classList.contains("active")) {
	  x.classList.remove("active");
	  x.classList.add("inactive");
	} else {
	  x.classList.remove("inactive");
	  x.classList.add("active");
	}
  }