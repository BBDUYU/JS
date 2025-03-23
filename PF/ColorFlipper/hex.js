const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    //클릭시
    let hexColor = "#"; //색상 코드
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
        //색상코드에 랜덤숫자 저장
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
