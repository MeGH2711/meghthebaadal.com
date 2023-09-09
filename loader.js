// After 10 seconds, fade out the loader, fade in the content, and enable scrolling
setTimeout(function () {
    const loader = document.getElementById('loader-on');
    const content = document.getElementById('loader-off');

    // Fade out the loader
    loader.style.opacity = '0';

    // Wait for the loader to fade out and then hide it
    setTimeout(function () {
        loader.style.display = 'none';


        // Fade in the content
        content.style.opacity = '1';
        content.style.display = 'block';
    }, 500); // Wait for 0.5 seconds (500 milliseconds)
}, 3000); // 10 seconds (10000 milliseconds)