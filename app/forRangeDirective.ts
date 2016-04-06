// import { Directive, Input, TemplateRef, ViewContainerRef, EmbeddedViewRef } from 'angular2/core';
//
// @Directive({
//     selector: '[forRange]'
// })
// export class ForRangeDirective{
//     @Input set forRange(value:number){
//         this.render(value);
//     }
//
//     constructor(private _templateRef:TemplateRef, private _viewContainer:ViewContainerRef){}
//
//     render(range:number){
//         for(let i=0; i< range; i++){
//             var view:EmbeddedViewRef = this._viewContainer.createEmbeddedView(this._templateRef, i);
//             view.setLocal("index", i);
//         }
//     }
// }