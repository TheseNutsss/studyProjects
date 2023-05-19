//На старте скажу что верстка получилась адаптивная, ничего не ломается на устройствах с маленьким экраном, также все реализованно асинхронно, без отправки формы на сервер
//здесь проводилась тестировка без json формата, то есть формулы для конвертации
/*let objMeasure = {
    m: {cm: "*100", in: "*39", ft: "*3.281"},
    cm: {m: "/100", in: "/2.54", ft: "/30.48"},
    in: {cm: "*2.54", m: "/39.37", ft: "/12"},
    ft: {cm: "*30.48", in: "*12", m: "/3.281"},  
}*/
//запустил json server через npm, получаю данные с сервера (json файл c формулами для конвертации)
fetch('http://localhost:3000/objMeasure')
    //получаю ответ в json формате
   .then(response => response.json())
   //полученный json
   .then(json => {
    //присваиваю в переменную objMeasure уже распаршенный json файл
        const objMeasure = json
        //здесь и далее обьявляю переменные и присваиваю пустую строку, они нужны будут для получение данных из UI
        let convertFrom = ""
        let convertTo = ""
        //Cюда в последствии занесем входящие данные из переменных UI, результатом будет обьект в json формате
        let jsonInput
        //Cюда в последствии занесем выходящие данные(уже конвертированный), результатом будет обьект в json формате
        let jsonOutput
        let value
        //здесь обьявляем переменные и загоняем в них элементы из dom дерева
        let res = document.querySelector(".res")
        let input = document.querySelector(".input")
        let from = document.querySelector("#from")
        let to = document.querySelector("#to")
        //в этом цикле итерируемся по обьекту с поддерживаемыми величинами, для того что бы отобразить их в UI
        for( key in objMeasure){
            from.insertAdjacentHTML("beforeend", `<option value="${key}">${key}</option>`)
            to.insertAdjacentHTML("beforeend", `<option value="${key}">${key}</option>`)  
        }
        //вешаем слушатель события для получения данных из dom дерева(данные из селект из чего конвертируем)
        from.addEventListener("change", function(){
            convertFrom = this.value; 
            //программа не позволяет выбрать 2 одинаковых конвертации, путем изменения поля selected в теге Select  
            if(convertFrom === convertTo){
                if(to.value!== ""){
                    to.value = ""
                }
            } else {
                //если пользователь выобрал разные поля из чего конвертируем во что, тогда вызываем функцию вычисления
                onChange()
            }
        })
        //вешаем слушатель события для получения данных из dom дерева(данные из селект во что конвертируем)
        to.addEventListener("change", function(){
            convertTo = this.value;
            //программа не позволяет выбрать 2 одинаковых конвертации, путем изменения поля selected в теге Select  
            if(convertFrom === convertTo){
                if(from.value !== ""){
                    from.value = ""
                }
            } else {
                //если пользователь выобрал разные поля из чего конвертируем во что, тогда вызываем функцию вычисления
                onChange()
            }
        })
        //вешаем слушатель события для получения данных из dom дерева(данные из input)
        input.addEventListener("input", function(i){ 
            value = i.target.value
            //при изменении input вызываем функцию рассчета
            onChange()
        })
        //сделал функцию для рассчета, что бы можно было переиспользовать и предостеречь повторение кода
        function onChange(){
            //проверяет что бы были заполнены все поля в UI, то есть из чего и во что конвертируем и сама величина из инпута
            if(value && convertFrom && convertTo){
                //итерируемся по ключам из обьекта с формулами
                for(key in objMeasure){
                    //проверяет или ловит совпадение величины из чего конвертируем с правилом(формулой) из обьекта json
                    if(convertFrom === key){
                        //здесь создаем json строку c входящими данными из UI
                        jsonInput = JSON.stringify({distance: {unit: convertFrom, value: value }, convertTo: convertTo})
                        //здесь выводим результат конвертации в UI
                        res.innerHTML = (eval(value + objMeasure[key][convertTo])).toFixed(2) + " " + convertTo
                        //здесь записываем результат конвертации в предложенном json формате, по итогу получается json обьект c уже конвертированными данными
                        jsonOutput = JSON.stringify({unit: convertTo, value: (eval(value + objMeasure[key][convertTo])).toFixed(2)})
                        //показываем в консоле результат роботы приложения
                        console.log("Входящий json объект:" + jsonInput)   
                        console.log("Выходящий json объект:" + jsonOutput)
                    }            
                }
            } else {
                //здесь просто очищаем поле результат из UI, в случае если хотя бы одно поле в UI не заполненно, также здесь можно будет как-то подсвечивать пользователю и делать подсказки что он что-то не заполнил
                console.log("вы не ввели все поля")
                res.innerHTML = ""
            }
        }
        })
