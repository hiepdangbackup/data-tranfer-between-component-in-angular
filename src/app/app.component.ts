import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(ChildComponent) view!: ChildComponent;
  @ViewChild(ChildComponent) viewdata!: ChildComponent;
  inputname = '';
  title = 'parent component';
  inputmark = '';
  inputobj = { name: '', mark: '' };
  response: any;
  TranferData(name: any, mark: any) {
    this.inputname = name;
    this.inputmark = mark;
    this.inputobj = { name: name, mark: mark };
    this.response = this.viewdata.updatelist(this.inputobj);
  }

  UpdateTitle(title: any) {
    this.title = title;
  }
}
