jsonInput = JSON.stringify({"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},
{"user": "greg@mail.com", "rating": 14, "disabled": false},
{"user": "john@mail.com", "rating": 25, "disabled": true}],
"condition": {exclude: [{"disabled": "true"}], "sortBy": ["rating"]}})
jsonInput = JSON.parse(jsonInput)
//здесь условие было как отдельный объект json в отдельной переменной, но в последствии занесли свойство condition в один обьект к data
//jsonCondition = JSON.stringify({"condition": {"include": [{"name": "John"}] , "sortBy": ["email"]}})
//jsonCondition = JSON.parse(jsonCondition)
//создаем пустой массив для записи результатов фильтрации, а также сортировки
let resFilter = []
//Это счетчик для функции include
count = 0
//обьявление функции include
function include(prop, value){
    //делаем проверку пустой ли массив resFilter    
    if(resFilter.length){
        //если не пустой тогда производим фильтрацию resFilter, сюда попадают в случае если параметров для фильтрации больше 1
        resFilter = resFilter.filter(item => item[prop] == value)   
    } else {
        //если массив resFilter пустой, тогда производим фильтр первоначального jsonInput
        resFilter = jsonInput.data.filter(item =>item[prop] == value)
    }
    //Инкремент счётчика
    count++
    //делаем проверку если параметров include меньше 1 тогда один раз возвращаем resFilter
    if(jsonInput.condition.include.length<2){
        return resFilter
    //если параметров include больше 1, значит возвращаем ResFilter только на последнем параметре include, избегаем множественного возврата resFilter, если у нас параметров include > 2
    } else if(jsonInput.condition.include.length === count){
        return resFilter
    }
}
//обьявление функции sortBy
function sortBy(arrData, prop){
    //проводим сортировку массива обьектов с по заданному в prop полю
    resFilter = arrData.sort((a,b)=> a[prop] > b[prop] ? 1 : -1)
    //возвращаем resFilter
    return resFilter
}
function exclude(prop, value){
    //делаем проверку пустой ли массив resFilter    
    if(resFilter.length){
        //если не пустой тогда производим фильтрацию resFilter, сюда попадают в случае если параметров для фильтрации больше 1
        resFilter = resFilter.filter(item => item[prop] !== value)   
    } else {
        console.log(2)
        //если массив resFilter пустой, тогда производим фильтр первоначального jsonInput
        resFilter = jsonInput.data.filter(item => item[prop] !== value)   
    }
    //Инкремент счётчика
    count++
    //делаем проверку если параметров exclude меньше 1 тогда один раз возвращаем resFilter
    if(jsonInput.condition.exclude.length<2){
        return resFilter
    //если параметров exclude больше 1, значит возвращаем ResFilter только на последнем параметре exclude, избегаем множественного возврата resFilter, если у нас параметров exclude > 2
    } else if(jsonInput.condition.exclude.length === count){
        return resFilter
    }
}
//делаем проверку, есть ли у нас параметр include во входящем обьекте
if(jsonInput.condition.include){
    //проходимся по массиву параметров include
    jsonInput.condition.include.map(item=>{
        //вызываем функцию include с каждым параметром ключ-значение
        include(Object.keys(item)[0], Object.values(item)[0])
    })
}
//делаем проверку, есть ли у нас параметр exclude во входящем обьекте
if(jsonInput.condition.exclude){
    //проходимся по массиву параметров exclude
    jsonInput.condition.exclude.map(item=>{
        //вызываем функцию exclude с каждым параметром ключ-значение
        exclude(Object.keys(item)[0], Object.values(item)[0])
    })
}
//делаем проверку, есть ли у нас параметр sortBy во входящем обьекте
if(jsonInput.condition.sortBy){
    //если refFilter не пустой, значит сортируем уже фильтрованный массив resFilter
    if(resFilter.length){
        //Вызываем функцию sortBy
        sortBy(resFilter, jsonInput.condition.sortBy[0])
    } else {
        //если resFilter пустой, тогда сортируем входящий объект json без фильтраций
        sortBy(jsonInput.data, jsonInput.condition.sortBy[0])
        console.log(1)
    }
}
//выводим результат работы приложения в json объекте, в предложенном формате
const jsonOutput = JSON.stringify({result: resFilter})
console.log(jsonOutput)