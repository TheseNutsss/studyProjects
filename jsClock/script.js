const secArrow = document.querySelector('.sec-arrow');
const minArrow = document.querySelector('.min-arrow');
const hourArrow = document.querySelector('.hour-arrow');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secArrow.style.transform = `rotate(${secondsDegree}deg)`;
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minArrow.style.transform = `rotate(${minutesDegree}deg)`
    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    hourArrow.style.transform = `rotate(${hoursDegree}deg)`
    if(secondsDegree === 90 || minutesDegree === 90 || hoursDegree === 90){
        secArrow.classList.add('no-transition')
        minutesDegree.classList.add('no-transition')
        hoursDegree.classList.add('no-transition')
    } else {
        secArrow.classList.remove('no-transition')
        minutesDegree.classList.remove('no-transition')
        hoursDegree.classList.remove('no-transition')
    }
    console.log(secondsDegree)
}
setInterval(setDate, 1000)