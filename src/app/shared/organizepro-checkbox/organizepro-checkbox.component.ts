import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * @description Checkbox component
 *
 * @export
 * @class OrganizeproCheckboxComponent
 */
@Component({
  selector: 'organizepro-checkbox',
  templateUrl: './organizepro-checkbox.component.html',
  styleUrl: './organizepro-checkbox.component.scss',
})
export class OrganizeproCheckboxComponent {
  /**
   * Unique ID
   */
  @Input() public id: number = 0;

  /**
   * Emit boolean value if checkbox is checked or not
   */
  @Output() public isChecked: EventEmitter<boolean> = new EventEmitter(false);

  /**
   * @memberof OrganizeproCheckboxComponent
   * @method onChange
   * @description Handles the change event for the checkbox.
   * @param event
   * @return {void}
   */
  public onChange(event: Event): void {
    const eventTarget: HTMLInputElement = event.target as HTMLInputElement;
    this.isChecked.emit(eventTarget.checked);
  }
}
