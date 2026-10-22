// /layout/header.html 웹문서 요청 -> html문구 텍스트형식
fetch("/layout/header.html") //웹문서 요청
    .then((response) => response.text()) //응답을 받고 text로 변환
    .then((responseText) => {
        // console.log(responseText);
        document.querySelector('.container').insertAdjacentHTML("afterbegin", responseText);
    })
