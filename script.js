let input =  document.getElementById('inputBox');
let button = document.querryselectorAll('button');

let string = ""
let arr = Array.from(buttons);
arr.forEach(button => 
    button.addEventlistener('click',(e) =>{
        if(e.target.innerHTML =='='){
            string = evel(string);
            input.value = string;
            }

            else if(e.target.innerHTML == 'AC'){
                string = "";
                input.value = string;
            }
            else if(e.target.innerHTML == 'DEL'){
                string = string.sunstring(0, string.
                    length-1);
                    input.value = string;
                
            }
            else{
            string += e.target.innerHTML;
            Input.value = string;
           }
        })
    )
