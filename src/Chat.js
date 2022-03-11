import { useState } from 'react';
import './Chat.css';
import SideBar from './SideBar';
const imageUrl=require('./images/profilepic.png')

let users=[
    {
        name:'Gourav1',
        lastMessage:'hi',
        time:'00:00',
        img:imageUrl
    },{
        name:'Gourav2',
        lastMessage:'hi',
        time:'00:10',
        img:imageUrl
    },{
        name:'Gourav3',
        lastMessage:'hi',
        time:'00:20',
        img:imageUrl
    },{
        name:'Gourav4',
        lastMessage:'hi',
        time:'00:30',
        img:imageUrl
    },
]

function Chat() {
    
    const [message,setMessage]=useState("");
    const [messages,setMessages]=useState([
        {left:true,
        message:"1st message"},
        {
        message:"1st message"},
        {left:true,
        message:"1st message"},
        {
        message:"1st message"},
    ]);
    const [currentChat,setCurrentChat]=useState(undefined);
    const openChat=(chat)=>{
        setCurrentChat(chat)
    }
    const elm = users?.map((i, index) => {
        return <div className='chatItem' onClick={()=>openChat(i)} key={index}>
            <div>
            {i.img ? <img alt="im"
             width='36' height='36' style={{borderRadius:200}}  src={i.img} /> : null}
             </div>
            <div className='messageDateAlign'>
                <div className='msgInfo'>
                    <div className='userName'>
                        {i.name}
                    </div>
                    <div className='lastMessage'>
                        {i.lastMessage}
                    </div>
                </div>
                
                <div>
                    {i.time} 
                </div>
            </div>
        </div>
    })

    const ChatList = messages?.map((i, index) => {
        if(i.left)
        {
        return <div className='messageLeftItem' key={index}>
                <spam className='leftMessage'>
                    {i.message}
                </spam>
            </div>
        }
        else
        {
            return <div className='messageRightItem' key={index}>
                <spam className='rightMessage'>
                    {i.message}
                </spam>
            </div>
        }
    })
    const sendMessage=()=>{
        if(message==="")
        {
            alert("type something")
        }
        else
        {
            setMessages([...messages,{message:message}])
            setMessage("");
        }
    }
    const onInputChange=(e)=>{
        e.preventDefault();
        setMessage(e.target.value);
    }
    return <>
    <SideBar/>
    <div className='outerContainer' id="main">
        <div className='mainAreaOuterContainer'>
            <div className='chatList'>
                <div className='allConversations'>All Conversations</div>
                <div className='ListContainer'>
                    <div className='listHeader'>
                        <div className='chats'>Chats</div>
                        <div className='newChats'>New Chats</div>
                    </div>
                    <div className='customerList' id="list1">
                        {elm}
                    </div>
                </div>
            </div>
            {/* {selectedStoreId ? currentStoreContainerJsx : null}
            {((currentChat.length > 0) && chatOpen) ? chatScreenContainerJsx : chatScreenContainerEmptyJsx} */}
            <div className='chatScreen'>
                <div className='chatScreenHeader'>
                    {currentChat && currentChat.img &&<img src={imageUrl}/>}
                    {currentChat &&<div className='userDetails'>
                        <div className='chatScreenUserName'>
                            {currentChat.name}
                        </div>
                        <div className='chatScreenLastActivate'>
                            Activate {currentChat.time} ago
                        </div>
                    </div>
                    }
                </div>
                <div>
                    {ChatList}
                </div>
                <div className='chatScreenInput'>
                    <img className='plusIcon' src={require("./icons/plusIcon.png")}/>                    
                    <input value={message} onChange={(e) => onInputChange(e)} style={{ borderWidth: 0,color:'#747F8D',marginTop:10}} placeholder='Message Here'/>
                    <img onClick={()=>sendMessage()} src={require("./icons/plusIcon.png")}/>   
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Chat;
