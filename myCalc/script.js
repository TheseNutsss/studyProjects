const output = document.querySelector('.output span')
const inputs = document.querySelectorAll('input')
let res = "0"
let accumulator = ""
let resArray = []
output.innerHTML = res
inputs.forEach(input=>{
    input.addEventListener('click', result)
})
function result(){
    let value = this.value
    if(res === "0"){
        res = ""
    }
    /* if(this.value === "C"){
        resArray = []
        res = 0
        output.innerHTML = res
    }
    if(this.value!== "="){
    resArray.push(this.value)
    res = resArray.join('')
    }
    if(parseInt(this.value) || this.value == ","){     
        console.log(parseInt(this.value))   
    output.innerHTML = res
    } else if(this.value == "="){        
        res = new Function('return ' + res)
        output.innerHTML = res()
    }
    console.log(res) */
    switch(value){
        case (parseInt(value)? value : true):
            console.log(value);
            res = `${res}${value}`
            output.innerHTML = res
            break;
        case "0":
            console.log("0");
            res = `${res}${value}`;
            output.innerHTML = res;
            break;
        case "=":
            console.log("="+ res);
            let count = new Function('return '+ res)
            output.innerHTML = count()
            res = count();
            break;
        case "c":
            console.log("c");
            res = "0"
            output.innerHTML = res;
            break;
        case "%":
            console.log("%");
            break;
        case "/":
            console.log("/");
            res = `${res}${value}`
            output.innerHTML = res;
            break;
        case "*":
            console.log("*");
            res = `${res}${value}`
            output.innerHTML = res;
            break;
        case "-":
            console.log("-");
            res = `${res}${value}`
            output.innerHTML = res;
            break;
        case "+":
            console.log("+");
            res = `${res}${value}`
            output.innerHTML = res;
            break;
        case ".":
            console.log(".");
            res = `${res}${value}`
            output.innerHTML = res;
            break;
        case "+/-":
            console.log("+/-");
            res = +res*(-1)
            output.innerHTML = res;
            break;  
                            
    }
    
}


/* var value = '(5+7)*10'.match(/(^[0-9*\/\\(\\)+-]+$)/);
console.log(value)
var b = new Function('return '+ value );
console.log(b()); */
