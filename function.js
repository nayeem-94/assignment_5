
// heart count function 
const heart = document.getElementsByClassName('heartCount');
for (const heartIcon of heart) {
    heartIcon.addEventListener('click', function () {

        const heartCount = document.getElementById('totalHeart');
        heartCount.innerText = parseInt(heartCount.innerText) + 1;
    });
}


// console.log(call);
const call = document.getElementsByClassName('callClick');
for (const callIcon of call) {
    callIcon.addEventListener('click', function () {

        const callCount = document.getElementById('totalCall');

        if (callCount.innerText < 20) {
            alert("Call limit exceeded! Please recharge your account.");
            return;
        }
        else {
            const service = callIcon.parentNode.parentNode.children[2].innerText
            const number = callIcon.parentNode.parentNode.children[3].innerText
            alert(`Calling to the ${service} at ${number}`);
            callCount.innerText = parseInt(callCount.innerText) - 20;

        }
    });
}