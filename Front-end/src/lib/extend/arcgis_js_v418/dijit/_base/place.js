//>>built
define(["dojo/_base/array","dojo/_base/lang","dojo/window","../place","../main"],function(m,g,n,h,k){var c={getViewport:function(){return n.getBox()}};c.placeOnScreen=h.at;c.placeOnScreenAroundElement=function(e,d,b,f){if(g.isArray(b))var a=b;else{a=[];for(var l in b)a.push({aroundCorner:l,corner:b[l]})}return h.around(e,d,a,!0,f)};c.placeOnScreenAroundNode=c.placeOnScreenAroundElement;c.placeOnScreenAroundRectangle=c.placeOnScreenAroundElement;c.getPopupAroundAlignment=function(e,d){var b={};m.forEach(e,
function(f){var a=d;switch(f){case "after":b[d?"BR":"BL"]=d?"BL":"BR";break;case "before":b[d?"BL":"BR"]=d?"BR":"BL";break;case "below-alt":a=!a;case "below":b[a?"BL":"BR"]=a?"TL":"TR";b[a?"BR":"BL"]=a?"TR":"TL";break;case "above-alt":a=!a;default:b[a?"TL":"TR"]=a?"BL":"BR",b[a?"TR":"TL"]=a?"BR":"BL"}});return b};g.mixin(k,c);return k});