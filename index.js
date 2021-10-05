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

qS(".js-form").addEventListener("submit", function(e){
    e.preventDefault();
    const emailError = qS(".js-error-msg");
    const cssErrorMsgVisibleClass = "css-error-msg-visible";

    if(validateEmail(e.target.elements.email.value)) {
        emailError.classList.remove(cssErrorMsgVisibleClass);
    } else {
        emailError.classList.add(cssErrorMsgVisibleClass);
        if (e.target.elements.email.value === ''){
            qS(".js-error-msg").innerHTML = "The input field is empty."
            return;
        }
        qS(".js-error-msg").innerHTML = "The email address is not formatted correctly."
    }
});



function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//document.querySelector alias
function qS(param) {
    return document.querySelector(param);
}