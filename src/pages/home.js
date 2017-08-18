import React,{Component} from "react"

import Server from "../server/server.js"
console.log(Server)

export default class Home extends Component{
	
	  constructor(){
	  	
	  	 super()
	  }
	  render(){
	  	
	  	  return(
	  	  	
	  	  	 <div class="page">home</div>
	  	  )
	  }

      componentWillMount(){
      	  Server.slideData().then((res)=>{
      	  	  console.log(res)
      	  })
      	
      }
}
