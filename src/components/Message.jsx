import React from 'react'

const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `absolute mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};



const Message = () => {
  return (
    <div className={style.message}>
        <p className={style.name}>Meg</p>
        <p>I was offered in knoxville any recommendations?</p>
    </div>
 );
};

export default Message