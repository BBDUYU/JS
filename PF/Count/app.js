// count 초기화
let count = 0;

//index.html <-> app.js (value, btn) 연동
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.currentTarget.classList;
        if (style.contains("decrease")) {
            //숫자 감소
            count--;
        } else if (style.contains("increase")) {
            //숫자 증가가
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            //숫자가 0보다 크면
            value.style.color = "green";
        }
        if (count < 0) {
            //0보다 작으면
            value.style.color = "red";
        }
        if (count === 0) {
            //0이면면
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});
