(function(e){function t(t){for(var c,r,a=t[0],s=t[1],u=t[2],l=0,h=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(c=!1)}c&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},o={app:0},i=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0730":function(e,t,n){},"102e":function(e,t,n){"use strict";n("84ae")},"1a16":function(e,t,n){},"1ce9":function(e,t,n){},"1d15":function(e,t,n){"use strict";n("c738")},2910:function(e,t,n){"use strict";n("3488")},"2a2b":function(e,t,n){},3488:function(e,t,n){},4532:function(e,t,n){},"4e74":function(e,t,n){"use strict";n("1a16")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o={id:"app"};function i(e,t,n,i,r,a){var s=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])("div",o,[Object(c["h"])(s)])}var r=n("6c02"),a={name:"App",setup:function(){var e=Object(r["c"])(),t=Object(r["d"])();return{route:e,router:t}}};n("c12e");a.render=i;var s=a,u=(n("45fc"),Object(c["F"])("data-v-2fc4d9b2"));Object(c["t"])("data-v-2fc4d9b2");var d={class:"ItemsListC"},l=Object(c["h"])("h2",null," Items ",-1),h={class:"table"},p={class:"add-section"},b=Object(c["h"])("span",null," Didn't find it? ",-1),m=Object(c["h"])("button",null,[Object(c["h"])("span",null,"+"),Object(c["g"])(" Add it! ")],-1),A={class:"items"},f={key:0};Object(c["r"])();var j=u((function(e,t,n,o,i,r){var a=Object(c["x"])("router-link"),s=Object(c["x"])("Item");return Object(c["q"])(),Object(c["d"])("div",d,[l,Object(c["h"])("button",{class:"back",onClick:t[1]||(t[1]=function(){return r.back&&r.back.apply(r,arguments)})}," < Back to your wishlist "),Object(c["h"])("div",h,[Object(c["h"])("div",p,[b,Object(c["h"])(a,{to:"/add-item",id:"add-button"},{default:u((function(){return[m]})),_:1})]),Object(c["h"])("div",null,[Object(c["E"])(Object(c["h"])("input",{placeholder:"Search...","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.searchInput=e})},null,512),[[c["C"],i.searchInput]]),Object(c["h"])("button",{class:"back",onClick:t[3]||(t[3]=function(){return r.sortItems&&r.sortItems.apply(r,arguments)})},Object(c["z"])("Sort ".concat(i.sort)),1)]),Object(c["h"])("div",A,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(r.filteredItems,(function(e){return Object(c["q"])(),Object(c["d"])(s,{key:e.id,item:e,uid:i.id,parent:"itemsList"},null,8,["item","uid"])})),128))]),r.filteredItems.length<=0?(Object(c["q"])(),Object(c["d"])("p",f," Your item couldn't be found... You should add it! ")):Object(c["e"])("",!0)])])})),O=(n("4de4"),n("caad"),n("b0c0"),n("2532"),Object(c["F"])("data-v-3597de35"));Object(c["t"])("data-v-3597de35");var g={class:"ItemC"},v={class:"item-card"},y={class:"price"},w={class:"bottom-card"},C=Object(c["h"])("span",{class:"no-style"}," | ",-1);Object(c["r"])();var k=O((function(e,t,n,o,i,r){return Object(c["q"])(),Object(c["d"])("div",g,[Object(c["h"])("div",v,[Object(c["h"])("button",{id:"action-button",disabled:"Added"===i.buttonText||"share"===n.parent,onClick:t[1]||(t[1]=function(){return r.handleAction&&r.handleAction.apply(r,arguments)})},Object(c["z"])(i.buttonText),9,["disabled"]),Object(c["h"])("a",{href:"".concat(n.item.url)},Object(c["z"])(n.item.name),9,["href"]),Object(c["h"])("span",y,Object(c["z"])(n.item.price)+" lei ",1),Object(c["h"])("div",w,[Object(c["h"])("span",null,Object(c["z"])(n.item.category),1),C,Object(c["h"])("span",null,Object(c["z"])(n.item.type),1)])])])})),I=n("bc3a"),L={name:"Authentication",data:function(){return{modalVisible:!1,showLink:!1,isLinkCopied:!1,buttonText:"itemsList"===this.parent?"Add":"x"}},props:["item","parent","uid"],methods:{handleAction:function(){"itemsList"===this.parent?this.addToWishlist():this.removeFromWishlist()},addToWishlist:function(){var e=this;this.buttonText="Added",I.put("https://giftee-cards.herokuapp.com/user/".concat(this.uid),{id:this.item.id}).then((function(e){console.log(e.data)})).catch((function(t){return e.error=t.response.data}))},removeFromWishlist:function(){var e=this;this.$emit("remove",this.item),I.delete("https://giftee-cards.herokuapp.com/user",{data:{uid:this.uid,id:this.item.id}}).then((function(e){console.log(e.data)})).catch((function(t){return e.error=t.response.data}))}}};n("ae3b");L.render=k,L.__scopeId="data-v-3597de35";var E=L,U=n("bc3a"),q={name:"Authentication",data:function(){return{modalVisible:!1,showLink:!1,isLinkCopied:!1,searchInput:"",id:"",items:[],sort:"asc."}},components:{Item:E},props:{msg:String},mounted:function(){var e=this,t=Object(r["c"])(),n=Object(c["b"])((function(){return t.params.id}));this.id=n.value,U.get("https://giftee-cards.herokuapp.com/wishlist").then((function(t){return e.items=t.data})).catch((function(e){return console.log(e.response.data)}))},methods:{copyURL:function(){var e=this.$refs.copyThisLink;e.select(),document.execCommand("copy"),this.isLinkCopied=!0,console.log(this.isLinkCopied)},back:function(){window.history.back()},sortItems:function(){"asc."===this.sort?(this.sort="desc.",this.items.sort((function(e,t){return e.price-t.price}))):(this.sort="asc.",this.items.sort((function(e,t){return t.price-e.price})))}},computed:{filteredItems:function(){var e=this;return this.items.filter((function(t){return t.name.toLowerCase().includes(e.searchInput.toLowerCase())}))}}};n("2910");q.render=j,q.__scopeId="data-v-2fc4d9b2";var x=q,F=Object(c["F"])("data-v-b0f21dee");Object(c["t"])("data-v-b0f21dee");var T={class:"giftFormC"},P=Object(c["h"])("h1",null," Giftee ",-1),B={class:"gift-form"},R=Object(c["h"])("h1",null," Add an item you want ",-1),V={key:0,class:"error"},S=Object(c["f"])('<option selected disabled hidden id="choose" data-v-b0f21dee>Choose category</option><option value="Beauty" data-v-b0f21dee>Beauty</option><option value="Entertainment" data-v-b0f21dee>Entertainment</option><option value="Travel" data-v-b0f21dee>Travel</option><option value="Fashion" data-v-b0f21dee>Fashion</option><option value="Pets" data-v-b0f21dee>Pets</option><option value="Tech" data-v-b0f21dee>Tech</option>',7),M=Object(c["h"])("option",{selected:"",disabled:"",hidden:"",id:"choose"},"Choose type",-1),Q=Object(c["h"])("option",{value:"Voucher"},"Voucher",-1),z=Object(c["h"])("option",{value:"Physic"},"Physic",-1),N={key:1,class:"meesage"};Object(c["r"])();var Y=F((function(e,t,n,o,i,r){return Object(c["q"])(),Object(c["d"])("div",T,[P,Object(c["h"])("button",{class:"back",onClick:t[1]||(t[1]=function(){return r.goBack&&r.goBack.apply(r,arguments)})}," < Back to your wishlist "),Object(c["h"])("div",B,[R,i.error?(Object(c["q"])(),Object(c["d"])("p",V,Object(c["z"])(i.error),1)):Object(c["e"])("",!0),Object(c["E"])(Object(c["h"])("input",{type:"text",placeholder:"Name","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.name=e})},null,512),[[c["C"],i.name]]),Object(c["E"])(Object(c["h"])("input",{type:"url",placeholder:"URL","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.url=e})},null,512),[[c["C"],i.url]]),Object(c["E"])(Object(c["h"])("select",{id:"category",name:"Category","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.category=e})},[S],512),[[c["B"],i.category]]),Object(c["E"])(Object(c["h"])("input",{type:"number",placeholder:"Price","onUpdate:modelValue":t[5]||(t[5]=function(e){return i.price=e})},null,512),[[c["C"],i.price]]),Object(c["E"])(Object(c["h"])("select",{id:"type",name:"Type","onUpdate:modelValue":t[6]||(t[6]=function(e){return i.type=e})},[M,Q,z],512),[[c["B"],i.type]]),i.response?(Object(c["q"])(),Object(c["d"])("p",N,Object(c["z"])(i.response),1)):Object(c["e"])("",!0),Object(c["h"])("button",{onClick:t[7]||(t[7]=function(){return r.addItem&&r.addItem.apply(r,arguments)})}," Add ")])])})),D=(n("fb6a"),n("ac1f"),n("5319"),n("bf19"),n("bc3a")),G={name:"GiftForm",data:function(){return{error:"",name:"",url:"",category:"Choose category",price:"",type:"Choose type",response:""}},methods:{goBack:function(){window.history.back()},buildItemFromForm:function(){if(this.name&&this.url&&this.category&&"Choose category"!==this.category&&this.price&&this.type&&"Choose type"!==this.type)return{id:this.name.replaceAll(" ","")+(new Date).toJSON().slice(0,10).replace(/-/g,""),name:this.name,url:this.url,category:this.category,price:this.price,type:this.type};this.error="Fill all fields!"},addItem:function(){var e=this,t=this.buildItemFromForm();t&&D.post("https://giftee-cards.herokuapp.com/wishlist/add",{newItem:t}).then((function(t){e.response=t.data})).catch((function(e){return console.log(e.response.data)}))}}};n("4e74");G.render=Y,G.__scopeId="data-v-b0f21dee";var W=G,J=n("af02"),H=n.n(J),Z=n("75e1"),_=n.n(Z),X=Object(c["F"])("data-v-5e607d86");Object(c["t"])("data-v-5e607d86");var K={class:"wishlistC"},$=Object(c["h"])("img",{src:H.a,alt:"stats"},null,-1),ee=Object(c["g"])(" Log out "),te=Object(c["h"])("img",{src:_.a,alt:"stats"},null,-1),ne=Object(c["g"])(" Share "),ce={key:1},oe={key:1,disabled:""},ie={class:"wishlist"},re={class:"buttons"},ae={class:"items"},se={key:0};Object(c["r"])();var ue=X((function(e,t,n,o,i,r){var a=Object(c["x"])("Item");return Object(c["q"])(),Object(c["d"])("div",K,[Object(c["h"])("a",{href:"",id:"log-anchor",onClick:t[1]||(t[1]=function(){return r.logout&&r.logout.apply(r,arguments)})},[$,ee]),Object(c["h"])("h2",null,Object(c["z"])(i.user.name)+"'s wishlist ",1),i.showLink?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["d"])("button",{key:0,id:"share-button",onClick:t[2]||(t[2]=function(e){return i.showLink=!0})},[te,ne])),i.showLink?(Object(c["q"])(),Object(c["d"])("div",ce,[Object(c["E"])(Object(c["h"])("input",{readonly:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.url=e}),ref:"copyThisLink"},null,512),[[c["C"],i.url]]),i.isLinkCopied?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["d"])("button",{key:0,onClick:t[4]||(t[4]=function(){return r.copyURL&&r.copyURL.apply(r,arguments)})}," copy ")),i.isLinkCopied?(Object(c["q"])(),Object(c["d"])("button",oe," copied ")):Object(c["e"])("",!0)])):Object(c["e"])("",!0),Object(c["h"])("div",ie,[Object(c["h"])("div",re,[Object(c["h"])("div",null,[Object(c["h"])("button",{class:"sort left",onClick:t[5]||(t[5]=function(){return r.sortItems&&r.sortItems.apply(r,arguments)})},Object(c["z"])("Price ".concat(i.sortPrice)),1),Object(c["h"])("button",{class:"sort right",onClick:t[6]||(t[6]=function(){return r.sortItemsAlphabetically&&r.sortItemsAlphabetically.apply(r,arguments)})},Object(c["z"])("A-Z ".concat(i.sortAlpha)),1)]),Object(c["h"])("button",{onClick:t[7]||(t[7]=function(){return r.rerouteToAdd&&r.rerouteToAdd.apply(r,arguments)}),id:"add-button"},"+")]),Object(c["h"])("div",ae,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(i.user.wishlist,(function(e){return Object(c["q"])(),Object(c["d"])(a,{key:e.id,item:e,uid:i.id,parent:"wishlist",onRemove:r.remove},null,8,["item","uid","onRemove"])})),128))]),!i.user.wishlist||i.user.wishlist.length<=0?(Object(c["q"])(),Object(c["d"])("p",se," You have no items in your wishlist... You should add some! ")):Object(c["e"])("",!0)])])})),de=(n("c975"),n("a434"),n("bc3a")),le={name:"Wishlist",components:{Item:E},data:function(){return{modalVisible:!1,showLink:!1,isLinkCopied:!1,id:"",url:"",user:{},sortPrice:"asc.",sortAlpha:"asc."}},mounted:function(){var e=this,t=Object(r["c"])(),n=Object(c["b"])((function(){return t.params.id}));this.id=n.value,this.url="https://giftee-cards.herokuapp.com/".concat(this.id,"/share"),de.get("https://giftee-cards.herokuapp.com/user/".concat(n.value)).then((function(t){e.user=t.data})).catch((function(e){return console.log(e.response.data)}))},props:{msg:String},methods:{copyURL:function(){var e=this.$refs.copyThisLink;e.select(),document.execCommand("copy"),this.isLinkCopied=!0},rerouteToAdd:function(){this.$router.push({path:"/all-items/"+this.id})},remove:function(e){var t=this.user.wishlist.indexOf(e);t>-1&&this.user.wishlist.splice(t,1)},sortItems:function(){"asc."===this.sortPrice?(this.sortPrice="desc.",this.user.wishlist.sort((function(e,t){return t.price-e.price}))):(this.sortPrice="asc.",this.user.wishlist.sort((function(e,t){return e.price-t.price})))},sortItemsAlphabetically:function(){"asc."===this.sortAlpha?(this.sortAlpha="desc.",this.user.wishlist.sort((function(e,t){return e.name.toUpperCase().localeCompare(t.name.toUpperCase())}))):(this.sortAlpha="asc.",this.user.wishlist.sort((function(e,t){return t.name.toUpperCase().localeCompare(e.name.toUpperCase())})))},logout:function(){this.$router.push({path:"/"}),localStorage.setItem("isLoggedIn",!1)}}};n("1d15");le.render=ue,le.__scopeId="data-v-5e607d86";var he=le,pe=Object(c["F"])("data-v-719f8f04");Object(c["t"])("data-v-719f8f04");var be={class:"wishlistC"},me={class:"wishlist"},Ae={class:"items"},fe={key:0};Object(c["r"])();var je=pe((function(e,t,n,o,i,r){var a=Object(c["x"])("Item");return Object(c["q"])(),Object(c["d"])("div",be,[Object(c["h"])("h2",null,Object(c["z"])(i.user.name)+"'s wishlist ",1),Object(c["h"])("div",me,[Object(c["h"])("div",Ae,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(i.user.wishlist,(function(e){return Object(c["q"])(),Object(c["d"])(a,{key:e.id,item:e,uid:i.id,parent:"share",onRemove:r.remove},null,8,["item","uid","onRemove"])})),128))]),!i.user.wishlist||i.user.wishlist.length<=0?(Object(c["q"])(),Object(c["d"])("p",fe,Object(c["z"])("".concat(i.user.name," has no items in wishlist...")),1)):Object(c["e"])("",!0)])])})),Oe=n("bc3a"),ge={name:"Wishlist",components:{Item:E},data:function(){return{id:"",url:"",user:{}}},mounted:function(){var e=this,t=Object(r["c"])(),n=Object(c["b"])((function(){return t.params.id}));this.id=n.value,Oe.get("https://giftee-cards.herokuapp.com/user/".concat(n.value)).then((function(t){e.user=t.data})).catch((function(e){return console.log(e.response.data)}))},props:{msg:String},methods:{copyURL:function(){var e=this.$refs.copyThisLink;e.select(),document.execCommand("copy"),this.isLinkCopied=!0},rerouteToAdd:function(){this.$router.push({path:"/all-items/"+this.id})},remove:function(e){var t=this.user.wishlist.indexOf(e);t>-1&&this.user.wishlist.splice(t,1)}}};n("102e");ge.render=je,ge.__scopeId="data-v-719f8f04";var ve=ge,ye=Object(c["F"])("data-v-bd690d38");Object(c["t"])("data-v-bd690d38");var we={class:"authC"},Ce=Object(c["h"])("h1",null," Giftee ",-1);Object(c["r"])();var ke=ye((function(e,t,n,o,i,r){var a=Object(c["x"])("Authentication"),s=Object(c["x"])("Register");return Object(c["q"])(),Object(c["d"])("div",we,[Ce,i.isMember?(Object(c["q"])(),Object(c["d"])(a,{key:0,onClicked:r.changeForm},null,8,["onClicked"])):Object(c["e"])("",!0),i.isMember?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["d"])(s,{key:1,onClicked:r.changeForm},null,8,["onClicked"]))])})),Ie=Object(c["F"])("data-v-c5458432");Object(c["t"])("data-v-c5458432");var Le={class:"auth-form"},Ee=Object(c["h"])("h2",null," Authentication ",-1),Ue={key:0,class:"error"},qe=Object(c["g"])(" Not a member? ");Object(c["r"])();var xe=Ie((function(e,t,n,o,i,r){return Object(c["q"])(),Object(c["d"])("div",Le,[Ee,i.error?(Object(c["q"])(),Object(c["d"])("p",Ue,Object(c["z"])(i.error),1)):Object(c["e"])("",!0),Object(c["E"])(Object(c["h"])("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.email=e}),placeholder:"Email"},null,512),[[c["C"],i.email]]),Object(c["E"])(Object(c["h"])("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.password=e}),placeholder:"Password"},null,512),[[c["C"],i.password]]),Object(c["h"])("button",{onClick:t[3]||(t[3]=function(){return r.login&&r.login.apply(r,arguments)})}," Log in "),Object(c["h"])("span",null,[qe,Object(c["h"])("a",{onClick:t[4]||(t[4]=function(){return r.handleAnchorChange&&r.handleAnchorChange.apply(r,arguments)})}," Sign up! ")])])})),Fe=n("bc3a"),Te={name:"Authentication",data:function(){return{email:"",password:"",error:null}},setup:function(){var e=Object(r["d"])();return{router:e}},methods:{handleAnchorChange:function(){this.$emit("clicked",!1)},login:function(){var e=this;Fe.post("https://giftee-cards.herokuapp.com/login",{email:this.email,password:this.password}).then((function(t){var n=t.data.uid;e.$router.push({path:"user/"+n}),localStorage.setItem("isLoggedIn",!0)})).catch((function(t){console.log(t.response),e.error=t.response.data}))}}};n("76c8");Te.render=xe,Te.__scopeId="data-v-c5458432";var Pe=Te,Be=Object(c["F"])("data-v-435cb9df");Object(c["t"])("data-v-435cb9df");var Re={class:"auth-form"},Ve=Object(c["h"])("h2",null," Registration ",-1),Se={key:0,class:"error"},Me=Object(c["g"])(" Already a member? ");Object(c["r"])();var Qe=Be((function(e,t,n,o,i,r){return Object(c["q"])(),Object(c["d"])("div",Re,[Ve,i.error?(Object(c["q"])(),Object(c["d"])("p",Se,Object(c["z"])(i.error),1)):Object(c["e"])("",!0),Object(c["E"])(Object(c["h"])("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.email=e}),placeholder:"Email"},null,512),[[c["C"],i.email]]),Object(c["E"])(Object(c["h"])("input",{type:"text",id:"name","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.name=e}),placeholder:"Name"},null,512),[[c["C"],i.name]]),Object(c["E"])(Object(c["h"])("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.password=e}),placeholder:"Password"},null,512),[[c["C"],i.password]]),Object(c["h"])("button",{onClick:t[4]||(t[4]=function(){return r.register&&r.register.apply(r,arguments)})}," Register "),Object(c["h"])("span",null,[Me,Object(c["h"])("a",{onClick:t[5]||(t[5]=function(){return r.handleAnchorChange&&r.handleAnchorChange.apply(r,arguments)})}," Sign in! ")])])})),ze=n("bc3a"),Ne={name:"Register",data:function(){return{email:"",password:"",name:"",error:null}},setup:function(){var e=Object(r["d"])();return{router:e}},methods:{handleAnchorChange:function(){this.$emit("clicked",!0)},register:function(){var e=this;ze.post("https://giftee-cards.herokuapp.com/user/new",{email:this.email,name:this.name,password:this.password}).then((function(t){var n=t.data;e.$router.push({path:"user/"+n}),localStorage.setItem("isLoggedIn",!0)})).catch((function(t){e.error=t.response.data}))}}};n("a585");Ne.render=Qe,Ne.__scopeId="data-v-435cb9df";var Ye=Ne,De={name:"Landing page",data:function(){return{isMember:!0}},components:{Authentication:Pe,Register:Ye},methods:{changeForm:function(e){this.isMember=e}}};n("eb2a");De.render=ke,De.__scopeId="data-v-bd690d38";var Ge=De,We=[{path:"/auth",name:"LandingPage",component:Ge},{path:"/",name:"LandingPage",component:Ge},{path:"/:id/share",name:"WishlistShare",component:ve},{path:"/:id",name:"Home",component:he,meta:{requiresAuth:!0}},{path:"/all-items/:id",name:"Items",component:x,meta:{requiresAuth:!0}},{path:"/add-item",name:"Add",component:W,meta:{requiresAuth:!0}}],Je=Object(r["a"])({history:Object(r["b"])(),routes:We});Je.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))&&"false"===localStorage.getItem("isLoggedIn")?n({name:"LandingPage"}):n()}));var He=Je,Ze=n("5502"),_e={isLoggedIn:!1},Xe={login:function(){_e.isLoggedIn=!0},logout:function(){_e.isLoggedIn=!1}},Ke=Object(Ze["a"])({state:_e,mutations:Xe});Object(c["c"])(s).use(Ke).use(He).mount("#app")},"75e1":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkDAsQLBhli8m8AAABOUlEQVQoz32RPUhCYRSG3/P5hXFLpFqEhgiSghwLJAKjoaUgbHMrAwki7/2wwTaHIKHEeyNyiQiKoumCFATR0CBF0OweEW3SFNL1ngYDfxLP9p73gfPA8aBtjPlw4Pm9kUU7wBqKqYkuAICv2o0a7gLQE2f4Tg12ADaHkiEaA6wLnHMxoQEA1astr9zgOPx4Q5Ue8llAPxDj/mjGIQBIBoXNL7RvlpsvGWdgc42A1EjtkVTebndJ9Gg2ygJUu8bO//rP0JVGlCvWVYeS+k7dTystERPH9Y2a5EUEKYBSPgvoOfYPrIAlws46oJZ51/0hm+7dURECVJqnaSHjABL9gH7LPnf18BUA9CWEjDjHqnOFbwCQ8HpKuDT3mr4xg7ATKVTqSaIXlnnSoucTs0cfjfdut8qriJpqzr8eiGEHwr10FQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMi0xMVQxNjo0NDoyNCswMDowMAYzz6oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTItMTFUMTY6NDQ6MjQrMDA6MDB3bncWAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},"76c8":function(e,t,n){"use strict";n("d8b7")},"84ae":function(e,t,n){},a585:function(e,t,n){"use strict";n("0730")},ae3b:function(e,t,n){"use strict";n("2a2b")},af02:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkDBYOCwVogxY4AAAA80lEQVQoz4WOoU9CURTGf/dyA5tBpgmDs7pBcFaL1f4IFhvx8dDk2NhjsxgYTykOs5Pq5oxa/BPYrAajm4/wwpveeyjwYPIYXzvn/M73fYpM5wf2SifTwVCWHYRnPQecXzzt1Xo1dUHqUvq2Gu1RNnNAbVyPAVzLXva/pju74JCBW7MzgIZQNwd+hRXSoY7veb0dgW7nASZ+kZHYhgd/NKrmrfv9z4E1MqWT8UBM9AjBfvSR18Ft1tWxXwHVyXWA0FFfHbG2wwIgSVDKjch0Iw/NBDicLbyCFNXyTzC0Z9u/P0fak13uzDLAsPAUp7xLN/qECRpiSb0PMeaYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEyLTIyVDE0OjExOjA1KzAwOjAwbxH+WAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMi0yMlQxNDoxMTowNSswMDowMB5MRuQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},c12e:function(e,t,n){"use strict";n("4532")},c738:function(e,t,n){},d8b7:function(e,t,n){},eb2a:function(e,t,n){"use strict";n("1ce9")}});
//# sourceMappingURL=app.f6904be9.js.map