

let search = document.getElementById('search');
let booking_value = document.getElementById('booking-value');


let arrayRong = [];
let arrayRongHai = [];
let arrayRongThree = [];

// search.addEventListener('keyup', async (ed) => {

//     ed.preventDefault();

//     let text = ed.target.value.trim().toLowerCase();

//     let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);

//     let data = await res.json();
   
//     if (data.meals === null) {
//         console.log(false);
      
//     } else {
//         addFunctionToDom(data.meals);
//     }

//     if (search.value == '') {
//         // data.meals = [];
//         // addFunctionToDom(data.meals);
//         booking_value.innerHTML = '';
//     }
    


// })

// function addFunctionToDom (meals) {

//     booking_value.innerHTML = '';

//     meals.forEach(info => {

//         let newDiv = document.createElement('div');
//         newDiv.classList.add('food');
//         newDiv.innerHTML = `
//         ${info.strMeal? `<p>   ${info.strMeal}      </p>` : ''}
//         `

//         booking_value.appendChild(newDiv);
//     })



// }





search.addEventListener('keyup', async function (ed) {
    ed.preventDefault();
   
    let text = ed.target.value.trim().toLowerCase();

    let res = await fetch('filterList.json');

    let data = await res.json();

    if (text !== '') {
        arrayRong = [];
        arrayRongHai = [];
        arrayRongThree = [];
        data.forEach(info => {
    
            if (info.name.toLowerCase().indexOf(text) > -1) {
                    arrayRong.push({ name : info.name});
                    console.log(arrayRong);
                    newFunction();
            }
           
            if (info.hospital.toLowerCase().indexOf(text) > -1) {
                    arrayRongHai.push({ hospital : info.hospital})
                    newFunction();
            }

            if (info.specialization.toLowerCase().indexOf(text) > -1) {
                    arrayRongThree.push({ specialization : info.specialization})
                    newFunction();
            }


        })
        
        
    } else if (text === ''){
        booking_value.innerHTML = '';
    }
   
    

})

function newFunction() {
    booking_value.innerHTML = '';

    if (arrayRong.length > 0) {
    
    let newTitle = document.createElement('h2');
    newTitle.classList.add('title');
    newTitle.innerText = 'Doctors'
    booking_value.appendChild(newTitle);
    
    arrayRong.forEach(info => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('information');
        newDiv.innerHTML = 
        `

        <div class='name'>
            ${info.name? info.name : info.hospital || info.specialization}
        </div>

    
        
        `
    
        booking_value.appendChild(newDiv);
    })
}

    if (arrayRongHai.length > 0) {

        let newTitle = document.createElement('h2');
        newTitle.classList.add('title');
        newTitle.innerText = 'Hospitals';
        booking_value.appendChild(newTitle);

        arrayRongHai.forEach(info => {

        let newDiv = document.createElement('div');
        newDiv.classList.add('information');
        newDiv.innerHTML = `
        <div class='hospital'>
        ${info.hospital}
        </div>
        `

        booking_value.appendChild(newDiv);

    })
}
    
    if (arrayRongThree.length > 0) {

        let newTitle = document.createElement('h2');
        newTitle.classList.add('title');
        newTitle.innerText = 'Specialization';
        booking_value.appendChild(newTitle);

        arrayRongThree.forEach(data => {

            let newDiv = document.createElement('div');
            newDiv.classList.add('specialization');
            newDiv.innerHTML = `
            <div class='specialization'>
                ${data.specialization}
            </div>
            
            
            
            `
            booking_value.appendChild(newDiv);
        })


    }

}






