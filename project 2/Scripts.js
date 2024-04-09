const forms = document.querySelector('form')

forms.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector(".results")
    const remarks = document.querySelector(".remark")

    let bmi = 0
    if(height < 0 || height === " " || height == NaN){
        results.innerHTML = `Please enter a valid Height ${height}`
    }
    else if( weight < 0 || weight === " " || isNaN(weight)){
        results.innerHTML = `Please enter a valid Weight ${weight}`
    }
    else{
        bmi = (weight/((height*height)/10000)).toFixed(2)
        //show results
        results.innerHTML = `<span>${bmi}<span/>`
    }

    //remarks
    if (bmi<18.6) {
        remarks.innerHTML = "Under Weight"
        remarks.style.color = "red"
        
    }else if(bmi>18.6 && bmi<24.9){
        remarks.innerHTML = "Good Range"
        remarks.style.color = "green"
    }else{
        remarks.innerHTML = "Overweight"
        remarks.style.color = "brown"
    }
})