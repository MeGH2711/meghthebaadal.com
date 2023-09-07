
// After 10 seconds, hide the loader and display the content
setTimeout(function () {
    const loader = document.getElementById('loader-on');
    const content = document.getElementById('loader-off');

    // Hide the loader by setting its display to 'none'
    loader.style.display = 'none';

    // Show the content by setting its display to 'block'
    content.style.display = 'block';
}, 5000); // 10 seconds (10000 milliseconds)