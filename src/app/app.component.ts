import { Component, OnInit, ViewEncapsulation, computed, input, output } from '@angular/core';
import { ListColumnItemModel } from '@zyllio/zy-sdk';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: []
})
export class AppComponent {

  label = input.required<string>()

  input = input.required<string>()

  data = computed<any>(() => {

    const value = this.input()

    if (!value) return null

    return JSON.parse(value)
  })

  clicked = output<void>()


  // select(selection: ListColumnItemModel) {

  //   this.selection.set(selection)

  //   this.selected.emit({ selection })

  //   this.clicked.emit()
  // }
}
