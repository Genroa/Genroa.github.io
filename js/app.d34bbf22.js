(function(e){function t(t){for(var a,i,o=t[0],s=t[1],c=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&f.push(l[i][0]),l[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==l[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},l={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Cultist-Simulator-Translation-Tool/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("8a23"),l=n.n(a);l.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",dark:"",color:"primary"}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:e.publicPath+"img/icons/icon-152x152.png",transition:"scale-transition",width:"40"}}),e._v(" Cultist Simulator Translator Tool ")],1)]),n("v-content",[n("v-container",[n("v-row",{attrs:{wrapped:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[e._v(" New Version Files "),n("v-file-input",{attrs:{multiple:"",label:"New Version File",outlined:"",dense:""},on:{change:function(t){return e.loadFiles(t,"newVersionFiles")}}})],1),n("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[e._v(" Current Version English core Files "),n("v-file-input",{attrs:{multiple:"",label:"Current Version File",outlined:"",dense:""},on:{change:function(t){return e.loadFiles(t,"currentVersionFiles")}}})],1),n("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[e._v(" Current Version Translated core Files "),n("v-file-input",{attrs:{multiple:"",label:"Current Translation File",outlined:"",dense:""},on:{change:function(t){return e.loadFiles(t,"currentVersionTranslatedFiles")}}}),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{color:"primary"},on:{click:e.downloadTranslationZip}},[n("v-icon",[e._v("mdi-download")])],1)],1)],1)],1),n("v-row",{attrs:{wrapped:""}},[n("v-col",{attrs:{cols:"12"}},[n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[e._v("File name")]),n("th",[e._v("New version file")]),n("th",[e._v("Current version translated file differences")])])]),n("tbody",e._l(e.currentVersionFiles,(function(t){return n("tr",{key:t.name,staticStyle:{cursor:"pointer"},on:{click:function(n){return e.openTranslationDialog(t)}}},[n("td",[e._v(e._s(t.name))]),n("td"),e.untranslatedEntries[t.name].newFile?n("td",[e._v("New file, doesn't exist in translated core")]):e.untranslatedEntries[t.name].untranslated.length>0?n("td",[e._v(e._s(e.untranslatedEntries[t.name].untranslated.length)+" untranslated entries")]):n("td",{staticClass:"translated"},[e._v("All translated! ")])])})),0)]},proxy:!0}])})],1)],1)],1),n("v-dialog",{attrs:{height:"900"},model:{value:e.translationDialog,callback:function(t){e.translationDialog=t},expression:"translationDialog"}},[n("v-card",[e.fileToTranslate?n("v-card-title",[e._v(e._s(e.fileToTranslate.name))]):e._e(),n("v-card-text",[e.fileToTranslate?n("v-container",[n("v-row",{attrs:{wrapped:""}},[n("v-col",{staticClass:"dialogScrollContainer",attrs:{cols:"3"}},e._l(e.getElements(e.currentVersionFiles.find((function(t){return t.name===e.fileToTranslate.name})).obj).map((function(e){return e.id})),(function(t){return n("v-list-item",{key:t,class:{selectedElement:t===e.displayedElementId},on:{click:function(n){return e.showElement(t)}}},[n("v-list-item-content",[n("v-list-item-title",{class:e.computeTranslationColor(t)},[e._v(e._s(t))])],1)],1)})),1),e.displayedElementId?n("v-col",{staticClass:"dialogScrollContainer"},[n("TranslationPanel",{attrs:{title:"Original Text",element:e.elementToTranslate,readonly:!0}})],1):e._e(),e.displayedElementId?n("v-col",{staticClass:"dialogScrollContainer"},[n("TranslationPanel",{attrs:{title:"Translated Content",element:e.translatedElement,"original-element":e.elementToTranslate,"translation-map":e.translationMap}})],1):e._e()],1)],1):e._e()],1)],1)],1)],1),n("v-footer",{attrs:{app:""}},[n("div",{staticClass:"caption"},[e._v(" Cultist Simulator Translation Tool is an unofficial tool for Cultist Simulator. All rights, data, & pictures used here belong to Weather Factory. ")]),n("v-spacer"),n("div",[e._v("Made with "),n("v-icon",{attrs:{color:"primary"}},[e._v("mdi-heart")]),e._v(" by Genroa")],1)],1)],1)},r=[],i=(n("a4d3"),n("e01a"),n("7db0"),n("caad"),n("d81d"),n("b0c0"),n("c1f9"),n("2532"),n("b85c")),o=n("c4e3"),s=n.n(o),c=n("21a6"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{wrapped:""}},[n("v-col",{staticClass:"mb-2",attrs:{cols:"12"}},[e._v(e._s(e.title))]),n("v-col",{staticClass:"py-0",attrs:{cols:e.readonly?12:11}},[n("v-textarea",{attrs:{readonly:e.readonly,dense:"",label:"Label",outlined:"","no-resize":"",rows:"2"},model:{value:e.element.label,callback:function(t){e.$set(e.element,"label",t)},expression:"element.label"}})],1),e.readonly?e._e():n("v-col",{attrs:{cols:"1"}},[n("PreviousTranslationButton",{attrs:{"translation-map":e.translationMap,"translation-key":e.originalElement.label},on:{click:function(t){e.element.label=t}}})],1),n("v-col",{staticClass:"py-0",attrs:{cols:e.readonly?12:11}},[n("v-textarea",{attrs:{readonly:e.readonly,dense:"",label:"Description",outlined:"","no-resize":"",rows:"4"},model:{value:e.element.description,callback:function(t){e.$set(e.element,"description",t)},expression:"element.description"}})],1),e.readonly?e._e():n("v-col",{attrs:{cols:"1"}},[n("PreviousTranslationButton",{attrs:{"translation-map":e.translationMap,"translation-key":e.originalElement.description},on:{click:function(t){e.element.description=t}}})],1),e.element.slots?e._l(e.element.slots,(function(t,a){return n("v-col",{key:a,staticClass:"py-0",attrs:{cols:"12"}},[n("v-container",{staticClass:"py-0"},[n("v-row",{attrs:{wrapped:""}},[n("v-col",{staticClass:"mb-2 py-0",attrs:{cols:"12"}},[e._v("Slot "+e._s(a+1))]),n("v-col",{staticClass:"py-0",attrs:{cols:e.readonly?12:11}},[t.label?n("v-text-field",{attrs:{readonly:e.readonly,dense:"",outlined:"",label:"Label"},model:{value:t.label,callback:function(n){e.$set(t,"label",n)},expression:"slot.label"}}):e._e()],1),e.readonly||void 0===t.label?e._e():n("v-col",{attrs:{cols:"1"}},[n("PreviousTranslationButton",{attrs:{"translation-map":e.translationMap,"translation-key":e.originalElement.slots[a].label},on:{click:function(e){t.label=e}}})],1),n("v-col",{staticClass:"py-0",attrs:{cols:e.readonly?12:11}},[t.description?n("v-text-field",{attrs:{readonly:e.readonly,dense:"",outlined:"",label:"Description"},model:{value:t.description,callback:function(n){e.$set(t,"description",n)},expression:"slot.description"}}):e._e()],1),e.readonly||void 0===t.description?e._e():n("v-col",{attrs:{cols:"1"}},[n("PreviousTranslationButton",{attrs:{"translation-map":e.translationMap,"translation-key":e.originalElement.slots[a].description},on:{click:function(e){t.description=e}}})],1)],1)],1)],1)})):e._e()],2)],1)},d=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.translationMap[e.translationKey],expression:"translationMap[translationKey] !== undefined"}],attrs:{color:"primary",small:""},on:{click:function(t){return e.$emit("click",e.translationMap[e.translationKey])}}},[n("v-icon",[e._v("mdi-translate")])],1)},p=[],v={props:["translationMap","translationKey"]},m=v,b=n("2877"),h=n("6544"),y=n.n(h),g=n("8336"),T=n("132d"),w=Object(b["a"])(m,f,p,!1,null,null,null),_=w.exports;y()(w,{VBtn:g["a"],VIcon:T["a"]});var F={components:{PreviousTranslationButton:_},props:["title","element","readonly","originalElement","translationMap"]},C=F,V=n("62ad"),E=n("a523"),k=n("0fd9"),x=n("8654"),j=n("a844"),O=Object(b["a"])(C,u,d,!1,null,null,null),S=O.exports;y()(O,{VCol:V["a"],VContainer:E["a"],VRow:k["a"],VTextField:x["a"],VTextarea:j["a"]});var P={name:"App",components:{TranslationPanel:S},data:function(){return{publicPath:"/Cultist-Simulator-Translation-Tool/",newVersionFiles:[],currentVersionFiles:[],currentVersionTranslatedFiles:[],translationDialog:!1,fileToTranslate:null,translatedFile:null,displayedElementId:null}},computed:{untranslatedEntries:function(){var e,t=this,n=this.buildEntryForEachFile(this.currentVersionFiles,(function(){return{newFile:!1,newEntries:[],untranslated:[]}})),a=Object(i["a"])(this.currentVersionFiles);try{var l=function(){var a=e.value,l=t.currentVersionTranslatedFiles.find((function(e){return e.name===a.name}));if(!l)return n[a.name].newFile=!0,"continue";var r,o=Object(i["a"])(t.getElements(a.obj));try{var s=function(){var e=r.value,i=t.getElements(l.obj).find((function(t){return t.id===e.id}));if(!i)return n[a.name].newEntries.push(e.id),"continue";if(i.description!==e.description||i.label!==e.label)return"continue";if(!e.slots)return n[a.name].untranslated.push(e.id),"continue";for(var o=0;o<e.slots.length;o++)if(e.slots[o].label===i.slots[o].label&&e.slots[o].description===i.slots[o].description){n[a.name].untranslated.push(e.id);break}};for(o.s();!(r=o.n()).done;)s()}catch(c){o.e(c)}finally{o.f()}};for(a.s();!(e=a.n()).done;)l()}catch(r){a.e(r)}finally{a.f()}return n},elementToTranslate:function(){var e=this;return this.displayedElementId&&this.fileToTranslate?this.getElements(this.fileToTranslate.obj).find((function(t){return t.id===e.displayedElementId})):null},translatedElement:function(){var e=this;return this.displayedElementId&&this.translatedFile?this.getElements(this.translatedFile.obj).find((function(t){return t.id===e.displayedElementId})):null},translationMap:function(){var e,t=this,n={},a=Object(i["a"])(this.currentVersionFiles);try{var l=function(){var a=e.value,l=t.currentVersionTranslatedFiles.find((function(e){return e.name===a.name}));if(!l)return"continue";var r,o=Object(i["a"])(t.getElements(a.obj));try{var s=function(){var e=r.value,a=t.getElements(l.obj).find((function(t){return t.id===e.id}));if(!a)return"continue";if(a.description!==e.description&&(n[e.description]=a.description),a.label!==e.label&&(n[e.label]=a.label),!e.slots)return"continue";for(var i=0;i<e.slots.length;i++)e.slots[i].label!==a.slots[i].label&&(n[e.slots[i].label]=a.slots[i].label),e.slots[i].description!==a.slots[i].description&&(n[e.slots[i].description]=a.slots[i].description)};for(o.s();!(r=o.n()).done;)s()}catch(c){o.e(c)}finally{o.f()}};for(a.s();!(e=a.n()).done;)l()}catch(r){a.e(r)}finally{a.f()}return n}},methods:{getElements:function(e){var t,n,a,l,r;return null!==(t=null!==(n=null!==(a=null!==(l=null!==(r=e.decks)&&void 0!==r?r:e.elements)&&void 0!==l?l:e.endings)&&void 0!==a?a:e.legacies)&&void 0!==n?n:e.recipes)&&void 0!==t?t:e.verbs},buildEntryForEachFile:function(e,t){return Object.fromEntries(e.map((function(e){return[e.name,t()]})))},loadFiles:function(e,t){var n=this;this[t]=[];var a,l=Object(i["a"])(e);try{var r=function(){var e=a.value,l=new FileReader;l.onload=function(a){var l=JSON.parse(a.target.result);n[t].push({name:e.name,obj:l})},l.readAsText(e)};for(l.s();!(a=l.n()).done;)r()}catch(o){l.e(o)}finally{l.f()}},openTranslationDialog:function(e){this.fileToTranslate=e,this.translatedFile=this.currentVersionTranslatedFiles.find((function(t){return t.name===e.name})),this.translationDialog=!0},showElement:function(e){this.displayedElementId=e},computeTranslationColor:function(e){var t=this.untranslatedEntries[this.fileToTranslate.name].untranslated.includes(e);return{untranslated:t,translated:!t}},downloadTranslationZip:function(){var e,t=new s.a,n=Object(i["a"])(this.currentVersionTranslatedFiles);try{for(n.s();!(e=n.n()).done;){var a=e.value;t.file(a.name,JSON.stringify(a.obj,void 0,2))}}catch(l){n.e(l)}finally{n.f()}t.generateAsync({type:"blob"}).then((function(e){Object(c["saveAs"])(e,"translations.zip")}))}}},I=P,M=(n("034f"),n("7496")),A=n("40dc"),B=n("b0af"),D=n("99d9"),N=n("a75b"),$=n("169a"),L=n("23a7"),J=n("553a"),K=n("adda"),z=n("da13"),R=n("5d23"),Z=n("1f4f"),q=n("2fa4"),G=Object(b["a"])(I,l,r,!1,null,null,null),W=G.exports;y()(G,{VApp:M["a"],VAppBar:A["a"],VBtn:g["a"],VCard:B["a"],VCardText:D["a"],VCardTitle:D["b"],VCol:V["a"],VContainer:E["a"],VContent:N["a"],VDialog:$["a"],VFileInput:L["a"],VFooter:J["a"],VIcon:T["a"],VImg:K["a"],VListItem:z["a"],VListItemContent:R["a"],VListItemTitle:R["b"],VRow:k["a"],VSimpleTable:Z["a"],VSpacer:q["a"]});var H=n("9483");Object(H["a"])("".concat("/Cultist-Simulator-Translation-Tool/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Q=n("f309");a["a"].use(Q["a"]);var U=new Q["a"]({theme:{themes:{light:{primary:"#00695C",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});a["a"].config.productionTip=!1,new a["a"]({vuetify:U,render:function(e){return e(W)}}).$mount("#app")},"8a23":function(e,t,n){}});
//# sourceMappingURL=app.d34bbf22.js.map