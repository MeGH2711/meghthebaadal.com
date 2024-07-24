var slideUp = {
    distance: '150%',
    origin: 'top',
    opacity: null,
};
var slideDown = {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
};
var slideRight = {
    distance: '150%',
    origin: 'right',
    opacity: null,
};
var slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: null,
};
var slideLeftd1 = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    delay: 100,
};
var item1 = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    delay: 500,
};
var item2 = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    delay: 1000,
};
var item3 = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    delay: 1500,
};
var item4 = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    delay: 2000,
};


ScrollReveal().reveal('.revealup', slideUp);
ScrollReveal().reveal('.revealdown', slideDown);
ScrollReveal().reveal('.revealright', slideRight);
ScrollReveal().reveal('.revealleft', slideLeft);
ScrollReveal().reveal('.navbar', { delay: 250 });
ScrollReveal().reveal('.item1', item1);
ScrollReveal().reveal('.item2', item2);
ScrollReveal().reveal('.item3', item3);
ScrollReveal().reveal('.item4', item4);
ScrollReveal().reveal('.landingimage', { delay: 2500 });
ScrollReveal().reveal('.revealleftd1', slideLeftd1);