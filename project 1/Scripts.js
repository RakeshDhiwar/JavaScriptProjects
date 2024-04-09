const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach( (button)=>{
    button.addEventListener('click',(e)=>{
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;
            case "blue":
                body.style.backgroundColor = e.target.id
                break;
            case "green":
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                break;
        }
    })
})