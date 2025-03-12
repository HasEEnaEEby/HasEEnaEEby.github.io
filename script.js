let isBlue = true;
setInterval(() => {
    document.getElementById('leftBox').style.backgroundColor = isBlue ? 'red' : 'blue';
    isBlue = !isBlue;
}, 2000);

function changeRightBoxColor() {
    const rightBox = document.getElementById('rightBox');
    const colors = ['gray', 'green', 'yellow', 'purple'];
    let currentColor = rightBox.style.backgroundColor;
    let nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    rightBox.style.backgroundColor = nextColor;
}
