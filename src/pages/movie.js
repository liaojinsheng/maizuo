import React,{Component} from "react"
import Server from "../server/server.js"

import "../css/movie.css"
import $ from "jquery"

export default class Movie extends Component{
	
	    constructor({history}){
			 
			 super()
			 this.state={
				 history,
				 tabs:[
						 {title:"正在热映",id:"0"},
						 
						 {title:"正在热映",id:"1"}
						
						
						
						],
				 currentIndex:0

				
				
				
				
				 
			 }
	    }
	    
	render(){

	
	    	 return(
	    	 	
	    	 	 <div class="page" >
					 <div id="movie">
							<div class="movie_header">
								<ul class="list1">
									{this.state.tabs.map((item,index)=>{

										 let  tabStyle=item.id==this.state.currentIndex?"active":""

										return <li  ref="li" key={index} onClick={this.liAction.bind(this,index)} class={tabStyle} >{item.title}</li>
									})}
								</ul>
							</div>

					
						<button onClick={this.back.bind(this)}>返回</button>
					</div>
				</div>
	    	 )
	    }
     back(){
		 this.state.history.goBack()
	 }

     componentWillMount(){

		  
         
         Server.movieData().then((result)=>{
			   console.log(result)
		 })

	 }
	 liAction(index){
	
		this.setState({currentIndex:index})


	 
	
		 
	 }

	}
