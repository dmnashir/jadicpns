// A local search script with the help of
// [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)
// Copyright (C) 2015
// Joseph Pan <http://github.com/wzpan>
// Shuhao Mao <http://github.com/maoshuhao>
// This library is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation; either version 2.1 of the
// License, or (at your option) any later version.
// This library is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301 USA
// Modified by:
// Pieter Robberechts <http://github.com/probberechts>
/*exported searchFunc*/
var searchFunc=function(e,t,r){$.ajax({url:e,dataType:"xml",success:function(e){
// get the contents from search data
var n=$("entry",e).map((function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("link",this).attr("href")}})).get(),i=document.getElementById(t);if(i){var l=document.getElementById(r);i.addEventListener("input",(function(){var e=[],t=function(e){var t,r,n=[];for(t=0;t<e.length;t++)for(r=t+1;r<e.length+1;r++)n.push(e.slice(t,r).join(" "));return n}(this.value.trim().toLowerCase().split(" ")).sort((function(e,t){return t.split(" ").length-e.split(" ").length}));if(l.innerHTML="",!(this.value.trim().length<=0)&&(
// perform local searching
n.forEach((function(r){var n=0;r.title&&""!==r.title.trim()||(r.title="Untitled");var i=r.title.trim().toLowerCase(),l=r.content.trim().replace(/<style([\s\S]*?)<\/style>/gi,"").replace(/<script([\s\S]*?)<\/script>/gi,"").replace(/<figure([\s\S]*?)<\/figure>/gi,"").replace(/<\/div>/gi,"\n").replace(/<\/li>/gi,"\n").replace(/<li>/gi,"  *  ").replace(/<\/ul>/gi,"\n").replace(/<\/p>/gi,"\n").replace(/<br\s*[\/]?>/gi,"\n").replace(/<[^>]+>/gi,""),s=r.url,a=-1,c=-1,u=-1;
// show search results
if(
// only match artiles with not empty contents
""!==l&&t.forEach((function(e){a=i.indexOf(e),c=l.indexOf(e),(a>=0||c>=0)&&(n+=1,c<0&&(c=0),u<0&&(u=c))})),n>0){var o={};if(o.rank=n,o.str="<li><a href='"+s+"' class='search-result-title'>"+i+"</a>",u>=0){
// cut out 100 characters
var g=u-20,f=u+80;g<0&&(g=0),0==g&&(f=100),f>l.length&&(f=l.length);var h=l.substr(g,f),p=new RegExp(t.join("|"),"gi");
// highlight all keywords
h=h.replace(p,(function(e){return'<em class="search-keyword">'+e+"</em>"})),o.str+='<p class="search-result">'+h+"...</p>"}o.str+="</li>",e.push(o)}})),e.length)){e.sort((function(e,t){return t.rank-e.rank}));for(var r='<ul class="search-result-list">',i=0;i<e.length;i++)r+=e[i].str;r+="</ul>",l.innerHTML=r}}))}}})};