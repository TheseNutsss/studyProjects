const link = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const cities = []
let input = document.querySelector('.search')
let list = document.querySelector('.suggestions')
fetch(link)
        .then(blob=> blob.json())
        .then(data=>cities.push(...data))
function findMatches(wordToSearch, cities){
    return cities.filter(place=>{
        const regex = new RegExp(wordToSearch,'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}
function displayChanges(){
    console.log(this.value)
    const matchedArray = findMatches(this.value, cities)
    let html = ''
    if(matchedArray.length){
    html = matchedArray.map(place=> {
       return `<li>
        <span class="name">${place.city}</span>
        <span>${place.state}</span>
        <span>${place.population}</span>
        </li>`
    }).join('');
    }
    list.innerHTML = html
    console.log('вот что инсертится' + html)
}
input.addEventListener('input', displayChanges)