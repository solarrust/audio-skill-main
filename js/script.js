$(".slider").slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 variableWidth: true,
 centerMode: true,
 responsive: [{
	breakpoint: 768,
	settings: {
	 arrows: false,
	 dots: true,
	 slidesToScroll: true
	}
 }]
});


window.addEventListener("scroll", () => {
 const decor = Array.from(document.querySelectorAll("[data-parallax]"));

 decor.forEach(d => {
	d.style.top = - (window.pageYOffset * 0.1) + "px";
 })

});
