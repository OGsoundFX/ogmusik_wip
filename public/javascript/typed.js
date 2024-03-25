console.log('typed.js loaded');

new Typed('#films', {
  strings: ['Films'],
  typeSpeed: 50,
  showCursor: false,
});

setTimeout(() => {
  new Typed('#music', {
    strings: ['Music'],
    typeSpeed: 50,
    showCursor: false,
  });
}, 500);

setTimeout(() => {
  new Typed('#about', {
    strings: ['About'],
    typeSpeed: 50,
    showCursor: false,
  });
}, 1000);

setTimeout(() => {
  new Typed('#menu', {
    strings: ['Menu'],
    typeSpeed: 80,
  });
}, 1500);
