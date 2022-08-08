let ratings = document.querySelectorAll('.ratings li ');
const btnSubmit = document.querySelector('button[type=submit]');

//document.querySelector('button[type=submit]').addEventListener('click', onSubmit());
console.log(ratings);

ratings.forEach((rating) => {
    rating.addEventListener('click', (evt)=> {
       ratings.forEach(item => item.classList.remove('selected'));
       rating.classList.add('selected');
    })
});

btnSubmit.addEventListener('click', (evt) => {
    evt.preventDefault();
    let ratingValue = document.querySelector('li.selected input').value;
    onSubmit(ratingValue)
});

function onSubmit(ratingValue) {
    document.querySelector('div.rating').innerHTML=`<p>You selected ${ratingValue} out of 5</p>`;
    document.querySelector('.rating-component').classList.add('display-none');
    document.querySelector('#submit-success').classList.remove('display-none');
}



