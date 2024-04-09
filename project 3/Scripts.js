const clock = document.getElementById("clock")

setInterval(function(){
    let date = new Date()
    clock.innerHTML = `${date.toLocaleTimeString()} --- Dhiwar's Clock`
},1000)