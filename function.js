

const heart = document.getElementsByClassName('heartCount');
for(const heartIcon of heart)
{
    heartIcon.addEventListener('click', function(){

        const heartCount = document.getElementById('totalHeart');
        heartCount.innerText = parseInt(heartCount.innerText) + 1;
    });
}

