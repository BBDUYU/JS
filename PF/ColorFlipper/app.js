const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn"); //click 버튼 가져오기
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    // addEventListenr - document의 click 등록
    //get random 0-3 colors
    document.body.style.backgroundColor = colors[randomNumber];
    //html <body>의 backgroundColor를 colors[randomNumber] 랜덤색 지정
    color.textContent = colors[randomNumber];
    //랜덤색을 text로 변경
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
    //랜덤 숫자 생성
}
