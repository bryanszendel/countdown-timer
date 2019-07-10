const dates = {
        labs: `sept 30, 2019 09:00:00`,
        jobHunt: `nov 22, 2019 18:00:00`,
        LambdaX: `feb 10, 2020 09:00:00`
    }

const countdowns = document.querySelector('.countdowns')

function newCountdown() {
    const countdown = document.createElement('div')
    const timer = document.createElement('h2')
    
    countdown.appendChild(timer)

    countdown.classList.add('countdown')
}

labsCountdown = window.setInterval(() => {
    let labsCountdown = new Date(dates.labs).getTime();
    let now = new Date().getTime();
    let t = labsCountdown - now

    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000*60)) / 1000);

    document.querySelector('.countdowns').textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
}, 1000)

