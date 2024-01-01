// 태양이 자바스크립트로 변경되도록 수정
const sun = document.querySelector('.sun');
const cloud1 = document.querySelector('.cloud1');
const cloud2 = document.querySelector('.cloud2');
const day = document.querySelector('.day');
const circle = document.querySelector('.circle');
const people = document.querySelector('.people');
const man = document.querySelector('.man');
const family = document.querySelector('.family');

const canvas = document.createElement('canvas');
const w = 200;
const h = 50;
const colours = [
    '#b08fcc',
    '#636888',
    '#fcd2e2',
    '#b1e1e2',
    '#b08fcc',
];
const lenColours = colours.length;
const ctx = canvas.getContext('2d');
const grd = ctx.createLinearGradient(0, 0, 0, 50);

let x = 0;
for (let i = 0; i < lenColours; i++) {
  x = i * (1 / (lenColours - 1));
  grd.addColorStop(x, colours[i % colours.length]);
}

ctx.fillStyle = grd;
ctx.fillRect(0, 0, w, h);
ctx.fill();

const maxTime = 40000;
const intervalTime = 50;
let time = maxTime;
setInterval(() => {
    if (time === 0) time = maxTime;

    const timeVal = time ? time / maxTime : 1;
    if (sun) {
        const rotateVal = ((360 * timeVal) + 90) * -1;
        sun.style.transform = `rotate(${rotateVal}deg)`;
        circle.style.transform = `rotate(${rotateVal + 90}deg)`;

        const rotateRatio = (rotateVal + 90) * -1 / 360;
        const twoRatio = rotateRatio % 0.5 * 2;
        const fourRatio = rotateRatio % 0.25 * 4;

        let sunOpacity;
        if (0.75 <= rotateRatio && rotateRatio < 1) {
            // 0 ~ 90
            sunOpacity = 2.5 - 2 * rotateRatio;
        } else if (0.5 <= rotateRatio && rotateRatio < 0.75) {
            // 90 ~ 180
            sunOpacity = 4 * rotateRatio - 2;
        } else {
            sunOpacity = 0;
        }

        sun.style.opacity = sunOpacity;
        day.style.opacity = sunOpacity;
        people.style.opacity = sunOpacity;

        cloud1.style.left = `${90 - twoRatio * 90}%`;
        cloud2.style.left = `${90 - rotateRatio * 90}%`;
        family.style.left = `${90 - twoRatio * 90}%`;
        man.style.left = `${90 - fourRatio * 90}%`;
        
        const bgColor = ctx.getImageData(w / 2, h * rotateRatio - 0.1, w, h).data;
        document.body.style.backgroundColor = `rgba(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, ${bgColor[3]})`;
    }

    time = time - intervalTime;
}, intervalTime);