
let button = document.getElementById('button');
let search = document.getElementById('search');
let selection_box = document.getElementById('selection-box');
let search_area = document.querySelector('.search-area');
let all = ['All cities'];
let emptyArray = [];
let result_area = document.querySelector('.result-area');
button.addEventListener('click', (ed) => {
    ed.preventDefault();

    button.parentNode.classList.toggle('active');


})

startInformation();
function startInformation () {
    search.value = all[0];
}



fetchResult();

async function fetchResult () {

    let res = await fetch('specialization.json');

    let data = await res.json();

    let cities = data.map(info => info.city);

    let duplicateCities = cities.filter((a,b) => cities.indexOf(a) === b);

    let allOptions = all.concat(duplicateCities);

    allOptions.forEach(option => {
        let li = document.createElement('li');
        li.classList.add('option');
        li.setAttribute('result',option);
        li.innerHTML = `
            <i class="fa-solid fa-square-check icon"></i>
            <strong class='script'>   ${option}        </strong>
        `
    
    selection_box.appendChild(li);


    })

    removeIcon();
    clickOptions();
    updateValues();
}

search.addEventListener('input', removeIcon);
function removeIcon () {

    let search_value = search.value.trim();

    

    let allOptions = document.querySelectorAll('.option');

    allOptions.forEach(option => {
        let text = option.getAttribute('result');

        if (search_value === text) {
            option.classList.add('active');
        }
    })

}  

function clickOptions () {

    let allOptions = document.querySelectorAll('.option');

    console.log(allOptions);

    allOptions.forEach(option => {
        option.addEventListener('click', (ed) => {

            allOptions.forEach(option => {
                option.classList.remove('active');
            })


            ed.preventDefault();

            let text = option.getAttribute('result');

            search.value = text;

            option.classList.add('active');

            search_area.classList.toggle('active');
            updateValues();
        })
    
    })

    

}

async function updateValues () {
    result_area.innerHTML = '';
    let res = await fetch('specialization.json');

    let data = await res.json();

    let checkedCities = data.map(info => info.city);

    let duplicateCities = checkedCities.filter((a,b) => checkedCities.indexOf(a) === b);

    let text = search.value.trim();
    if (duplicateCities.includes(text) === false){
        fetchAllInformation(data);
    } else if (duplicateCities.includes(text) === true) {

        emptyArray = [];

        data.forEach(info => {
        if (info.city === text) {
            emptyArray.push(info);
        }
        })
        fetchAllInformation(emptyArray);
    }

    
}
// async function updateValues () {
//     result_area.innerHTML = '';
//     let res = await fetch('specialization.json');

//     let data = await res.json();

//     let checkedCities = data.map(info => info.city);

//     let duplicateCities = checkedCities.filter((a,b) => checkedCities.indexOf(a) === b);

//     let text = search.value.trim();
//     if (duplicateCities.includes(text) === false){
//         fetchAllInformation(data);
//     }

//     emptyArray = [];

//     data.forEach(info => {
//         if (info.city === text) {
//             emptyArray.push(info);
//             fetchMinorInformation(emptyArray);
//         }
//     })
// }



function fetchAllInformation (array) {

        console.log(array);

        array.forEach(data => {
            let newDiv = document.createElement('div');
            newDiv.classList.add('information');
            newDiv.innerHTML = `
            <div class='name'>
                ${data.first_name} ${data.last_name}
            </div>
            

            <a href="/doctor/${data.id}">
            <button class='link-to-other-page'>
                Book time
            </button>
            </a>

            `

        result_area.appendChild(newDiv);



        })
       

}









// search.addEventListener('input', async (eth) => {

//     let res = await fetch('specialization.json');

//     let data = await res.json();

//     let cities = data.map(info => info.city);

//     let duplicateCities = cities.filter((a,b) => cities.indexOf(a) === b);

//     let allOptions = all.concat(duplicateCities);



// })
