import React, { useEffect, useState } from 'react'
import { getWeatherForecast } from '../api/weatherApi'

const WeatherForecast = ({ city }) => {
    const [forecast, setForecast] = useState(null)

    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const forecastData = await getWeatherForecast(city)
                setForecast(forecastData)
            } catch (err) {
                console.error('Error fetching forecast: ', err)
            }
        }

        fetchForecast()
    }, [city])

    return (
        <div className="mx-4 my-3 w-full flex items-center gap-3">
            <h2
                className='flex uppercase font-bold py-1 text-white flex-wrap'
            >3-Hour Forecast for
                <span className='text-card'>&nbsp;{city}</span>
            </h2>
            {forecast ? (
                <div className="flex items-center justify-center gap-3 w-full">
                    {forecast.list.slice(0, 5).map((item) => (
                        <div key={item.dt} className="bg-card px-3 py-2 rounded-md cursor-pointer hover:scale-105">
                            <span
                                className='bg-headcard rounded-md font-semibold flex items-center justify-center text-xl'
                            >{new Date(item.dt * 1000).toLocaleDateString('en-US', {
                                weekday: 'short',
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            })}
                            </span>
                            <div className='px-4 py-2'>
                                <p className='font-bold'>{Math.floor(item.main.temp)} °C</p>
                                <p className='capitalize'>{item.weather[0].description}</p>
                                <p>Wind:
                                    <span className='font-bold'>{item.wind.speed} km/h</span>
                                </p>
                                <p>Humidity:
                                    <span className='font-bold'>{item.main.humidity}%</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading forecast...</p>
            )}
        </div>
    )
}

export default WeatherForecast
