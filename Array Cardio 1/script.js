 const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Aeckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    const data = ['van', 'van','van','van','van','truck','truck','truck','truck','truck','mers','mers','mers','mers','mers','mers','mers','mers','mers']

//filter
    const fifteen = inventors.filter(inventor=> inventor.year >= 1500 && inventor.year < 1600)
    console.table(fifteen)
//first and last names
    const lastAndFirst = inventors.map(inventor=> `${inventor.first} : ${inventor.last}`)
    console.log(lastAndFirst)
// sort by birthday, oldest tpo youngest
    const sorted = inventors.sort(function(firstPerson, secondPerson){
        return secondPerson.year - firstPerson.year
    })
    console.table(sorted)
//reduce how many years all inventors lived
    const live = inventors.reduce((total, currentValue) =>{
        return total + (currentValue.passed - currentValue.year)
    
    }, 0);
    console.log(live+ "сумма");
//sort the inventors by years lived
    const sortedYears = inventors.sort(function(firstPerson, secondPerson){
        firstPerson = firstPerson.passed - firstPerson.year
        secondPerson = secondPerson.passed - secondPerson.year
        return secondPerson - firstPerson
    })
    console.table(sortedYears)

//create a lis from all boulevard that contain "de" in the names
const links = [...(document.querySelectorAll('.mw-category a'))]
const de = links
            .map(link=> link.textContent)
            .filter(streetName=> streetName.includes('de'))
console.log(de)
// sort peoples by last name
const sortedByLastName = people.sort((lastOne, nextOne)=>{
    const [alastName, afirstName] = lastOne.split(', ')
    const [blastName, bfirstName] = nextOne.split(', ')
    return  alastName < blastName ? -1 : 1
})
console.log(sortedByLastName)
const auto = data.reduce((obj, item)=> {
    if(!obj[item]){
        obj[item] = 0
    }
    obj[item]++
    return obj
}, {})
console.log(auto)
// card day 2

    // ## Array Cardio Day 2

    const peoplee = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
     
      const isAdult = peoplee.some(person=> (new Date()).getFullYear() - person.year >=19)
      console.log( isAdult)
      // Array.prototype.every() // is everyone 19 or older?
      const isAdult2 = peoplee.every(person=> (new Date()).getFullYear() - person.year >=19)
      console.log( isAdult2)
      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
      const searchedID = comments.find(comment=> comment.id === 823423)
      console.log(searchedID)
      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423
      const indexDelete = comments.findIndex(comment=> comment.id === 823423)
      console.log(indexDelete)
      comments.splice(indexDelete, indexDelete)
      console.log(comments)
  
    