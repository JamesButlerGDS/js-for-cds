function showHide() {
    var x = document.getElementById('x')
    var y = document.getElementById('toggle-button')
    if (x.style.display === 'none') {
        x.style.display = 'block'
        y.innerhtml = 'Click to make paragraph x disappear'
    } else {
        x.style.display = 'none'
        y.innerhtml = 'Click again to make paragraph x reappear'
    }
}
