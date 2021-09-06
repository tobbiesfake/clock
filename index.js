const
    hour = document.getElementById('clock-hour'),
    minute = document.getElementById('clock-minute'),
    second = document.getElementById('clock-second'),
    textHour = document.getElementById('text-hour'),
    textMinute = document.getElementById('text-minute'),
    textYear = document.getElementById('year'),
    textMonth = document.getElementById('month'),
    textDay = document.getElementById('day'),
    textDate = document.getElementById('date')

/* -----ROTATE-CLOCKWISE----- */

const clock = () => {
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minute.style.transform = `rotateZ(${mm}deg)`
    second.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000);

/*-----CHANGE-DATE-TIME-TEXT-----*/

const dateTime = () => {
    let date = new Date()

    let year = date.getFullYear(),
        month = date.getMonth(),
        dat3 = date.getDate(),
        day = date.getDay(),
        hh = date.getHours(),
        mm = date.getMinutes()

    let months = ['January', 'February',
        'March', 'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
    ]
    let days = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]

    textHour.innerText = hh;
    textMinute.innerText = mm;
    if (hh < 10) {
        textHour.innerText = `0${hh}`;
    }
    if (mm < 10) {
        textMinute.innerText = `0${mm}`;
    }

    textDate.innerText = `${days[day]},`
    textDay.innerText = dat3
    if (dat3 < 10) {
        textDay.innerText = `0${dat3}`;
    }
    textMonth.innerHTML = `${months[month]}`
    textYear.innerText = year

}
setInterval(dateTime, 1000);

/*-----DARK-LIGHT-MODE-ACTIVATION-----*/

const darkLight = document.getElementById('dark-light')
darkLight.addEventListener("click", darkLightUX)

function darkLightUX() {
    let main = document.getElementById('main'),
        clock = document.getElementById('clock')

    if (darkLight.innerText === '☀') {
        main.classList.add('light-mode')
        clock.classList.add('shadow-light')
        darkLight.classList.add('btn-light')
    }
    if (darkLight.innerText === '🌙') {
        main.classList.remove('light-mode')
        clock.classList.remove('shadow-light')
        darkLight.classList.remove('btn-light')
    }
    if (darkLight.innerText === '☀') {
        darkLight.innerText = '🌙'
    } else if (darkLight.innerText === '🌙') {
        darkLight.innerText = '☀'
    }
}