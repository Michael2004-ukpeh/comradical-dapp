(this["webpackJsonpbuildspace-solana"]=this["webpackJsonpbuildspace-solana"]||[]).push([[0],{106:function(e,t,n){},108:function(e,t){},111:function(e,t){},135:function(e,t){},136:function(e,t){},159:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var r=n(18),c=n.n(r),a=n(96),s=n.n(a),o=(n(106),n(3)),i=n(10),u=n(1),l=n.n(u),p=n(53),f=n(97),d=n(8),b=n(21),m=n.p+"static/media/twitter-logo.d89d9a86.svg",g=(n(159),n.p+"static/media/comrade.8544642c.png"),h=n(9),j=function(e){var t=e.connectWallet;return Object(h.jsx)("button",{className:"cta-button connect-wallet-button",onClick:t,children:"Connect to Wallet"})},v=b.d.Transaction,x=function(e){var t=e.walletAddress,n=e.gifList,c=(e.setGifList,e.createGifAccount),a=e.getProvider,s=e.renderconnectProp,u=e.getGifList,p=s.idl,f=s.baseAccount,m=s.programID,g=Object(r.useState)(""),j=Object(i.a)(g,2),x=j[0],O=j[1],y=Object(r.useState)(!1),w=Object(i.a)(y,2),k=w[0],S=(w[1],Object(r.useState)(0)),N=Object(i.a)(S,2),A=N[0],K=N[1],P=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==x.length){e.next=3;break}return console.log("No meme link given!"),e.abrupt("return");case 3:return console.log("Gif Link: ",x),e.prev=4,e.next=7,a();case 7:return t=e.sent,n=new b.a(p,m,t),e.next=11,n.rpc.addGif(x,{accounts:{baseAccount:f.publicKey,user:t.wallet.publicKey,systemProgram:d.SystemProgram.programId},signers:[f]});case 11:return console.log("GIF succesfully sent to the program",x),O(""),e.next=15,u();case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.log("Error sending GIF:",e.t0);case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=a(),r=new b.a(p,m,n),e.next=5,r.rpc.upvoteGif(t,{accounts:{baseAccount:f.publicKey,user:n.wallet.publicKey}});case 5:return console.log("Upvoting",t),e.next=8,u();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error in upvote",t,e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=(new v).add(t)).feePayer=a().wallet.publicKey,console.log("Getting Recent Blockhash"),e.next=5,a().connection.getRecentBlockhash();case 5:return n.recentBlockhash=e.sent.blockhash,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(l.a.mark((function e(t,n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(d.SystemProgram.transfer({fromPubkey:t,toPubkey:n,amount:d.LAMPORTS_PER_SOL*r})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(l.a.mark((function e(t,n,r){var c,s,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a(),e.prev=1,console.log("Sending ".concat(r," from :").concat(t," , to: ").concat(n)),e.t0=c.wallet,e.next=6,C(t,n,r);case 6:return e.t1=e.sent,e.next=9,e.t0.signAndSendTransaction.call(e.t0,e.t1);case 9:return s=e.sent,o=s.signature,console.log("Submitted Transaction ".concat(o,", awaiting confirmation")),e.next=14,a().connection.confirmTransaction(o);case 14:return i=e.sent,console.log("Transaction ".concat(o," confirmed")),K(0),e.abrupt("return",i);case 20:e.prev=20,e.t2=e.catch(1),console.warn(e.t2),console.error("Error: ".concat(JSON.stringify(e.t2)));case 24:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t,n,r){return e.apply(this,arguments)}}();return null===n?Object(h.jsx)("div",{className:"connected-container",children:Object(h.jsx)("button",{className:"cta-button submit-gif-button",onClick:c,children:"Do One-Time Initialization For GIF Program Account"})}):Object(h.jsxs)("div",{className:"connected-container",children:[Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),P()},children:[Object(h.jsx)("input",{type:"text",placeholder:"Enter meme link!",value:x,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("button",{type:"submit",className:"cta-button submit-gif-button",children:"Submit"})]}),k&&Object(h.jsx)("h4",{className:"duplicate",children:"Oops Enter A New Meme!, Don't be weak"}),Object(h.jsx)("div",{className:"gif-grid",children:n.slice(0).reverse().map((function(e,n){return Object(h.jsxs)("div",{className:"gif-item",children:[Object(h.jsx)("img",{src:e.gifLink,alt:e.gifLink,height:"300",width:"200"}),Object(h.jsxs)("p",{children:[" ",e.userAddress.toString()]}),Object(h.jsxs)("button",{onClick:function(){return L(e.id)},children:["Upvote ",e.upvotes.toString()]}),Object(h.jsxs)("div",{className:"tip-box",children:[Object(h.jsx)("button",{onClick:function(){return T(t,e.userAddress.toString(),A)},children:"Send tip to our comrade"}),Object(h.jsx)("input",{type:"number",name:"tip",id:"tip",className:"tip",value:A,onChange:function(e){return K(e.target.value)}})]})]},n)}))})]})},O=b.d.SystemProgram,y=(b.d.Keypair,Object.values(f._keypair.secretKey)),w=new Uint8Array(y),k=b.d.Keypair.fromSecretKey(w),S=new d.PublicKey(p.metadata.address);console.log(S);var N=Object(d.clusterApiUrl)("devnet"),A="processed",K="UkpehM",P="https://twitter.com/".concat(K),L=function(){var e={idl:p,programID:S,baseAccount:k},t=Object(r.useState)(null),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)([]),u=Object(i.a)(s,2),f=u[0],v=u[1],y=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=13;break}if(!n.isPhantom){e.next=12;break}return console.log("Phantom Wallet is found"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:r=e.sent,console.log("Connected with the Public Key:",r.publicKey.toString()),a(r.publicKey.toString()),e.next=13;break;case 12:alert("Solana object not found! Get a phantom Wallet \ud83d\udc7b");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=7;break}return e.next=4,n.connect();case 4:r=e.sent,console.log("Connected With The Public Key:",r.publicKey.toString()),a(r.publicKey.toString());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=new d.Connection(N,A),t=new b.b(e,window.solana,A);return console.log(t),t},G=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=L(),n=new b.a(p,S,t),console.log("ping"),e.next=6,n.rpc.startStuffOff({accounts:{baseAccount:k.publicKey,user:t.wallet.publicKey,systemProgram:O.programId},signers:[k]});case 6:return console.log("Created a new BaseAccount w/ address:",k.publicKey),e.next=9,C();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error creating BaseAccount account:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]);var C=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=L(),n=new b.a(p,S,t),e.next=5,n.account.baseAccount.fetch(k.publicKey);case 5:r=e.sent,console.log("Got the account",r),v(r.gifList),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in getGifList: ",e.t0),v(null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=4;break}return console.log("Fetching Meme List"),e.next=4,C();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"container flex-column",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)("img",{src:g,alt:"All hail comrade"})}),Object(h.jsx)("div",{className:"header-text",children:Object(h.jsx)("h2",{className:"header ",children:"Comradeverse"})})]})}),Object(h.jsx)("section",{children:Object(h.jsxs)("div",{className:"container ",children:[!c&&Object(h.jsxs)("div",{className:"flex-column",children:[Object(h.jsx)("h1",{className:"welcome gradient-text",children:" Welcome to Comradeverse "}),Object(h.jsx)("p",{className:"gradient-text sub-text",children:"  View your meme collection in the Comradeverse "}),Object(h.jsx)("p",{className:"gradient-text sub-text bold",children:"  The weak shall perish "}),Object(h.jsx)(j,{connectWallet:w})]}),c&&Object(h.jsx)(x,{walletAddress:c,gifList:f,setGifList:v,createGifAccount:G,getProvider:L,renderconnectProp:e,getGifList:C})]})}),Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"container flex-footer",children:[Object(h.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:m}),Object(h.jsx)("a",{className:"footer-text",href:P,target:"_blank",rel:"noreferrer",children:"built by @".concat(K)})]})})]})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root"))},53:function(e){e.exports=JSON.parse('{"version":"0.1.0","name":"myepicproject","instructions":[{"name":"startStuffOff","accounts":[{"name":"baseAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"addGif","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"gifLink","type":"string"}]},{"name":"upvoteGif","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"gifId","type":"string"}]}],"accounts":[{"name":"BaseAccount","type":{"kind":"struct","fields":[{"name":"totalGifs","type":"u64"},{"name":"gifList","type":{"vec":{"defined":"ItemStruct"}}}]}}],"types":[{"name":"ItemStruct","type":{"kind":"struct","fields":[{"name":"gifLink","type":"string"},{"name":"userAddress","type":"publicKey"},{"name":"upvotes","type":"u64"},{"name":"id","type":"string"}]}}],"metadata":{"address":"HTrG3pJZTbRCSmcpBFxCDYDPeVbhNL3nNkfVYTAR1ifz"}}')},97:function(e){e.exports=JSON.parse('{"_keypair":{"publicKey":{"0":36,"1":196,"2":79,"3":46,"4":0,"5":141,"6":240,"7":218,"8":142,"9":102,"10":26,"11":44,"12":73,"13":143,"14":7,"15":214,"16":167,"17":63,"18":200,"19":73,"20":224,"21":101,"22":127,"23":254,"24":179,"25":241,"26":176,"27":160,"28":176,"29":132,"30":202,"31":100},"secretKey":{"0":83,"1":220,"2":65,"3":188,"4":103,"5":51,"6":170,"7":22,"8":117,"9":148,"10":146,"11":202,"12":15,"13":101,"14":153,"15":57,"16":202,"17":121,"18":169,"19":141,"20":236,"21":10,"22":151,"23":29,"24":235,"25":209,"26":42,"27":63,"28":251,"29":125,"30":55,"31":170,"32":36,"33":196,"34":79,"35":46,"36":0,"37":141,"38":240,"39":218,"40":142,"41":102,"42":26,"43":44,"44":73,"45":143,"46":7,"47":214,"48":167,"49":63,"50":200,"51":73,"52":224,"53":101,"54":127,"55":254,"56":179,"57":241,"58":176,"59":160,"60":176,"61":132,"62":202,"63":100}}}')}},[[161,1,2]]]);
//# sourceMappingURL=main.7e5968b9.chunk.js.map