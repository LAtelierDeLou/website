import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'slider-component',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
    title = 'slider';

    @ViewChild('pictures') pictures: ElementRef;

    constructor() {
    }

    ngAfterViewInit(): void {
        const pictures: any = $(this.pictures.nativeElement);
        pictures.slick({
            fade: true,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false
        });
    }

}
