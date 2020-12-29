import { Component } from '@angular/core';
import { Auth, PubSub } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amplify-app';
  constructor(){
    Auth.currentCredentials().then((info) => {
      console.log(info);
    });
  }

  offLight(){
    this.sendCommand('off');
  }

  onLight(){
    this.sendCommand('Y');
  }

  async sendCommand(command){
    await PubSub.publish('esp32/sub', { message: command });
  }
}
