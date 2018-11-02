import { Directive, ElementRef, Renderer } from '@angular/core';
// import { opacityFadeOut } from '../opacity-fadeout/opacity-fadeout';

@Directive({
    selector: '[parallax-header]',
    host: {
        '(ionScroll)': 'onContentScroll($event)',
        '(window:resize)': 'onWindowResize($event)'
    }
})
export class ParallaxHeader {

    oldScrollTop = 0;
    headerOpacity: any;
    header: any;
    headerHeight: any;
    translateAmt: any;
    scaleAmt: any;
    opacity: any;
    headerHalf: any;
    constructor(public element: ElementRef, public renderer: Renderer) {
        
    }

    ngOnInit() {
        console.log('parallax test');

        let content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        // this.headerOpacity = content.getElementsByClassName('fadeIn')[0];
        this.header = content.getElementsByClassName('headerImg')[0];
        this.headerHeight = this.header.clientHeight;
        this.headerHalf = this.headerHeight / 2 - 40;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');

    }


    onWindowResize(ev) {
        this.headerHeight = this.header.clientHeight;
    }

    onContentScroll(ev) {

        ev.domWrite(() => {
            this.updateParallaxHeader(ev);
            // this.opacityFadeOut.onContentScroll(ev);
            // this.renderer.setElementStyle(this.header, 'webkitTransform', ' translateZ(0)');




        });

    }

    updateParallaxHeader(ev) {
        // console.log("scrolltop: " + ev.scrollTop);




        if (ev.scrollTop >= 0) {
            if (ev.scrollTop > this.headerHalf && ev.scrolltop != 0) {
                // this.renderer.setElementStyle(this.headerOpacity,'transform', 'translateY(20%)');
                // this.renderer.setElementStyle(this.headerOpacity, 'opacity', '0');
                // this.renderer.setElementClass(this.headerOpacity,'fadeOut',true);
                // this.renderer.setElementStyle(this.headerOpacity, 'visibility', 'hidden');
            } else if (ev.scrollTop < this.headerHalf && ev.scrolltop != 0) {
                // this.renderer.setElementStyle(this.headerOpacity, 'visibility', 'visible');
                // this.renderer.setElementStyle(this.headerOpacity,'transform', 'none');
                // this.renderer.setElementStyle(this.headerOpacity, 'opacity', '1');
                // this.renderer.setElementClass(this.headerOpacity,'fadeOut',false);
            }
            this.translateAmt = ev.scrollTop / 2;
            // this.scaleAmt =2 - ( (ev.scrollTop) / this.headerHeight );
            this.scaleAmt = 1;
            
            this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        } else {

            this.translateAmt = 0;
            this.scaleAmt = (-ev.scrollTop) / this.headerHeight + 1;
            this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        }




    }

}