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
            const label = area.parentNode.nextSibling.querySelector('a');
            label.setAttribute('href', href);

        }
    });

    const hiddenItems = menuFrame.contentDocument.querySelectorAll('table');
    hiddenItems.forEach((item) => {
        item.style.display = 'block';
    });

}
