import { Input, Component } from "@angular/core";

@Component({
  selector: 'session-detail-with-votes',
  templateUrl: './sessionDetailWithVotes.component.html'
})
export class SessionDetailWithVotesComponent {
  @Input() session: any;
}
