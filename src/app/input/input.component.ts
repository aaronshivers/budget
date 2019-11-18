import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  expenseForm = new FormGroup({
    amount: new FormControl(''),
    description: new FormControl('')
  });
  isExpense = true;

  constructor() { }

  ngOnInit() {
  }

  onToggleExpense() {
    this.isExpense = !this.isExpense;
  }
}
