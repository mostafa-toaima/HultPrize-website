import { DataServiceService } from './../../core/services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamData } from '../../core/interfacies/teamData';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  data: TeamData | any;

  constructor(
    private route: ActivatedRoute,
    private _DataServiceService: DataServiceService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id'); // Get the 'id' parameter from the route
      console.log(id);

      if (id) {
        this.data = this._DataServiceService.getDataById(id);
        console.log(this.data);
      }
    });
  }
}
