

let doctor_id = 2;
let weekday = 'Wednesday';
let date = '6';
let month = '4';
let year = '2022';
let start_time = '9:30';
let end_time = '10:30';


let doctor_image = document.getElementById('doctor-image');
let doctor_title = document.getElementById('doctor-title');
let doctor_name = document.getElementById('doctor-name');
let start_time_date = document.getElementById('start-time');
let end_time_date = document.getElementById('end-time');
let weekday_date = document.getElementById('weekday');
let date_date = document.getElementById('date');
let month_date = document.getElementById('month');
let year_date = document.getElementById('year');
let doctor_idNumber = document.getElementById('doctor-id');
let insert_date = document.getElementById('insert-date');
let start = document.getElementById('start');
let end = document.getElementById('end');

loadFromLocationSearch();

function loadFromLocationSearch () {

    doctor_idNumber.value = doctor_id;
    insert_date.value = weekday + ' ' + date + '/' + month + '/' + year;
    start.value = start_time;
    end.value = end_time;

}

loadDoctorData();
async function loadDoctorData () {

    let res = await fetch(`http://localhost:3000/api/onlydoctor/${doctor_id}`);

    let data = await res.json();

    addToDom(data);
}

function addToDom (data) {

    let { first_name, last_name, img } = data[0];

    doctor_name.innerText = first_name + ' ' + last_name;
    doctor_title.innerText = 'Specialized Doctor';
    doctor_image.src = img;
    start_time_date.innerText = start_time;
    end_time_date.innerText = end_time;
    weekday_date.innerText = weekday;
    date_date.innerText = date;
    month_date.innerText = month;
    year_date.innerText = year;
}