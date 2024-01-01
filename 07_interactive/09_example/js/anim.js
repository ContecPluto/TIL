// 각각의 엘리먼트들을 변수로 선언
const sun = document.querySelector('.sun');
const cloud1 = document.querySelector('.cloud1');
const cloud2 = document.querySelector('.cloud2');
const day = document.querySelector('.day');
const circle = document.querySelector('.circle');
const people = document.querySelector('.people');
const man = document.querySelector('.man');
const family = document.querySelector('.family');

// 그레디언트 값을 얻기위한 켄버스
const canvas = document.createElement('canvas');
const w = 200;
const h = 50;
canvas.width = w;
canvas.height = h;
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

// 인터렉티브 디자인을 위한 스크롤시 애니메이션
window.addEventListener('scroll', () => {
    const bodyInfo = document.body.getBoundingClientRect();
    const scrollerHeight = document.scrollingElement.scrollHeight - window.innerHeight;

    // 현재 스크롤 비율
    const scrollRatio = 1 + bodyInfo.top / scrollerHeight;

    const rotateVal = ((360 * scrollRatio) + 90) * -1;
    sun.style.transform = `rotate(${rotateVal}deg)`;
    circle.style.transform = `rotate(${rotateVal + 90}deg)`;

    // 태양의 위치별 비율
    const rotateRatio = (rotateVal + 90) * -1 / 360;
    // 태양의 위치별 비율 * 2
    const twoRatio = rotateRatio % 0.5 * 2;
    // 태양의 위치별 비율 * 4
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
    
    // 미리 생성해둔 켄버스에서 색상을 가져옵니다. -0.01 을 하는 이유는 h가 50일경우 rgba(0, 0, 0, 255)를 리턴하기에 이를 방지하기 위함입니다.
    const bgColor = ctx.getImageData(w / 2, h * rotateRatio - 0.01, w, h).data;
    document.body.style.backgroundColor = `rgba(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, ${bgColor[3]})`;
});
