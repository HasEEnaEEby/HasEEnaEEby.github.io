let isBlue = true;
setInterval(() => {
    document.getElementById('leftBox').style.backgroundColor = isBlue ? 'red' : 'blue';
    isBlue = !isBlue;
}, 2000);

function changeRightBoxColor() {
    const rightBox = document.getElementById('rightBox');
    rightBox.style.backgroundColor = rightBox.style.backgroundColor === 'gray' ? 'green' : 'gray' ;
}
