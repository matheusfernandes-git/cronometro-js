var min = 0;
var sec = 0;
var hr = 0;
var interval

function iniciou(){
   contador()
   interval = setInterval(contador, 1000)
}

function pausou(){
    clearInterval(interval)
}

function parou(){
    clearInterval(interval)
    sec = 0;
    min = 0;
    document.getElementById('contador').innerText = "00:00:00"

}

function twodigits(digit){
    if(digit < 10){
        return('0' + digit)
    }else{
        return(digit)
    }
}

function contador(){   
    sec++

    if(sec == 60){
        min++
        sec = 0
    }if(min == 60){
        hr ++
        min = 0
    }

    document.getElementById('contador').innerText = twodigits(hr) +':' + twodigits(min) +':'+ twodigits(sec)
}