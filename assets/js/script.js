/*footer*/
let footerDate = document.querySelector('#year')

let date = new Date().getFullYear();
footerDate.innerHTML = date 

/*loader*/
let loader = document.getElementById('loader');

setTimeout(() => {
    loader.style.transform = "translateY(-100%)"
}, 200 );



/*Scroll*/

const ratio = .1
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const scrollIntersect = function(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio ){
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    } 
  })
}

const observer = new IntersectionObserver(scrollIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function(r) {
  observer.observe(r)
})


const bars = document.getElementById('bars');
const menu = document.getElementById('menu');
const menuItem = document.querySelectorAll('#menu a');

bars.addEventListener('click', () => {
  menu.classList.toggle('show');
});

menuItem.forEach(Item => {
  Item.addEventListener('click', () => {
    menu.classList.remove('show');
  })
})