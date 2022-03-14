import { ArrowForward, Search } from '@material-ui/icons';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import './Chat.css';
import SideBar from './SideBar';
import { Menu, MenuItem } from '@material-ui/core';
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
    const [showMenuBool,setShowMenuBool]=useState(false);
    const [messages,setMessages]=useState([
        // {left:true,
        // message:"1st message"},
        // {
        // message:"1st message"},
        // {left:true,
        // message:"1st message"},
        // {
        // message:"1st message"},
    ]);
    const [currentChat,setCurrentChat]=useState(undefined);
    const openChat=(chat,index)=>{
        setCurrentChat(chat)
    }
    const elm = users?.map((i, index) => {
        if(currentChat && i.name===currentChat.name)
        {
            return <>
            <div id={`chat-${index}`} className='chatItem selectedChat' onClick={()=>openChat(i,index)} key={index}>
            <div>
                {i.img ? <img alt="im"
                width='36' height='36' style={{borderRadius:200,marginLeft:10}}  src={i.img} /> : null}
                </div>
                <div className='messageDateAlign'>
                    <div className='msgInfo'>
                        <div className='selectedUserName'>
                            {i.name}
                        </div>
                        <div className='lastMessage'>
                            {i.lastMessage}
                        </div>
                    </div>
                    
                    <div className='time'>
                        {i.time} 
                    </div>
                </div>
            </div>
            </>
        }
        else
        {
            return <>
            <div id={`chat-${index}`} className='chatItem' onClick={()=>openChat(i,index)} key={index}>
            <div>
                {i.img ? <img alt="im"
                width='36' height='36' style={{borderRadius:200,marginLeft:10}}  src={i.img} /> : null}
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
                    
                    <div className='time'>
                        {i.time} 
                    </div>
                </div>
            </div>
            <div className='line'/>
            </>
        }
    })

    const emptyChatScreen =  <div className='emptyChatScreen'>
        <img width={200} height='140' style={{alignSelf:'center',marginTop:30}} src={require('./images/chatScreenBackground.png')}/>
        <div className='emptyChatHeading'>Start Conversation with Micheal Merni</div>
        <div className='emptyChatDescription'>Click the readymade texts to send</div>
        <div className='greetingDiv'>
            <div onClick={()=>sayHello('Say Hello')} className='sayHello'><div className='sayHelloText'>Say Hello</div></div>
            <div onClick={()=>sayHello('👋')} className='helloHand'><div className='helloHandText'>👋</div></div>
        </div>
    </div>

    const ChatList = messages?.map((i, index) => {
        if(i.left)
        {
        return <div className='messageLeftItem' key={index}>
                <div className='leftMessage'>
                    {i.message}
                </div>
            </div>
        }
        else
        {
            return <div className='messageRightItem' key={index}>
                <div className='rightMessage'>
                    {i.message}
                </div>
            </div>
        }
    })
    const sendMessage=(e)=>{
        if (e.key === 'Enter') {      
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
    }
    const sayHello=(message)=>{
        setMessages([...messages,{message:message}])
        setMessage("");
    }
    const onInputChange=(e)=>{
        e.preventDefault();
        setMessage(e.target.value);
    }
    const showMenu=()=>{
        if(showMenuBool)
        setShowMenuBool(false);
        else
        setShowMenuBool(true);
    }
    const handleClose=()=>{
        setShowMenuBool(false);
    }
    const shareAttachent=()=>{
        setShowMenuBool(false);
    }
    const shareImage=()=>{
        setShowMenuBool(false);
    }
    const shareVoice=()=>{
        setShowMenuBool(false);
    }
    

    const chatScreen=<div className='chatScreen'>
    <div className='chatScreenHeader'>
        {currentChat && currentChat.img &&<img className='chatScreenImage' src={imageUrl}/>}
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
    {currentChat && messages.length>0? ChatList:emptyChatScreen} 
    <div>
    {showMenuBool &&
        <div className='menuBar'>
        <div className='popupforshare'>    
            <div className='menuItem'>    
            <img width={15} height={15} style={{alignSelf:'center',marginLeft:20,marginTop:2}} onClick={showMenu} src={require("./icons/attach.png")}/>  
            <div onClick={shareAttachent} className='menuText'>Attach</div>
            </div>  
            <div className='line2'></div> 
            <div className='menuItem'>
            <img width={15} height={17} style={{alignSelf:'center',marginLeft:20,marginTop:2}}onClick={showMenu} src={require("./icons/voice.png")}/>  
            <div onClick={shareVoice} className='menuText'>Voice</div> 
            </div>
            <div className='line2'></div>    
            <div className='menuItem'>
            <img width={15} height={15} style={{alignSelf:'center',marginLeft:20,marginTop:2}}onClick={showMenu} src={require("./icons/image.png")}/>  
            <div onClick={shareImage} className='menuText'>Image</div>
            </div>
        </div> 
        <div className='triangle'></div>  
        </div>       
        }
    <div className='chatScreenInput'>
        <img className='plusIcon' onClick={showMenu} src={require("./icons/plusIcon.png")}/>          
        <input onKeyDown={sendMessage} value={message} onChange={(e) => onInputChange(e)} style={{width:500,boxShadow:'none',border:0, borderWidth: 0,color:'#747F8D',alignSelf:'center'}} placeholder='Message Here'/>
        <div className='gifEmojiDiv'>
            <img className='emojiIcon' onClick={showMenu} src={require("./icons/gif.png")}/>  
            <img className='emojiIcon' onClick={showMenu} src={require("./icons/emoji.png")}/>  
        </div>
    </div>
    </div>
</div>

    return <>
    <SideBar/>
    <div className='outerContainer' id="main">
        <div className='searchPanel'>
            <div><input placeholder='Search instruments , teachers' className='inputSearch' style={{borderWidth:0}}/></div>
            <div><Search className='searchIcon'/></div>
        </div>
        <div className='mainAreaOuterContainer'>
            <div className='chatList'>
                <div className='conversationHeader'>
                <div className='allConversations'>All Conversations</div>
                <Search className='searchIcon2'/>
                </div>
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
            {currentChat && chatScreen}
        </div>
    </div>
    </>
}

export default Chat;
