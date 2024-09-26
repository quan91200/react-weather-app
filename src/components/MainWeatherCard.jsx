import React, { useState } from 'react'

const MainWeatherCard = ({ data }) => {
  const [state, setState] = useState(false)

  const currentDate = new Date().toLocaleString('en-US', {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  const handleClick = () => {
    setState(!state)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-card mx-6 my-4 rounded-md w-60 cursor-pointer hover:scale-105 ease-linear"
    >
      <div className="bg-headcard p-3 rounded-md">
        <h3 className="font-semibold flex items-center justify-center text-xl">
          {currentDate}
        </h3>
      </div>
      <div
        className={`
          flex flex-rows items-start justify-center gap-5 p-3 
          ${state ? 'flex-col-reverse items-center' : ''}`}
      >
        <div className="text-base my-1">
          <h1
            className={`font-semibold ${state ? 'flex items-center justify-center text-2xl' : 'text-xl'}`}
          >
            {data.temperature}°C
          </h1>
          {state && (
            <>
              <p className="capitalize flex items-center justify-center">{data.des}</p>
              <p>
                Feels Like:&nbsp;
                <span className="font-bold">{data.feelsLike}°C</span>
              </p>
              <p>
                Pressure:&nbsp;
                <span className="font-bold">{data.pressure} hPa</span>
              </p>
            </>
          )}
          <p>
            Real Feel:&nbsp;
            <span className="font-bold">{data.temperature}°C</span>
          </p>
          <p>
            Wind:&nbsp;
            <span className="font-bold">{data.windSpeed} km/h</span>
          </p>
          <p>
            Humidity:&nbsp;
            <span className="font-bold">{data.humidity}%</span>
          </p>
          {state && (
            <>
              <p>
                Visibility:&nbsp;
                <span className="font-bold">{data.visibility} km</span>
              </p>
            </>
          )}
        </div>
        <div className="max-w-12 max-h-12 flex flex-col gap-1 items-center justify-start">
          <img
            src={data.icon}
            alt="weather icon"
            className={state ? 'max-w-full max-h-full' : ''}
          />
          <span className="font-bold">{data.main}</span>
        </div>
      </div>
    </div>
  )
}

export default MainWeatherCard
