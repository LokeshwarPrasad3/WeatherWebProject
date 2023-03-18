const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityValue = cityName.value;
    if (cityValue === "") {
        city_name.innerText = `Plz write then name before seach`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=c17b95d167f62c4190b86a36ebed7379`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = await [data];
            temp.innerText = Math.ceil(arrData[0].main.temp - 273) + "°C";
            temp_status.innerText = arrData[0].weather[0].main;
            let tempStatus = temp_status.innerText;
            console.log(tempStatus);
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            // using favicon when temp_status
            if (tempStatus == "Clear") {
                temp_status.innerHTML = " <i class='fa-solid fa-sun' style='color:#bbff00;'>";
            }
            else if (tempStatus == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'>";
            }
            else if (tempStatus == "Haze") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun-haze'></i>";
            }
            else if (tempStatus == "Rainy") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'>";
            }
            else {
                temp_status.innerHTML = " <i class='fa-solid fa-sun' style='color:#bbff00;'>";
            }
            datahide.classList.remove('data_hide');

        } catch (err) {
            city_name.innerText = `Plz Enter City Name Properly`;
            datahide.classList.add('data_hide');
        }
    }
    cityName.value = "";

}

submitBtn.addEventListener('click', getInfo);

const myname = document.getElementById('myname');
myname.addEventListener('click',(e)=>{
    location.href = "/";
})

// time date changing
let DATE = new Date();

// for today
let day = document.getElementById("day");
let today = DATE.getDay();
let weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
day.innerHTML = weekDay[today];

// for date and month
let today_date = document.getElementById('today_date');

let months = ['JAN','FEB','MAR','APR','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
let month = DATE.getMonth();

let date = DATE.getDate();

today_date.innerHTML = `${date} ${months[month]}`;