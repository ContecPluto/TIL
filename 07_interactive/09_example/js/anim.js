// 태양이 자바스크립트로 변경되도록 수정
const sun = document.querySelector('.sun');
const maxTime = 20000;
let time = maxTime;
setInterval(() => {
    if (time === 0) time = maxTime;

    if (sun) {
        const rotateVal = ((360 * (time ? time / maxTime : 1)) + 90) * -1 
        sun.style.transform = `rotate(${rotateVal}deg)`;

        const test = ((rotateVal * -1) - 90)
        let sunOpacity = (1 * (test / 180) - 1.0)
        sun.style.opacity = sunOpacity;
        console.log(sunOpacity)
    }

    time = time - 100;
}, 50);