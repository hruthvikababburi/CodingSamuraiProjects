console.log('Its working!')
let string = ''
let buttons = document.querySelectorAll('button')

Array.from(buttons).forEach((each)=>{
    each.onclick = (e)=>{
        if(e.target.innerHTML === '='){
            if(string === ''){
                alert('Enter Something to Calculate')
            }
            else{
                string = eval(string)
                console.log(string)
                document.querySelector('input').value = string;
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
})