import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { useState } from 'react';
import './news.css';
const imageUrl=require('./images/profilepic.png')
function News() {
    
    const [news,setnews]=useState([{
        heading:'1st news',
        description:"about 1st news",
        date:'24th May 2020'
    },{
        heading:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit augue iaculis ',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit augue iaculis ornare et velit. Augue risus semper malesuada morbi. Fermentum sem morbi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit augue iaculis ornare et velit",
        date:'30th May 2020'
    },{
        heading:'3rd news',
        description:"about 1st news",
        date:'24th June 2020'
    },{
        heading:'4th news',
        description:"about 1st news",
        date:'26th May 2020'
    },]);
    const [index,setIndex]=useState(0);

    const goLeft=()=>{
        setIndex((index-1+news.length)%news.length)
    }
    const goRight=()=>{
        setIndex((index+1)%news.length)
    }
    return <div className='fullPage'>
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
        <div className='mainNews'>
            <img className='image' src={require('./images/profilepic.png')}/>
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
