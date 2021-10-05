qS('.js-tab-1').addEventListener("click", function(){
    const tab1 = qS('.js-tab-1');
    const tab2 = qS('.js-tab-2');
    const tab3 = qS('.js-tab-3');
    const content1 = qS('.js-content-1');
    const content2 = qS('.js-content-2');
    const content3 = qS('.js-content-3');
    if (!tab1.classList.contains("css-active-tab")) {
        tab1.classList.add('css-active-tab');
        tab2.classList.remove('css-active-tab');
        tab3.classList.remove('css-active-tab');
        content1.classList.add('css-active-content');
        content2.classList.remove('css-active-content');
        content3.classList.remove('css-active-content');
    }
});

qS('.js-tab-2').addEventListener("click", function(){
    const tab1 = qS('.js-tab-1');
    const tab2 = qS('.js-tab-2');
    const tab3 = qS('.js-tab-3');
    const content1 = qS('.js-content-1');
    const content2 = qS('.js-content-2');
    const content3 = qS('.js-content-3');
    if (!tab2.classList.contains("css-active-tab")) {
        tab2.classList.add('css-active-tab');
        tab1.classList.remove('css-active-tab');
        tab3.classList.remove('css-active-tab');
        content2.classList.add('css-active-content');
        content1.classList.remove('css-active-content');
        content3.classList.remove('css-active-content');
    }
});

qS('.js-tab-3').addEventListener("click", function(){
    const tab1 = qS('.js-tab-1');
    const tab2 = qS('.js-tab-2');
    const tab3 = qS('.js-tab-3');
    const content1 = qS('.js-content-1');
    const content2 = qS('.js-content-2');
    const content3 = qS('.js-content-3');
    if (!tab3.classList.contains("css-active-tab")) {
        tab3.classList.add('css-active-tab');
        tab2.classList.remove('css-active-tab');
        tab1.classList.remove('css-active-tab');
        content3.classList.add('css-active-content');
        content2.classList.remove('css-active-content');
        content1.classList.remove('css-active-content');
    }
});






//document.querySelector alias
function qS(param) {
    return document.querySelector(param);
}