import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: 'app/events/event-details/event-details.component.html',
  styles: [`
    .container { padding: 0 20px; }
    .event-image { height: 180px; }
  `]
})

export class EventDetailsComponent {
  event:any

  constructor(private eventService:EventService, private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

}
