(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60e381c0"],{1204:function(e){e.exports=JSON.parse('[{"name":"accepte","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"asksfor","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"atethereum","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"atpeepeth","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"begsfor","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"blockchaincontracts","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"britishblockchain","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"blockchainboss","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"buymeatesla","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"chainlinknode","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"codeinecrazy","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"cryptoking","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"deserves","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"eth-gbg","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"etherbase","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"gimmethe","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"paynonym","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"sendmecrypto","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"mollypercocet","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"thecryptogirl","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"thecryptoguy","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"tokenid","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"trustsnobank","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"wantsome","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"},{"name":"xannyfamily","version":"1.0","registrar":"0xe65d8AAF34CB91087D1598e0A15B582F57F217d9"}]')},"8abd":function(e,t,n){},b1e4:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"buy-subdomain-container"},[n("back-button"),n("div",{staticClass:"buy-subdomain-content"},[n("div",{staticClass:"buy-subdomain-form-container"},[n("div",{staticClass:"title"},[n("h4",[e._v(e._s(e.$t("subDomain.title")))])]),n("div",{staticClass:"form"},[n("div",{staticClass:"subdomain-input"},[n("input",{class:e.hasError?"errorInput":"",attrs:{placeholder:e.$t("subDomain.ph-enter-name"),type:"text"},on:{input:e.debounceInput}}),n("button",{attrs:{type:"button"},on:{click:e.query}},[e._v(" "+e._s(e.$t("subDomain.check"))+" ")])]),e.hasError?n("p",{staticClass:"errorText"},[n("span",[e._v(e._s(e.$t("subDomain.invalid-symbol")))])]):e._e()]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.results.length>0,expression:"results.length > 0"}],staticClass:"result-section"},[n("div",{staticClass:"title"},[n("h4",[e._v(e._s(e.$t("subDomain.all")))])]),n("div",{staticClass:"results-container"},e._l(e.sortedResults,(function(t,a){return n("div",{key:e.domainName+t.domain+a,class:[t.active?"":"disabled","result-item"]},[n("span",{staticClass:"domain-name"},[e._v(e._s(e.domainName)+"."+e._s(t.domain)+".eth")]),n("div",{staticClass:"buy-button-container"},[n("span",{staticClass:"amt"},[e._v(e._s(e.web3.utils.fromWei(t.price,"ether"))+" "+e._s(e.$t("common.currency.eth")))]),n("button",{on:{click:function(n){return e.buyDomain(t)}}},[t.active?n("span",[e._v(e._s(e.$t("subDomain.buy")))]):n("span",[n("i",{staticClass:"fa fa-times"})])])])])})),0)])]),n("div",[n("interface-bottom-text",{attrs:{"link-text":e.$t("common.help-center"),question:e.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},s=[],r=(n("99af"),n("4de4"),n("4160"),n("b0c0"),n("d3b7"),n("159b"),n("ddb0"),n("96cf"),n("c964")),i=n("f3f3"),o=n("539d"),u=n("572c"),p=[{constant:!0,inputs:[{name:"interfaceID",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!0,inputs:[{name:"label",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"stop",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"}],name:"upgrade",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"migration",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"registrarOwner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"label",type:"bytes32"},{name:"subdomain",type:"string"}],name:"query",outputs:[{name:"domain",type:"string"},{name:"price",type:"uint256"},{name:"rent",type:"uint256"},{name:"referralFeePPM",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"hashRegistrar",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"ens",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"label",type:"bytes32"},{name:"subdomain",type:"string"},{name:"subdomainOwner",type:"address"},{name:"referrer",type:"address"},{name:"resolver",type:"address"}],name:"register",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_migration",type:"address"}],name:"setMigrationAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"label",type:"bytes32"},{name:"subdomain",type:"string"}],name:"rentDue",outputs:[{name:"timestamp",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"},{name:"resolver",type:"address"}],name:"setResolver",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"stopped",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TLD_NODE",outputs:[{name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"}],name:"migrate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"label",type:"bytes32"},{name:"subdomain",type:"string"}],name:"payRent",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"},{name:"price",type:"uint256"},{name:"referralFeePPM",type:"uint256"},{name:"_owner",type:"address"},{name:"_transfer",type:"address"}],name:"configureDomainFor",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"},{name:"price",type:"uint256"},{name:"referralFeePPM",type:"uint256"}],name:"configureDomain",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"},{name:"transfer",type:"address"}],name:"setTransferAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"}],name:"unlistDomain",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"},{name:"newOwner",type:"address"}],name:"transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_ens",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"label",type:"bytes32"},{indexed:!1,name:"addr",type:"address"}],name:"TransferAddressSet",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"label",type:"bytes32"},{indexed:!1,name:"name",type:"string"}],name:"DomainTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"label",type:"bytes32"},{indexed:!0,name:"oldOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnerChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"label",type:"bytes32"}],name:"DomainConfigured",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"label",type:"bytes32"}],name:"DomainUnlisted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"label",type:"bytes32"},{indexed:!1,name:"subdomain",type:"string"},{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"referrer",type:"address"},{indexed:!1,name:"price",type:"uint256"}],name:"NewRegistration",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"label",type:"bytes32"},{indexed:!1,name:"subdomain",type:"string"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"expirationDate",type:"uint256"}],name:"RentPaid",type:"event"}],m=p,d=n("1204"),c=n("7856"),y=n("901e"),l=n.n(y),b=n("6314"),v=n.n(b),f=n("2f62"),A=n("ce96"),g={components:{"interface-bottom-text":o["a"],"back-button":u["a"]},data:function(){return{subdomainContract:function(){},ensContract:function(){},results:[],domainName:"",knownRegistrarInstances:{},hasError:!1}},computed:Object(i["a"])({},Object(f["c"])("main",["ethDonationAddress","ens","account","web3"]),{sortedResults:function(){var e=this.results;e.sort((function(e,t){var n=new l.a(e.price).gt(t.price)?-1:new l.a(e.price).eq(t.price)?0:1;return n}));var t=e.filter((function(e){return!1===e.active})),n=e.filter((function(e){return!0===e.active}));return n.concat(t)}}),watch:{domainName:function(){this.query()}},mounted:function(){var e=this,t=this.web3.eth.Contract;d.forEach((function(n){var a=Object.assign({},n);a.contract=new t(m,n.registrar),e.knownRegistrarInstances[n.name]=a}))},methods:{debounceInput:v.a.utils._.debounce((function(e){try{this.domainName=Object(c["a"])(e.target.value),this.hasError=!1}catch(e){return A["e"].responseHandler(e,A["e"].WARN),void(this.hasError=!0)}}),1500),query:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.results=[],n=e.web3.utils.sha3,!(e.domainName.length>1)){t.next=14;break}t.t0=regeneratorRuntime.keys(e.knownRegistrarInstances);case 4:if((t.t1=t.t0()).done){t.next=14;break}return a=t.t1.value,t.next=8,e.knownRegistrarInstances[a].contract.methods.query(n(a),e.domainName).call();case 8:s=t.sent,s.version=e.knownRegistrarInstances[a].version,""!==s[0]?s.active=!0:(s.active=!1,s.domain=a),e.results.push(s),t.next=4;break;case 14:case"end":return t.stop()}}),t)})))()},buyDomain:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,s,r,i,o,u,p,m;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.web3.utils.sha3(e.domain),s=t.domainName,r=t.account.address,i=t.ethDonationAddress,n.next=6,t.ens.resolver("resolver.eth").addr();case 6:return o=n.sent,u=t.knownRegistrarInstances[e.domain],n.next=10,"1.0"===e.version?u.contract.methods.register(a,s,r,i,o).encodeABI():u.contract.methods.register(a,s,r,o,i).encodeABI();case 10:p=n.sent,m={from:r,data:p,to:u.registrar,value:e.price},t.web3.eth.sendTransaction(m).catch((function(e){A["e"].responseHandler(e,!1)}));case 13:case"end":return n.stop()}}),n)})))()}}},F=g,h=(n("fe52"),n("2877")),x=Object(h["a"])(F,a,s,!1,null,"dd142e20",null);t["default"]=x.exports},fe52:function(e,t,n){"use strict";var a=n("8abd"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-60e381c0.3bb96db7.js.map