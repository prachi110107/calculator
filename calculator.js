let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            console.log('hello 2',string);
            string=eval(string);
            console.log('hello 3',string);
            input.value=string;
            console.log('hello 1',string );
        }
        else if(e.target.innerHTML=='ac'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='del'){
        string=string.substring(0,string.length-1);
        }
        else{
            string+= e.target.innerHTML;
            input.value=string;
        }

    });
});