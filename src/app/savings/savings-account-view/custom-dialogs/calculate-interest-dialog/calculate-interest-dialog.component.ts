/** Angular Imports */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

/**
 * Calculate interest dialog component.
 */
@Component({
  selector: 'mifosx-calculate-interest-dialog',
  templateUrl: './calculate-interest-dialog.component.html',
  styleUrls: ['./calculate-interest-dialog.component.scss']
})
export class CalculateInterestDialogComponent {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data savings account id.
   */
  constructor(public dialogRef: MatDialogRef<CalculateInterestDialogComponent>) { }

}
