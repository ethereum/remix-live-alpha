"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[2076],{39356(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var _src_composites_wui_network_image_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(956561)},40050(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var lit=__webpack_require__(538412);var decorators=__webpack_require__(380226);var wui_icon=__webpack_require__(751586);var wui_image=__webpack_require__(138922);var wui_text=__webpack_require__(243582);var wui_flex=__webpack_require__(162664);var ThemeUtil=__webpack_require__(635686);var UiHelperUtil=__webpack_require__(79417);var WebComponentsUtil=__webpack_require__(995045);const styles=(0,lit.AH)`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListToken=class WuiListToken extends lit.WF{constructor(){super(...arguments);this.tokenName="";this.tokenImageUrl="";this.tokenValue=0;this.tokenAmount="0.0";this.tokenCurrency="";this.clickable=false}render(){return(0,lit.qy)`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${UiHelperUtil.Z.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){if(this.tokenName&&this.tokenImageUrl){return(0,lit.qy)`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`}return(0,lit.qy)`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};WuiListToken.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiListToken.prototype,"tokenName",void 0);__decorate([(0,decorators.MZ)()],WuiListToken.prototype,"tokenImageUrl",void 0);__decorate([(0,decorators.MZ)({type:Number})],WuiListToken.prototype,"tokenValue",void 0);__decorate([(0,decorators.MZ)()],WuiListToken.prototype,"tokenAmount",void 0);__decorate([(0,decorators.MZ)()],WuiListToken.prototype,"tokenCurrency",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiListToken.prototype,"clickable",void 0);WuiListToken=__decorate([(0,WebComponentsUtil.E)("wui-list-token")],WuiListToken)},129193(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:()=>networkSvgMd});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(538412);const networkSvgMd=(0,lit__WEBPACK_IMPORTED_MODULE_0__.JW)`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`},143296(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var lit=__webpack_require__(538412);var decorators=__webpack_require__(380226);var wui_icon=__webpack_require__(751586);var wui_image=__webpack_require__(138922);var wui_flex=__webpack_require__(162664);var ThemeUtil=__webpack_require__(635686);var WebComponentsUtil=__webpack_require__(995045);var wui_icon_box=__webpack_require__(392344);const styles=(0,lit.AH)`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiWalletImage=class WuiWalletImage extends lit.WF{constructor(){super(...arguments);this.size="md";this.name="";this.installed=false;this.badgeSize="xs"}render(){let borderRadius="xxs";if(this.size==="lg"){borderRadius="m"}else if(this.size==="md"){borderRadius="xs"}else{borderRadius="xxs"}this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${borderRadius});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `;if(this.walletIcon){this.dataset["walletIcon"]=this.walletIcon}return(0,lit.qy)`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){if(this.imageSrc){return(0,lit.qy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`}else if(this.walletIcon){return(0,lit.qy)`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`}return(0,lit.qy)`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};WuiWalletImage.styles=[ThemeUtil.fD,ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)()],WuiWalletImage.prototype,"size",void 0);__decorate([(0,decorators.MZ)()],WuiWalletImage.prototype,"name",void 0);__decorate([(0,decorators.MZ)()],WuiWalletImage.prototype,"imageSrc",void 0);__decorate([(0,decorators.MZ)()],WuiWalletImage.prototype,"walletIcon",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiWalletImage.prototype,"installed",void 0);__decorate([(0,decorators.MZ)()],WuiWalletImage.prototype,"badgeSize",void 0);WuiWalletImage=__decorate([(0,WebComponentsUtil.E)("wui-wallet-image")],WuiWalletImage)},345199(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var _src_components_wui_image_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(138922)},583526(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:()=>NavigationUtil});const NavigationUtil={URLS:{FAQ:"https://walletconnect.com/faq"}}},586516(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var lit=__webpack_require__(538412);var decorators=__webpack_require__(380226);var if_defined=__webpack_require__(491529);var wui_text=__webpack_require__(243582);var ThemeUtil=__webpack_require__(635686);var WebComponentsUtil=__webpack_require__(995045);var wui_logo=__webpack_require__(642594);const styles=(0,lit.AH)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListSocial=class WuiListSocial extends lit.WF{constructor(){super(...arguments);this.logo="google";this.name="Continue with google";this.align="left";this.disabled=false}render(){return(0,lit.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,if_defined.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){if(this.align==="center"){return(0,lit.qy)` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`}return null}};WuiListSocial.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiListSocial.prototype,"logo",void 0);__decorate([(0,decorators.MZ)()],WuiListSocial.prototype,"name",void 0);__decorate([(0,decorators.MZ)()],WuiListSocial.prototype,"align",void 0);__decorate([(0,decorators.MZ)()],WuiListSocial.prototype,"tabIdx",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiListSocial.prototype,"disabled",void 0);WuiListSocial=__decorate([(0,WebComponentsUtil.E)("wui-list-social")],WuiListSocial)},642594(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var lit=__webpack_require__(538412);var decorators=__webpack_require__(380226);var wui_icon=__webpack_require__(751586);var ThemeUtil=__webpack_require__(635686);var WebComponentsUtil=__webpack_require__(995045);const styles=(0,lit.AH)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiLogo=class WuiLogo extends lit.WF{constructor(){super(...arguments);this.logo="google"}render(){return(0,lit.qy)`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};WuiLogo.styles=[ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)()],WuiLogo.prototype,"logo",void 0);WuiLogo=__decorate([(0,WebComponentsUtil.E)("wui-logo")],WuiLogo)},697676(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Up:()=>executeSocialLogin});var _reown_appkit_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1571);var _controllers_AccountController_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(930403);var _controllers_ChainController_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(457474);var _controllers_ConnectorController_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(117871);var _controllers_EventsController_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(317931);var _controllers_RouterController_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(503555);var _controllers_SnackController_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(687818);var _CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(641185);var _StorageUtil_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(233229);function getPopupWindow(){try{return _CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__.w.returnOpenHref(`${_reown_appkit_common__WEBPACK_IMPORTED_MODULE_0__.o.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(error){throw new Error("Could not open social popup")}}async function connectFarcaster(){_controllers_RouterController_js__WEBPACK_IMPORTED_MODULE_5__.I.push("ConnectingFarcaster");const authConnector=_controllers_ConnectorController_js__WEBPACK_IMPORTED_MODULE_3__.a.getAuthConnector();if(authConnector){if(!_controllers_AccountController_js__WEBPACK_IMPORTED_MODULE_1__.U.state.farcasterUrl){try{const{url}=await authConnector.provider.getFarcasterUri();_controllers_AccountController_js__WEBPACK_IMPORTED_MODULE_1__.U.setFarcasterUrl(url,_controllers_ChainController_js__WEBPACK_IMPORTED_MODULE_2__.W.state.activeChain)}catch(error){_controllers_RouterController_js__WEBPACK_IMPORTED_MODULE_5__.I.goBack();_controllers_SnackController_js__WEBPACK_IMPORTED_MODULE_6__.P.showError(error)}}}}async function connectSocial(socialProvider){_controllers_RouterController_js__WEBPACK_IMPORTED_MODULE_5__.I.push("ConnectingSocial");const authConnector=_controllers_ConnectorController_js__WEBPACK_IMPORTED_MODULE_3__.a.getAuthConnector();let popupWindow=null;try{const timeout=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(authConnector&&socialProvider){if(!_CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__.w.isTelegram()){popupWindow=getPopupWindow()}if(popupWindow){_controllers_AccountController_js__WEBPACK_IMPORTED_MODULE_1__.U.setSocialWindow(popupWindow,_controllers_ChainController_js__WEBPACK_IMPORTED_MODULE_2__.W.state.activeChain)}else if(!_CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__.w.isTelegram()){throw new Error("Could not create social popup")}const{uri}=await authConnector.provider.getSocialRedirectUri({provider:socialProvider});if(!uri){popupWindow?.close();throw new Error("Could not fetch the social redirect uri")}if(popupWindow){popupWindow.location.href=uri}if(_CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__.w.isTelegram()){_StorageUtil_js__WEBPACK_IMPORTED_MODULE_8__.i.setTelegramSocialProvider(socialProvider);const parsedUri=_CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__.w.formatTelegramSocialLoginUrl(uri);_CoreHelperUtil_js__WEBPACK_IMPORTED_MODULE_7__.w.openHref(parsedUri,"_top")}clearTimeout(timeout)}}catch(error){popupWindow?.close();_controllers_SnackController_js__WEBPACK_IMPORTED_MODULE_6__.P.showError(error?.message)}}async function executeSocialLogin(socialProvider){_controllers_AccountController_js__WEBPACK_IMPORTED_MODULE_1__.U.setSocialProvider(socialProvider,_controllers_ChainController_js__WEBPACK_IMPORTED_MODULE_2__.W.state.activeChain);_controllers_EventsController_js__WEBPACK_IMPORTED_MODULE_4__.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:socialProvider}});if(socialProvider==="farcaster"){await connectFarcaster()}else{await connectSocial(socialProvider)}}},713310(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var lit=__webpack_require__(538412);var decorators=__webpack_require__(380226);var TooltipController=__webpack_require__(700367);var RouterController=__webpack_require__(503555);var ModalController=__webpack_require__(324889);var esm_exports=__webpack_require__(485471);const styles=(0,lit.AH)`
  :host {
    width: 100%;
    display: block;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiTooltipTrigger=class WuiTooltipTrigger extends lit.WF{constructor(){super();this.unsubscribe=[];this.text="";this.open=TooltipController.I.state.open;this.unsubscribe.push(RouterController.I.subscribeKey("view",()=>{TooltipController.I.hide()}),ModalController.W.subscribeKey("open",modalOpen=>{if(!modalOpen){TooltipController.I.hide()}}),TooltipController.I.subscribeKey("open",tooltipOpen=>{this.open=tooltipOpen}))}disconnectedCallback(){this.unsubscribe.forEach(unsubscribe=>unsubscribe());TooltipController.I.hide()}render(){return(0,lit.qy)`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return(0,lit.qy)`<slot></slot> `}onMouseEnter(){const rect=this.getBoundingClientRect();if(!this.open){TooltipController.I.showTooltip({message:this.text,triggerRect:{width:rect.width,height:rect.height,left:rect.left,top:rect.top},variant:"shade"})}}onMouseLeave(event){if(!this.contains(event.relatedTarget)){TooltipController.I.hide()}}};WuiTooltipTrigger.styles=[styles];__decorate([(0,decorators.MZ)()],WuiTooltipTrigger.prototype,"text",void 0);__decorate([(0,decorators.wk)()],WuiTooltipTrigger.prototype,"open",void 0);WuiTooltipTrigger=__decorate([(0,esm_exports.EM)("w3m-tooltip-trigger")],WuiTooltipTrigger)},777959(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var lit=__webpack_require__(538412);var decorators=__webpack_require__(380226);var if_defined=__webpack_require__(491529);var wui_text=__webpack_require__(243582);var ThemeUtil=__webpack_require__(635686);var WebComponentsUtil=__webpack_require__(995045);var wui_input_text=__webpack_require__(932715);const styles=(0,lit.AH)`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiEmailInput=class WuiEmailInput extends lit.WF{constructor(){super(...arguments);this.disabled=false}render(){return(0,lit.qy)`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,if_defined.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){if(this.errorMessage){return(0,lit.qy)`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`}return null}};WuiEmailInput.styles=[ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)()],WuiEmailInput.prototype,"errorMessage",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiEmailInput.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)()],WuiEmailInput.prototype,"value",void 0);__decorate([(0,decorators.MZ)()],WuiEmailInput.prototype,"tabIdx",void 0);WuiEmailInput=__decorate([(0,WebComponentsUtil.E)("wui-email-input")],WuiEmailInput)},829390(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var lit=__webpack_require__(538412);var decorators=__webpack_require__(380226);var wui_icon=__webpack_require__(751586);var wui_image=__webpack_require__(138922);var wui_text=__webpack_require__(243582);var ThemeUtil=__webpack_require__(635686);var UiHelperUtil=__webpack_require__(79417);var WebComponentsUtil=__webpack_require__(995045);const styles=(0,lit.AH)`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiChip=class WuiChip extends lit.WF{constructor(){super(...arguments);this.variant="fill";this.imageSrc=undefined;this.imageIcon=undefined;this.imageIconSize="md";this.disabled=false;this.icon="externalLink";this.href="";this.text=undefined}render(){const isSmall=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall";const textVariant=isSmall?"small-600":"paragraph-600";return(0,lit.qy)`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${textVariant} color="inherit">
          ${this.title?this.title:UiHelperUtil.Z.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){if(this.imageSrc){return(0,lit.qy)`<wui-image src=${this.imageSrc}></wui-image>`}if(this.imageIcon){return(0,lit.qy)`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`}return null}};WuiChip.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiChip.prototype,"variant",void 0);__decorate([(0,decorators.MZ)()],WuiChip.prototype,"imageSrc",void 0);__decorate([(0,decorators.MZ)()],WuiChip.prototype,"imageIcon",void 0);__decorate([(0,decorators.MZ)()],WuiChip.prototype,"imageIconSize",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiChip.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)()],WuiChip.prototype,"icon",void 0);__decorate([(0,decorators.MZ)()],WuiChip.prototype,"href",void 0);__decorate([(0,decorators.MZ)()],WuiChip.prototype,"text",void 0);WuiChip=__decorate([(0,WebComponentsUtil.E)("wui-chip")],WuiChip)},845665(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var _src_composites_wui_wallet_image_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(143296)},866235(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var lit=__webpack_require__(538412);var decorators=__webpack_require__(380226);var wui_text=__webpack_require__(243582);var ThemeUtil=__webpack_require__(635686);var WebComponentsUtil=__webpack_require__(995045);const styles=(0,lit.AH)`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiSeparator=class WuiSeparator extends lit.WF{constructor(){super(...arguments);this.text=""}render(){return(0,lit.qy)`${this.template()}`}template(){if(this.text){return(0,lit.qy)`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`}return null}};WuiSeparator.styles=[ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)()],WuiSeparator.prototype,"text",void 0);WuiSeparator=__decorate([(0,WebComponentsUtil.E)("wui-separator")],WuiSeparator)},894745(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var _src_components_wui_shimmer_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(135604)},895022(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var lit=__webpack_require__(538412);var decorators=__webpack_require__(380226);var wui_icon=__webpack_require__(751586);var wui_image=__webpack_require__(138922);var wui_text=__webpack_require__(243582);var ThemeUtil=__webpack_require__(635686);var WebComponentsUtil=__webpack_require__(995045);const styles=(0,lit.AH)`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiChipButton=class WuiChipButton extends lit.WF{constructor(){super(...arguments);this.variant="accent";this.imageSrc="";this.disabled=false;this.icon="externalLink";this.size="md";this.text=""}render(){const textVariant=this.size==="sm"?"small-600":"paragraph-600";return(0,lit.qy)`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?(0,lit.qy)`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${textVariant} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};WuiChipButton.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiChipButton.prototype,"variant",void 0);__decorate([(0,decorators.MZ)()],WuiChipButton.prototype,"imageSrc",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiChipButton.prototype,"disabled",void 0);__decorate([(0,decorators.MZ)()],WuiChipButton.prototype,"icon",void 0);__decorate([(0,decorators.MZ)()],WuiChipButton.prototype,"size",void 0);__decorate([(0,decorators.MZ)()],WuiChipButton.prototype,"text",void 0);WuiChipButton=__decorate([(0,WebComponentsUtil.E)("wui-chip-button")],WuiChipButton)},924572(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var lit=__webpack_require__(538412);var decorators=__webpack_require__(380226);var wui_image=__webpack_require__(138922);var ThemeUtil=__webpack_require__(635686);var UiHelperUtil=__webpack_require__(79417);var WebComponentsUtil=__webpack_require__(995045);const styles=(0,lit.AH)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiAvatar=class WuiAvatar extends lit.WF{constructor(){super(...arguments);this.imageSrc=undefined;this.alt=undefined;this.address=undefined;this.size="xl"}render(){this.style.cssText=`\n    --local-width: var(--wui-icon-box-size-${this.size});\n    --local-height: var(--wui-icon-box-size-${this.size});\n    `;return(0,lit.qy)`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc){this.dataset["variant"]="image";return(0,lit.qy)`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`}else if(this.address){this.dataset["variant"]="generated";const cssColors=UiHelperUtil.Z.generateAvatarColors(this.address);this.style.cssText+=`\n ${cssColors}`;return null}this.dataset["variant"]="default";return null}};WuiAvatar.styles=[ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)()],WuiAvatar.prototype,"imageSrc",void 0);__decorate([(0,decorators.MZ)()],WuiAvatar.prototype,"alt",void 0);__decorate([(0,decorators.MZ)()],WuiAvatar.prototype,"address",void 0);__decorate([(0,decorators.MZ)()],WuiAvatar.prototype,"size",void 0);WuiAvatar=__decorate([(0,WebComponentsUtil.E)("wui-avatar")],WuiAvatar)},956561(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var lit=__webpack_require__(538412);var decorators=__webpack_require__(380226);const networkSvgLg=(0,lit.JW)`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var networkMd=__webpack_require__(129193);const networkSvgSm=(0,lit.JW)`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;var wui_icon=__webpack_require__(751586);var wui_image=__webpack_require__(138922);var ThemeUtil=__webpack_require__(635686);var WebComponentsUtil=__webpack_require__(995045);const styles=(0,lit.AH)`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiNetworkImage=class WuiNetworkImage extends lit.WF{constructor(){super(...arguments);this.size="md";this.name="uknown";this.networkImagesBySize={sm:networkSvgSm,md:networkMd.a,lg:networkSvgLg};this.selected=false;this.round=false}render(){if(this.round){this.dataset["round"]="true";this.style.cssText=`\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    `}else{this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `}return(0,lit.qy)`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){if(this.round){return null}return this.networkImagesBySize[this.size]}templateVisual(){if(this.imageSrc){return(0,lit.qy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`}return(0,lit.qy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};WuiNetworkImage.styles=[ThemeUtil.W5,styles];__decorate([(0,decorators.MZ)()],WuiNetworkImage.prototype,"size",void 0);__decorate([(0,decorators.MZ)()],WuiNetworkImage.prototype,"name",void 0);__decorate([(0,decorators.MZ)({type:Object})],WuiNetworkImage.prototype,"networkImagesBySize",void 0);__decorate([(0,decorators.MZ)()],WuiNetworkImage.prototype,"imageSrc",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiNetworkImage.prototype,"selected",void 0);__decorate([(0,decorators.MZ)({type:Boolean})],WuiNetworkImage.prototype,"round",void 0);WuiNetworkImage=__decorate([(0,WebComponentsUtil.E)("wui-network-image")],WuiNetworkImage)},988802(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var lit=__webpack_require__(538412);var decorators=__webpack_require__(380226);var wui_icon=__webpack_require__(751586);var ThemeUtil=__webpack_require__(635686);var WebComponentsUtil=__webpack_require__(995045);const styles=(0,lit.AH)`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiIconButton=class WuiIconButton extends lit.WF{constructor(){super(...arguments);this.text="";this.icon="card"}render(){return(0,lit.qy)`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};WuiIconButton.styles=[ThemeUtil.W5,ThemeUtil.fD,styles];__decorate([(0,decorators.MZ)()],WuiIconButton.prototype,"text",void 0);__decorate([(0,decorators.MZ)()],WuiIconButton.prototype,"icon",void 0);WuiIconButton=__decorate([(0,WebComponentsUtil.E)("wui-icon-button")],WuiIconButton)}}]);