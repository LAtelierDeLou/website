import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'creations-component',
    templateUrl: './creations.component.html',
    styleUrls: ['./creations.component.css']
})
export class CreationsComponent implements AfterViewInit {

    @ViewChild('products') products: ElementRef;

    constructor() {
    }

    ngAfterViewInit(): void {
        const products: any = window['$'](this.products.nativeElement);
        products.slick({
            infinite: true,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        });
    }

}
