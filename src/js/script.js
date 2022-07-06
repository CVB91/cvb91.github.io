'use strict'

// Element selectors

const firstName = document.getElementById('firstName');
const secondName = document.getElementById('secondName');
const thirdName = document.getElementById('thirdName')


const aboutLink = document.getElementById('about-link')
const workLink = document.getElementById('work-link')
const contactLink = document.getElementById('contact-link')
const section1 = document.getElementById('section--1')
const section2 = document.getElementById('section--2')
const section3 = document.getElementById('section--3')

const navbar = document.getElementById('navbar');





// ANIMATE LETTERS

const nameArray1 = ['C', 'H', 'R', 'I', 'S', 'T', 'I', 'A', 'N'];
const nameArray2 = ['V', 'O', 'N'];
const nameArray3 = ['B', 'R', 'E', 'D', 'O', 'W'];
const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

firstName.innerHTML = nameArray1.map((char, i) => (
    `<span class='text-animate _${i + 1} text'>${char}</span>`
)).join('');

secondName.innerHTML = nameArray2.map((char, i) => (
    `<span class='text-animate _${i + 10} text'>${char}</span>`
)).join('');

thirdName.innerHTML = nameArray3.map((char, i) => (
    `<span class='text-animate _${i + 13} text '>${char}</span>`
)).join('');


const allTextAnimate = document.getElementsByClassName('text-animate')

console.log(allTextAnimate)

// while (allTextAnimate.length) allTextAnimate[0].classList.remove('text-animate')
// while (allTextAnimate.length) allTextAnimate[0].classList.add('text');


// let animatedLetter = document.querySelector(
//   '.text-animate');


// animatedLetter.addEventListener('animationend', () => {
//     animatedLetter.classList.remove('text-animate')
//     animatedLetter.classList.add('text')
// })

// for (let i = 0; i < 18; i++) {
//   let animatedLetter = document.getElementsByClassName(`text-animate _${i}`);
//   console.log(animatedLetter);
//   animatedLetter.classList.remove('text-animate');
//      animatedLetter.classList.add('text');
//   // animatedLetter.addEventListener('animationend', () => {
//   //   animatedLetter.classList.remove('text-animate');
//   //     animatedLetter.classList.add('text');
//   // });
// }


// Sticky Navbar

window.onscroll = function () { stickyNav() };

let sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
}


// aboutLink.addEventListener('click', function (e) {
//     const s1coords = section1.getBoundingClientRect();
//     console.log(s1coords);
  
//     console.log(e.target.getBoundingClientRect());
  
//     console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
//     console.log(
//       'height/width viewport',
//       document.documentElement.clientHeight,
//       document.documentElement.clientWidth
//     );
  
  
//     //Scrolling
//   window.scrollTo(
//     s1coords.left + window.pageXOffset,
//     s1coords.top + window.pageYOffset
//   );

//   window.scrollTo({
//     left: s1coords.left + window.pageXOffset,
//     top: s1coords.top + window.pageYOffset,
//     behavior: 'smooth',
//   });
//   });


//   workLink.addEventListener('click', function (e) {
//     const s2coords = section2.getBoundingClientRect();
//     console.log(s2coords);
  
//     console.log(e.target.getBoundingClientRect());
  
//     console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
//     console.log(
//       'height/width viewport',
//       document.documentElement.clientHeight,
//       document.documentElement.clientWidth
//     );
  
  
//     //Scrolling
//   window.scrollTo(
//     s2coords.left + window.pageXOffset,
//     s2coords.top + window.pageYOffset
//   );

//   window.scrollTo({
//     left: s2coords.left + window.pageXOffset,
//     top: s2coords.top + window.pageYOffset,
//     behavior: 'smooth',
//   });
//   });

//   aboutLink.addEventListener('click', function (e) {
//     const s1coords = section1.getBoundingClientRect();
//     console.log(s1coords);
  
//     console.log(e.target.getBoundingClientRect());
  
//     console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
//     console.log(
//       'height/width viewport',
//       document.documentElement.clientHeight,
//       document.documentElement.clientWidth
//     );
  
  
//     //Scrolling
//   window.scrollTo(
//     s1coords.left + window.pageXOffset,
//     s1coords.top + window.pageYOffset
//   );

//   window.scrollTo({
//     left: s1coords.left + window.pageXOffset,
//     top: s1coords.top + window.pageYOffset,
//     behavior: 'smooth',
//   });
//   });

