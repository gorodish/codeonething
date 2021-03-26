const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();
    const newDate = dateFns.format(now, 'HH : mm : ss');

    const html = `
        <span>${newDate}</span>
    `;

    clock.innerHTML = html;
}

setInterval(tick, 1000);