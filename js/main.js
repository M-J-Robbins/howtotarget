"use strict";(function(){var t,e,i,n,a,s;e="https://api.airtable.com/v0/appMtIlikMxVLjN4K/",t="?api_key=keyxAIb6oLhX6lAp2",i="tblChr8nk7eOaEc2I",a="tblQoCy66y3WRFG3i",n="tblxFY7eQBVeB6NEV",s=moment(),$(document).ready(function(){return $.ajax({url:e+n+t,type:"GET",dataType:"json",success:function i(n){var s;return s=n.records,$.ajax({url:e+a+t,type:"GET",dataType:"json",success:function t(e){var i;return i=e.records,console.log(i.length),$.each(i,function(){var t,e,i,n,a,o,c,d,r,l,h;for(d in h=document.getElementById("hack").content,$(h).find(".hack__client").text(this.fields.Client),$(h).find(".hack__status").text(this.fields.Status),$(h).find(".hack__code").text(this.fields.Code),$(h).find(".hack__description").text(this.fields.Description),void 0===this.fields.Link?$(h).find(".hack__link").text():$(h).find(".hack__link").text(this.fields.Link),r=moment(this.fields.Date).fromNow(),$(h).find(".hack__date").text(r),$(h).find(".hack__date").attr("datetime",this.fields.Date),c=this.fields.Contributor,s)s[d].id===c[0]&&(i=(l=s[d].fields).Name,e=l.Email,a=l.Hacks.length,t=$(h).find(".hack__contributor"),n=$(h).find(".hack__contributor-name"),$(h).find(".hack__contributor-submissions").text(a),l.Website&&(o=l.Website),void 0===o?(n.text(i),t.remove()):(t.text(i),t.attr("href",o)));return document.querySelector(".hacks").appendChild(document.importNode(h,!0))})}})}})})}).call(void 0);