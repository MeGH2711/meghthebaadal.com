// Cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
    });

    document.addEventListener('mouseover', (e) => {
        const hoveredElement = e.target;
        const bgColor = window.getComputedStyle(hoveredElement).backgroundColor;

        if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
            cursor.style.backgroundColor = '#fff'; // Default to white for transparent elements
        } else {
            cursor.style.backgroundColor = invertColor(bgColor);
        }
    });
});

function invertColor(rgb) {
    // Extract RGB values from "rgb(r, g, b)" string
    const rgbValues = rgb.match(/\d+/g);
    if (!rgbValues) return '#000000'; // Default to black if no match found

    const r = 255 - parseInt(rgbValues[0]);
    const g = 255 - parseInt(rgbValues[1]);
    const b = 255 - parseInt(rgbValues[2]);

    return `rgb(${r},${g},${b})`;
}