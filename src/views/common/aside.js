import React,{Component} from "react"

import SlideInfo from "../../server/slideInfo.js"



export default class Aside extends Component{
	  constructor(){
	  	 super()
	  }
	  
	  render(){
	  
	  	let adideStyle=this.props.aside?{transform:"translateX(0)"}:{transform:"translateX(-100%)"}
	  	let coverStyle={
	  		  background:this.props.aside?"rgba(0,0,0,0.6)":"rgba(0,0,0,0)",
	  		  display:this.props.aside?"block":"none"
	  		 
	  	}
	  		
		  console.log(this.props.location.pathname)
		let data=this.props.location.pathname==="/shop"?SlideInfo.shopSilderBarData:SlideInfo.homeSilderBarData		
	  	let datas=data.map((item,index)=>{
	  	 	 
	  	 	  return <li key={index} class="border-bottom-1px" onClick={this.toAction.bind(this,item)}><p >{item.title}</p></li>
	  	 	
	  	 })
	  
	  	  
	  	 return(
	  	 <div>
	  	  <div  class="cover" style={coverStyle} onClick={this.coverAction.bind(this)}></div>
	  	 	
	  	 	 <div class="asideBar" style={adideStyle}>
	  	 	        <ul class="list">
	  	 	           {datas}
	  	 	        </ul>
	  	 	        
	  	 	    
	  	 	 
	  	 	 </div>
	  	 	 </div>
	  	 )
	  }

  coverAction(){
  	
  	   this.props.coverHide()
  }

 toAction(item){
 	
 	 
 	 
 	  
	   this.props.history.push(item.path)
		 
	   this.props.coverHide(item.header)
	 
 	
 	   
 }

}
