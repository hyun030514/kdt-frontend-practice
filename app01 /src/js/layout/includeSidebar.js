// /layout/sidebar.html
fetch('/layout/sidebar.html')
    .then((res) => res.text())
    .then((resText) => {
        document.querySelector('.main-container').insertAdjacentHTML('afterbegin', resText);
    })