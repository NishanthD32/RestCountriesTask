async function getCountries(){
    try{
        let res = await fetch('https://restcountries.com/v3.1/all');
        let country = await res.json()
        return country
    }catch(error){
        console.log(error)
    }
}
// 86b259a5a1fd49594d054a1808c42180
async function getWeather(latlng){
    try{
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=86b259a5a1fd49594d054a1808c42180`);
        let data = await res.json()
        return data.main.temp -273.15
       }catch(error)
       {
        console.log(error)
    }
}

async function mycountrys(){

let data = await getCountries()

let parent = document.createElement('div')
parent.setAttribute('id','parent')
document.body.appendChild(parent)

data.forEach((e) => {
    let child = document.createElement('div')
    child.setAttribute('id','child')
     
    let image = document.createElement('img')
    image.setAttribute('id','image')
    image.setAttribute('src',e.flags.svg)
    child.appendChild(image)

    let countryName = document.createElement('h2')
    countryName.setAttribute('id','countryName')
    countryName.innerHTML= `NAME : ${e.name.common}`
    child.appendChild(countryName)


    let capital = document.createElement('h3')
    capital.setAttribute('id','capital')
    capital.innerHTML= `CAPITAL : ${e.capital? e.capital:''}`
    child.appendChild(capital)
    
    let region = document.createElement('h3')
    region.setAttribute('id','region')
    region.innerHTML= `REGION : ${e.region}`
    child.appendChild(region)


    let button = document.createElement('button')
    button.setAttribute('id','button')
    button.innerHTML='Get Weather'
    button.addEventListener('click',async ()=>{
    let temp = await getWeather(e.latlng)
    
    let temp1 = document.createElement('h3')
    temp1.setAttribute('id','temp')
    temp1.innerHTML= `${temp.toFixed(2)} &deg; C`
    child.appendChild(temp1)
     
    })
    child.appendChild(button)

    parent.appendChild(child)

});
} 
mycountrys()