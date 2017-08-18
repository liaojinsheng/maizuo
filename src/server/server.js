import Api from "../api"

import axios from "axios"
console.log(Api)


//轮播图的数据请求


function slideData(){
	
	return new Promise((resolve,reject)=>{
		
		 axios.get(`${Api.homeBannerApi}`).then((response)=>{
	 	      console.log(response)
	    }).catch((err)=>{
	 	 console.log(err)
	    })
	
		
	}
		
		
	)
	 
	
}


export default{
	slideData
	
	
}
