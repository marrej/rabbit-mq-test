import {Component, OnInit} from '@angular/core';
import {RabbitHelperService} from "./rabbit-helper.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rabbit-test';

  constructor(
    private rabbitHelper: RabbitHelperService
  ) {
  }

  public ngOnInit(): void {
    this.rabbitHelper.init();
    // TODO: initialise the connection to RABBIT-MQ & subscribe
  }

  public sendMessageToQueue(): void {
    console.log('This should trigger message');
  }
}
