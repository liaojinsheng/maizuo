import React,{Component} from "react"
import Server from "../server/server.js"

import "../css/movie.css"
import $ from "jquery"

import List from "../views/common/List.js"

let movieIscroll=null;
let num=1
export default class Movie extends Component{
	
	    constructor({history}){
			 
			 super()
			 this.state={
				 history,
				 tabs:[
						 {title:"正在热映",id:"0"},
						 
						 {title:"将要放映",id:"1"}
						
						
						
						],
				 currentIndex:0,

				 isShow:true,
				 movieDataArr:[],
				 diferentdata:"哈哈"
		




				
				
				
				
				 
			 }
	    }
	    
	render(){
			   
		
	    	 return(
	    	 	
	    	 	 <div class="page" ref="movieScroll" >
					  <div class="wrap">
							<div id="movie">
									<div class="movie_header">
										<ul class="list1">
											{this.state.tabs.map((item,index)=>{

												let  tabStyle=item.id==this.state.currentIndex?"active":""

												return <li  ref="li" key={index} onClick={this.liAction.bind(this,index)} class={tabStyle} >{item.title}</li>
											})}
										</ul>
									</div>

								<List  moviedata={this.state.movieDataArr} isshow={this.state.isShow} />
								<List  moviedata={this.state.movieDataArr} isshow={!this.state.isShow}  haha={this.state.diferentdata}/>
								
							
					       </div>
					</div>
				</div>
	    	 )
	    }
     back(){
		 this.state.history.goBack()
	 }

     componentWillMount(){
           
		
		 
		this.getmovieData()
	

	 }
  
	 getmovieData(){
		
			Server.movieData(num).then((data)=>{
					
				var  newData=this.state.movieDataArr.concat(data)

			
				this.setState({movieDataArr:newData})

			})
 
    }


	 componentDidMount(){
		  var self=this
			 
		   movieIscroll=new  IScroll(this.refs.movieScroll,{
			    probType:3
		   })

		   movieIscroll.on("scrollEnd",function(){
				  
				  
				   let disY=movieIscroll.maxScrollY-movieIscroll.y
				 
				   if(disY==0){
					    
						   num++
						 
						   if(num<=8){
							movieIscroll.refresh()
							self.getmovieData()
							  
						   }
								  
						
						

						  
						
						  
						   
					 

				   }
				  
		   })

		
	 }
	 liAction(index){
	
		this.setState({currentIndex:index,isShow:!this.state.isShow})
		
		
		
         

	 
	
		 
	 }

	}
