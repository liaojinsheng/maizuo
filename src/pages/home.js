import React,{Component} from "react"

import Server from "../server/server.js"
import InfiniteScroll from "react-infinite-scroll"
import ReactPullToRefresh from "react-pull-to-refresh"
import LazyLoad from 'react-lazyload';



import "../css/home.css"
let bannerSwiper=null
let bannerScroll=null


export default class Home extends Component{
	
	  constructor(){
	  	
		   super();
		   this.state={
			   slideData:[],
			   playingMovie:[]
		   }
				  
	  }
	  render(){
		  
		  let slide=this.state.slideData.map((item,index)=>{
			     return  <div class="swiper-slide" key={index}><img src={item.imageUrl}/></div>
		  })
		
		  let lis=this.state.playingMovie.map((item,index)=>{

			   return <li key={index}><img src={item.cover.origin}/></li>
		  })
	  	
	  	  return(
	  	  	
	  	  	 <div class="page" id="home" >
				<div ref="bannerScroll" class="scroll">
				    <div class="wrap">
					    <div class="swiper-container  slide" ref="swiper">
							  <div class="swiper-wrapper">
							     {slide}
							 </div>
			             </div>
						
						 <ul class="list">
								{lis}			
						</ul>
						<div class="moreMovie"><p>更多即将上映电影&nbsp;>></p></div>
						
									
										
									
								
                          
			
				
                     </div>
					
                </div>
			</div>
	  	  )
	  }
 

	
	  componentWillMount(){
		  //轮播
           Server.slideData().then((res)=>{
			      
			        if(window.sessionStorage.getItem("lunbotu")){
							 var data=JSON.parse(window.sessionStorage.getItem("lunbotu"))
							    console.log(data)
							 
						     	this.setState({slideData:data})
					}
				
                         
					 var data=this.state.slideData
					
					  data.splice(0,0,data[data.length-1])
					  data.push(data[1])

					  this.setState({slideData:data})
						
				      
					
					
					  bannerSwiper.update()
					 
					  bannerSwiper.slideTo(1,0)

		   })
     //将要播放的电影
		 
		   Server.getPlayingData().then(
			   
			 (res)=>{
				
					  
				 this.state.playingMovie=res
			 });
			
			 (error)=>{console.log(error)}
			
	 
		}

	  componentDidMount(){
		      
                bannerSwiper=new Swiper(this.refs.swiper,{
					  loop:true,
				 	  autoplay :1000
				})

				bannerScroll=new  IScroll(this.refs.bannerScroll,{
					 probType:3

					   
				})
				
				bannerScroll.on("scrollStart",function(){
					  this.refresh()
				})

			
		   
	  }
      
}
