!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FacebookLogin=t(require("react")):e.FacebookLogin=t(e.react)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p=o(6),l=n(p),u=o(4),f=n(u),d=o(3),y=n(d),b=function(){var e=!1;try{e=window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i)}catch(t){}return e},h=function(e){function t(){var e,o,n,s;r(this,t);for(var c=arguments.length,p=Array(c),l=0;l<c;l++)p[l]=arguments[l];return o=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),n.state={isSdkLoaded:!1,isProcessing:!1},n.responseApi=function(e){window.FB.api("/me",{fields:n.props.fields},function(t){a(t,e),n.props.callback(t)})},n.checkLoginState=function(e){n._isMounted&&(n.setState({isProcessing:!1}),e.authResponse?n.responseApi(e.authResponse):n.props.callback&&n.props.callback({status:e.status}))},n.checkLoginAfterRefresh=function(e){"connected"===e.status?n.checkLoginState(e):window.FB.login(function(e){return n.checkLoginState(e)},!0)},n.click=function(){if(n.state.isSdkLoaded&&!n.state.isProcessing&&!n.props.isDisabled){n.setState({isProcessing:!0});var e=n.props,t=e.scope,o=e.appId,r=e.onClick,i=e.authType,s=e.disableMobileRedirect,a=n.props.redirectUri?n.props.redirectUri:window.location.href;"function"==typeof r&&r();var c={client_id:o,redirect_uri:a,state:"facebookdirect",scope:t};""!==i&&(c.auth_type=i),n.props.isMobile&&!s?window.location.href="//www.facebook.com/dialog/oauth?"+(0,y["default"])(c):window.FB.login(n.checkLoginState,{scope:t,auth_type:c.auth_type})}},s=o,i(n,s)}return s(t,e),c(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))return void this.sdkLoaded();this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||(e=document.createElement("div"),e.id="fb-root",document.body.appendChild(e))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,r=t.cookie,i=t.version,s=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:o,xfbml:n,cookie:r}),e.setStateIfMounted({isSdkLoaded:!0}),(s||window.location.search.includes("facebookdirect"))&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,o,n){var r=t.getElementsByTagName(o)[0],i=r,s=r;t.getElementById(n)||(s=t.createElement(o),s.id=n,s.src="//connect.facebook.net/"+e+"/all.js",i.parentNode.insertBefore(s,i))}(document,"script","facebook-jssdk")}},{key:"style",value:function(){var e=this.constructor.defaultProps.cssClass;return this.props.cssClass===e&&l["default"].createElement("style",{dangerouslySetInnerHTML:{__html:f["default"]}})}},{key:"containerStyle",value:function(){var e={transition:"opacity 0.5s"};return(this.state.isProcessing||!this.state.isSdkLoaded||this.props.isDisabled)&&(e.opacity=.6),a(e,this.props.containerStyle)}},{key:"render",value:function(){var e=this.props,t=e.cssClass,o=e.size,n=e.icon,r=e.textButton,i=e.typeButton,s=e.buttonStyle,a="string"==typeof n;return l["default"].createElement("span",{style:this.containerStyle()},a&&l["default"].createElement("link",{rel:"stylesheet",href:"//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),l["default"].createElement(this.props.tag,{type:i,className:t+" "+o,style:s,onClick:this.click},n&&a&&l["default"].createElement("i",{className:"fa "+n}),n&&!a&&n,r),this.style())}}]),t}(l["default"].Component);h.propTypes={isDisabled:p.PropTypes.bool,callback:p.PropTypes.func.isRequired,appId:p.PropTypes.string.isRequired,xfbml:p.PropTypes.bool,cookie:p.PropTypes.bool,authType:p.PropTypes.string,scope:p.PropTypes.string,redirectUri:p.PropTypes.string,textButton:p.PropTypes.string,typeButton:p.PropTypes.string,autoLoad:p.PropTypes.bool,disableMobileRedirect:p.PropTypes.bool,isMobile:p.PropTypes.bool,size:p.PropTypes.string,fields:p.PropTypes.string,cssClass:p.PropTypes.string,version:p.PropTypes.string,icon:p.PropTypes.any,language:p.PropTypes.string,onClick:p.PropTypes.func,containerStyle:p.PropTypes.object,buttonStyle:p.PropTypes.object,tag:p.PropTypes.oneOfType([p.PropTypes.node,p.PropTypes.func])},h.defaultProps={textButton:"Login with Facebook",typeButton:"button",redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",xfbml:!1,cookie:!1,authType:"",size:"metro",fields:"name",cssClass:"kep-login-facebook",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:b(),tag:"button"},t["default"]=h},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=o(1),i=n(r);t["default"]=i["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t="";for(var o in e)""!==t&&(t+="&"),t+=o+"="+encodeURIComponent(e[o]);return t}},function(e,t,o){t=e.exports=o(5)(),t.push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},function(t,o){t.exports=e}])});