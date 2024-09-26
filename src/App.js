import React, { useState, useEffect } from 'react'

import MainWeatherCard from './components/MainWeatherCard'
import Header from './components/Header'
import { getWeatherData } from './api/weatherApi'
import { getWeatherIcon } from './components/SetIcon'

import { searh_icon, pin_icon, dashboard_icon, notif_icon } from './assets'
import { Leaflet } from './components/Leaflet'
import { Footer } from './components/Footer'
import WeatherForecast from './components/WeatherForecast'

function App() {
  const [weatherData, setWeatherData] = useState(false)
  const [city, setCity] = useState('New York') // Thiết lập thành phố mặc định

  const search = async (city) => {

    if (city === '') {
      alert('Enter City Name')
      return
    }

    try {
      const data = await getWeatherData(city) // Gọi hàm API
      console.log(data) // In dữ liệu ra console
      const icon = getWeatherIcon(data.weather[0].id)
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        pressure: data.main.pressure,
        feelsLike: Math.floor(data.main.feels_like),
        visibility: Math.floor(data.visibility / 1000),
        main: data.weather[0].main,
        des: data.weather[0].description,
        icon: icon,
        lat: data.coord.lat,
        lon: data.coord.lon
      }) // Cập nhật state với dữ liệu thời tiết
      setCity(data.name) // Cập nhật city cho dự báo
    } catch (err) {
      console.error('Fetch error: ', err) // In chi tiết lỗi ra console
    }
  }

  useEffect(() => {
    search(city) // Gọi API cho thành phố mặc định
    // eslint-disable-next-line
  }, [])

  return (
    <div className="flex flex-col gap-4 mx-4">
      <Header
        search={search}
        weatherData={weatherData}
        icons={{
          searh_icon,
          pin_icon,
          dashboard_icon,
          notif_icon,
        }}
      />
      <main className='flex items-center justify-start gap-2 w-full'>
        <MainWeatherCard data={weatherData} />
        {/* Kiểm tra weatherData và các thuộc tính lat, lon trước khi render Leaflet */}
        {weatherData && weatherData.lat && weatherData.lon ? (
          <Leaflet lat={weatherData.lat} lon={weatherData.lon} />
        ) : (
          <p>Loading map...</p> // Hiển thị loading khi dữ liệu chưa sẵn sàng
        )}
      </main>
      <WeatherForecast city={city} />
      <Footer />
    </div>
  )
}

export default App
