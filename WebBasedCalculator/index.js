console.log('Its working!')
let string = ''
let buttons = document.querySelectorAll('button')

Array.from(buttons).forEach((each)=>{
    each.onclick = (e)=>{
        try{
            if(e.target.innerHTML === '='){
                if(string === ''){
                    alert('Enter Something to Calculate')
                    
                }
                else{
                    try{
                        string = eval(string)
                        if(string !== Infinity){
                            console.log('correct')
                            console.log(string)
                            document.querySelector('input').value = string;
                        }
                        else{
                            alert('Enter valid numbers or expressions to calculate')
                            string = ""
                            document.querySelector('input').value = string;
                        }
                        
                    }
                    catch(e){
                        alert('Enter valid numbers or expressions to calculate')
                        string = ""
                        document.querySelector('input').value = string;
                    }
                }
                
            }
            else if(e.target.innerHTML === 'c'){
                string = "";
                document.querySelector('input').value = string
            }
            
            else{
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string
            }
        }
        catch(error){
            alert('Enter Valid numbers and expressions')
            string = ""
            document.querySelector('input').value = string;
        }

    }
})

let deleteBtn = document.getElementById('delBtn')
deleteBtn.onclick=()=>{
    if (string.length > 1){
        string = string.slice(0,string.length - 1)
        document.querySelector('input').value = string;
    }
    else{
        string = ""
        document.querySelector('input').value = string;
    }
}