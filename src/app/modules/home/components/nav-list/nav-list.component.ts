import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILinkItem, IUser } from 'src/app/models';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})

export class NavListComponent {
  @Input() public user: IUser = {
    username: '',
    password: ''
  };

  @Output() navigate = new EventEmitter<void>();

  public links: ILinkItem[] = [
    { label: 'Product', icon: 'inventory_2', url: 'product' },
    { label: 'Customer', icon: 'account_box', url: 'customer' }
  ];

  public onNavigate(): void {
    this.navigate.emit();
  }

  constructor() { }
}
