
async function getweather () {
    try {
      const res = await fetch(
        'https://api.airvisual.com/v2/nearest_city?key=1947ecd6-b909-4440-9f65-aa29d4429c8b');
      
      const data = await res.json();
    //   console.log(data);
      if (!res.ok) throw new Error("Api not working properly");

      // city value getting
      let city = data.data.city;
      document.getElementById("city").innerHTML=`${city},`;
      // console.log(city);
     
      // getting state value
      let state = data.data.state;
      document.getElementById("state").innerHTML=state;
    //   console.log(state);
      
      // getting live temp icon
      let icon = data.data.current.weather.ic;

      if(icon=="01d"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/01d.gif">`;
        document.getElementById("icon").innerHTML=`Clear Sky(day)`;
      }
      else if(icon=="01n"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/01n.png">`;
        document.getElementById("icon").innerHTML=`Clear Sky(night)`;
      }
      else if(icon=="02d"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/02d.gif">`;
        document.getElementById("icon").innerHTML=`Few clouds (day)`;
      }
      else if(icon=="02n"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/02n.png">`;
        document.getElementById("icon").innerHTML=`Few clouds (night)`;
      }
      else if(icon=="03d"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/03d.png">`;
        document.getElementById("icon").innerHTML=`Scattered clouds (day)`;
      }
      else if(icon=="03n"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/night_mist1.png">`;
        document.getElementById("icon").innerHTML=`Scattered clouds (night)`;
      }
      else if(icon=="04d"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/04n&d.png">`;
        document.getElementById("icon").innerHTML=`Broken clouds (day)`;
      }
      else if(icon=="04n"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/04n&d.png">`;
        document.getElementById("icon").innerHTML=`Broken clouds (night)`;
      }
      else if(icon=="09d"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/09n&d.gif">`;
        document.getElementById("icon").innerHTML=`Shower rain (day)`;
      }
      else if(icon=="09n"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/09n&d.gif">`;
        document.getElementById("icon").innerHTML=`Shower rain (night)`;
      }
      else if(icon=="10d"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/10d.gif">`;
        document.getElementById("icon").innerHTML=`Rain (day)`;
      }
      else if(icon=="10n"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/10n.png">`;
        document.getElementById("icon").innerHTML=`Rain (night)`;
      }
      else if(icon=="11d"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/11d.gif">`;
        document.getElementById("icon").innerHTML=`Thunderstorm (day)`;
      }
      else if(icon=="11n"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/11n.gif">`;
        document.getElementById("icon").innerHTML=`Thunderstorm (night)`;
      }
      else if(icon=="13d"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/13d&n.gif">`;
        document.getElementById("icon").innerHTML=`Snow (day)`;
      }
      else if(icon=="13n"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/13d&n.gif">`;
        document.getElementById("icon").innerHTML=`Snow (night)`;
      }
      else if(icon=="50d"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/50d.png">`;
        document.getElementById("icon").innerHTML=`Day Mist`;
      }
      else if(icon=="50n"){
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/night_mist1.png">`;
        document.getElementById("icon").innerHTML=`Night Mist`;
      }
      else{
        document.getElementById("error").innerHTML=`<img id="gif1" src="gif/10d.gif">`;
      }
    //   console.log(`http://www.wattmon.com/res/pkg3.4/img/weather/${icon}.png`);


      // getting temp value
      let temperature = data.data.current.weather.tp;
      document.getElementById("temperature").innerHTML=`${temperature}°C`;
      // console.log(`${temperature}°C`);

      // getting humidity value
      let humidity = data.data.current.weather.hu;
      document.getElementById("humidity").innerHTML=`Humidity : ${humidity}%`;
      // console.log(`${humidity}%`);

      // getting atmospheric pressure value
      let atmospress = data.data.current.weather.pr;
      document.getElementById("atmospress").innerHTML=`Atmospheric Pressure : ${atmospress} hPa`;
      // console.log(`${atmospress} hPa`);

      // getting windspeed value
      let windspeed = data.data.current.weather.ws;
      document.getElementById("windspeed").innerHTML=`Wind Speed : ${windspeed} m/s`;
      // console.log(`${windspeed} m/s`);


      // day and year details 
      let today = new Date();
      let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      document.getElementById("date").innerHTML=`, ${date}`;
      // console.log(date);
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var d = new Date();
      var dayName = days[d.getDay()];
      document.getElementById("dayName").innerHTML=`${dayName}`;
      // console.log(dayName)
    

    return data;
    } catch (error) {
      document.getElementById("error").innerHTML = `We're having trouble loading your feed, ${error.message}` ;
      document.getElementById("error1").innerHTML =`You might be offline, or there could be something happening on our end.`;
      console.log(error.message);
     }
    
  };
  getweather();

