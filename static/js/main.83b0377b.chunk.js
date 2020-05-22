(this.webpackJsonpgenerator=this.webpackJsonpgenerator||[]).push([[0],{43:function(e,t,a){},67:function(e,t,a){e.exports=a(81)},72:function(e,t,a){},76:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),s=a.n(l),o=(a(72),a(17)),i=a(18),c=a(21),u=a(20),m=a(91),h=a(92),d=a(89),g=a(31),E=a(8),v=a(62),p=a(87),f=a(64),b=a(88),S=a(65),C=(a(43),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleMinChange=function(t){var a=parseInt(t.target.value);a<-1e9&&(a=-1e9),e.setState({min:a})},e.handleMaxChange=function(t){var a=parseInt(t.target.value);a>1e9&&(a=1e9),e.setState({max:a})},e.handleSizeChange=function(t){var a=parseInt(t.target.value);a<1&&(a=1),e.setState({size:a})},e.handleClose=function(t){e.setState({resultShow:!1})},e.setSettingsShow=function(t){e.setState({settingsShow:t})},e.state={result:[0],prevResult:0,min:0,max:10,size:1,settingsShow:!1,resultShow:!1,animate:!1},e}return Object(i.a)(a,[{key:"generateNum",value:function(){if(this.state.max<=this.state.min)alert("Invalid range!");else if(this.state.size>1){this.setState({resultShow:!0});var e,t=[];for(e=0;e<this.state.size;e++)t[e]=Math.floor(Math.random()*(this.state.max-this.state.min+1)+this.state.min);this.setState({result:t})}else{var a=[Math.floor(Math.random()*(this.state.max-this.state.min+1)+this.state.min)];this.setState((function(e){return{result:a,prevResult:e.result[0],animate:!0}}))}}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Numbers"),r.a.createElement("p",{className:"description-text"},"Get a series of random numbers within a range"),r.a.createElement("div",{className:"result-container"},r.a.createElement("div",{className:this.state.animate?"result-previous result-previous-animation":"result-previous",id:"result-numbers-prev"},this.state.prevResult),r.a.createElement("div",{className:this.state.animate?"result result-num-animation":"result",id:"result-numbers",onAnimationEnd:function(){return e.setState({animate:!1})}},r.a.createElement("b",null,this.state.result[0])),r.a.createElement("div",{className:"result"})),r.a.createElement(v.a,{onClick:function(){return e.generateNum()}},"Generate"),r.a.createElement("br",null),r.a.createElement(p.a,{show:this.state.resultShow,size:"lg",centered:!0},r.a.createElement(p.a.Header,null,r.a.createElement(p.a.Title,null,"Result:")),r.a.createElement(p.a.Body,null,r.a.createElement("ul",null,this.state.result.map((function(e){return r.a.createElement("li",null,e)})))),r.a.createElement(p.a.Footer,null,r.a.createElement(v.a,{variant:"primary",onClick:this.handleClose},"Close"))),r.a.createElement(v.a,{onClick:function(){return e.setSettingsShow(!e.state.settingsShow)},"aria-controls":"collapse-settings","aria-expanded":this.state.settingsShow,className:"settings-button"},"Settings"),r.a.createElement("br",null),r.a.createElement("div",{className:"settings"},r.a.createElement(f.a,{in:this.state.settingsShow,fluid:!0},r.a.createElement(b.a,null,r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,"Min"),r.a.createElement(S.a,null,r.a.createElement(b.a.Control,{type:"number",value:this.state.min,onChange:this.handleMinChange}))),r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,"Max"),r.a.createElement(S.a,null,r.a.createElement(b.a.Control,{type:"number",value:this.state.max,onChange:this.handleMaxChange}))),r.a.createElement("hr",null),r.a.createElement(b.a.Group,null,r.a.createElement(S.a,null,r.a.createElement(b.a.Label,null,"How many numbers to generate"),r.a.createElement(b.a.Control,{type:"number",value:this.state.size,onChange:this.handleSizeChange})))))))}}]),a}(r.a.Component)),w=a(90),x=a(86),M=["None (Completely Random)","Selected Saturation (One Hue)","Complementary (Two Hues)","Triadic (Three Hues)","Neon","Pastel"],k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={hex:"#000000",show:!0,animate:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({hex:this.props.hex})}},{key:"componentDidUpdate",value:function(e){e.hex!==this.props.hex&&this.setState({animate:!0,hex:this.props.hex})}},{key:"HexToHSL",value:function(){var e=parseInt(this.state.hex.substring(1,3),16),t=parseInt(this.state.hex.substring(3,5),16),a=parseInt(this.state.hex.substring(5,7),16);e/=255,t/=255,a/=255;var n=Math.min(e,t,a),r=Math.max(e,t,a),l=r-n,s=0,o=0,i=0;return s=0===l?0:r===e?(t-a)/l%6:r===t?(a-e)/l+2:(e-t)/l+4,(s=Math.round(60*s))<0&&(s+=360),i=(r+n)/2,o=0===l?0:l/(1-Math.abs(2*i-1)),"hsl("+s+", "+(o=Math.floor(100*o))+"%, "+(i=Math.floor(100*i))+"%)"}},{key:"HexToRGB",value:function(){return"R: "+parseInt(this.state.hex.substring(1,3),16)+" G: "+parseInt(this.state.hex.substring(3,5),16)+" B: "+parseInt(this.state.hex.substring(5,7),16)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{placement:"bottom",delay:{show:100,hide:500},overlay:r.a.createElement(x.a,{id:"tooltip-color"},this.state.hex,r.a.createElement("br",null),this.HexToRGB(),r.a.createElement("br",null),this.HexToHSL())},r.a.createElement("div",{id:"result-color",className:this.state.show?"result-color-animation-show":this.state.animate?"result-color-animation-change":"",style:{background:this.state.hex},onAnimationEnd:function(){return e.setState({show:!1,animate:!1})}})))}}]),a}(r.a.Component),y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleSizeChange=function(t){var a=parseInt(t.target.value);a<1&&(a=1),e.setState({size:a})},e.handlePaletteChange=function(t){for(var a=t.target.value,n=-1,r=0;r<M.length;r++)a===M[r]&&(n=r);e.setState({paletteType:n})},e.setSettingsShow=function(t){e.setState({settingsShow:t})},e.state={size:1,paletteType:0,colors:["#000000"],settingsShow:!1},e}return Object(i.a)(a,[{key:"RGBtoHex",value:function(e,t,a){var n=e.toString(16);n.length<2&&(n="0"+n);var r=t.toString(16);r.length<2&&(r="0"+r);var l=a.toString(16);l.length<2&&(l="0"+l);return"#".concat(n,r,l).toUpperCase()}},{key:"HSLtoHex",value:function(e,t,a){t/=100,a/=100;var n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),l=a-n/2,s=0,o=0,i=0;return 0<=e&&e<60?(s=n,o=r,i=0):60<=e&&e<120?(s=r,o=n,i=0):120<=e&&e<180?(s=0,o=n,i=r):180<=e&&e<240?(s=0,o=r,i=n):240<=e&&e<300?(s=r,o=0,i=n):300<=e&&e<360&&(s=n,o=0,i=r),s=Math.round(255*(s+l)),o=Math.round(255*(o+l)),i=Math.round(255*(i+l)),this.RGBtoHex(s,o,i)}},{key:"generateRandomColor",value:function(){var e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),a=Math.floor(256*Math.random());return this.RGBtoHex(e,t,a)}},{key:"generateSingleHue",value:function(e,t,a){var n=Math.floor(10*Math.random())+(e-5),r=Math.floor(Math.random()*t)+a,l=Math.floor(Math.random()*t)+a;return this.HSLtoHex(n,r,l)}},{key:"generateNeon",value:function(){var e=Math.floor(360*Math.random()),t=Math.floor(10*Math.random())+90;return this.HSLtoHex(e,t,50)}},{key:"generatePastel",value:function(){var e=Math.floor(360*Math.random()),t=Math.floor(20*Math.random())+80,a=Math.floor(25*Math.random())+75;return this.HSLtoHex(e,t,a)}},{key:"generateColor",value:function(){for(var e=[],t=Math.floor(360*Math.random()),a=0;a<this.state.size;a++){var n="";switch(this.state.paletteType){case 0:n=this.generateRandomColor();break;case 1:n=this.generateSingleHue(t,100,0);break;case 2:n=this.generateSingleHue((t+a%2*180)%360,50,25);break;case 3:n=this.generateSingleHue((t+a%3*120)%360,50,25);break;case 4:n=this.generateNeon();break;case 5:n=this.generatePastel();break;default:n=this.generateRandomColor()}e.push(n)}this.setState({colors:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Colors"),r.a.createElement("p",null,"Generate a random color or a color palette. Choose from different palettes to customize the feel."),r.a.createElement("div",{className:"result-container"},r.a.createElement("div",{className:"result"},this.state.colors.map((function(e){return r.a.createElement(k,{hex:e})})))),r.a.createElement(v.a,{onClick:function(){return e.generateColor()}},"Generate"),r.a.createElement("br",null),r.a.createElement(v.a,{onClick:function(){return e.setSettingsShow(!e.state.settingsShow)},"aria-controls":"collapse-settings","aria-expanded":this.state.settingsShow,className:"settings-button"},"Settings"),r.a.createElement("br",null),r.a.createElement("div",{className:"settings"},r.a.createElement(f.a,{in:this.state.settingsShow},r.a.createElement(b.a,null,r.a.createElement(b.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(b.a.Label,null,"Number of Colors to Generate:"),r.a.createElement(b.a.Control,{type:"number",value:this.state.size,onChange:this.handleSizeChange})),r.a.createElement(b.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(b.a.Label,null,"Palette Type:"),r.a.createElement(b.a.Control,{as:"select",onChange:this.handlePaletteChange},M.map((function(e){return r.a.createElement("option",{key:e},e)}))))))))}}]),a}(r.a.Component),N=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).setSettingsShow=function(t){e.setState({settingsShow:t})},e.state={settingsShow:!1},e}return Object(i.a)(a,[{key:"getRandomElement",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Random Element"),r.a.createElement("p",null,"Give a list of words and we will select a random element from the list."),r.a.createElement("div",{className:"resultContainer"},r.a.createElement("div",{className:"result"})),r.a.createElement(v.a,{onClick:function(){return e.getRandomElement()}},"Generate"),r.a.createElement("br",null),r.a.createElement(v.a,{onClick:function(){return e.setSettingsShow(!e.state.settingsShow)},"aria-controls":"collapse-settings","aria-expanded":this.state.settingsShow,className:"settings-button"},"Settings"),r.a.createElement("br",null),r.a.createElement("div",{className:"settings"},r.a.createElement(f.a,{in:this.state.settingsShow,fluid:!0},r.a.createElement(b.a,null))))}}]),a}(r.a.Component),H=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).setSettingsShow=function(t){e.setState({settingsShow:t})},e.state={settingsShow:!1},e}return Object(i.a)(a,[{key:"randomizeSequence",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Randomize Sequence"),r.a.createElement("p",null,"Randomize a list"),r.a.createElement("div",{className:"resultContainer"},r.a.createElement("div",{className:"result"})),r.a.createElement(v.a,{onClick:function(){return e.randomizeSequence()}},"Generate"),r.a.createElement("br",null),r.a.createElement(v.a,{onClick:function(){return e.setSettingsShow(!e.state.settingsShow)},"aria-controls":"collapse-settings","aria-expanded":this.state.settingsShow,className:"settings-button"},"Settings"),r.a.createElement("br",null),r.a.createElement("div",{className:"settings"},r.a.createElement(f.a,{in:this.state.settingsShow,fluid:!0},r.a.createElement(b.a,null))))}}]),a}(r.a.Component),O=(a(76),a(77),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{basename:"/"},r.a.createElement(m.a,{bg:"dark",variant:"dark",expand:"lg",sticky:"top"},r.a.createElement(m.a.Brand,{as:g.b,to:"/"},"Generator"),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(h.a.Link,{as:g.b,to:"/numbers"},"Numbers"),r.a.createElement(h.a.Link,{as:g.b,to:"/colors"},"Colors"),r.a.createElement(d.a,{title:"Sequences",id:"sequences-dropdown"},r.a.createElement(d.a.Item,{as:g.b,to:"/sequences/element"},"Random Element"),r.a.createElement(d.a.Item,{as:g.b,to:"/sequences/randomize"},"Randomize Sequence"))))),r.a.createElement("br",null),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/"},"Home page WIP",r.a.createElement("br",null),"Last Updated: 5/22/2020 3:16 AM"),r.a.createElement(E.a,{path:"/numbers"},r.a.createElement(C,null)),r.a.createElement(E.a,{path:"/colors"},r.a.createElement(y,null)),r.a.createElement(E.a,{path:"/sequences/element"},r.a.createElement(N,null)),r.a.createElement(E.a,{path:"/sequences/randomize"},r.a.createElement(H,null))))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.83b0377b.chunk.js.map