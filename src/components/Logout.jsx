import React from 'react'
import {auth} from '../firebase';



const style= {
    button: `bg-red-500 text-white px-4 py-2 hover:bg-gray-500`
}



const LogOut = () => {
    const signOut = () => {
        signOut(auth)
    }

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        LogOut
    </button>
  )
}

export default LogOut