
// heart count function 
const heart = document.getElementsByClassName('heartCount');
for (const heartIcon of heart) {
    heartIcon.addEventListener('click', function () {

        const heartCount = document.getElementById('totalHeart');
        heartCount.innerText = parseInt(heartCount.innerText) + 1;
    });
}


// copy count
const copy = document.getElementsByClassName('copyClick');
for (const copyIcon of copy) {
    copyIcon.addEventListener('click', function () {

        const copyCount = document.getElementById('totalCopy');
        copyCount.innerText = parseInt(copyCount.innerText) + 1;
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
        else 
        {
            const service = callIcon.parentNode.parentNode.children[1].innerText
            const number = callIcon.parentNode.parentNode.children[3].innerText
            alert(`Calling to the ${service} at ${number}`);
            callCount.innerText = parseInt(callCount.innerText) - 20;

            // time calculation
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // convert 0 to 12
            const time = `${hours}:${minutes}:${seconds} ${ampm}`;

            // create div and append
            let mainDiv = document.createElement("div");
            let Rdiv = document.createElement("div");
            let Ldiv = document.createElement("div");
            let x = document.createElement("div");
            let y = document.createElement("div");

            x.textContent = service;
            y.textContent = number;

            Rdiv.appendChild(x);
            Rdiv.appendChild(y);
            Ldiv.textContent = time;

            mainDiv.appendChild(Rdiv);
            mainDiv.appendChild(Ldiv);

            mainDiv.classList.add("md:flex", "justify-between", "items-center","mb-3" ,"md:p-5");

            const target = document.getElementById('clearHistory');
            target.appendChild(mainDiv);

        }
    });
}



//clear the section

const clearSection = document.getElementById('clearHistory');
document.getElementById('clearBtn').addEventListener('click', function () {
    clearSection.innerHTML = '';
});