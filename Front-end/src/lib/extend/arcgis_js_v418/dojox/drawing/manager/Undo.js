//>>built
define(["dojo","../util/oo"],function(b,c){return c.declare(function(a){this.keys=a.keys;this.undostack=[];this.redostack=[];b.connect(this.keys,"onKeyDown",this,"onKeyDown")},{onKeyDown:function(a){if(a.cmmd||a.ctrl)90!=a.keyCode||a.shift?(90==a.keyCode&&a.shift||89==a.keyCode)&&this.redo():this.undo()},add:function(a){a.args=b.mixin({},a.args);this.undostack.push(a)},apply:function(a,d,e){b.hitch(a,d)(e)},undo:function(){var a=this.undostack.pop();console.log("undo!",a);a&&(a.before(),this.redostack.push(a))},
redo:function(){console.log("redo!");var a=this.redostack.pop();a&&(a.after?a.after():a.before(),this.undostack.push(a))}})});