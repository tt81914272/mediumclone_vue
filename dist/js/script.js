// const gridItems = document.querySelectorAll('.process-parent__item');
// const processSticky = document.querySelector('.process-sticky');
// const visionContainer = document.querySelector('.vision-container');
// const visionSticky = document.querySelector('.vision-sticky');
// window.addEventListener('scroll', function() {
//     const sticky = document.querySelector('.process-parent'),
//         scroll = window.pageYOffset - sticky.offsetTop,
//         height = sticky.scrollHeight;

//     let i = 0;

//     scroll < (1 * (height / 6)) ? i = 0 :
//         scroll < (2 * (height / 6)) ? i = 1 :
//         scroll < (3 * (height / 6)) ? i = 2 :
//         scroll < (4 * (height / 6)) ? i = 3 :
//         scroll < (5 * (height / 6)) ? i = 4 : i = 5;


//     for (let j = 0; j < gridItems.length; j++) {
//         gridItems[j].classList.remove('view');
//         gridItems[j].classList.remove('active');
//         if (j <= i) {
//             gridItems[j].classList.add('view');
//         }
//     }
//     gridItems[i].classList.add('active');

//     if (gridItems[i] == gridItems[0]) {
//         processSticky.classList.remove('scroll-stop');
//     }
// });




// document.querySelector('.button-1').addEventListener('click', function() {
//     processSticky.classList.remove('scroll-stop');
//     const sticky = document.querySelector('.process-parent'),
//         scroll = window.pageYOffset + sticky.offsetTop,
//         height = sticky.scrollHeight;

//     window.scrollTo(0, sticky.offsetTop + (0 * (height / 6) - (height / 6 / 2)))
// });


// function reScroll(num, e) {
//     const sticky = document.querySelector('.process-parent'),
//         scroll = window.pageYOffset + sticky.offsetTop,
//         height = sticky.scrollHeight,
//         targ = e.target;

//     window.scrollTo(0, sticky.offsetTop + (num * (height / 6) - (height / 6 / 2)))
// }





// var position = document.querySelector('#process').offsetTop,
//     height = document.querySelector('.process-parent').offsetHeight;

// document.addEventListener('scroll', function() {
//     var scroll = window.pageYOffset || document.documentElement.scrollTop;
//     if (scroll > position && scroll < (position + height)) {
//         document.body.classList.add('scroll-x');
//         processSticky.classList.add('scroll-stop');
//     }
// });

// Get all nav links
const navLinks = document.querySelectorAll('nav a');
const navLine = document.querySelector('.trigger .line');

// Add click event listeners to nav links
const circ = document.querySelector('.big-circle');
navLinks.forEach(link => {
    document.querySelector('.nav-menu').classList.remove('active')
    link.addEventListener('click', event => {
        event.preventDefault();

        document.querySelector('.nav-menu').classList.toggle('active')
        const targetId = link.getAttribute('href');
        const element = document.querySelector(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// Add scroll event listener to window
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    // Iterate through all sections and check if section is visible in viewport
    document.querySelectorAll('.step').forEach(section => {

        const sectionTop = section.offsetTop - 50;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {

            // Set nav link as active if corresponding section is visible in viewport
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                    document.querySelector('h1').innerHTML = link.innerHTML

                }
            });
        }
    });
});




// window.addEventListener('scroll', function() {
//     var header = document.querySelector('.big-circle');
//     if (window.scrollY > 0) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });