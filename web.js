
var text = document.getElementById('text');
var btns = document.getElementsByClassName('btn');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        console.log("this =>", this.innerText)
        switch (this.innerText) {
            case 'bold':
                text.style.fontWeight = 'bold'
                break
            case 'italic':
                text.style.fontStyle = 'italic'
                break
            case 'underline':
                text.style.textDecoration = 'underline'
                break
            case 'left':
                text.style.textAlign = 'left'
                break
            case 'right':
                text.style.textAlign = 'right'
                break
            case 'center':
                text.style.textAlign = 'center'
                break
            case 'justify':
                text.style.textAlign = 'justify'
                break
            default:
                break
        }
    })
}