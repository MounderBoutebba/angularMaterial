import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  answer: string = "mounder";
  answerDisplay: string = "";
  showSpinner: boolean = false;
  notificationBadgeValue: number = 3;
  opened = false;
  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 500);
  }
  sidenavToggle() {
    this.opened = !this.opened;
  }
}
