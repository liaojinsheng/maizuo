import Api from "../api/index.js"

import axios from "axios"




//轮播图的数据请求


function slideData(){
	
	return new Promise((resolve,reject)=>{
		
		 axios.get(`${Api.homeBannerApi}?__t=${new Date().getTime()}`).then((response)=>{
			       
					var arr=response.data.data
					resolve(arr)
	 	      
	    }).catch((err)=>{
	 	 
	 	 console.log(err)
	    })
	
		
	}
		
		
	)
	 
	
}

//请求正在播放电影的数据
function getPlayingData(){
    return new Promise((resolve,reject)=>{
           axios.get(`${Api.nowPlaingApi}?_t=${new Date().getTime()}`).then((response)=>{
				
				var arr= response.data.data.films
				console.log(arr)
				if(arr!=undefined){
                    var  newArr=arr.map((item)=>{
					   var obj2={}
						  obj2.cover=item.cover
						  obj2.id=item.id
						  obj2.name=item.name
						  obj2.intro=item.intro
						  obj2.poster=item.poster

	                return obj2
                          
					 
				})

				}
				
				resolve(newArr)

		   }).catch((err)=>{
				console.log(err)
					
				reject()
		   })


	})
	 
}




//请求城市的数据
function getcityData(){

	   return new Promise((resolve,reject)=>{

		       axios.get("/v4/api/city?__t=1503316745374").then((response)=>{
				            var cicyData=[]
					
							var cityArr=response.data.data.cities
								var Acity=[]
								var Bcity=[]
								var Ccity=[]	
								var Dcity=[]
								var Ecity=[]
								var Fcity=[]
								var Gcity=[]	
								var Hcity=[]

								var Icity=[]
								var Jcity=[]
								var Kcity=[]	
								var Lcity=[]

								var Mcity=[]
								var Ncity=[]
								var Ocity=[]	
								var Pcity=[]
								var Qcity=[]
								var Rcity=[]
								var Scity=[]	
								var Tcity=[]
								var Ucity=[]
								var Vcity=[]
								var Wcity=[]	
								var Xcity=[]
								var Ycity=[]
								var Zcity=[]
							console.log(cityArr)
						
							for(var i=0;i<cityArr.length;i++){

								   switch(cityArr[i].pinyin.substring(0,1)){
										case "A":
											Acity.push(cityArr[i])
											break;
										case "B":
											Bcity.push(cityArr[i])
											break
										case "C":
											Ccity.push(cityArr[i])
											break
										case "D":
											Dcity.push(cityArr[i])
											break
										case "E":
											Ecity.push(cityArr[i])
											break
										case "F":
											Fcity.push(cityArr[i])
											break
										case "G":
										     Gcity.push(cityArr[i])
											break
										case "H":
											Hcity.push(cityArr[i])
											break
										case "I":
											Icity.push(cityArr[i])
											break
										case "J":
											Jcity.push(cityArr[i])
											break
										case "K":
											Kcity.push(cityArr[i])
											break
										case "L":
											Lcity.push(cityArr[i])
											break
										case "M":
											Mcity.push(cityArr[i])
											break
										case "N":
											Ncity.push(cityArr[i])
											break
										case "O":
											Ocity.push(cityArr[i])
											break
										case "P":
											Pcity.push(cityArr[i])
											break
										case "Q":
											Qcity.push(cityArr[i])
											break
										case "R":
											Rcity.push(cityArr[i])
											break
										case "S":
											Scity.push(cityArr[i])
											break
										case "T":
											Tcity.push(cityArr[i])
											break
										case "U":
											Ucity.push(cityArr[i])
											break
										case "V":
											Vcity.push(cityArr[i])
											break
										case "W":
											Wcity.push(cityArr[i])
											break
										case "X":
											Xcity.push(cityArr[i])
											break
										case "Y":
											Ycity.push(cityArr[i])
											break
										case "Z":
											Zcity.push(cityArr[i])
											break




                                        
                                           
								  }
						
						cicyData=[
									Acity,
									Bcity,
									Ccity,
									Dcity,
									Ecity,
									Fcity,
									Gcity,
									Hcity,

									Icity,
									Jcity,
									Kcity,
									Lcity,

									Mcity,
									Ncity,
									Ocity,	
									Pcity,
									Qcity,
									Rcity,
									Scity,
									Tcity,
									Ucity,
									Vcity,
									Wcity,	
									Xcity,
									Ycity,
									Zcity
								]
							
							
								
							}
							
							resolve(cicyData)
						
						   
						
						
						
						}).catch((error)=>{
				            console.log(error)
			   })
	   })
}

export default{
	slideData,
	getPlayingData,
	getcityData
	
	
}
