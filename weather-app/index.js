let city_name = 'lahore'

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q= ${city_name}&appid=98797ea43b434d060e7778354a878f11&units=metric`


fetch(apiUrl)
.then(function (response) {
    if(!response.ok){
        console.log("Not get the response")
    }
    else{
        response = response.json()
    }
    return response
})
.then(function (data) {
    console.log(data)
    let temperature = data.main.temp;
    console.log(`Temperature in ${city_name} is ${temperature} Celsius`)
})
.catch(function(error){
    console.error('There was a problem with the fetch operation:', error);
})