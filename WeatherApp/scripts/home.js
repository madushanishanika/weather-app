function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function btnSearchLocation() {
  const currentLocation = $("#txtLocation");
  const currentDate1 = $("#currentDate");
  const currentTemp1 = $("#txtCurrenTemp");
  const currentImg1 = $("#img");
  const currentDesc1 = $("#currentDescription");
  const currentWind1 = $("#currentWind");
  const currentLocationName = $("#currentLocation");
  const currentHum1 = $("#currentHumidity");

  $.ajax({
    method: "GET",
    url: " http://api.weatherapi.com/v1/current.json?key=9125f2db5bc2423d82395047232809&q=colombo",
    success: (resp) => {
      console.log(resp);
      const iconUrl = "https:" + resp.current.condition.icon;
      currentImg1.attr("src", iconUrl);
      currentLocationName.text(resp.location.name);
      currentDate1.text(resp.location.localtime);
      currentDesc1.text(resp.current.condition.text);
      currentTemp1.text(resp.current.temp_c + "°C");
      currentWind1.text(resp.current.wind_mph + "mph");
      currentHum1.text(resp.current.humidity + "%");

    }
  });
}


function getWeatherHourlyForecast() {
  const forecastHourlyDate1 = $("#hourlyDate1");
  const forecastHourlyImg1 = $("#hourlyImg1");
  const forecastHourlyTemp1 = $("#hourlyTemp1");
  const forecastHourlyWind1 = $("#hourlyWindSpeed1");
  const forecastHourlyHum1 = $("#hourlyHumidity1");
  const forecastHourlyDesc1 = $("#hourlyDescription1");

  const forecastHourlyDate2 = $("#hourlyDate2");
  const forecastHourlyImg2 = $("#hourlyImg2");
  const forecastHourlyTemp2 = $("#hourlyTemp2");
  const forecastHourlyWind2 = $("#hourlyWindSpeed2");
  const forecastHourlyHum2 = $("#hourlyHumidity2");
  const forecastHourlyDesc2 = $("#hourlyDescription2");

  const forecastHourlyDate3 = $("#hourlyDate3");
  const forecastHourlyImg3 = $("#hourlyImg3");
  const forecastHourlyTemp3 = $("#hourlyTemp3");
  const forecastHourlyWind3 = $("#hourlyWindSpeed3");
  const forecastHourlyHum3 = $("#hourlyHumidity3");
  const forecastHourlyDesc3 = $("#hourlyDescription3");

  const forecastHourlyDate4 = $("#hourlyDate4");
  const forecastHourlyImg4 = $("#hourlyImg4");
  const forecastHourlyTemp4 = $("#hourlyTemp4");
  const forecastHourlyWind4 = $("#hourlyWindSpeed4");
  const forecastHourlyHum4 = $("#hourlyHumidity4");
  const forecastHourlyDesc4 = $("#hourlyDescription4");

  const forecastHourlyDate5 = $("#hourlyDate5");
  const forecastHourlyImg5 = $("#hourlyImg5");
  const forecastHourlyTemp5 = $("#hourlyTemp5");
  const forecastHourlyWind5 = $("#hourlyWindSpeed5");
  const forecastHourlyHum5 = $("#hourlyHumidity5");
  const forecastHourlyDesc5 = $("#hourlyDescription5");



  $.ajax({
    url: `http://api.weatherapi.com/v1/forecast.json?key=9125f2db5bc2423d82395047232809&q=colombo&days=3`,
    method: "GET",
    success: function (response) {
      console.log(response);

      forecastHourlyDate1.text(response.forecast.forecastday[0].hour[0].time);
      const hourlyIconUrl1 = "https:" + response.forecast.forecastday[0].hour[0].condition.icon;
      forecastHourlyImg1.attr("src", hourlyIconUrl1);
      forecastHourlyTemp1.text(response.forecast.forecastday[0].hour[0].temp_c + "°C");
      forecastHourlyWind1.text(response.forecast.forecastday[0].hour[0].wind_mph + "mph");
      forecastHourlyHum1.text(response.forecast.forecastday[0].hour[0].humidity + "%");
      forecastHourlyDesc1.text(response.forecast.forecastday[0].hour[0].condition.text);

      forecastHourlyDate2.text(response.forecast.forecastday[0].hour[5].time);
      const hourlyIconUrl2 = "https:" + response.forecast.forecastday[0].hour[5].condition.icon;
      forecastHourlyImg2.attr("src", hourlyIconUrl2);
      forecastHourlyTemp2.text(response.forecast.forecastday[0].hour[5].temp_c + "°C");
      forecastHourlyWind2.text(response.forecast.forecastday[0].hour[5].wind_mph + "mph");
      forecastHourlyHum2.text(response.forecast.forecastday[0].hour[5].humidity + "%");
      forecastHourlyDesc2.text(response.forecast.forecastday[0].hour[5].condition.text);

      forecastHourlyDate3.text(response.forecast.forecastday[0].hour[9].time);
      const hourlyIconUrl3 = "https:" + response.forecast.forecastday[0].hour[9].condition.icon;
      forecastHourlyImg3.attr("src", hourlyIconUrl3);
      forecastHourlyTemp3.text(response.forecast.forecastday[0].hour[9].temp_c + "°C");
      forecastHourlyWind3.text(response.forecast.forecastday[0].hour[9].wind_mph + "mph");
      forecastHourlyHum3.text(response.forecast.forecastday[0].hour[9].humidity + "%");
      forecastHourlyDesc3.text(response.forecast.forecastday[0].hour[9].condition.text);

      forecastHourlyDate4.text(response.forecast.forecastday[0].hour[14].time);
      const hourlyIconUrl4 = "https:" + response.forecast.forecastday[0].hour[14].condition.icon;
      forecastHourlyImg4.attr("src", hourlyIconUrl4);
      forecastHourlyTemp4.text(response.forecast.forecastday[0].hour[14].temp_c + "°C");
      forecastHourlyWind4.text(response.forecast.forecastday[0].hour[14].wind_mph + "mph");
      forecastHourlyHum4.text(response.forecast.forecastday[0].hour[14].humidity + "%");
      forecastHourlyDesc4.text(response.forecast.forecastday[0].hour[14].condition.text);

      forecastHourlyDate5.text(response.forecast.forecastday[0].hour[22].time);
      const hourlyIconUrl5 = "https:" + response.forecast.forecastday[0].hour[22].condition.icon;
      forecastHourlyImg5.attr("src", hourlyIconUrl5);
      forecastHourlyTemp5.text(response.forecast.forecastday[0].hour[22].temp_c + "°C");
      forecastHourlyWind5.text(response.forecast.forecastday[0].hour[22].wind_mph + "mph");
      forecastHourlyHum5.text(response.forecast.forecastday[0].hour[22].humidity + "%");
      forecastHourlyDesc5.text(response.forecast.forecastday[0].hour[22].condition.text);
    }
  }
  );
}

