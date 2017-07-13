import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
  template: `
  <div>
    <h2>Upcoming Angular 2 Events</h2>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {
  events:any[]

  constructor(private eventService: EventService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

  handleThumbClick(eventName) {
    this.toastr.success(eventName)
  }
}
