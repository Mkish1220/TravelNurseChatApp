import React from 'react'


const style= {
    button: `bg-red-500 text-white px-4 py-2 hover:bg-gray-500`
}

const LogOut = () => {
  return (
    <button className={style.button}>
        LogOut
    </button>
  )
}

export default LogOut