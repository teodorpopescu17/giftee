(function(t){function e(e){for(var c,r,a=e[0],s=e[1],u=e[2],l=0,h=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],c=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(c=!1)}c&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var c={},o={app:0},i=[];function r(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=c,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)r.d(n,c,function(e){return t[e]}.bind(null,c));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02a6":function(t,e,n){"use strict";n("1be1")},"0730":function(t,e,n){},"102e":function(t,e,n){"use strict";n("84ae")},"1be1":function(t,e,n){},"1ce9":function(t,e,n){},"1d15":function(t,e,n){"use strict";n("c738")},"2a2b":function(t,e,n){},4532:function(t,e,n){},"53b7":function(t,e,n){"use strict";n("e8ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o={id:"app"};function i(t,e,n,i,r,a){var s=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])("div",o,[Object(c["h"])(s)])}var r=n("6c02"),a={name:"App",setup:function(){var t=Object(r["c"])(),e=Object(r["d"])();return{route:t,router:e}}};n("c12e");a.render=i;var s=a,u=(n("45fc"),Object(c["F"])("data-v-9cbff0a4"));Object(c["t"])("data-v-9cbff0a4");var d={class:"ItemsListC"},l=Object(c["h"])("h2",null," Items ",-1),h={class:"table"},p={class:"add-section"},b=Object(c["h"])("span",null," Didn't find it? ",-1),m=Object(c["h"])("button",null,[Object(c["h"])("span",null,"+"),Object(c["g"])(" Add it! ")],-1),A={class:"items"},j={key:0};Object(c["r"])();var f=u((function(t,e,n,o,i,r){var a=Object(c["x"])("router-link"),s=Object(c["x"])("Item");return Object(c["q"])(),Object(c["d"])("div",d,[l,Object(c["h"])("button",{class:"back",onClick:e[1]||(e[1]=function(){return r.back&&r.back.apply(r,arguments)})}," < Back to your wishlist "),Object(c["h"])("div",h,[Object(c["h"])("div",p,[b,Object(c["h"])(a,{to:"/add-item",class:"add-button"},{default:u((function(){return[m]})),_:1}),Object(c["h"])("button",{onClick:e[2]||(e[2]=function(){return r.randomItem&&r.randomItem.apply(r,arguments)}),class:"add-button"}," Surprise me! ")]),Object(c["h"])("div",null,[Object(c["E"])(Object(c["h"])("input",{placeholder:"Search...","onUpdate:modelValue":e[3]||(e[3]=function(t){return i.searchInput=t})},null,512),[[c["C"],i.searchInput]]),Object(c["h"])("button",{class:"back",onClick:e[4]||(e[4]=function(){return r.sortItems&&r.sortItems.apply(r,arguments)})},Object(c["z"])("Sort ".concat(i.sort)),1)]),Object(c["h"])("div",A,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(r.filteredItems,(function(t){return Object(c["q"])(),Object(c["d"])(s,{key:t.id,item:t,uid:i.id,parent:"itemsList"},null,8,["item","uid"])})),128))]),r.filteredItems.length<=0?(Object(c["q"])(),Object(c["d"])("p",j," Your item couldn't be found... You should add it! ")):Object(c["e"])("",!0)])])})),O=(n("4de4"),n("caad"),n("fb6a"),n("b0c0"),n("ac1f"),n("2532"),n("5319"),n("bf19"),Object(c["F"])("data-v-3597de35"));Object(c["t"])("data-v-3597de35");var g={class:"ItemC"},v={class:"item-card"},y={class:"price"},w={class:"bottom-card"},C=Object(c["h"])("span",{class:"no-style"}," | ",-1);Object(c["r"])();var k=O((function(t,e,n,o,i,r){return Object(c["q"])(),Object(c["d"])("div",g,[Object(c["h"])("div",v,[Object(c["h"])("button",{id:"action-button",disabled:"Added"===i.buttonText||"share"===n.parent,onClick:e[1]||(e[1]=function(){return r.handleAction&&r.handleAction.apply(r,arguments)})},Object(c["z"])(i.buttonText),9,["disabled"]),Object(c["h"])("a",{href:"".concat(n.item.url)},Object(c["z"])(n.item.name),9,["href"]),Object(c["h"])("span",y,Object(c["z"])(n.item.price)+" lei ",1),Object(c["h"])("div",w,[Object(c["h"])("span",null,Object(c["z"])(n.item.category),1),C,Object(c["h"])("span",null,Object(c["z"])(n.item.type),1)])])])})),I=n("bc3a"),L={name:"Authentication",data:function(){return{modalVisible:!1,showLink:!1,isLinkCopied:!1,buttonText:"itemsList"===this.parent?"Add":"x"}},props:["item","parent","uid"],methods:{handleAction:function(){"itemsList"===this.parent?this.addToWishlist():this.removeFromWishlist()},addToWishlist:function(){var t=this;this.buttonText="Added",I.put("https://giftee-cards.herokuapp.com/user/".concat(this.uid),{id:this.item.id}).then((function(t){console.log(t.data)})).catch((function(e){return t.error=e.response.data}))},removeFromWishlist:function(){var t=this;this.$emit("remove",this.item),I.delete("https://giftee-cards.herokuapp.com/user",{data:{uid:this.uid,id:this.item.id}}).then((function(t){console.log(t.data)})).catch((function(e){return t.error=e.response.data}))}}};n("ae3b");L.render=k,L.__scopeId="data-v-3597de35";var E=L,U=n("bc3a"),q=n("359c"),x={name:"Authentication",data:function(){return{modalVisible:!1,showLink:!1,isLinkCopied:!1,searchInput:"",id:"",items:[],sort:"asc."}},components:{Item:E},props:{msg:String},mounted:function(){var t=this,e=Object(r["c"])(),n=Object(c["b"])((function(){return e.params.id}));this.id=n.value,U.get("https://giftee-cards.herokuapp.com/wishlist").then((function(e){return t.items=e.data})).catch((function(t){return console.log(t.response.data)}))},methods:{copyURL:function(){var t=this.$refs.copyThisLink;t.select(),document.execCommand("copy"),this.isLinkCopied=!0,console.log(this.isLinkCopied)},back:function(){window.history.back()},sortItems:function(){"asc."===this.sort?(this.sort="desc.",this.items.sort((function(t,e){return t.price-e.price}))):(this.sort="asc.",this.items.sort((function(t,e){return e.price-t.price})))},randomItem:function(){var t=this,e={id:q.commerce.productName().replaceAll(" ","")+(new Date).toJSON().slice(0,10).replace(/-/g,""),name:q.commerce.productName(),url:q.internet.url(),category:q.commerce.department(),price:q.commerce.price(),type:"Physic"};e&&U.post("https://giftee-cards.herokuapp.com/wishlist/add",{newItem:e}).then((function(e){t.response=e.data})).catch((function(t){return console.log(t.response.data)}))}},computed:{filteredItems:function(){var t=this;return this.items.filter((function(e){return e.name.toLowerCase().includes(t.searchInput.toLowerCase())}))}}};n("53b7");x.render=f,x.__scopeId="data-v-9cbff0a4";var F=x,P=Object(c["F"])("data-v-29cb6915");Object(c["t"])("data-v-29cb6915");var T={class:"giftFormC"},B=Object(c["h"])("h1",null," Giftee ",-1),R={class:"gift-form"},S=Object(c["h"])("h1",null," Add an item you want ",-1),V={key:0,class:"error"},M=Object(c["f"])('<option selected disabled hidden id="choose" data-v-29cb6915>Choose category</option><option value="Beauty" data-v-29cb6915>Beauty</option><option value="Entertainment" data-v-29cb6915>Entertainment</option><option value="Travel" data-v-29cb6915>Travel</option><option value="Fashion" data-v-29cb6915>Fashion</option><option value="Pets" data-v-29cb6915>Pets</option><option value="Tech" data-v-29cb6915>Tech</option>',7),Q=Object(c["h"])("option",{selected:"",disabled:"",hidden:"",id:"choose"},"Choose type",-1),N=Object(c["h"])("option",{value:"Voucher"},"Voucher",-1),z=Object(c["h"])("option",{value:"Physic"},"Physic",-1),D={key:1,class:"meesage"};Object(c["r"])();var Y=P((function(t,e,n,o,i,r){return Object(c["q"])(),Object(c["d"])("div",T,[B,Object(c["h"])("button",{class:"back",onClick:e[1]||(e[1]=function(){return r.goBack&&r.goBack.apply(r,arguments)})}," < Back to your wishlist "),Object(c["h"])("div",R,[S,i.error?(Object(c["q"])(),Object(c["d"])("p",V,Object(c["z"])(i.error),1)):Object(c["e"])("",!0),Object(c["E"])(Object(c["h"])("input",{type:"text",placeholder:"Name","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.name=t})},null,512),[[c["C"],i.name]]),Object(c["E"])(Object(c["h"])("input",{type:"url",placeholder:"URL","onUpdate:modelValue":e[3]||(e[3]=function(t){return i.url=t})},null,512),[[c["C"],i.url]]),Object(c["E"])(Object(c["h"])("select",{id:"category",name:"Category","onUpdate:modelValue":e[4]||(e[4]=function(t){return i.category=t})},[M],512),[[c["B"],i.category]]),Object(c["E"])(Object(c["h"])("input",{type:"number",placeholder:"Price","onUpdate:modelValue":e[5]||(e[5]=function(t){return i.price=t})},null,512),[[c["C"],i.price]]),Object(c["E"])(Object(c["h"])("select",{id:"type",name:"Type","onUpdate:modelValue":e[6]||(e[6]=function(t){return i.type=t})},[Q,N,z],512),[[c["B"],i.type]]),i.response?(Object(c["q"])(),Object(c["d"])("p",D,Object(c["z"])(i.response),1)):Object(c["e"])("",!0),Object(c["h"])("button",{onClick:e[7]||(e[7]=function(){return r.addItem&&r.addItem.apply(r,arguments)})}," Add ")])])})),G=n("bc3a"),W={name:"GiftForm",data:function(){return{error:"",name:"",url:"",category:"Choose category",price:"",type:"Choose type",response:""}},methods:{goBack:function(){window.history.back()},buildItemFromForm:function(){if(this.name&&this.url&&this.category&&"Choose category"!==this.category&&this.price&&this.type&&"Choose type"!==this.type)return{id:this.name.replaceAll(" ","")+(new Date).toJSON().slice(0,10).replace(/-/g,""),name:this.name,url:this.url,category:this.category,price:this.price,type:this.type};this.error="Fill all fields!"},addItem:function(){var t=this,e=this.buildItemFromForm();e&&G.post("https://giftee-cards.herokuapp.com/wishlist/add",{newItem:e}).then((function(e){t.response=e.data})).catch((function(t){return console.log(t.response.data)}))}}};n("02a6");W.render=Y,W.__scopeId="data-v-29cb6915";var J=W,H=n("af02"),Z=n.n(H),_=n("75e1"),X=n.n(_),K=Object(c["F"])("data-v-5e607d86");Object(c["t"])("data-v-5e607d86");var $={class:"wishlistC"},tt=Object(c["h"])("img",{src:Z.a,alt:"stats"},null,-1),et=Object(c["g"])(" Log out "),nt=Object(c["h"])("img",{src:X.a,alt:"stats"},null,-1),ct=Object(c["g"])(" Share "),ot={key:1},it={key:1,disabled:""},rt={class:"wishlist"},at={class:"buttons"},st={class:"items"},ut={key:0};Object(c["r"])();var dt=K((function(t,e,n,o,i,r){var a=Object(c["x"])("Item");return Object(c["q"])(),Object(c["d"])("div",$,[Object(c["h"])("a",{href:"",id:"log-anchor",onClick:e[1]||(e[1]=function(){return r.logout&&r.logout.apply(r,arguments)})},[tt,et]),Object(c["h"])("h2",null,Object(c["z"])(i.user.name)+"'s wishlist ",1),i.showLink?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["d"])("button",{key:0,id:"share-button",onClick:e[2]||(e[2]=function(t){return i.showLink=!0})},[nt,ct])),i.showLink?(Object(c["q"])(),Object(c["d"])("div",ot,[Object(c["E"])(Object(c["h"])("input",{readonly:"",type:"text","onUpdate:modelValue":e[3]||(e[3]=function(t){return i.url=t}),ref:"copyThisLink"},null,512),[[c["C"],i.url]]),i.isLinkCopied?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["d"])("button",{key:0,onClick:e[4]||(e[4]=function(){return r.copyURL&&r.copyURL.apply(r,arguments)})}," copy ")),i.isLinkCopied?(Object(c["q"])(),Object(c["d"])("button",it," copied ")):Object(c["e"])("",!0)])):Object(c["e"])("",!0),Object(c["h"])("div",rt,[Object(c["h"])("div",at,[Object(c["h"])("div",null,[Object(c["h"])("button",{class:"sort left",onClick:e[5]||(e[5]=function(){return r.sortItems&&r.sortItems.apply(r,arguments)})},Object(c["z"])("Price ".concat(i.sortPrice)),1),Object(c["h"])("button",{class:"sort right",onClick:e[6]||(e[6]=function(){return r.sortItemsAlphabetically&&r.sortItemsAlphabetically.apply(r,arguments)})},Object(c["z"])("A-Z ".concat(i.sortAlpha)),1)]),Object(c["h"])("button",{onClick:e[7]||(e[7]=function(){return r.rerouteToAdd&&r.rerouteToAdd.apply(r,arguments)}),id:"add-button"},"+")]),Object(c["h"])("div",st,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(i.user.wishlist,(function(t){return Object(c["q"])(),Object(c["d"])(a,{key:t.id,item:t,uid:i.id,parent:"wishlist",onRemove:r.remove},null,8,["item","uid","onRemove"])})),128))]),!i.user.wishlist||i.user.wishlist.length<=0?(Object(c["q"])(),Object(c["d"])("p",ut," You have no items in your wishlist... You should add some! ")):Object(c["e"])("",!0)])])})),lt=(n("c975"),n("a434"),n("bc3a")),ht={name:"Wishlist",components:{Item:E},data:function(){return{modalVisible:!1,showLink:!1,isLinkCopied:!1,id:"",url:"",user:{},sortPrice:"asc.",sortAlpha:"asc."}},mounted:function(){var t=this,e=Object(r["c"])(),n=Object(c["b"])((function(){return e.params.id}));this.id=n.value,this.url="https://giftee-cards.herokuapp.com/".concat(this.id,"/share"),lt.get("https://giftee-cards.herokuapp.com/user/".concat(n.value)).then((function(e){t.user=e.data})).catch((function(t){return console.log(t.response.data)}))},props:{msg:String},methods:{copyURL:function(){var t=this.$refs.copyThisLink;t.select(),document.execCommand("copy"),this.isLinkCopied=!0},rerouteToAdd:function(){this.$router.push({path:"/all-items/"+this.id})},remove:function(t){var e=this.user.wishlist.indexOf(t);e>-1&&this.user.wishlist.splice(e,1)},sortItems:function(){"asc."===this.sortPrice?(this.sortPrice="desc.",this.user.wishlist.sort((function(t,e){return e.price-t.price}))):(this.sortPrice="asc.",this.user.wishlist.sort((function(t,e){return t.price-e.price})))},sortItemsAlphabetically:function(){"asc."===this.sortAlpha?(this.sortAlpha="desc.",this.user.wishlist.sort((function(t,e){return t.name.toUpperCase().localeCompare(e.name.toUpperCase())}))):(this.sortAlpha="asc.",this.user.wishlist.sort((function(t,e){return e.name.toUpperCase().localeCompare(t.name.toUpperCase())})))},logout:function(){this.$router.push({path:"/"}),localStorage.setItem("isLoggedIn",!1)}}};n("1d15");ht.render=dt,ht.__scopeId="data-v-5e607d86";var pt=ht,bt=Object(c["F"])("data-v-719f8f04");Object(c["t"])("data-v-719f8f04");var mt={class:"wishlistC"},At={class:"wishlist"},jt={class:"items"},ft={key:0};Object(c["r"])();var Ot=bt((function(t,e,n,o,i,r){var a=Object(c["x"])("Item");return Object(c["q"])(),Object(c["d"])("div",mt,[Object(c["h"])("h2",null,Object(c["z"])(i.user.name)+"'s wishlist ",1),Object(c["h"])("div",At,[Object(c["h"])("div",jt,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(i.user.wishlist,(function(t){return Object(c["q"])(),Object(c["d"])(a,{key:t.id,item:t,uid:i.id,parent:"share",onRemove:r.remove},null,8,["item","uid","onRemove"])})),128))]),!i.user.wishlist||i.user.wishlist.length<=0?(Object(c["q"])(),Object(c["d"])("p",ft,Object(c["z"])("".concat(i.user.name," has no items in wishlist...")),1)):Object(c["e"])("",!0)])])})),gt=n("bc3a"),vt={name:"Wishlist",components:{Item:E},data:function(){return{id:"",url:"",user:{}}},mounted:function(){var t=this,e=Object(r["c"])(),n=Object(c["b"])((function(){return e.params.id}));this.id=n.value,gt.get("https://giftee-cards.herokuapp.com/user/".concat(n.value)).then((function(e){t.user=e.data})).catch((function(t){return console.log(t.response.data)}))},props:{msg:String},methods:{copyURL:function(){var t=this.$refs.copyThisLink;t.select(),document.execCommand("copy"),this.isLinkCopied=!0},rerouteToAdd:function(){this.$router.push({path:"/all-items/"+this.id})},remove:function(t){var e=this.user.wishlist.indexOf(t);e>-1&&this.user.wishlist.splice(e,1)}}};n("102e");vt.render=Ot,vt.__scopeId="data-v-719f8f04";var yt=vt,wt=Object(c["F"])("data-v-bd690d38");Object(c["t"])("data-v-bd690d38");var Ct={class:"authC"},kt=Object(c["h"])("h1",null," Giftee ",-1);Object(c["r"])();var It=wt((function(t,e,n,o,i,r){var a=Object(c["x"])("Authentication"),s=Object(c["x"])("Register");return Object(c["q"])(),Object(c["d"])("div",Ct,[kt,i.isMember?(Object(c["q"])(),Object(c["d"])(a,{key:0,onClicked:r.changeForm},null,8,["onClicked"])):Object(c["e"])("",!0),i.isMember?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["d"])(s,{key:1,onClicked:r.changeForm},null,8,["onClicked"]))])})),Lt=Object(c["F"])("data-v-c5458432");Object(c["t"])("data-v-c5458432");var Et={class:"auth-form"},Ut=Object(c["h"])("h2",null," Authentication ",-1),qt={key:0,class:"error"},xt=Object(c["g"])(" Not a member? ");Object(c["r"])();var Ft=Lt((function(t,e,n,o,i,r){return Object(c["q"])(),Object(c["d"])("div",Et,[Ut,i.error?(Object(c["q"])(),Object(c["d"])("p",qt,Object(c["z"])(i.error),1)):Object(c["e"])("",!0),Object(c["E"])(Object(c["h"])("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.email=t}),placeholder:"Email"},null,512),[[c["C"],i.email]]),Object(c["E"])(Object(c["h"])("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.password=t}),placeholder:"Password"},null,512),[[c["C"],i.password]]),Object(c["h"])("button",{onClick:e[3]||(e[3]=function(){return r.login&&r.login.apply(r,arguments)})}," Log in "),Object(c["h"])("span",null,[xt,Object(c["h"])("a",{onClick:e[4]||(e[4]=function(){return r.handleAnchorChange&&r.handleAnchorChange.apply(r,arguments)})}," Sign up! ")])])})),Pt=n("bc3a"),Tt={name:"Authentication",data:function(){return{email:"",password:"",error:null}},setup:function(){var t=Object(r["d"])();return{router:t}},methods:{handleAnchorChange:function(){this.$emit("clicked",!1)},login:function(){var t=this;Pt.post("https://giftee-cards.herokuapp.com/login",{email:this.email,password:this.password}).then((function(e){var n=e.data.uid;t.$router.push({path:"user/"+n}),localStorage.setItem("isLoggedIn",!0)})).catch((function(e){console.log(e.response),t.error=e.response.data}))}}};n("76c8");Tt.render=Ft,Tt.__scopeId="data-v-c5458432";var Bt=Tt,Rt=Object(c["F"])("data-v-435cb9df");Object(c["t"])("data-v-435cb9df");var St={class:"auth-form"},Vt=Object(c["h"])("h2",null," Registration ",-1),Mt={key:0,class:"error"},Qt=Object(c["g"])(" Already a member? ");Object(c["r"])();var Nt=Rt((function(t,e,n,o,i,r){return Object(c["q"])(),Object(c["d"])("div",St,[Vt,i.error?(Object(c["q"])(),Object(c["d"])("p",Mt,Object(c["z"])(i.error),1)):Object(c["e"])("",!0),Object(c["E"])(Object(c["h"])("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.email=t}),placeholder:"Email"},null,512),[[c["C"],i.email]]),Object(c["E"])(Object(c["h"])("input",{type:"text",id:"name","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.name=t}),placeholder:"Name"},null,512),[[c["C"],i.name]]),Object(c["E"])(Object(c["h"])("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=function(t){return i.password=t}),placeholder:"Password"},null,512),[[c["C"],i.password]]),Object(c["h"])("button",{onClick:e[4]||(e[4]=function(){return r.register&&r.register.apply(r,arguments)})}," Register "),Object(c["h"])("span",null,[Qt,Object(c["h"])("a",{onClick:e[5]||(e[5]=function(){return r.handleAnchorChange&&r.handleAnchorChange.apply(r,arguments)})}," Sign in! ")])])})),zt=n("bc3a"),Dt={name:"Register",data:function(){return{email:"",password:"",name:"",error:null}},setup:function(){var t=Object(r["d"])();return{router:t}},methods:{handleAnchorChange:function(){this.$emit("clicked",!0)},register:function(){var t=this;zt.post("https://giftee-cards.herokuapp.com/user/new",{email:this.email,name:this.name,password:this.password}).then((function(e){var n=e.data;t.$router.push({path:"user/"+n}),localStorage.setItem("isLoggedIn",!0)})).catch((function(e){t.error=e.response.data}))}}};n("a585");Dt.render=Nt,Dt.__scopeId="data-v-435cb9df";var Yt=Dt,Gt={name:"Landing page",data:function(){return{isMember:!0}},components:{Authentication:Bt,Register:Yt},methods:{changeForm:function(t){this.isMember=t}}};n("eb2a");Gt.render=It,Gt.__scopeId="data-v-bd690d38";var Wt=Gt,Jt=[{path:"/auth",name:"LandingPage",component:Wt},{path:"/",name:"LandingPage",component:Wt},{path:"/:id/share",name:"WishlistShare",component:yt},{path:"/:id",name:"Home",component:pt,meta:{requiresAuth:!0}},{path:"/all-items/:id",name:"Items",component:F,meta:{requiresAuth:!0}},{path:"/add-item",name:"Add",component:J,meta:{requiresAuth:!0}}],Ht=Object(r["a"])({history:Object(r["b"])(),routes:Jt});Ht.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requiresAuth}))&&"false"===localStorage.getItem("isLoggedIn")?n({name:"LandingPage"}):n()}));var Zt=Ht,_t=n("5502"),Xt={isLoggedIn:!1},Kt={login:function(){Xt.isLoggedIn=!0},logout:function(){Xt.isLoggedIn=!1}},$t=Object(_t["a"])({state:Xt,mutations:Kt});Object(c["c"])(s).use($t).use(Zt).mount("#app")},"75e1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkDAsQLBhli8m8AAABOUlEQVQoz32RPUhCYRSG3/P5hXFLpFqEhgiSghwLJAKjoaUgbHMrAwki7/2wwTaHIKHEeyNyiQiKoumCFATR0CBF0OweEW3SFNL1ngYDfxLP9p73gfPA8aBtjPlw4Pm9kUU7wBqKqYkuAICv2o0a7gLQE2f4Tg12ADaHkiEaA6wLnHMxoQEA1astr9zgOPx4Q5Ue8llAPxDj/mjGIQBIBoXNL7RvlpsvGWdgc42A1EjtkVTebndJ9Gg2ygJUu8bO//rP0JVGlCvWVYeS+k7dTystERPH9Y2a5EUEKYBSPgvoOfYPrIAlws46oJZ51/0hm+7dURECVJqnaSHjABL9gH7LPnf18BUA9CWEjDjHqnOFbwCQ8HpKuDT3mr4xg7ATKVTqSaIXlnnSoucTs0cfjfdut8qriJpqzr8eiGEHwr10FQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMi0xMVQxNjo0NDoyNCswMDowMAYzz6oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTItMTFUMTY6NDQ6MjQrMDA6MDB3bncWAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},"76c8":function(t,e,n){"use strict";n("d8b7")},"84ae":function(t,e,n){},a585:function(t,e,n){"use strict";n("0730")},ae3b:function(t,e,n){"use strict";n("2a2b")},af02:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkDBYOCwVogxY4AAAA80lEQVQoz4WOoU9CURTGf/dyA5tBpgmDs7pBcFaL1f4IFhvx8dDk2NhjsxgYTykOs5Pq5oxa/BPYrAajm4/wwpveeyjwYPIYXzvn/M73fYpM5wf2SifTwVCWHYRnPQecXzzt1Xo1dUHqUvq2Gu1RNnNAbVyPAVzLXva/pju74JCBW7MzgIZQNwd+hRXSoY7veb0dgW7nASZ+kZHYhgd/NKrmrfv9z4E1MqWT8UBM9AjBfvSR18Ft1tWxXwHVyXWA0FFfHbG2wwIgSVDKjch0Iw/NBDicLbyCFNXyTzC0Z9u/P0fak13uzDLAsPAUp7xLN/qECRpiSb0PMeaYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEyLTIyVDE0OjExOjA1KzAwOjAwbxH+WAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMi0yMlQxNDoxMTowNSswMDowMB5MRuQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},c12e:function(t,e,n){"use strict";n("4532")},c738:function(t,e,n){},d8b7:function(t,e,n){},e8ec:function(t,e,n){},eb2a:function(t,e,n){"use strict";n("1ce9")}});
//# sourceMappingURL=app.fed30c35.js.map