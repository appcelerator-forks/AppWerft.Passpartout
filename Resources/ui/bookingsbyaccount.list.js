var GLOBALS=require("GLOBALS");module.exports=function(){for(var t=arguments[0]||{},e=[],o=0;23>o;o++)e[o]=Ti.UI.createTableViewRow({itemId:o,backgroundColor:"white",height:Ti.UI.SIZE}),e[o].add(Ti.UI.createLabel({text:"#"+(o+1),left:5,color:"#aaa",font:{fontWeight:"bold",fontSize:33}})),e[o].add(Ti.UI.createLabel({text:require("vendor/loremipsum")(4),left:70,top:5,bottom:10,right:10,height:40,color:"#444",font:{fontSize:18,fontFamily:"Frutiger"}}));var n=Ti.UI.createTableView({data:e});return n.addEventListener("click",function(e){t.parent&&t.parent.fireEvent("selectbooking",{payload:e.rowData.itemId})}),n};