//>>built
define(["dojo/_base/lang","dojox/date/php","../_base"],function(d,g,h){var c=d.getObject("utils.date",!0,h);c.DateFormat=g.DateFormat;d.extend(c.DateFormat,g.DateFormat.prototype,{f:function(){return this.date.getMinutes()?this.g()+":"+this.i():this.g()},N:function(){return c._months_ap[this.date.getMonth()]},P:function(){return this.date.getMinutes()||this.date.getHours()?this.date.getMinutes()||12!=this.date.getHours()?this.f()+" "+this.a():"noon":"midnight"}});d.mixin(dojox.dtl.utils.date,{format:function(a,
b){return(new dojox.dtl.utils.date.DateFormat(b)).format(a)},timesince:function(a,b){a instanceof Date||(a=new Date(a.year,a.month,a.day));b||(b=new Date);a=Math.abs(b.getTime()-a.getTime());b=0;for(var e;e=dojox.dtl.utils.date._chunks[b];b++){var f=Math.floor(a/e[0]);if(f)break}return f+" "+e[1](f)},_chunks:[[31536E6,function(a){return 1==a?"year":"years"}],[2592E6,function(a){return 1==a?"month":"months"}],[6048E5,function(a){return 1==a?"week":"weeks"}],[864E5,function(a){return 1==a?"day":"days"}],
[36E5,function(a){return 1==a?"hour":"hours"}],[6E4,function(a){return 1==a?"minute":"minutes"}]],_months_ap:"Jan. Feb. March April May June July Aug. Sept. Oct. Nov. Dec.".split(" ")});return c});