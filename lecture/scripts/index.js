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
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
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

    if (event.target.tagName !== "A") return;
    console.log(event.target.textContent);

});

// // Part 7: Adding Submenu Interaction
// subMenuEl.addEventListener("click", function (event) {
//     event.preventDefault();

// }