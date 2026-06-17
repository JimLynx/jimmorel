(function () {
	if (!("IntersectionObserver" in window)) return;

	document.documentElement.classList.add("js-reveal");

	var sections = document.querySelectorAll(".screen:not(.hero)");

	var observer = new IntersectionObserver(
		function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15 }
	);

	sections.forEach(function (section) {
		observer.observe(section);
	});
})();
