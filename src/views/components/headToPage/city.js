import React, { Component } from "react"
import Server from "../../../server/server.js"
import CityCom from "./CityCom.js"
import "../../../css/city.css"
import store from "../../../store"
import { connect } from "react-redux"

let cityScroll = null;
//城市页面的滚动

//UI组件
class City extends Component {
    constructor({ history }) {

        super();
        this.state = {
            city: "深圳",
            hotCity: ["北京", "上海", "广州", "深圳"],

            h: "GPS定位你所在的城市",
            h1: "热门城市",
            cityData: [],
            h2: "按字母排序",

            history,


            letter: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


        }
    }



    render() {
        /*遍历出城市*/
        let cities = this.state.cityData.map((item, index) => {


            for (var key in item) {
                var Key = key
                var lis = item[key].map((val, index) => {
                    // console.log(this);

                    return <li class="li  border-bottom-1px" key={index} ref="selCity" onClick={this.props.changeCity.bind(this, val.name)} >{val.name}</li>
                })

            }



            return <div key={index} >
                <div class="cityTitle">{Key}</div>
                <ul class="item">{lis}</ul>

            </div>



        })
        return (
            <div class="page" id="city" ref="scrollTain">

                <div class="wrap">
                    {/* 热门城市*/}
                    <div >
                        <div class="cityTitle">{this.state.h}</div>
                        <ul class="item"><li class="li  selecCity">{this.state.city}</li></ul>
                    </div>

                    {/* 选中城市城市*/}
                    <div >
                        <div class="cityTitle">{this.state.h1}</div>
                        <ul class="item">{
                            this.state.hotCity.map((item, index) => { return <li class="li" key={index}>{item}</li> })

                        }</ul>
                    </div>


                    {/* 按字母排序*/}
                    <div >
                        <div class="cityTitle">{this.state.h2}</div>
                        <ul class="item">{
                            this.state.letter.map((item, index) => { return <li class="li" key={index}>{item}</li> })

                        }</ul>
                    </div>

                    {/* 城市展示*/}

                    {cities}
                </div>
            </div>
        )

    }
    // clickCity(val){

    //      store.dispatch({
    //           type:"changeCity",
    //           cityValue:val
    //      })
    //     this.state.history.push("/")


    // }
    componentWillMount() {
        Server.getcityData().then((res) => {
           
            this.setState({
                cityData: res
            })
        })


    }
    componentDidMount() {

        cityScroll = new IScroll(this.refs.scrollTain, {
            probType: 3
        })

        cityScroll.on("scrollStart", function () {

            this.refresh()


        })

    }


}
//容器组件
export default connect(
    //输入逻辑 UI组件要使用的数据在这里定义
    function (state) {
        return {}
    },


    function (dispatch, nextProps) {
        return {
            changeCity: function(value) {
              
            
                dispatch({
                    type: "changeCity",
                    cityValue: value,
                    headtitle:"卖座电影"
                })

                this.state.history.push("/")
            }
        }
    }
    //console.log(dispatch)  ƒ dispatch(action) {
    //     if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
    //       throw new Error('Actions must be plain objects. ' + 'Use custom middlewar…
    // app.js:38165 {match: {…}, location: {…}, history: {…}, staticContext: undefined}
    // app.js:38163 安宁
    // app.js:38164 ƒ dispatch(action) {
    //     if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
    //       throw new Error('Actions must be plain objects. ' + 'Use custom middlewar…
    // app.js:38165 
    
    
    //console.log(nextProps)   {match: {…}, location: {…}, history: {…}, staticContext: undefined}
   
   
   
    // 输出逻辑有两种方法,上面的方法可以拿到this,下面的方法不可以拿到this
    
    // 输出逻辑，UI组件要改变state数据的方法在这里定义
    // {
    //     changeCity: function (value) {
    //         console.log(value);

    //         return {
                
    //         }
    //     }
    // }

)(City)