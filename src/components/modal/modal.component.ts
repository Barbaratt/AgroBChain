import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogData } from '../login/login.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  public close(): void {
    this.dialogRef.close();
  }

  public pageToSeller(): void {
    this.router.navigate(['/']);
    this.dialogRef.close();
  }
  public pageToFarmer(): void {
    this.router.navigate(['/new-farmer']);
    this.dialogRef.close();
  }
  public pageToBusiness(): void {
    this.router.navigate(['/']);
    this.dialogRef.close();
  }
}
