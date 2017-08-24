import React,{Component} from "react"

import {Link,Route} from "react-router-dom"
import City from "../components/headToPage/city.js"
import store from "../../store"


import {connect} from "react-redux"





// let unsubscribe;

//UI组件


class Header extends Component{
	 constructor(){
		  super();
			
	
	 }
	 
	 render(){
	 	 return(
		<div>
	 	 	<header class="header">
	 	 	    <span class="iconfont icon-menu" onClick={this.asideChange.bind(this)}></span>
	 	 	     <h3>{this.props.headTitle}</h3>
	 	 	     <Link to="/city" class="iconfont icon-arrow-down" onClick={this.props.toCity.bind(this)}>{this.props.cityTitle}</Link>
	 	 	     <Link to="/me" class="iconfont icon-person"></Link>
	 	 	     
	 	 	
	 	 	</header>

		  	 <Route path="/city" component={City}/> 

			
		</div>
			
	 	 )
	
	 
	 
	 }

    asideChange(){
    	
    	this.props.hidden()
	}
	// toCity(){
	
    //    store.dispatch({
	// 		type:"changeTitle",
	// 		val:"请选择城市"
	//    })
	}

//    componentWillMount(){
	   
//         unsubscribe=store.subscribe(()=>{
			   
// 				this.setState({headertitle:store.getState().headTitle})
// 			    this.setState({city:store.getState().cityTitle})
				

				
			
// 		})
//    }
//   componentWillUnmount(){
// 	   unsubscribe()
//   }
   


// }

//容器组件
export default connect (
	//输入逻辑，UI组件要使用的数据在这里定义
     function(state){
		
		  
		 return{
			  headTitle:state.headTitle,
			  cityTitle:state.cityTitle
			  
		 }
	 },

	
	{
	  toCity:function(){

		return {
			type:"changeTitle",
			val:"请选择城市"
		}
	  }
          
	}
	//输出逻辑 ，UI组件要修改State数据的方法在这里定义	 
)(Header)


