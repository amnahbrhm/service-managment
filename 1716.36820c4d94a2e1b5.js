(self.webpackChunkservice_managment=self.webpackChunkservice_managment||[]).push([[1716],{9335:(Z,f,a)=>{a.r(f),a.d(f,{OVERLAY_VALUE_ACCESSOR:()=>g,Overlay:()=>_,OverlayModule:()=>k});var l=a(6897),d=a(5315),t=a(5565),O=a(3793),p=a(3766),r=a(2438),c=a(732);const C=["overlay"],b=["content"],E=["*"],x=(n,h,e,i,s,o,v,y,m,u,H,V,j,P)=>({"p-overlay p-component":!0,"p-overlay-modal p-component-overlay p-component-overlay-enter":n,"p-overlay-center":h,"p-overlay-top":e,"p-overlay-top-start":i,"p-overlay-top-end":s,"p-overlay-bottom":o,"p-overlay-bottom-start":v,"p-overlay-bottom-end":y,"p-overlay-left":m,"p-overlay-left-start":u,"p-overlay-left-end":H,"p-overlay-right":V,"p-overlay-right-start":j,"p-overlay-right-end":P}),D=(n,h,e)=>({showTransitionParams:n,hideTransitionParams:h,transform:e}),T=n=>({value:"visible",params:n}),w=n=>({mode:n}),S=n=>({$implicit:n});function L(n,h){1&n&&t.\u0275\u0275elementContainer(0)}function R(n,h){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",3,1),t.\u0275\u0275listener("click",function(s){t.\u0275\u0275restoreView(e);const o=t.\u0275\u0275nextContext(2);return t.\u0275\u0275resetView(o.onOverlayContentClick(s))})("@overlayContentAnimation.start",function(s){t.\u0275\u0275restoreView(e);const o=t.\u0275\u0275nextContext(2);return t.\u0275\u0275resetView(o.onOverlayContentAnimationStart(s))})("@overlayContentAnimation.done",function(s){t.\u0275\u0275restoreView(e);const o=t.\u0275\u0275nextContext(2);return t.\u0275\u0275resetView(o.onOverlayContentAnimationDone(s))}),t.\u0275\u0275projection(2),t.\u0275\u0275template(3,L,1,0,"ng-container",4),t.\u0275\u0275elementEnd()}if(2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275classMap(e.contentStyleClass),t.\u0275\u0275property("ngStyle",e.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",t.\u0275\u0275pureFunction1(11,T,t.\u0275\u0275pureFunction3(7,D,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngTemplateOutlet",e.contentTemplate)("ngTemplateOutletContext",t.\u0275\u0275pureFunction1(15,S,t.\u0275\u0275pureFunction1(13,w,e.overlayMode)))}}function I(n,h){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",3,0),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.onOverlayClick())}),t.\u0275\u0275template(2,R,4,17,"div",2),t.\u0275\u0275elementEnd()}if(2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275classMap(e.styleClass),t.\u0275\u0275property("ngStyle",e.style)("ngClass",t.\u0275\u0275pureFunctionV(5,x,[e.modal,e.modal&&"center"===e.overlayResponsiveDirection,e.modal&&"top"===e.overlayResponsiveDirection,e.modal&&"top-start"===e.overlayResponsiveDirection,e.modal&&"top-end"===e.overlayResponsiveDirection,e.modal&&"bottom"===e.overlayResponsiveDirection,e.modal&&"bottom-start"===e.overlayResponsiveDirection,e.modal&&"bottom-end"===e.overlayResponsiveDirection,e.modal&&"left"===e.overlayResponsiveDirection,e.modal&&"left-start"===e.overlayResponsiveDirection,e.modal&&"left-end"===e.overlayResponsiveDirection,e.modal&&"right"===e.overlayResponsiveDirection,e.modal&&"right-start"===e.overlayResponsiveDirection,e.modal&&"right-end"===e.overlayResponsiveDirection])),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",e.visible)}}const g={provide:O.NG_VALUE_ACCESSOR,useExisting:(0,t.forwardRef)(()=>_),multi:!0},A=(0,l.animation)([(0,l.style)({transform:"{{transform}}",opacity:0}),(0,l.animate)("{{showTransitionParams}}")]),M=(0,l.animation)([(0,l.animate)("{{hideTransitionParams}}",(0,l.style)({transform:"{{transform}}",opacity:0}))]);let _=(()=>{class n{document;platformId;el;renderer;config;overlayService;cd;zone;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return c.ObjectUtils.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return c.ObjectUtils.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return c.ObjectUtils.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return c.ObjectUtils.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){const e=this._target||this.overlayOptions?.target;return void 0===e?"@prev":e}set target(e){this._target=e}get appendTo(){return this._appendTo||this.overlayOptions?.appendTo}set appendTo(e){this._appendTo=e}get autoZIndex(){const e=this._autoZIndex||this.overlayOptions?.autoZIndex;return void 0===e||e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){const e=this._baseZIndex||this.overlayOptions?.baseZIndex;return void 0===e?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){const e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return void 0===e?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){const e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return void 0===e?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}visibleChange=new t.EventEmitter;onBeforeShow=new t.EventEmitter;onShow=new t.EventEmitter;onBeforeHide=new t.EventEmitter;onHide=new t.EventEmitter;onAnimationStart=new t.EventEmitter;onAnimationDone=new t.EventEmitter;templates;overlayViewChild;contentViewChild;contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_appendTo;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if((0,d.isPlatformBrowser)(this.platformId))return"modal"===this.mode||this.overlayResponsiveOptions&&this.window?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return{...this.config?.overlayOptions,...this.options}}get overlayResponsiveOptions(){return{...this.overlayOptions?.responsive,...this.responsive}}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return r.DomHandler.getTargetElement(this.target,this.el?.nativeElement)}constructor(e,i,s,o,v,y,m,u){this.document=e,this.platformId=i,this.el=s,this.renderer=o,this.config=v,this.overlayService=y,this.cd=m,this.zone=u,this.window=this.document.defaultView}ngAfterContentInit(){this.templates?.forEach(e=>{e.getType(),this.contentTemplate=e.template})}show(e,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&r.DomHandler.focus(this.targetEl),this.modal&&r.DomHandler.addClass(this.document?.body,"p-overflow-hidden")}hide(e,i=!1){this.visible&&(this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&r.DomHandler.focus(this.targetEl),this.modal&&r.DomHandler.removeClass(this.document?.body,"p-overflow-hidden"))}alignOverlay(){!this.modal&&r.DomHandler.alignOverlay(this.overlayEl,this.targetEl,this.appendTo)}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&c.ZIndexUtils.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),r.DomHandler.appendOverlay(this.overlayEl,"body"===this.appendTo?this.document.body:this.appendTo,this.appendTo),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&r.DomHandler.addClass(this.overlayEl,"p-component-overlay-leave")}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){const i=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.visible&&this.show(i,!0),this.bindListeners();break;case"void":if(!this.visible){this.hide(i,!0),this.modalVisible=!1,this.unbindListeners(),r.DomHandler.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),c.ZIndexUtils.clear(i),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",e)}handleEvents(e,i){this[e].emit(i),this.options&&this.options[e]&&this.options[e](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](i)}bindListeners(){this.unbindListeners(),this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new r.ConnectedOverlayScrollHandler(this.targetEl,e=>{(!this.listener||this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{const s=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target))||this.isOverlayContentClicked);(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:3!==e.which&&s}):s)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!r.DomHandler.isTouchDevice()}):!r.DomHandler.isTouchDevice())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.window,"keydown",e=>{!1!==this.overlayOptions.hideOnEscape&&"Escape"===e.code&&(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!r.DomHandler.isTouchDevice()}):!r.DomHandler.isTouchDevice())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&(r.DomHandler.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),c.ZIndexUtils.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static \u0275fac=function(i){return new(i||n)(t.\u0275\u0275directiveInject(d.DOCUMENT),t.\u0275\u0275directiveInject(t.PLATFORM_ID),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.Renderer2),t.\u0275\u0275directiveInject(p.PrimeNGConfig),t.\u0275\u0275directiveInject(p.OverlayService),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(t.NgZone))};static \u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["p-overlay"]],contentQueries:function(i,s,o){if(1&i&&t.\u0275\u0275contentQuery(o,p.PrimeTemplate,4),2&i){let v;t.\u0275\u0275queryRefresh(v=t.\u0275\u0275loadQuery())&&(s.templates=v)}},viewQuery:function(i,s){if(1&i&&(t.\u0275\u0275viewQuery(C,5),t.\u0275\u0275viewQuery(b,5)),2&i){let o;t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(s.overlayViewChild=o.first),t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(s.contentViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",appendTo:"appendTo",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options"},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[t.\u0275\u0275ProvidersFeature([g])],ngContentSelectors:E,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"click","ngStyle","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,s){1&i&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275template(0,I,3,20,"div",2)),2&i&&t.\u0275\u0275property("ngIf",s.modalVisible)},dependencies:[d.NgClass,d.NgIf,d.NgTemplateOutlet,d.NgStyle],styles:["@layer primeng{.p-overlay{position:absolute;top:0;left:0}.p-overlay-modal{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%}.p-overlay-content{transform-origin:inherit}.p-overlay-modal>.p-overlay-content{z-index:1;width:90%}.p-overlay-top{align-items:flex-start}.p-overlay-top-start{align-items:flex-start;justify-content:flex-start}.p-overlay-top-end{align-items:flex-start;justify-content:flex-end}.p-overlay-bottom{align-items:flex-end}.p-overlay-bottom-start{align-items:flex-end;justify-content:flex-start}.p-overlay-bottom-end{align-items:flex-end;justify-content:flex-end}.p-overlay-left{justify-content:flex-start}.p-overlay-left-start{justify-content:flex-start;align-items:flex-start}.p-overlay-left-end{justify-content:flex-start;align-items:flex-end}.p-overlay-right{justify-content:flex-end}.p-overlay-right-start{justify-content:flex-end;align-items:flex-start}.p-overlay-right-end{justify-content:flex-end;align-items:flex-end}}\n"],encapsulation:2,data:{animation:[(0,l.trigger)("overlayContentAnimation",[(0,l.transition)(":enter",[(0,l.useAnimation)(A)]),(0,l.transition)(":leave",[(0,l.useAnimation)(M)])])]},changeDetection:0})}return n})(),k=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=t.\u0275\u0275defineNgModule({type:n});static \u0275inj=t.\u0275\u0275defineInjector({imports:[d.CommonModule,p.SharedModule,p.SharedModule]})}return n})()}}]);