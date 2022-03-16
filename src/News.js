import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import './news.css';
const imageUrl=require('./images/profilepic.png')
function News() {
    
    const [news,setnews]=useState([{
        heading:'1st news',
        description:"about 1st news",
        date:'24th May 2020',
        image:'https://picsum.photos/400/800'
    },{
        heading:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit augue iaculis ',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit augue iaculis ornare et velit. Augue risus semper malesuada morbi. Fermentum sem morbi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit augue iaculis ornare et velit",
        date:'30th May 2020',
        image:'https://picsum.photos/800/800'
    },{
        heading:'3rd news',
        description:"about 1st news",
        date:'24th June 2020',
        image:'https://picsum.photos/133/1000'
    },{
        heading:'4th news',
        description:"about 1st news",
        date:'26th May 2020',
        image:'https://i.picsum.photos/id/437/200/300.jpg?hmac=qjAKcFjQXvVBX_di7_9jMlPlgfQZUK2AV1IQ6W1eIIw'
    },]);
    const [dimensions,setDimensions]=useState({});
    const [fullHeight,setFullHeight]=useState(0);
    const [goLeftBool,setGoLeft]=useState(false);
    const [goRightBool,setGoright]=useState(false);
    const [mainNewsWidth,setMainNewsWidth]=useState(window.innerWidth*38/100);
    let width = window.innerWidth*38/100;
    if(window.innerWidth<600)
    width =window.innerWidth*58/100;
    if(mainNewsWidth!==width)
    setMainNewsWidth(width);
    function onImgLoad() {
        let offsetWidth=this.width;
        let offsetHeight=this.height;
        if(offsetWidth>mainNewsWidth)
        {    
            setDimensions({height:offsetHeight*mainNewsWidth/offsetWidth,width:mainNewsWidth});
        }
        else
        setDimensions({height:offsetHeight,width:offsetWidth});
        const height1 = document.querySelector('#mainNews').offsetHeight;
        const height2 = window.innerHeight;
        console.log(height1);
        setFullHeight(height1+height2);
    }
    
    const [index,setIndex]=useState(0);
    useEffect(()=>{
        var myImage = new Image();
        myImage.src = news[index].image;
        myImage.onload = onImgLoad;
    },[index])
    useEffect(() => {
        console.log(goLeftBool, dimensions)
        if(goLeftBool && dimensions.width===undefined)
        {
            setIndex((index-1+news.length)%news.length)
            setGoLeft(false);
        }
      }, [dimensions,goLeftBool])
    useEffect(() => {
        if(goRightBool && dimensions.width===undefined)
        {
            setIndex((index+1)%news.length)
            setGoright(false);
        }
    }, [dimensions,goRightBool])
    const goLeft=()=>{
        setDimensions({})
        setGoLeft(true)
    }
    const goRight=()=>{
        setDimensions({})
        setGoright(true)
    }
    const likeNews=(item)=>{

    }
    const forwardNews=(item)=>{

    }
    return <div style={{height:fullHeight?fullHeight:'100%'}} className='fullPage'>
    <div className='mainContainer'>
        <div className='head'>
            <img width={180} height={90} style={{marginLeft:100, maxHeight:'100%'}} src={require('./images/logo.png')}/>
        </div>
        <div className='topHalf'>
            <div className='headingContainer'>
                <div className='newsHead'>
                    News
                </div>
                <div className='newsHeading'>
                    {news[index].heading}
                </div>
            </div>
        </div>
        <div id='mainNews' className='mainNews'>
            {dimensions.width<=mainNewsWidth &&
            <img onLoad={onImgLoad} width={dimensions.width} height={dimensions.height} style={{alignSelf:'center'}} className='image' src={news[index].image}/>
            }
            <div className='div1'>
                <div className='techNews'>
                    TECH NEWS
                </div>
                <div className='date'>
                {news[index].date}
                </div>
            </div>
            <div className='mainHeading'>
            {news[index].heading}
            </div>
            
            <div className='aboutNews'>
            {news[index].description}
            </div>
            <div className='bottomOfPost'>
                <img className='forwardIcon' onClick={()=>forwardNews(news[index])} src={require('./icons/forward.png')}/>
                <div className='likeTab'>
                    {news[index].isLike?<img src={require('./icons/like.png')}/>:
                    <img className='likeIcon' onClick={()=>likeNews(news[index])} src={require('./icons/like.png')}/>
                    }
                    <div className='likeText'>
                        {news[index].likeCount?news[index].likeCount:'0'}
                    </div>
                </div>
            </div>
        </div>
        <div onClick={goLeft} className='leftArrow'>
            <ArrowBack style={{alignSelf:"center",marginTop:12}}/>
        </div>
        <div onClick={goRight} className='rightArrow'>
            <ArrowForward  style={{alignSelf:"center",marginTop:12}}/>
        </div>    
    </div>
    </div>
}

export default News;
