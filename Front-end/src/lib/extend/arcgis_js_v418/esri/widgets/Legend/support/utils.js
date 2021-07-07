// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../intl/date","../../../renderers/support/numberUtils"],function(f,h,k){const p=h.convertDateFormatToIntlOptions("short-date");f.RGB_IMG_SOURCE=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII\x3d","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII\x3d",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII\x3d"];f.createStopLabel=function(c,a,d,e){let b="";0===a?b="\x3c ":a===d&&(b="\x3e ");a=null;a=e?h.formatDate(c,p):k.format(c);return b+a};f.getUnivariateAboveAndBelowStopValues=function(c,a){const {min:d,max:e}=(null==a?void 0:a.statistics)||{};var b=c.stops.map(q=>q.value);const [l,r,g,t,m]=b;c=null!=
d?l<d:!1;a=null!=e?m>e:!1;if(null==d||null==e||!c&&!a)return b;b=c?d:l;const n=a?e:m;return k.round([b,c?b+(g-b)/2:r,g,a?g+(n-g)/2:t,n],{strictBounds:!0})};Object.defineProperty(f,"__esModule",{value:!0})});