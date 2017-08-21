import React,{Component} from "react"
import Server from "../../../server/server.js"


export default class City extends Component{
     constructor(){
          super();
          this.state={
               
          }
     }

    
    
     render(){
          
         return(
              <div class="page"></div>
         )
          
     }
    componentWillMount(){
            Server.getcityData().then((res)=>{
                 console.log(res)
            })
          
    }



}