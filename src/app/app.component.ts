import { Component, Input, OnInit, ViewEncapsulation, input, model, output, signal } from '@angular/core';
import { Data } from './rest-data.constants';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: []
})
export class AppComponent implements OnInit {

  @Input() input = '' 

  data: any

  clicked = output<void>()

  ngOnInit(): void {

    console.log("this.input ", this.input);

    this.data = JSON.parse(this.input)
    
  }

  // select(selection: ListColumnItemModel) {

  //   this.selection.set(selection)

  //   this.selected.emit({ selection })

  //   this.clicked.emit()
  // }
}
