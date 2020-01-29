import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ContentChild,
  ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None,NAtive
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {
 @Input('srvElement') element: {type: string, name: string, content: string};
 @Input () name: {type: string};
 @ViewChild('heading', {static: true}) header: ElementRef;
 @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
 constructor() { 
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterViewInit() {
    console.log('ngAfterInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log('Text Content paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy() {
    console.log('ngDestroy called')
  }
}
