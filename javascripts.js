let input = [...document.querySelectorAll('input')];
console.log(input)
input.forEach(element =>{
    element.addEventListener('Keyup',() =>{
        if(input.indexOf(element)+1 != input.lenght)
            input[input.indexOf(element)+1].focus()
        else
            input[0].focus()
    })
    
    })
input.forEach(element =>{
    element.addEventListener('keydown',() =>{
        if(input.indexOf(element)-1 != -1)
            input[input.indexOf(element)-1].focus()
        else
            input[input.length-1].focus()
    })
    
})
