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
  set _input(input: string) {

    console.log("this.input ", input);

    if (this.input) {
      this.data = JSON.parse(this.input)
    }
  }

  data: any

  clicked = output<void>()

  ngOnInit(): void {

  }

  // select(selection: ListColumnItemModel) {

  //   this.selection.set(selection)

  //   this.selected.emit({ selection })

  //   this.clicked.emit()
  // }
}
