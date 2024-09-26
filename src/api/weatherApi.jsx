const apiKey = process.env.REACT_APP_API_KEY

const getWeatherData = async (city) => {
  if (!city) throw new Error('City name is required')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`) // Nếu lỗi, in ra status code
  }

  const data = await res.json()
  return data // Trả về dữ liệu
}

// Hàm lấy dự báo 5 ngày, 3 giờ 1 lần
const getWeatherForecast = async (city) => {
  if (!city) throw new Error('City name is required')

  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`

  const res = await fetch(forecastUrl)

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`) // Nếu lỗi, in ra status code
  }

  const data = await res.json()
  return data // Trả về dữ liệu dự báo
}

export { getWeatherData, getWeatherForecast }