function ajax(e,t,r,n,o){var a=new XMLHttpRequest||new ActiveXObject("Microsoft,XMLHTTP"),c="";for(var l in r)c+="&"+l+"="+r[l];c=c.slice(1),"get"==e?(t=t+"?"+c,a.open("get",t,!0),a.send()):(a.open("post",t,!0),a.setRequestHeader("content-type","application/x-www-form-urlencoded"),a.send(c)),a.onreadystatechange=function(){4==a.readyState&&200==a.status?n&&n(a.responseText):o&&o(a.status)}}function $(e){return document.getElementById(e)}function random(e,t){return parseInt(e+Math.random()*(t-e+1))}function dateString(e,t){return t=t||"/",e.getFullYear()+t+reZero(e.getMonth()+1)+t+reZero(e.getDate())+" "+reZero(e.getHours())+":"+reZero(e.getMinutes())+":"+reZero(e.getSeconds())}function reZero(e){return e<10&&(e="0"+e),e}function getStyle(e,t){return e.currentStyle?e.currentStyle[t]:getComputedStyle(e,!1)[t]}function move(o,a,c){clearInterval(o.timer),o.timer=setInterval(function(){var e=!0;for(var t in a){var r=0;r="opacity"==t?parseInt(100*parseFloat(getStyle(o,t))):parseInt(getStyle(o,t));var n=(a[t]-r)/8;n=0<n?Math.ceil(n):Math.floor(n),r!=a[t]&&(e=!1),"opacity"==t?(o.style.opacity=(r+n)/100,o.style.filter="alpha(opacity:"+r+n+")"):"zIndex"==t?o.style.zIndex=r+n:"scrollTop"==t?o.scrollTop=r+n:o.style[t]=r+n+"px"}e&&(clearInterval(o.timer),c&&c())},30)}