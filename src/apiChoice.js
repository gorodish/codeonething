// get the menu item
const apiMenu = document.querySelector('.apiMenu');
// get the location for the new html
const apiView = document.querySelector('.apiView');

// find what's been clicked
apiMenu.addEventListener('click', (e) => {

    const id = e.target.id;
    const weather = `
    <div class="my-5 mx-auto apiView">
    <h1 class="text-muted text-center my-4">The Weather</h1>
    <form class="change-location my-4 text-center text-muted">
        <label for="city">Enter a location for weather information</label>
        <input type="text" name="city" class="form-control p-4">
        <div class="card shadow-lg rounded d-none">
            <img src="https://via.placeholder.com/400x300?text=This+is+a+picture" class="time card-img-top">
            <div class="icon bg-light mx-auto text-center">
                <img src="#" alt="">
            </div>
            <div class="text-muted text-uppercase text-center details">
                <h5 class="my-3">City name</h5>
                <div class="my-3">Weather condition</div>
                <div class="display-4 my-4">
                    <span>Temp</span>
                    <span>&deg;C</span>
                </div>
            </div>
        </div>
    </form>
    </div>
    `;
    // insert the api html

    apiView.innerHTML = weather;
    console.log(id);
});
