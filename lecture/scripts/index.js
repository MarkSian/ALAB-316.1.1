// Part 1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// Part 2
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3
var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
];

menuLinks.forEach(link => {
    let a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    topMenuEl.appendChild(a);
});
// Part 4: Save code for next lab.

// Part 5: Creating the Submenu
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

// Part 6: Adding Menu Interaction
const topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", function (event) {
    event.preventDefault();

});