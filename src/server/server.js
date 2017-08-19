import Api from "../api/index.js"

import axios from "axios"




//轮播图的数据请求


function slideData(){
	
	return new Promise((resolve,reject)=>{
		
		 axios.get(`${Api.homeBannerApi}?__t=${new Date().getTime()}`).then((response)=>{
			        console.log(response)
					var arr=response.data.data
					resolve(arr)
	 	      
	    }).catch((err)=>{
	 	 
	 	 console.log(err)
	    })
	
		
	}
		
		
	)
	 
	
}


export default{
	slideData
	
	
}
