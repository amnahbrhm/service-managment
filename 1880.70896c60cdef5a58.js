(self.webpackChunkservice_managment=self.webpackChunkservice_managment||[]).push([[1880],{1880:(l,n,o)=>{o.r(n),o.d(n,{AutoFocus:()=>i,AutoFocusModule:()=>f});var a=o(5315),t=o(5565),c=o(2438);let i=(()=>{class e{autofocus=!1;focused=!1;platformId=(0,t.inject)(t.PLATFORM_ID);document=(0,t.inject)(a.DOCUMENT);host=(0,t.inject)(t.ElementRef);ngAfterContentChecked(){!1===this.autofocus?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){(0,a.isPlatformBrowser)(this.platformId)&&this.autofocus&&setTimeout(()=>{const s=c.DomHandler.getFocusableElements(this.host?.nativeElement);0===s.length&&this.host.nativeElement.focus(),s.length>0&&s[0].focus(),this.focused=!0})}static \u0275fac=function(u){return new(u||e)};static \u0275dir=t.\u0275\u0275defineDirective({type:e,selectors:[["","pAutoFocus",""]],hostAttrs:[1,"p-element"],inputs:{autofocus:[2,"autofocus","autofocus",t.booleanAttribute]},standalone:!0,features:[t.\u0275\u0275InputTransformsFeature]})}return e})(),f=(()=>{class e{static \u0275fac=function(u){return new(u||e)};static \u0275mod=t.\u0275\u0275defineNgModule({type:e});static \u0275inj=t.\u0275\u0275defineInjector({})}return e})()}}]);