function getWeatherForecast() {

  const forecastDayDate1 = $("#forecastDate1");
  const forecastDayImg1 = $("#img1");
  const forecastDayTemp1 = $("#temp1");
  const forecastDayWind1 = $("#windSpeed1");
  const forecastDayHum1 = $("#humidity1");
  const forecastDayDesc1 = $("#description1");

  const forecastDayDate2 = $("#forecastDate2");
  const forecastDayImg2 = $("#img2");
  const forecastDayTemp2 = $("#temp2");
  const forecastDayWind2 = $("#windSpeed2");
  const forecastDayHum2 = $("#humidity2");
  const forecastDayDesc2 = $("#description2");

  const forecastDayDate3 = $("#forecastDate3");
  const forecastDayImg3 = $("#img3");
  const forecastDayTemp3 = $("#temp3");
  const forecastDayWind3 = $("#windSpeed3");
  const forecastDayHum3 = $("#humidity3");
  const forecastDayDesc3 = $("#description3");

  $.ajax({
    url: `http://api.weatherapi.com/v1/forecast.json?key=9125f2db5bc2423d82395047232809&q=colombo&days=3`,
    method: "GET",
    success: function (response) {
      console.log(response);

      const iconUrl1 = "https:" + response.forecast.forecastday[0].day.condition.icon;
      forecastDayImg1.attr("src", iconUrl1);
      forecastDayDate1.text(response.forecast.forecastday[0].date);
      forecastDayTemp1.text(response.forecast.forecastday[0].day.avgtemp_c + "°C");
      forecastDayWind1.text(response.forecast.forecastday[0].day.maxwind_kph + "kph");
      forecastDayHum1.text(response.forecast.forecastday[0].day.avghumidity + "%");
      forecastDayDesc1.text(response.forecast.forecastday[0].day.condition.text);

      const iconUrl2 = "https:" + response.forecast.forecastday[1].day.condition.icon;
      forecastDayImg2.attr("src", iconUrl2);
      forecastDayDate2.text(response.forecast.forecastday[1].date);
      forecastDayTemp2.text(response.forecast.forecastday[1].day.avgtemp_c + "°C");
      forecastDayWind2.text(response.forecast.forecastday[1].day.maxwind_kph + "kph");
      forecastDayHum2.text(response.forecast.forecastday[1].day.avghumidity + "%");
      forecastDayDesc2.text(response.forecast.forecastday[1].day.condition.text);

      const iconUrl3 = "https:" + response.forecast.forecastday[0].day.condition.icon;
      forecastDayImg3.attr("src", iconUrl3);
      forecastDayDate3.text(response.forecast.forecastday[2].date);
      forecastDayTemp3.text(response.forecast.forecastday[2].day.avgtemp_c + "°C");
      forecastDayWind3.text(response.forecast.forecastday[2].day.maxwind_kph + "kph");
      forecastDayHum3.text(response.forecast.forecastday[2].day.avghumidity + "%");
      forecastDayDesc3.text(response.forecast.forecastday[2].day.condition.text);

    }
  }
  );
}
function getPastWeather() {
  const pastWeatherDate1 = $("#pastDate1");
  const pastWeatherImg1 = $("#pastImg1");
  const pastWeatherTemp1 = $("#pastTemp1");
  const pastWeatherWind1 = $("#pastWindSpeed1");
  const pastWeatherHum1 = $("#pastHumidity1");
  const pastWeatherDesc1 = $("#pastDescription1");

  const pastWeatherDate2 = $("#pastDate2");
  const pastWeatherImg2 = $("#pastImg2");
  const pastWeatherTemp2 = $("#pastTemp2");
  const pastWeatherWind2 = $("#pastWindSpeed2");
  const pastWeatherHum2 = $("#pastHumidity2");
  const pastWeatherDesc2 = $("#pastDescription2");

  const pastWeatherDate3 = $("#pastDate3");
  const pastWeatherImg3 = $("#pastImg3");
  const pastWeatherTemp3 = $("#pastTemp3");
  const pastWeatherWind3 = $("#pastWindSpeed3");
  const pastWeatherHum3 = $("#pastHumidity3");
  const pastWeatherDesc3 = $("#pastDescription3");

  const pastWeatherDate4 = $("#pastDate4");
  const pastWeatherImg4 = $("#pastImg4");
  const pastWeatherTemp4 = $("#pastTemp4");
  const pastWeatherWind4 = $("#pastWindSpeed4");
  const pastWeatherHum4 = $("#pastHumidity4");
  const pastWeatherDesc4 = $("#pastDescription4");

  const pastWeatherDate5 = $("#pastDate5");
  const pastWeatherImg5 = $("#pastImg5");
  const pastWeatherTemp5 = $("#pastTemp5");
  const pastWeatherWind5 = $("#pastWindSpeed5");
  const pastWeatherHum5= $("#pastHumidity5");
  const pastWeatherDesc5 = $("#pastDescription5");

  const pastWeatherDate6 = $("#pastDate6");
  const pastWeatherImg6= $("#pastImg6");
  const pastWeatherTemp6 = $("#pastTemp6");
  const pastWeatherWind6 = $("#pastWindSpeed6");
  const pastWeatherHum6= $("#pastHumidity6");
  const pastWeatherDesc6 = $("#pastDescription6");

  const pastWeatherDate7 = $("#pastDate7");
  const pastWeatherImg7 = $("#pastImg7");
  const pastWeatherTemp7 = $("#pastTemp7");
  const pastWeatherWind7 = $("#pastWindSpeed7");
  const pastWeatherHum7 = $("#pastHumidity7");
  const pastWeatherDesc7 = $("#pastDescription7");

  $.ajax({
    //url: `http://api.weatherapi.com/v1/history.json?key=9125f2db5bc2423d82395047232809&q=colombo&days=3`,
    url: `http://api.weatherapi.com/v1/history.json?key=9125f2db5bc2423d82395047232809&q=colombo&dt=2023-09-23&end_dt=2023-09-30`,
    method: "GET",
    success: function (response) {
      console.log(response);

      const pastIconUrl1 = "https:" + response.forecast.forecastday[0].day.condition.icon;
      pastWeatherImg1.attr("src", pastIconUrl1);
      pastWeatherDate1.text(response.forecast.forecastday[0].date);
      pastWeatherTemp1.text(response.forecast.forecastday[0].day.avgtemp_c + "°C");
      pastWeatherWind1.text(response.forecast.forecastday[0].day.maxwind_kph + "kph");
      pastWeatherHum1.text(response.forecast.forecastday[0].day.avghumidity + "%");
      pastWeatherDesc1.text(response.forecast.forecastday[0].day.condition.text);

      const pastIconUrl2 = "https:" + response.forecast.forecastday[0].day.condition.icon;
      pastWeatherImg2.attr("src", pastIconUrl2);
      pastWeatherDate2.text(response.forecast.forecastday[1].date);
      pastWeatherTemp2.text(response.forecast.forecastday[1].day.avgtemp_c + "°C");
      pastWeatherWind2.text(response.forecast.forecastday[1].day.maxwind_kph + "kph");
      pastWeatherHum2.text(response.forecast.forecastday[1].day.avghumidity + "%");
      pastWeatherDesc2.text(response.forecast.forecastday[1].day.condition.text);

      const pastIconUrl3 = "https:" + response.forecast.forecastday[0].day.condition.icon;
      pastWeatherImg3.attr("src", pastIconUrl3);
      pastWeatherDate3.text(response.forecast.forecastday[2].date);
      pastWeatherTemp3.text(response.forecast.forecastday[2].day.avgtemp_c + "°C");
      pastWeatherWind3.text(response.forecast.forecastday[2].day.maxwind_kph + "kph");
      pastWeatherHum3.text(response.forecast.forecastday[2].day.avghumidity + "%");
      pastWeatherDesc3.text(response.forecast.forecastday[2].day.condition.text);

      const pastIconUrl4 = "https:" + response.forecast.forecastday[0].day.condition.icon;
      pastWeatherImg4.attr("src", pastIconUrl4);
      pastWeatherDate4.text(response.forecast.forecastday[3].date);
      pastWeatherTemp4.text(response.forecast.forecastday[3].day.avgtemp_c + "°C");
      pastWeatherWind4.text(response.forecast.forecastday[3].day.maxwind_kph + "kph");
      pastWeatherHum4.text(response.forecast.forecastday[3].day.avghumidity + "%");
      pastWeatherDesc4.text(response.forecast.forecastday[3].day.condition.text);

      const pastIconUrl5 = "https:" + response.forecast.forecastday[0].day.condition.icon;
      pastWeatherImg5.attr("src", pastIconUrl5);
      pastWeatherDate5.text(response.forecast.forecastday[4].date);
      pastWeatherTemp5.text(response.forecast.forecastday[4].day.avgtemp_c + "°C");
      pastWeatherWind5.text(response.forecast.forecastday[4].day.maxwind_kph + "kph");
      pastWeatherHum5.text(response.forecast.forecastday[4].day.avghumidity + "%");
      pastWeatherDesc5.text(response.forecast.forecastday[4].day.condition.text);

      const pastIconUrl6 = "https:" + response.forecast.forecastday[0].day.condition.icon;
      pastWeatherImg6.attr("src", pastIconUrl6);
      pastWeatherDate6.text(response.forecast.forecastday[5].date);
      pastWeatherTemp6.text(response.forecast.forecastday[5].day.avgtemp_c + "°C");
      pastWeatherWind6.text(response.forecast.forecastday[5].day.maxwind_kph + "kph");
      pastWeatherHum6.text(response.forecast.forecastday[5].day.avghumidity + "%");
      pastWeatherDesc6.text(response.forecast.forecastday[5].day.condition.text);

      const pastIconUrl7 = "https:" + response.forecast.forecastday[6].day.condition.icon;
      pastWeatherImg7.attr("src", pastIconUrl7);
      pastWeatherDate7.text(response.forecast.forecastday[6].date);
      pastWeatherTemp7.text(response.forecast.forecastday[6].day.avgtemp_c + "°C");
      pastWeatherWind7.text(response.forecast.forecastday[6].day.maxwind_kph + "kph");
      pastWeatherHum7.text(response.forecast.forecastday[6].day.avghumidity + "%");
      pastWeatherDesc7.text(response.forecast.forecastday[6].day.condition.text);
    }
  }
  );
}