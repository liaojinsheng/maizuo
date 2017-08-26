import React, {Component} from "react"
import "../../css/List.css"

export default class List extends Component{
        constructor(){

            super();
            this.state={
                
                movieListData:[]
            }


        }

      
      
      
        render(){
            let showStyle={
                
               display:this.props.isshow?"block":"none"
               
            }
                   
          
          
            let arr=this.props.moviedata
             
            
               var lis= arr.map((item,index)=>{
                                      
                        let imgStyle={
                              width:"60px",
                              height:"60px"
                        }
                                         return  <li key={index}>
                                                   <img src={item.cover.origin}  class="img" style={imgStyle}/>
                                                   <div>
                                                          <p>{item.name}</p>
                                                          <p>{item.intro}</p>
                                                          

                                                   </div>
                                                   
                                                   
                                                   <p>{this.props.haha}</p>
                                                    
                                                    
                    
                                                </li>
                    
                                      })

            

            

       
            
            
        
             
            
            return (
               
               <ul class="commonList" style={showStyle}>{lis}</ul>
           )
                
           
       }
      
      

}