(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[21],{1349:function(e,t,o){"use strict";o.r(t);var r=o(43),a=o(44),i=o(57),n=o(56),l=o(0),s=o.n(l),c=o(17),h=o(499),d=o(101),b=function(e){Object(i.a)(o,e);var t=Object(n.a)(o);function o(){var e;Object(r.a)(this,o);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={chart:null},e}return Object(a.a)(o,[{key:"componentDidMount",value:function(){var e=this;Object(d.a)(this.initChart.bind(this),300)(),window.addEventListener("resize",(function(){return e.resize()}))}},{key:"componentWillReceiveProps",value:function(e){e.sidebarCollapsed!==this.props.sidebarCollapsed&&this.resize()}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"resize",value:function(){var e=this.state.chart;e&&Object(d.a)(e.resize.bind(this),300)()}},{key:"dispose",value:function(){var e=this;this.state.chart&&(window.removeEventListener("resize",(function(){return e.resize()})),this.setState({chart:null}))}},{key:"setOptions",value:function(){this.state.chart.setOption({backgroundColor:"#394056",title:{top:20,text:"Requests",textStyle:{fontWeight:"normal",fontSize:16,color:"#F1F1F3"},left:"1%"},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#57617B"}}},legend:{top:20,icon:"rect",itemWidth:14,itemHeight:5,itemGap:13,data:["CMCC","CTCC","CUCC"],right:"4%",textStyle:{fontSize:12,color:"#F1F1F3"}},grid:{top:100,left:"2%",right:"2%",bottom:"2%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#57617B"}},data:["13:00","13:05","13:10","13:15","13:20","13:25","13:30","13:35","13:40","13:45","13:50","13:55"]}],yAxis:[{type:"value",name:"(%)",axisTick:{show:!1},axisLine:{lineStyle:{color:"#57617B"}},axisLabel:{margin:10,textStyle:{fontSize:14}},splitLine:{lineStyle:{color:"#57617B"}}}],series:[{name:"CMCC",type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new h.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(137, 189, 27, 0.3)"},{offset:.8,color:"rgba(137, 189, 27, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"rgb(137,189,27)",borderColor:"rgba(137,189,2,0.27)",borderWidth:12}},data:[220,182,191,134,150,120,110,125,145,122,165,122]},{name:"CTCC",type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new h.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 136, 212, 0.3)"},{offset:.8,color:"rgba(0, 136, 212, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"rgb(0,136,212)",borderColor:"rgba(0,136,212,0.2)",borderWidth:12}},data:[120,110,125,145,122,165,122,220,182,191,134,150]},{name:"CUCC",type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new h.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(219, 50, 51, 0.3)"},{offset:.8,color:"rgba(219, 50, 51, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"rgb(219,50,51)",borderColor:"rgba(219,50,51,0.2)",borderWidth:12}},data:[220,182,125,145,122,191,134,150,120,110,165,122]}]})}},{key:"initChart",value:function(){var e=this;this.el&&this.setState({chart:h.a.init(this.el,"macarons")},(function(){e.setOptions()}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{style:{width:"100%",height:"calc(100vh - 100px)"},className:"app-container"},s.a.createElement("div",{style:{width:"100%",height:"100%"},ref:function(t){return e.el=t}}))}}]),o}(l.Component);t.default=Object(c.b)((function(e){return e.app}))(b)},499:function(e,t,o){"use strict";var r=o(468),a=o.n(r);o(538),o(552),o(553),o(556),o(559),o(560);o(583),t.a=a.a}}]);