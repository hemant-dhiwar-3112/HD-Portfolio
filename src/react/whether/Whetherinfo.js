import { Link } from "react-router-dom";
import logo from "./logo.png";
import Weathertimes from "./weathertimes";
import Weatheerdays from "./weatherdays";
import weatherfeactdatahook from "./weatherfeactdatahook";
import {
  BiSolidDropletHalf,
  BiSearch,
  BiWind,
  BiMap,
  BiSolidCalendarAlt,
  BiCurrentLocation,
} from "react-icons/bi";
import { FaTemperatureLow } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";

const Whether = () => {
  const [namedata, setnamedata] = useState("raipur");
  const [latlon, setlatlon] = useState("");

  const [row1, setrow1] = useState({});
  const [row2, setrow2] = useState({});
  const [row3, setrow3] = useState({});
  const [row4, setrow4] = useState({});
  const [row5, setrow5] = useState({});
  const [row6, setrow6] = useState({});

  const [day2, setday2] = useState({});
  const [day3, setday3] = useState({});
  const [day4, setday4] = useState({});
  const [day5, setday5] = useState({});

  let [checkvals, setcheckvals] = useState('')


  const [forecastdata, setforecastdata] = useState()
  const formateweatherdata = useCallback(async () => {
    const weatherdata1 = await weatherfeactdatahook("weather", latlon === '' ? `q=${namedata}` : `lat=${latlon.lat}&lon=${latlon.lon}`);
    const weatherdata = await weatherfeactdatahook("weather", `lat=${weatherdata1.lat}&lon=${weatherdata1.lon}`);

    const forecastdata = await weatherfeactdatahook(
      "forecast",
      `lat=${weatherdata.lat}&lon=${weatherdata.lon}`,
      "hourly"
    );
    setcheckvals(forecastdata)
    setrow1({
      cityname: forecastdata.Hours[0].cityname,
      country: forecastdata.Hours[0].country,
      time: forecastdata.Hours[0].time,
      temp: forecastdata.Hours[0].temp,
      icon: forecastdata.Hours[0].icon,
      maxtemp: forecastdata.Hours[0].maxtemp,
      mintemp: forecastdata.Hours[0].mintemp,
      feels: forecastdata.Hours[0].feels,
      humidity: forecastdata.Hours[0].humidity,
      wind: forecastdata.Hours[0].wind,
      description: forecastdata.Hours[0].description,
    });
    setrow2({
      time: forecastdata.Hours[1].time,
      temp: forecastdata.Hours[1].temp,
      icon: forecastdata.Hours[1].icon,
    });
    setrow3({
      time: forecastdata.Hours[2].time,
      temp: forecastdata.Hours[2].temp,
      icon: forecastdata.Hours[2].icon,
    });
    setrow4({
      time: forecastdata.Hours[3].time,
      temp: forecastdata.Hours[3].temp,
      icon: forecastdata.Hours[3].icon,
    });
    setrow5({
      time: forecastdata.Hours[4].time,
      temp: forecastdata.Hours[4].temp,
      icon: forecastdata.Hours[4].icon,
    });
    setrow6({
      time: forecastdata.Hours[5].time,
      temp: forecastdata.Hours[5].temp,
      icon: forecastdata.Hours[5].icon,
    });

    // ----------------------------------days---------------------------------------

    setday2({
      date: forecastdata.alldays[0].date,
      temp: forecastdata.alldays[0].temp,
      icon: forecastdata.alldays[0].icon,
      description: forecastdata.alldays[0].description,
    });
    setday3({
      date: forecastdata.alldays[1].date,
      temp: forecastdata.alldays[1].temp,
      icon: forecastdata.alldays[1].icon,
      description: forecastdata.alldays[1].description,
    });
    setday4({
      date: forecastdata.alldays[2].date,
      temp: forecastdata.alldays[2].temp,
      icon: forecastdata.alldays[2].icon,
      description: forecastdata.alldays[2].description,
    });
    setday5({
      date: forecastdata.alldays[3].date,
      temp: forecastdata.alldays[3].temp,
      icon: forecastdata.alldays[3].icon,
      description: forecastdata.alldays[3].description,
    });

  }, [namedata]);

  useEffect(() => {
    formateweatherdata();
  }, [namedata]);

  let weathername = "";
  const currentdate = new Date(row1.time * 1000);

  const [defval, setdefval] = useState('')
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date();

  const feactingcurrent = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
      alert('Feaching Current Location Plase Wait...')
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
      setlatlon({
        lat: position.coords.latitude, lon: position.coords.longitude
      })
      setnamedata('')
    }
  }




  if (checkvals === '') {
    return (<><div className="flex justify-center items-center h-screen bg-[#fcfefc]"><img src="https://i.pinimg.com/originals/67/2b/62/672b62d967f8d00d608d22f36c1831db.gif" alt="" /></div></>)
  } else {
    return (
      <>
        <div className="dark:bg-[#0f1013]  bg-[#7b787814]  h-full pb-8">
          <h2 className="uppercase text-center text-[16px]  py-6  dark:text-[#64FFDA]">
            whether
          </h2>
          <div
            className="mx-auto w-full sm:w-[80%] flex flex-col justify-center  rounded-xl bg-slate-800"
            id="added"
            style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
          >
            <div className="flex justify-between items-center py-4 px-3 sm:px-8">
              <h2 className="text-white">
                <img src={logo} alt="" className="w-28 sm:40" />
              </h2>

              <form className="flex items-center" onSubmit={(e) => {
                e.preventDefault()
                setdefval(null)
                const check = async () => {
                  const data = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${weathername}&units=metric&appid=37820053ced75f3673eda1f4091eec42`
                  ).then((Response) => Response.json());

                  if (data.cod === '400' || data.cod === '404') {
                    alert(`${weathername} city not found`)
                  }
                  if (data.cod === 200) {
                    setnamedata(weathername)
                    setlatlon('')
                    alert('Feaching data plase wait...')
                  }
                }
                check()
                e.target.reset()
              }}>

                <BiSearch
                  className="bg-white text-3xl cursor-pointer sm:cursor-default p-1 rounded-full text-[#000000ca] mr-[-35px] relative  sm:ml-0"
                />
                <input
                  type="text"
                  className="sm:block rounded-full outline-none pl-10 pr-4 w-32 sm:w-40 py-1"
                  onChange={(e) => (weathername = e.target.value)}
                  defaultValue={defval}
                /></form>
              <div className="cursor-pointer lg:mr-8 justify-end sm:px-3 items-center flex text-[#f1e9e9e2] rounded-full bg-[#7c909cc0]" onClick={feactingcurrent}>
                <BiCurrentLocation
                  size={30}
                  className="cursor-pointer md:pr-2 p-1 rounded-full "
                />
                <span className=" hidden md:block ">Curent location</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-between flex-col lg:flex-row">
              {/* one */}
              <div className="lg:ml-8 lg:mr-0 lg:w-[45%] sm:w-[70%] w-[90%] mx-auto">
                {/* header part */}
                <div className="flex flex-col sm:flex-row sm:justify-between bg-[#616c7c] rounded-2xl lg:mr-8 mt-4 items-center pl-4 ">
                  <div className=" text-white mx-9  w-full">
                    <p
                      className=" text-xl py-"
                      onClick={() => setnamedata("pune")}
                    >
                      Now
                    </p>
                    <div className=" flex">
                      <h1 className=" mx-8 text-7xl">
                        {Math.round(row1.temp)}
                        &#176;
                      </h1>
                      <img
                        src={`https://openweathermap.org/img/wn/${row1.icon}@2x.png`}
                        alt=""
                        className="mx-8 w-16 "
                      />
                    </div>
                    <h3 className=" mx-8">
                      {days[date.getDay()]} {Math.ceil(row1.maxtemp) + 2}
                      &#176;/{Math.round(row1.mintemp)}&#176;
                      <span className=" text-xl"> {row1.description}</span>
                    </h3>
                    <h3 className="pt-2 pb-1 mt-4 border-t-[1px] border-gray-400 flex">
                      <BiSolidCalendarAlt />
                      <span className="mx-2  mt-[-3px]">
                        {days[currentdate.getDay()]} {currentdate.getDate()} -
                        {currentdate.getMonth() + 1}-{currentdate.getFullYear()}
                      </span>

                    </h3>
                    <h3 className="pb-2 pt-1 flex">
                      <BiMap />
                      <span className="mx-2 mt-[-3px]">
                        City of {row1.cityname} {row1.country}
                      </span>
                    </h3>
                  </div>
                </div>

                {/* footer part */}

                <h3 className="text-gray-100 my-3  px-3 font-normal">
                  Today forecast
                </h3>
                <div className="mx-auto pt-3 mb-2 overflow-auto text-white bg-[#616c7c] rounded-2xl px-4 lg:mr-6">
                  <div className="flex w-[450px] lg:w-[100%]" id="addtimes">
                    <Weathertimes
                      time="Now"
                      logo={`https://openweathermap.org/img/wn/${row1.icon}@2x.png`}
                      temp={Math.round(row1.temp)}
                    />
                    <Weathertimes
                      time={
                        new Date(row2.time * 1000).getHours() +
                        ":" +
                        new Date(row2.time * 1000).getMinutes()
                      }
                      logo={`https://openweathermap.org/img/wn/${row2.icon}@2x.png`}
                      temp={Math.round(row2.temp)}
                    />
                    <Weathertimes
                      time={
                        new Date(row3.time * 1000).getHours() +
                        ":" +
                        new Date(row3.time * 1000).getMinutes()
                      }
                      logo={`https://openweathermap.org/img/wn/${row3.icon}@2x.png`}
                      temp={Math.round(row3.temp)}
                    />
                    <Weathertimes
                      time={
                        new Date(row4.time * 1000).getHours() +
                        ":" +
                        new Date(row4.time * 1000).getMinutes()
                      }
                      logo={`https://openweathermap.org/img/wn/${row4.icon}@2x.png`}
                      temp={Math.round(row4.temp)}
                    />
                    <Weathertimes
                      time={
                        new Date(row5.time * 1000).getHours() +
                        ":" +
                        new Date(row5.time * 1000).getMinutes()
                      }
                      logo={`https://openweathermap.org/img/wn/${row5.icon}@2x.png`}
                      temp={Math.round(row5.temp)}
                    />
                    <Weathertimes
                      time={
                        new Date(row6.time * 1000).getHours() +
                        ":" +
                        new Date(row6.time * 1000).getMinutes()
                      }
                      logo={`https://openweathermap.org/img/wn/${row6.icon}@2x.png`}
                      temp={Math.round(row6.temp)}
                    />
                  </div>
                </div>
              </div>

              {/* two */}
              <div className="mb-4 flex flex-col justify-start mx-auto w-full px-6 lg:px-0 sm:w-[80%]  md:w-[70%] lg:w-[35%]">
                <h3 className="text-gray-100 lg:px-3 mt-5">
                  5-Days weather forecast
                </h3>
                <div className="py-1 mt-2 lg:mr-4 px-4 rounded-2xl bg-[#616c7c]">
                  <Weatheerdays
                    img={`https://openweathermap.org/img/wn/${row1.icon}@2x.png`}
                    des={row1.description}
                    temp={Math.round(row1.temp)}
                    day="Now"
                  />
                  <Weatheerdays
                    img={`https://openweathermap.org/img/wn/${day2.icon}@2x.png`}
                    des={day2.description}
                    temp={Math.round(day2.temp)}
                    day="Tomorrow"
                  />

                  <Weatheerdays
                    img={`https://openweathermap.org/img/wn/${day3.icon}@2x.png`}
                    des={day3.description}
                    temp={Math.round(row3.temp)}
                    day={days[new Date(day3.date * 1000).getDay()]}
                  />
                  <Weatheerdays
                    img={`https://openweathermap.org/img/wn/${day4.icon}@2x.png`}
                    des={day4.description}
                    temp={Math.round(row4.temp)}
                    day={days[new Date(day4.date * 1000).getDay()]}
                  />
                  <Weatheerdays
                    img={`https://openweathermap.org/img/wn/${day5.icon}@2x.png`}
                    des={day5.description}
                    temp={Math.round(row5.temp)}
                    day={days[new Date(day5.date * 1000).getDay()]}
                  />
                </div>
              </div>

              {/* three */}
              <div className="mb-4 lg:w-[20%]">
                <h3 className="text-gray-100 lg:px-3 mt-5 px-7 md:px-24">
                  Weather details
                </h3>
                <div className=" my-4 lg:mt-4 lg:mb-0 lg:px-3 px-4 md:px-20 lg:pb-0 mx-auto flex lg:flex-col flex-row flex-wrap">
                  <div
                    className="text-gray-300 sm:self-start mx-2 md:mx-[6px] lg:mx-0 px-5 my-2 py-3 rounded-2xl bg-[#616c7c] w-[44%] sm:w-[30%] lg:w-full"
                    tyle={{ boxShadow: "0 0 5px 3px black" }}
                  >
                    <FaTemperatureLow size={20} />
                    <p>Feels like</p>
                    <p>{Math.round(row1.feels)}&#176;</p>
                  </div>
                  <div
                    className="text-gray-300 sm:self-start mx-2 lg:mx-0 px-5 my-2 py-3 rounded-2xl bg-[#616c7c] w-[44%] sm:w-[30%] lg:w-full"
                    tyle={{ boxShadow: "0 0 5px 3px black" }}
                  >
                    <BiSolidDropletHalf size={20} />
                    <p>Humidity</p>
                    <p>{row1.humidity}%</p>
                  </div>
                  <div
                    className="text-gray-300 sm:self-start w-[44%] mx-2  lg:mx-0 px-5 mt-2 py-3 rounded-2xl bg-[#616c7c] sm:w-[30%] lg:w-full"
                    tyle={{ boxShadow: "0 0 5px 3px black" }}
                  >
                    <BiWind size={20} />
                    <p>Wind</p>
                    <p>{row1.wind} mi/h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <Link
            to="/project/react-project"
            className="text-white mt-10 p-3 bg-sky-600 hover:bg-sky-800 rounded-2xl mx-auto justify-center w-[60%] sm:w-[40%] md:w-[20%] flex self-center"
          >
            <p className="text-sm">View All React Project</p>
          </Link>
        </div>
      </>)
  }


};

export default Whether;
