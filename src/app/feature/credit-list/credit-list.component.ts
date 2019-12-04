import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/service/credit.service';
import { Credit } from 'src/app/model/credit.class';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent extends BaseComponent implements OnInit {
  title: string= "Credits";
  credits: Credit [] =[];


  constructor(private CreditSvc: CreditService) {
    super();
   }

  ngOnInit() {
    console.log("Calling credits..");
    this.CreditSvc.list().subscribe(jr=> {
      console.log("jr:", jr);
      this.credits =jr.data as Credit[];
      console.log("credits", this.credits);
        });

  }

}
