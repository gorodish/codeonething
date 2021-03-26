// get the menu item
const apiMenu = document.querySelector('.apiMenu');
// get the location for the new html
const apiView = document.querySelector('.apiView');

// find what's been clicked
apiMenu.addEventListener('click', (e) => {
    const id = e.target.id;

    // insert the api html
    apiView.innerHTML = `<div href="./src/forecast.html"</div>`;
});
