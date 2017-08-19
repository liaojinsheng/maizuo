import React,{Component} from "react"

import Server from "../server/server.js"
import InfiniteScroll from "react-infinite-scroll"
import ReactPullToRefresh from "react-pull-to-refresh"

console.log("刷新"+ReactPullToRefresh)

import "../css/home.css"
let bannerSwiper=null
let bannerScroll=null


export default class Home extends Component{
	
	  constructor(){
	  	
		   super();
		   this.state={
			   slideData:[]
		   }
				  
	  }
	  render(){
		
		  let slide=this.state.slideData.map((item,index)=>{
			     return  <div class="swiper-slide" key={index}><img src={item.imageUrl}/></div>
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
															<li></li>
															<li></li>
															<li></li>
															<li></li>
															<li></li>
															<li></li>
															<li></li>
															<li></li>
															<li></li>
															<li></li>
															<li></li>
						 									<li></li>
						                  </ul>
						
									
								
                          
			
				
                     </div>
					
                </div>
			</div>
	  	  )
	  }
 

	
	  componentWillMount(){
           Server.slideData().then((res)=>{
			
					this.setState({slideData:res.billboards})

					var data=this.state.slideData
					
					  data.splice(0,0,data[data.length-1])
					  data.push(data[1])

					  this.setState({slideData:data})
						
				      
					
					
					 bannerSwiper.update()
					  bannerScroll.refresh()
					 bannerSwiper.slideTo(1,0)

		   })

         
	 
		}

	  componentDidMount(){
		      
                bannerSwiper=new Swiper(this.refs.swiper,{
					  loop:true,
				 	  autoplay :1000
				})

				bannerScroll=new  IScroll(this.refs.bannerScroll,{
					   
				})

			
		   
	  }
      
}
