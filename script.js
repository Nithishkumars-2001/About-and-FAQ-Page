
//  select side navbar

var side_navbar = document.querySelector(".side-navbar")

function showsidenavbar()
{
    side_navbar.style.left = "0"
}
function closesidenavbar()
{
    side_navbar.style.left = "-70%"
}

//  select FAQ Page

var html_faq = document.querySelector(".html-faq")

function openhtmlans()
{
    html_faq.style.display = "block"
}
function closehtmlans()
{
    html_faq.style.display = "none"
}

var css_faq = document.querySelector(".css-faq")

function opencssans()
{
    css_faq.style.display = "block"
}
function closecssans()
{
    css_faq.style.display = "none"
}

var js_faq = document.querySelector(".js-faq")

function openjsans()
{
    js_faq.style.display = "block"
}
function closejsans()
{
    js_faq.style.display = "none"
}

var react_faq = document.querySelector(".react-faq")

function openreactans()
{
    react_faq.style.display = "block"
}
function closereactans()
{
    react_faq.style.display = "none"
}

var node_faq = document.querySelector(".node-faq")

function opennodeans()
{
    node_faq.style.display = "block"
}
function closenodeans()
{
    node_faq.style.display = "none"
}

// select About Page

var about_bg = document.querySelector(".about-bg")
var faq_container = document.querySelector(".faq-container")
var teams_condition_page = document.querySelector(".teams-condition-page")

function show_aboutpg()
{
    about_bg.style.display = "block"
    faq_container.style.display = "none"
    teams_condition_page.style.display = "none"
}

function show_Faqpg()
{
    about_bg.style.display = "none"
    faq_container.style.display = "block"
    teams_condition_page.style.display = "none"
}


function show_termspg()
{
    about_bg.style.display = "none"
    faq_container.style.display = "none"
    teams_condition_page.style.display = "block"
}





