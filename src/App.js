
import React,{Component} from "react"

import {BrowserRouter as Router,Route} from "react-router-dom"

import Header from "./views/common/header.js"
import Aside from "./views/common/aside.js"
import Home from "./pages/home.js"
import Cart from "./pages/cart.js"
import Me from "./pages/me.js"
import Movie from "./pages/movie.js"
import MoviePage from "./pages/moviePage.js"
import Shop from "./pages/shop.js"



export default class App extends Component{
	  constructor(){
	  	
	  	  super()
	  	  this.state={
				  isShow:false,
				  headerTitle:"卖座电影"			
	  	  }
	  }
	  
	  render(){
	  	
	  	 return (
	  	 	<Router>
	  	 	  <div id="root">
	  	 	    <Header hidden={this.asideHidden.bind(this)} title={this.state.headerTitle}/>
	  	 	    <Route path="/"  render={
	  	 	    	({history,location})=>{   
	  	 	    		
	  	 	    		return <Aside  history={history} location={location.pathname}  aside={this.state.isShow} coverHide={this.asideHidden.bind(this)
	  	 	    		
	  	 	    		
	  	 	    		}/>}
	  	 	    	
	  	 	    
	  	 	    }/>
	  	 	    <Route path="/"  exact component={Home}/>
			      <Route path="/movie" component={Movie}/>
	  	 	    <Route path="/moviepage" component={MoviePage}/>
			     <Route path="/shop" component={Shop}/>
				  <Route path="/me" component={Me}/>
	  	 	 
	  	  	  <Route path="/cart" component={Cart}/>
	  	 	  
	  	 	 
	  	 	   
	  	 	       
	  	 	      
	  	 	 
	  	 	  </div>
	  	 	 </Router>
	  	 )
	  	
	  }
	
	asideHidden(headerTitle){
		
		  
		   this.setState({isShow:!this.state.isShow})

		   if(headerTitle){
                this.setState({headerTitle})
			
		   }

		   
	}
	
}
