import Api from "../api/index.js"

import axios from "axios"




//轮播图的数据请求


function slideData(){
	
	return new Promise((resolve,reject)=>{
		
		 axios.get(`${Api.homeBannerApi}?__t=${new Date().getTime()}`).then((response)=>{
			       
					var arr=response.data.data.billboards
					if(arr==null){
						slideData()
					}else{
						//存到sessionStorage里
						window.sessionStorage.setItem("lunbotu",JSON.stringify(response.data.data.billboards))
					}
					
					
					resolve(response.data.data.billboards)


	 	      
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
				
				if(arr){
                    var  newArr=arr.map((item)=>{
					   var obj2={}
						  obj2.cover=item.cover
						  obj2.id=item.id
						  obj2.name=item.name
						  obj2.intro=item.intro
						  obj2.poster=item.poster

	                return obj2
                          
					 
				})

				}else{
                    getPlayingData()

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
										{"A":Acity},
										{"B":Bcity},
										{"C":Ccity},
										{"D":Dcity},
										{"E":Ecity},
										{"F":Fcity},
										{"G":Gcity},
										{"H":Hcity},

										{"J":Jcity},
										{"K":Kcity},
										{"L":Lcity},

										{"M":Mcity},
										{"N":Ncity},
									
										{"P":Pcity},
										{"Q":Qcity},
										{"R":Rcity},
										{"S":Scity},
										{"T":Tcity},
										
										{"W":Wcity},	
										{"X":Xcity},
										{"Y":Ycity},
										{"Z":Zcity}
								]
							
							
								
							}
							
							resolve(cicyData)
						
						   
						
						
						
						}).catch((error)=>{
				            console.log(error)
			   })
	   })
}

//请求影片里面的数据
function  movieData(num){
	 return new Promise((resolve,reject)=>{
		
		

		
		
		
		axios.get(`${Api.nowPlaingApi}?page=${num}&count=7`).then((response)=>{
			  
				
				 resolve(response.data.data.films)
			
		}).catch((error)=>{
			  console.log(error)
		})
		   
		  
		   
		  
	 })
}
export default{
	slideData,
	getPlayingData,
	getcityData,
	movieData
	
	
}
