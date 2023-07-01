import React from 'react'
import LeftBar from './LeftBar'
import MidBar from './MidBar'
import { useState } from 'react';
import RightBar from './RightBar';

const Parent = () => {
  const [chat , setChat] = useState();
  const [conversation, setConversation] = useState([]);
  
  return (
    <div>
      <LeftBar chat={chat} setChat={setChat} setConversation={setConversation} conversation={conversation}/>
      <MidBar chat={chat} setChat={setChat} conversation={conversation}/>
      <RightBar conversation={conversation} setChat={setChat} setConversation={setConversation}/>
    </div>
  )
}

export default Parent
