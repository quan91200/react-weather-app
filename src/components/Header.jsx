import React, { useRef } from 'react'

function Header({ search, weatherData, icons }) {
  const inputRef = useRef()

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search(inputRef.current.value) // Gọi hàm tìm kiếm khi nhấn Enter
    }
  }

  return (
    <header className="flex items-center justify-between bg-black h-16 px-6">
      <div className="text-white flex items-center gap-2">
        <img
          src={icons.dashboard_icon}
          alt=""
          className="p-2 rounded-full bg-slate-800 cursor-pointer hover:opacity-80"
        />
        <img
          src={icons.notif_icon}
          alt=""
          className="p-2 rounded-full bg-slate-800 cursor-pointer hover:opacity-80"
        />
        <img src={icons.pin_icon} alt="" className="opacity-80" />
        <p>{weatherData?.location}</p>
      </div>
      <div className="flex items-center gap-1 bg-search px-2 py-1 rounded">
        <img
          className="cursor-pointer hover:opacity-80"
          src={icons.searh_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
        <input
          className="border-none outline-none px-1 bg-transparent text-white"
          type="text"
          placeholder="Search City..."
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
      </div>
    </header>
  )
}

export default Header
