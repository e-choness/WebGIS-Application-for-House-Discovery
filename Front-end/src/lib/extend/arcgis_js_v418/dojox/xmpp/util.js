//>>built
define(["dojo","dijit","dojox","dojo/require!dojox/string/Builder,dojox/encoding/base64"],function(g,h,c){g.provide("dojox.xmpp.util");g.require("dojox.string.Builder");g.require("dojox.encoding.base64");c.xmpp.util.xmlEncode=function(a){return g.string.escape(a)};c.xmpp.util.encodeJid=function(a){for(var b=new c.string.Builder,f=0;f<a.length;f++){var d=a.charAt(f),e=d;switch(d){case " ":e="\\20";break;case '"':e="\\22";break;case "#":e="\\23";break;case "\x26":e="\\26";break;case "'":e="\\27";break;
case "/":e="\\2f";break;case ":":e="\\3a";break;case "\x3c":e="\\3c";break;case "\x3e":e="\\3e"}b.append(e)}return b.toString()};c.xmpp.util.decodeJid=function(a){return a=a.replace(/\\([23][02367acef])/g,function(b){switch(b){case "\\20":return" ";case "\\22":return'"';case "\\23":return"#";case "\\26":return"\x26";case "\\27":return"'";case "\\2f":return"/";case "\\3a":return":";case "\\3c":return"\x3c";case "\\3e":return"\x3e"}return"ARG"})};c.xmpp.util.createElement=function(a,b,f){var d=new c.string.Builder("\x3c");
d.append(a+" ");for(var e in b)d.append(e+'\x3d"'),d.append(b[e]),d.append('" ');f?d.append("/\x3e"):d.append("\x3e");return d.toString()};c.xmpp.util.stripHtml=function(a){for(var b=0;b<arguments.length;b++);return a.replace(/<[^>]*?>/gi,"")};c.xmpp.util.decodeHtmlEntities=function(a){var b=g.doc.createElement("textarea");b.innerHTML=a.replace(/</g,"\x26lt;").replace(/>/g,"\x26gt;");return b.value};c.xmpp.util.htmlToPlain=function(a){a=c.xmpp.util.decodeHtmlEntities(a);a=a.replace(/<br\s*[i\/]{0,1}>/gi,
"\n");return a=c.xmpp.util.stripHtml(a)};c.xmpp.util.Base64={};c.xmpp.util.Base64.encode=function(a){return c.encoding.base64.encode(function(b){for(var f=[],d=0;d<b.length;++d)f.push(b.charCodeAt(d));return f}(a))};c.xmpp.util.Base64.decode=function(a){return function(b){var f=[];g.forEach(b,function(d){f.push(String.fromCharCode(d))});return f.join("")}(c.encoding.base64.decode(a))}});