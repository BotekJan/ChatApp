import { UserService } from './../user.service';
import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgModel, NgForm } from '@angular/forms';
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

    this.filteredUsers = null;
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
    if(model.value !== ""){
      this.userService.getFilteredUsers(model.value).pipe(pluck('Users')).subscribe(res => {this.filteredUsers = res});
    } else {
      this.filteredUsers = null
    }
  }

  onSubmit(form: NgForm){
    if(form.controls.user){
      this.userService.addFriend(form).subscribe(res => console.log(res))
    }
  }

  log(x: any){
    console.log(x)
  }
}