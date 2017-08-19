import React,{Component} from "react"

import {Link,Route} from "react-router-dom"
// import City from "../../pages/city.js"


export default class Header extends Component{
	 constructor(){
	 	 super()
	 }
	 
	 render(){
	 	 return(
		<div>
	 	 	<header class="header">
	 	 	    <span class="iconfont icon-menu" onClick={this.asideChange.bind(this)}></span>
	 	 	     <h3>{this.props.title}</h3>
	 	 	     <Link to="/home" class="iconfont icon-arrow-down">上海</Link>
	 	 	     <Link to="/me" class="iconfont icon-person"></Link>
	 	 	     
	 	 	
	 	 	</header>
			
		</div>
			
	 	 )
	
	 
	 
	 }

    asideChange(){
    	
    	this.props.hidden()
    }


}
