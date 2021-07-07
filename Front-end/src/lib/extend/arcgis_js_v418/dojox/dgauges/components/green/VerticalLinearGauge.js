//>>built
define("dojo/_base/lang dojo/_base/declare dojo/_base/Color ../utils ../../RectangularGauge ../../LinearScaler ../../RectangularScale ../../RectangularValueIndicator ../DefaultPropertiesMixin".split(" "),function(e,f,d,g,h,k,l,m,n){return f("dojox.dgauges.components.green.VerticalLinearGauge",[h,n],{borderColor:[50,50,50],fillColor:[109,183,19],indicatorColor:[0,0,0],constructor:function(){this.orientation="vertical";this.borderColor=new d(this.borderColor);this.fillColor=new d(this.fillColor);this.indicatorColor=
new d(this.indicatorColor);this.addElement("background",e.hitch(this,this.drawBackground));var c=new k,a=new l;a.set("scaler",c);a.set("labelPosition","trailing");a.set("paddingTop",30);a.set("paddingBottom",30);a.set("paddingLeft",15);a.set("labelGap",2);a.set("font",{family:"Helvetica",weight:"bold",size:"7pt"});this.addElement("scale",a);var b=new m;b.set("interactionArea","gauge");b.set("value",c.minimum);b.set("paddingLeft",18);b.set("indicatorShapeFunc",e.hitch(this,function(p){return p.createPolyline([0,
0,-10,-20,10,-20,0,0]).setFill(this.indicatorColor)}));a.addIndicator("indicator",b)},drawBackground:function(c,a,b){a=g.brightness(new d(this.fillColor),100);c.createRect({x:0,y:0,width:50,height:b,r:10}).setFill(this.borderColor);c.createRect({x:3,y:3,width:44,height:b-6,r:7}).setFill({type:"linear",x1:6,y1:0,x2:38,y2:0,colors:[{offset:0,color:a},{offset:1,color:this.fillColor}]});c.createRect({x:6,y:6,width:38,height:b-12,r:6}).setFill({type:"linear",x1:7,y1:0,x2:36,y2:0,colors:[{offset:0,color:[226,
226,221]},{offset:.5,color:[239,239,236]},{offset:1,color:"white"}]})}})});