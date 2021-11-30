window.onload = async function () {

   var gradients = {
       start: '#2a5470',
       end: '#4c4177'
   }

   var el = document.querySelector('body');

   var animation = anime({
       targets: gradients,
       start: '#0c0d1a',
       end: '#1d1f3e',
       duration: 3000,
       easing: 'easeOutQuad',
       // loop: true,
       // direction: 'alternate',
       update: function (a) {
           var value1 = a.animations[0].currentValue;
           var value2 = a.animations[1].currentValue;
           el.style.backgroundImage = 'linear-gradient(60deg, ' + value1 + ' 0%, ' + value2 + ' 100%)'
       }
   });
   document.querySelector('.ml14 .letters').innerHTML = 'ZippMusic'
   var textWrapper = document.querySelector('.ml14 .letters');
   textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
   anime.timeline({})
       .add({
           targets: '.ml14 .line',
           scaleX: [0, 1],
           opacity: [0.5, 1],
           easing: "easeInOutExpo",
           duration: 900
       }).add({
           targets: '.ml14 .letter, .bar',
           opacity: [0, 1],
           translateX: [40, 0],
           translateZ: 0,
           scaleX: [0.3, 1],
           easing: "easeOutExpo",
           duration: 800,
           offset: '-=600',
           delay: (el, i) => 150 + 25 * i
       }, 0).add({
           targets: '.song',
           // translateY: ['100px', 0],
           translateY: ['100px', 0],
           opacity: [0, 1],
           duration: 500,
           delay: (el, i) => 150 + 25 * i
       }, 0).add({
           targets: '.textPlayLists, .playListContainer, .playListContainer2',
           opacity: [0, 1],
           delay: (el, i) => 150 + 35 * i
       }, 0); anime({
           targets: '.audio-container',
           translateZ: [],
           translateY: ['100px', 0],
           duration: 1000
       }); document.querySelector(".ml6 .lettersAnimation").innerHTML = document.querySelector(".ml6 .lettersAnimation").textContent.replace(/\S/g, "<span class='letter'>$&</span>"), document.body.classList.add("loaded_hiding"), await window.setTimeout(async function () { document.body.classList.add("loaded"), document.body.classList.remove("loaded_hiding"), await anime.timeline({ loop: !1, onload: !0 }).add({ targets: ".ml6 .letter", opacity: [0, 1], translateY: ["-1.1em", 0], translateZ: 0, duration: 250, delay: (t, e) => 20 * e }), await anime.timeline().add({ targets: "#navbarButton", translateX: [-10, 0], opacity: [0, 1], duration: 1e3, delay: (t, e) => 50 * e }) }, 500)
};