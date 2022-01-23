import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  routeToPosts(id: number): void {
    this.router.navigate([`${id}/posts`], { relativeTo: this.route });
  }
}
