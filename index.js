const chart = document.querySelector("#chart").getContext('2d');

new Chart(chart ,
{
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
            {
                label: 'BTC',
                data: [20973, 21734, 43234, 34323, 54343, 49812, 27834,63422, 53431,76734, 83234, 78234],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label:'EURO',
                data: [12073, 18734, 32234, 6123, 4000, 8000,13034, 53431,70734, 23413,43912, 56533],
                borderColor: 'green',
                borderWidth: 2
            },
            {
                label:'ETH',
                data: [7090, 11734, 18000, 34323, 24343, 29812, 10000,16422, 8431,24734, 23234, 31234],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
});

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');


menuBtn.addEventListener('click',()=>{
    sidebar.style.display = 'block';
});
closeBtn.addEventListener('click',()=>{
    sidebar.style.display = 'none';
});

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})