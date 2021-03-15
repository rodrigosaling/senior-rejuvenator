let isMenuLoaded = false;

const menuFrame = parent.document.querySelector('[name=MENU]');

setTimeout(function () {
    console.log(menuFrame.contentDocument.querySelector('transstr').innerHTML);
    if (menuFrame.contentDocument.querySelector('transstr').innerHTML === '<title>Ronda Web</title>') {
        getAreas();
    }
}, 1000);

function getAreas() {
    const areas = menuFrame.contentDocument.querySelectorAll('.area');

    areas.forEach((area) => {
        console.log(area.getAttribute('href'))
        const href = area.getAttribute('href');
        if (href.includes('javascript:clickOnNode')) {
            area.parentNode.nextSibling.querySelector('a').setAttribute('href', href);
        }
    })
}
