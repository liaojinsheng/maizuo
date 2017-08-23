
import {createStore} from "redux"



function reducer(state,action){
    //    if(state==null){
    //         state={
    //            headTitle:"卖座电影",
    //            cityTitle:"上海"
           
    //         }
    //    }
  
    //    if(action.type="changeTitle"){
    //         state.headTitle=action.val
    //   } 
    
    //   if(action.type="changeCity"){
          
    //         state.cityTitle=action.cityValue
          
    //   }

    //   return   state
    switch(action.type){
         case "changeTitle":

         return  Object.assign({},state,{
              headTitle:action.val
         })
        
         case "changeCity":
        //    this.state.history.push("/")
          return Object.assign({},state,{
               cityTitle:action.cityValue
          })
          default:

           return {
               headTitle:"卖座电影",
               cityTitle:"上海"

           }
    }
      
}








export default createStore(reducer)
