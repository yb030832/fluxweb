webpackJsonp([1],{217:function(e,t,n){function a(e){return n(i(e))}function i(e){return l[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var l={"./Index":218,"./Index.jsx":218,"./Modal":232,"./Modal.jsx":232};a.keys=function(){return Object.keys(l)},a.resolve=i,e.exports=a,a.id=217},218:function(e,t,n){(function(t,a,i,l,o,r,c){try{(function(){"use strict";var u=n(230),s=n(231),d=n(232),m=t.createView({store:u,handleClick:function(){s.openModal(!0)},handleClick2:function(){s.updateText("cctv")},handleGroupClick:function(e){s.updateCurrent(e)},render:function(){var e=[{name:"left",value:"left"},{name:"center",value:"center"},{name:"right",value:"right"}];return a.createElement("div",{className:"indexContainer",style:{padding:10}},a.createElement("label",null,this.state.current),a.createElement("input",{type:"text",id:"beginDateTxt"}),a.createElement("h2",null,"图标---"),a.createElement(i.Icon,{type:"heart",size:"32"})," ",a.createElement(i.Icon,{type:"star",size:"32"}),a.createElement("h2",null,"按钮---"),a.createElement(i.Button,null,"NoType")," ",a.createElement(i.Button,{type:"default"},"Default")," ",a.createElement(i.Button,{type:"primary"},"Primary")," ",a.createElement(i.Button,{type:"success"},"Success")," ",a.createElement(i.Button,{type:"info"},"Info")," ",a.createElement(i.Button,{type:"warning"},"Warning")," ",a.createElement(i.Button,{type:"danger"},"Danger"),a.createElement("h2",null,"按钮组---"),a.createElement(i.ButtonGroup,{type:"success",size:"lg",group:e,current:this.state.current,onButtonClick:this.handleGroupClick}),a.createElement("h2",null,"进度条---"),a.createElement(i.Progress,{value:"80",style:{width:"200px"}}),a.createElement("span",{className:"glyphicon glyphicon-hand-left"}),a.createElement(d,{ref:"modal"}))},resize:function(){l.view.PAGE_WIDTH,l.view.PAGE_HEIGHT},didMount:function(){console.log("didMount"),o("#beginDateTxt").datetimebox({endtoday:!0,value:r.getToday(-6)})},didUpdate:function(){if(this.state.open){var e=o(c.findDOMNode(this.refs.modal));e.modal({keyboard:!1,backdrop:"static",show:!0}),this.state.open=!1}}});e.exports=m}).call(this)}finally{}}).call(t,n(219),n(205),n(226),n(220),n(1),n(229),n(59))},230:function(e,t,n){(function(t){try{(function(){"use strict";var n=t.createStore({state:{open:!1,text:"我是大灰狼",current:"left"},openModal:function(e){this.setState(e)},updateText:function(e){this.setState(e)},updateCurrent:function(e){this.setState(e)}});e.exports=n}).call(this)}finally{}}).call(t,n(219))},231:function(e,t,n){(function(t){try{(function(){"use strict";var n=t.createAction({openModal:function(e){this.dispatch("openModal",{open:e})},updateText:function(e){this.dispatch("updateText",{text:e})},updateCurrent:function(e){this.dispatch("updateCurrent",{current:e})}});e.exports=n}).call(this)}finally{}}).call(t,n(219))},232:function(e,t,n){(function(t,n,a,i,l,o){try{(function(){"use strict";var r=t.createView({render:function(){var e=(n.view.PAGE_WIDTH,n.view.PAGE_HEIGHT),t=(e-148)/2;return a.createElement("div",{ref:"modal",className:"modal fade",role:"dialog"},a.createElement("div",{className:"modal-dialog",role:"document",style:{marginTop:t}},a.createElement("div",{className:"modal-content"},a.createElement("div",{className:"modal-header"}),a.createElement("div",{className:"modal-body"},"this is modal"),a.createElement("div",{className:"modal-footer"},a.createElement(i.Button,{"data-dismiss":"modal"},"关闭")))))},resize:function(){var e=(n.view.PAGE_WIDTH,n.view.PAGE_HEIGHT),t=l(o.findDOMNode(this.refs.modal)),a=(e-148)/2;t.find(".modal-dialog").css("marginTop",a)},willMount:function(){},didMount:function(){},didUnMount:function(){},didUpdate:function(){}});e.exports=r}).call(this)}finally{}}).call(t,n(219),n(220),n(205),n(226),n(1),n(59))}});