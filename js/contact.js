const phoneInput = document.querySelector("input[type='tel']");
const mailInput = document.querySelector("input[type='email']");
const nameInput = document.querySelector("#name");
const textarea = document.querySelector("textarea");
const submit = document.querySelector("#submit");
const validPhone = /^[0-9]+$/;
const validMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const validName = /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/;
const $popupOverlay = $('.popupOverlay')
const $popup = $('.popup')


submit.addEventListener("click", () => {

inputChecker()

})

const inputChecker = function () {
    let allGood = 0;
    let good = 4;
    if (phoneInput.value.length == 10 && phoneInput.value.match(validPhone)) {
        valid(phoneInput)
        allGood++;
    } else {
        notValid(phoneInput)
    }
    if (mailInput.value.match(validMail)) {
        valid(mailInput)
        allGood++;
    } else {
        notValid(mailInput)
    }
    if(nameInput.value.match(validName)) {
        valid(nameInput)
        allGood++;
    }else {
        notValid(nameInput)
    }
    if(textarea.value != '') {
        valid(textarea)
        allGood++;
    }else {
        notValid(textarea)
    }
    console.log(allGood)
    if(allGood == good){
        msg = `<h2>Dear ${nameInput.value},</h2> <br> <p> Thank you for choosing to contact us.<br> We have got your message and will get back to you ASAP. <br><br>
        Mardi Gras Team.</p>
        <br><img src="images/site-images/logo-small.png" style="height: 100px; width:150px; margin-top: 80px;">`
        showMsg(msg);
    }
}

const notValid = function(input) {
input.style.border = "1px solid red"
}
const valid = function(input) {
    input.style.border = "1px solid green"
    }

const showMsg = function(msg){
    $popupOverlay.fadeIn(500)
    $popup.html(msg)
    setTimeout(() => {
        $popupOverlay.fadeOut(400)
    },3500)
}


$popupOverlay.on('click', () => {
    $popupOverlay.fadeOut(200)
})
