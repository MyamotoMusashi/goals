import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  request = {};
  

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.requestService.getRequestByID(id).subscribe(request => {
      this.request = request;
    });
  }

  ngOnDestroy(){
    console.log(this.request);
  }

  eventOptions: SortablejsOptions = {
    onUpdate: () => {
      
    }
};

  deleteRequestByID() {
    const id = this.route.snapshot.paramMap.get('id')
    this.requestService.deleteRequestByID(id).subscribe(() => {
      this.router.navigateByUrl('/requests')
    })
  }

}
