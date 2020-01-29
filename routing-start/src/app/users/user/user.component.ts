import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],//only for first initializatiion and if component is always recreated else change won't be reflected
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription = this.route.params //triggered whenever any changes is made.
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      )
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();//good practice
 }

}
