
document.getElementById("btn").onclick = function(){
  
 let location=document.getElementById("cityi").value;
  console.log(location);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=7f33da9903c18929243e9675953957c4`)
.then((response)=> response.json())
.then((data)=>{console.log(JSON.stringify(data)) 
console.log(data);
document.getElementById("temp").innerHTML=`${data.main.temp}F`;
document.getElementById("humidity").innerHTML=` level humid :${data.main.humidity}`;
document.getElementById("desc").innerHTML=`${data.weather[0].main}`;
}
);
document.getElementById("city").innerHTML=location;


};

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=7f33da9903c18929243e9675953957c4`)
// .then((response)=> response.json())
// .then(data=>console.log(data));{data.main.temp.toFixed()

