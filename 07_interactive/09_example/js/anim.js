// 태양이 자바스크립트로 변경되도록 수정
const sun = document.querySelector('.sun');
const maxTime = 20000;
let time = maxTime;
const timer = setInterval(() => {
    if (time === 0) time = maxTime;

    if (sun) {
        const timeVal = time ? time / maxTime : 1
        const rotateVal = ((360 * timeVal) + 90) * -1 
        sun.style.transform = `rotate(${rotateVal}deg)`;

        let sunOpacity;
        if (0.75 <= timeVal && timeVal < 1) {
            // 0 ~ 90
            sunOpacity = 2.5 - 2 * timeVal
        } else if (0.5 <= timeVal && timeVal < 0.75) {
            // 90 ~ 180
            sunOpacity = 4 * timeVal - 2 
        } else {
            sunOpacity = 0
        }
        sun.style.opacity = sunOpacity;
    }

    time = time - 100;
}, 50);