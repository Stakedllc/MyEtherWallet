(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d94bc0a8"],{"174f":function(e,t,s){"use strict";var a=s("7039"),n=s.n(a);n.a},"29f8":function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return _}));var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sign-message-container"},[s("signature-modal-modal",{ref:"signatureModal",attrs:{signature:e.signature}}),s("interface-container-title",{attrs:{title:e.$t("signMessage.title")}}),s("div",{staticClass:"content-container"},[s("div",{staticClass:"send-form"},[s("p",[e._v(e._s(e.$t("signMessage.desc")))]),s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v(e._s(e.$t("signMessage.message")))])])]),s("div",{staticClass:"the-form"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-textarea-1",attrs:{name:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("message"),expression:"errors.has('message')"}]},[e._v(" "+e._s(e.errors.first("message"))+" ")])])]),s("div",{staticClass:"submit-button-container"},[s("div",{staticClass:"buttons"},[s("button",{class:[e.message.length>0?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:e.signMessage}},[e._v(" "+e._s(e.$t("signMessage.sign"))+" ")])]),s("div",{staticClass:"clear-all-btn",on:{click:function(t){return e.deleteInputText()}}},[e._v(" "+e._s(e.$t("common.clear-all"))+" ")])])])],1)},n=[],i=s("f3f3"),o=s("2f62"),r=s("ce96"),c=s("55c1"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-modal",{ref:"signatureModal",staticClass:"bootstrap-modal",attrs:{title:e.$t("common.signature"),"hide-footer":"",centered:"",static:"",lazy:""}},[s("div",{staticClass:"modal-contents"},[s("div",[s("div",{staticClass:"copy-container"},[s("h4",[e._v(e._s(e.$t("signMessage.signed")))]),s("div",{staticClass:"copy-buttons"},[s("span",{on:{click:e.copy}},[e._v(e._s(e.$t("common.copy")))])])]),s("textarea",{ref:"signedMess",staticClass:"custom-textarea-1",attrs:{name:"message"},domProps:{value:e.signature}}),e._v(" "),s("div",{staticClass:"button-container"},[s("button",{staticClass:"submit-button large-round-button-green-filled clickable",on:{click:function(t){return e.copy("main")}}},[e._v(" "+e._s(e.$t("common.copy"))+" ")])])])])])],1)},d=[],u={props:{signature:{type:String,default:""}},methods:{copy:function(e){this.$refs.signedMess.select(),document.execCommand("copy"),r["e"].responseHandler(this.$t("common.copied"),r["e"].INFO),"main"===e&&this.$refs.signatureModal.hide()}}},m=u,g=(s("8ef5"),s("2877")),f=Object(g["a"])(m,l,d,!1,null,"7c242d10",null),v=f.exports,p={name:"SignMessage",components:{"interface-container-title":c["a"],"signature-modal-modal":v},data:function(){return{message:"",signature:""}},computed:Object(i["a"])({},Object(o["c"])("main",["account","web3"])),mounted:function(){var e=this;this.$refs.signatureModal.$refs.signatureModal.$on("hidden",(function(){e.deleteInputText()}))},methods:{signMessage:function(){var e=this;try{this.web3.eth.sign(this.message,this.account.address).then((function(t){e.signature=JSON.stringify({address:e.account.address,msg:e.message,sig:t,version:"3",signer:e.account.isHardware?e.account.identifier:"MEW"},null,2),e.$refs.signatureModal.$refs.signatureModal.show()})).catch((function(e){r["e"].responseHandler(e,r["e"].ERROR)}))}catch(t){r["e"].responseHandler(t,r["e"].ERROR)}},copyToClipboard:function(){this.$refs.signature.select(),document.execCommand("copy"),window.getSelection().removeAllRanges(),r["e"].responseHandler(this.$t("common.copied"),r["e"].INFO)},deleteInputText:function(){this.signature="",this.message=""}}},h=p,b=(s("174f"),Object(g["a"])(h,a,n,!1,null,"4f0dcbd8",null)),_=b.exports},7039:function(e,t,s){},"8ef5":function(e,t,s){"use strict";var a=s("9bd9"),n=s.n(a);n.a},"9bd9":function(e,t,s){}}]);
//# sourceMappingURL=chunk-d94bc0a8.56c83b7f.js.map