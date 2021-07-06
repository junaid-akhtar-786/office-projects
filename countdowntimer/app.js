const months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Decembar'
];
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednessday',
    'Thursday',
    'Friday',
    'Sataurday'
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");



let lastDate = new Date(2021 , 6  , 12 , 10 , 30 , 0 )
const year = lastDate.getFullYear()
const date = lastDate.getDate()
const hour = lastDate.getHours()
const minute = lastDate.getMinutes()
const second = lastDate.getSeconds()


let month = lastDate.getMonth()
let day = lastDate.getDay()

giveaway.textContent = `Giveaway end on ${days[day]} ${date} ${months[month]} ${year}  ${hour} : ${minute}  `




// remaining time

const futureTime = lastDate.getTime()



// console.log(futureTime)


function getRemainingTime () {
    const today = new Date().getTime()
    const total = futureTime - today



    // console.log(today)
    // console.log(total)
    // 1y = 12m
    //1d = 24h
    //1h = 60min
    //1min = 60s
    // 1s = 1000ms

    //calculate all value in ms
    
    const oneDay = 24 * 60 * 60 * 1000 ;
    const oneHour = 60 * 60 * 1000 ;
    const oneMinute = 60 * 1000 ;

    // calculate all value

    let = remainsDays = total / oneDay;
    remainsDays = Math.floor(remainsDays);

    let hours = Math.floor( (total % oneDay ) / oneHour );
    let minutes = Math.floor( (total % oneHour ) / oneMinute );
    let seconds = Math.floor( (total % oneMinute ) / 1000 );

    // set values

    const value = [remainsDays, hours, minutes, seconds ];

    function format (items) {
        if(item < 10) {
            return (item = `0${item}`);
        }return item;
        }

    items.forEach(function ( item , index ) {
        item.innerHTML = value [index];
    });
    if (total < 0 ) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class = "expired"> Sorry , this is expired</h4>`
    }
};


// countdown 

let countdown = setInterval(getRemainingTime,1000)

getRemainingTime ()