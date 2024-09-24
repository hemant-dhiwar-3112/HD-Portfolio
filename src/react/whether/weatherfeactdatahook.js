const callweatherapi = async (sname, wname, apikey) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/${sname}?${wname}&units=metric&appid=${apikey}`
  ).then((Response) => Response.json());

  return {
    lat: data.coord.lat,
    lon: data.coord.lon,
  };
};

const callforecstapi = async (sname, wname, apikey) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/${sname}?${wname}&units=metric&appid=${apikey}`
  ).then((Response) => Response.json());

  // console.log(data);

  const Hours = [
    {
      cityname: data.city.name,
      country: data.city.country,
      sunrise: data.city.sunrise,
      sunset: data.city.sunset,
      time: data.list[0].dt,
      temp: data.list[0].main.temp,
      icon: data.list[0].weather[0].icon,
      maxtemp: data.list[0].main.temp_max,
      mintemp: data.list[0].main.temp_min,
      feels: data.list[0].main.feels_like,
      humidity: data.list[0].main.humidity,
      wind: data.list[0].wind.speed,
      description: data.list[0].weather[0].main,
    },
    {
      time: data.list[1].dt,
      temp: data.list[1].main.temp,
      icon: data.list[1].weather[0].icon,
    },
    {
      time: data.list[2].dt,
      temp: data.list[2].main.temp,
      icon: data.list[2].weather[0].icon,
    },
    {
      time: data.list[3].dt,
      temp: data.list[3].main.temp,
      icon: data.list[3].weather[0].icon,
    },
    {
      time: data.list[4].dt,
      temp: data.list[4].main.temp,
      icon: data.list[4].weather[0].icon,
    },
    {
      time: data.list[5].dt,
      temp: data.list[5].main.temp,
      icon: data.list[5].weather[0].icon,
    },
  ];
  let day1 = [];
  let day2 = [];
  let day3 = [];
  let day4 = [];

  let date = new Date();
  for (let i = 0; i < data.list.length; i++) {
    if (
      data.list[i].dt_txt ==
      `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${(date.getDate() + 1)
        .toString()
        .padStart(2, "0")} 00:00:00`
    ) {
      day1 = data.list[i];
    }
    if (
      data.list[i].dt_txt ==
      `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${(date.getDate() + 2)
        .toString()
        .padStart(2, "0")} 00:00:00`
    ) {
      day2 = data.list[i];
    }
    if (
      data.list[i].dt_txt ==
      `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${(date.getDate() + 3)
        .toString()
        .padStart(2, "0")} 00:00:00`
    ) {
      day3 = data.list[i];
    }
    if (
      data.list[i].dt_txt ==
      `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${(date.getDate() + 4)
        .toString()
        .padStart(2, "0")} 00:00:00`
    ) {
      day4 = data.list[i];
    }
  }

  const alldays = [
    {
      date: day1.dt,
      temp: day1.main.temp,
      icon: day1.weather[0].icon,
      description: day1.weather[0].description,
    },
    {
      date: day2.dt,
      temp: day2.main.temp,
      icon: day2.weather[0].icon,
      description: day2.weather[0].description,
    },
    {
      date: day3.dt,
      temp: day3.main.temp,
      icon: day3.weather[0].icon,
      description: day3.weather[0].description,
    },
    {
      date: day4.dt,
      temp: day4.main.temp,
      icon: day4.weather[0].icon,
      description: day4.weather[0].description,
    },
  ];

  return { Hours, alldays };
};

const Weatherhookname = async (sname, searchloc, hd = "") => {
  const key = "37820053ced75f3673eda1f4091eec42";
  if (sname === "weather" && hd === "") {
    return await callweatherapi(sname, searchloc, key);
  } else if (sname === "forecast" && hd === "hourly") {
    return await callforecstapi(sname, searchloc, key);
  }
};

export default Weatherhookname;
