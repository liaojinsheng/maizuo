import React,{Component} from "react"


export default class Me extends Component{
	
	   constructor({history}){
	   	   super();
	   	   this.state={
	   	   	  history
	   	   }
	   }
	   
	   render(){
	   	   return(
	   	   	 <div class="page">
	   	   	    me
	   	   	    <button onClick={this.Back.bind(this)}>返回</button>
	   	   	 
	   	   	 </div>
	   	   )
	   }

       Back(){
       	
       	  this.state.history.go(-1)
       	  console.log(this.state.history)
       }

}
