import React, {useState, useEffect, useRef} from 'react';
import Message from './Message';

const style= {
    main: `flex flex-col p-{10px} relative`,
}

const Chat = () => {
    const scroll = useRef();

  return (
    <>
        <main classname={style.main}>
        <Message />
        </main>
        {/* send message */}
        <span ref={scroll}></span>
    </>
  );
};

export default Chat;