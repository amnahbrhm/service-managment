(self.webpackChunkservice_managment=self.webpackChunkservice_managment||[]).push([[8542,6161],{8542:(O,p,l)=>{l.r(p),l.d(p,{Tooltip:()=>f,TooltipModule:()=>m});var c=l(5315),o=l(5565),i=l(2438),a=l(732),u=l(3766);let f=(()=>{class s{platformId;el;zone;config;renderer;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:(0,a.UniqueComponentId)()+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;interactionInProgress=!1;constructor(t,e,n,r,d,h){this.platformId=t,this.el=e,this.zone=n,this.config=r,this.renderer=d,this.viewContainer=h}ngAfterViewInit(){(0,c.isPlatformBrowser)(this.platformId)&&this.zone.runOutsideAngular(()=>{const t=this.getOption("tooltipEvent");if(("hover"===t||"both"===t)&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),"focus"===t||"both"===t){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let e=this.el.nativeElement.querySelector(".p-component");e||(e=this.getTarget(this.el.nativeElement)),e.addEventListener("focus",this.focusListener),e.addEventListener("blur",this.blurListener)}})}setAriaDescribedBy(){const t=this.getOption("id");t&&this.active&&this.renderer.setAttribute(this.el.nativeElement,"aria-describedby",t)}removeAriaDescribedBy(){this.renderer.removeAttribute(this.el.nativeElement,"aria-describedby")}ngOnChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions={...this._tooltipOptions,...t.tooltipOptions.currentValue},this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){(this.isAutoHide()||!(i.DomHandler.hasClass(t.relatedTarget,"p-tooltip")||i.DomHandler.hasClass(t.relatedTarget,"p-tooltip-text")||i.DomHandler.hasClass(t.relatedTarget,"p-tooltip-arrow")))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()}))}this.interactionInProgress=!0}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),"body"===this.getOption("appendTo")?document.body.appendChild(this.container):"target"===this.getOption("appendTo")?i.DomHandler.appendChild(this.container,this.el.nativeElement):i.DomHandler.appendChild(this.container,this.getOption("appendTo")),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener()),this.setAriaDescribedBy()}bindContainerMouseleaveListener(){this.containerMouseleaveListener||(this.containerMouseleaveListener=this.renderer.listen(this.container??this.container.nativeElement,"mouseleave",e=>{this.deactivate()}))}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){this.getOption("tooltipLabel")&&!this.getOption("disabled")&&(this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&this.align()},100):this.align(),i.DomHandler.fadeIn(this.container,250),"auto"===this.getOption("tooltipZIndex")?a.ZIndexUtils.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener())}hide(){"auto"===this.getOption("tooltipZIndex")&&a.ZIndexUtils.clear(this.container),this.remove()}updateText(){const t=this.getOption("tooltipLabel");if(t instanceof o.TemplateRef){const e=this.viewContainer.createEmbeddedView(t);e.detectChanges(),e.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()))}}getHostOffset(){if("body"===this.getOption("appendTo")||"target"===this.getOption("appendTo")){let t=this.el.nativeElement.getBoundingClientRect();return{left:t.left+i.DomHandler.getWindowScrollLeft(),top:t.top+i.DomHandler.getWindowScrollTop()}}return{left:0,top:0}}alignRight(){this.preAlign("right");const t=this.activeElement,e=this.getHostOffset(),n=e.left+i.DomHandler.getOuterWidth(t),r=e.top+(i.DomHandler.getOuterHeight(t)-i.DomHandler.getOuterHeight(this.container))/2;this.container.style.left=n+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")&&i.DomHandler.findSingle(this.el.nativeElement,".p-component")||this.el.nativeElement}alignLeft(){this.preAlign("left");let t=this.getHostOffset(),e=t.left-i.DomHandler.getOuterWidth(this.container),n=t.top+(i.DomHandler.getOuterHeight(this.el.nativeElement)-i.DomHandler.getOuterHeight(this.container))/2;this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");let t=this.getHostOffset(),e=t.left+(i.DomHandler.getOuterWidth(this.el.nativeElement)-i.DomHandler.getOuterWidth(this.container))/2,n=t.top-i.DomHandler.getOuterHeight(this.container);this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");let t=this.getHostOffset(),e=t.left+(i.DomHandler.getOuterWidth(this.el.nativeElement)-i.DomHandler.getOuterWidth(this.container))/2,n=t.top+i.DomHandler.getOuterHeight(this.el.nativeElement);this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions={...this._tooltipOptions,...t}}getOption(t){return this._tooltipOptions[t]}getTarget(t){return i.DomHandler.hasClass(t,"p-inputwrapper")?i.DomHandler.findSingle(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let e="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?e+" "+this.getOption("tooltipStyleClass"):e}isOutOfBounds(){let t=this.container.getBoundingClientRect(),e=t.top,n=t.left,r=i.DomHandler.getOuterWidth(this.container),d=i.DomHandler.getOuterHeight(this.container),h=i.DomHandler.getViewport();return n+r>h.width||n<0||e<0||e+d>h.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new i.ConnectedOverlayScrollHandler(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){const t=this.getOption("tooltipEvent");if(("hover"===t||"both"===t)&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),"focus"===t||"both"===t){let e=this.el.nativeElement.querySelector(".p-component");e||(e=this.getTarget(this.el.nativeElement))}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&("body"===this.getOption("appendTo")?document.body.removeChild(this.container):"target"===this.getOption("appendTo")?this.el.nativeElement.removeChild(this.container):i.DomHandler.removeChild(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.removeAriaDescribedBy(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),this.container&&a.ZIndexUtils.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(e){return new(e||s)(o.\u0275\u0275directiveInject(o.PLATFORM_ID),o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(o.NgZone),o.\u0275\u0275directiveInject(u.PrimeNGConfig),o.\u0275\u0275directiveInject(o.Renderer2),o.\u0275\u0275directiveInject(o.ViewContainerRef))};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","pTooltip",""]],hostAttrs:[1,"p-element"],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",o.booleanAttribute],showDelay:[2,"showDelay","showDelay",o.numberAttribute],hideDelay:[2,"hideDelay","hideDelay",o.numberAttribute],life:[2,"life","life",o.numberAttribute],positionTop:[2,"positionTop","positionTop",o.numberAttribute],positionLeft:[2,"positionLeft","positionLeft",o.numberAttribute],autoHide:[2,"autoHide","autoHide",o.booleanAttribute],fitContent:[2,"fitContent","fitContent",o.booleanAttribute],hideOnEscape:[2,"hideOnEscape","hideOnEscape",o.booleanAttribute],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[o.\u0275\u0275InputTransformsFeature,o.\u0275\u0275NgOnChangesFeature]})}return s})(),m=(()=>{class s{static \u0275fac=function(e){return new(e||s)};static \u0275mod=o.\u0275\u0275defineNgModule({type:s});static \u0275inj=o.\u0275\u0275defineInjector({imports:[c.CommonModule]})}return s})()}}]);