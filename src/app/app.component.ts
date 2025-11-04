import { Component, Input, OnInit, ViewEncapsulation, computed, input, output } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: []
})
export class AppComponent implements OnInit {

  label = input.required<string>()

  input = input.required<string>()

  data = computed<any>(() => {

    return null 
    // const value = this.input()

    // if (!value) return null

    // return JSON.parse(value)
  })

  clicked = output<void>()

  ngOnInit(): void {

  }

  // select(selection: ListColumnItemModel) {

  //   this.selection.set(selection)

  //   this.selected.emit({ selection })

  //   this.clicked.emit()
  // }
}
