// const setAlarm = () => {
//     const alarmTimeInput = document.getElementById("alarm-time").value;
//     const alarmTime = new Date(alarmTimeInput);
//     const currentTime = new Date();

//     const timeDiff = alarmTime.getTime() - currentTime.getTime();
//     if (timeDiff > 0) {
//         const countdownElement = document.getElementById("countdown");
//         countdownElement.innerText = `Wecker wurde auf ${alarmTime.toLocaleTimeString()} eingestellt. Countdown startet...`;
//         startCountdown(timeDiff);
//     } else {
//         console.error("Bitte wählen Sie eine zukünftige Zeit für den Wecker.");
//     }
// }

// const triggerAlarm = () => {
//     const alarmSound = new Audio('security-alarm.mp3');
//     alarmSound.play();
//     console.log("Wecker los!");
// }

// const startCountdown = (time) => {
//     const countdownElement = document.getElementById("countdown");
//     const interval = setInterval(() => {
//         const minutes = Math.floor(time / 60000);
//         const seconds = ((time % 60000) / 1000).toFixed(0);

//         countdownElement.innerHTML = `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;

//         if (time <= 0) {
//             clearInterval(interval);
//             countdownElement.innerHTML = "Zeit ist abgelaufen!";
//             triggerAlarm();
//         }

//         time -= 1000;
//     }, 1000);
// }

// document.getElementById("set-alarm").addEventListener("click", setAlarm);

const setAlarm = () => {
    const alarmTimeInput = document.getElementById("alarm-time").value;
    const alarmTime = new Date(alarmTimeInput);
    const currentTime = new Date();

    const timeDiff = alarmTime.getTime() - currentTime.getTime();
    if (timeDiff > 0) {
        const countdownElement = document.getElementById("countdown");
        countdownElement.innerText = `Wecker wurde auf ${formatAlarmTime(alarmTime)} eingestellt. Countdown startet...`;

        // Speichern der Alarmzeit im DOM
        countdownElement.dataset.alarmTime = alarmTime.getTime();

        startCountdown(timeDiff);
    } else {
        console.error("Bitte wählen Sie eine zukünftige Zeit für den Wecker.");
    }
}

const triggerAlarm = () => {
    const alarmSound = new Audio('alarm.mp3');
    alarmSound.play();
    console.log("Wecker los!");
}

const startCountdown = (time) => {
    const countdownElement = document.getElementById("countdown");
    const interval = setInterval(() => {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`;

        if (time <= 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "Zeit ist abgelaufen!";
            triggerAlarm();
        }

        time -= 1000;
    }, 1000);
}

const formatAlarmTime = (time) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = time.getFullYear();
    const month = months[time.getMonth()];
    const day = time.getDate();
    const hours = time.getHours();
    const minutes = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
    const seconds = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
    return `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;
}

document.getElementById("set-alarm").addEventListener("click", setAlarm);


