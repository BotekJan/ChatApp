import { UserService } from './../user.service';
import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input('buttonText') buttonText = '';
  @Input('createGroup') createGroup = false;

  filteredUsers:any;

  closeResult = '';

  constructor(private modalService: NgbModal, private userService: UserService) {}

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  filterUsernames(model: NgModel){
    this.userService.getFilteredUsers(model.value).pipe(pluck('User')).subscribe(res => this.filteredUsers = res);
  }
}