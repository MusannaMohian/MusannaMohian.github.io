(function () {
  "use strict";

  // Theme toggle — dark is the CSS default regardless of OS preference,
  // so "no attribute set" always means dark here.
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var root = document.documentElement;
      var current = root.getAttribute("data-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("am-theme", next); } catch (e) {}
    });
  }

  // Mobile nav toggle
  var navToggle = document.getElementById("nav-toggle");
  var indexRail = document.getElementById("index-rail");
  if (navToggle && indexRail) {
    navToggle.addEventListener("click", function () {
      var isOpen = indexRail.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    indexRail.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        indexRail.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal-on-scroll
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("in-view"); });
    }
  }

  // Scrollspy for right-hand index nav (home page sections only)
  var sections = document.querySelectorAll("main [id]");
  var navLinks = document.querySelectorAll(".index-list a[data-nav]");
  if (sections.length && navLinks.length) {
    var map = {};
    navLinks.forEach(function (link) {
      var key = link.getAttribute("data-nav");
      map[key] = link;
    });
    if ("IntersectionObserver" in window) {
      var spy = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var id = entry.target.id;
              navLinks.forEach(function (l) { l.classList.remove("active"); });
              if (map[id]) map[id].classList.add("active");
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      sections.forEach(function (el) { spy.observe(el); });
    }
  }
})();
