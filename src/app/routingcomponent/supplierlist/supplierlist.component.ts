import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
// import { visitSiblingRenderNodes } from '@angular/core/src/view/util';
import { User } from '../../_models';
import { UserService } from '../../_services';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
// import { id } from '@swimlane/ngx-datatable/release/utils';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.css']
})
export class SupplierlistComponent implements OnInit {

  // public show:boolean = false;
  currentUser: User;
  checkers: User[] = [];
  checkers1: User[] = [];
  p: number = 1;
  order: string = 'product.name';
  reverse: boolean = false;
  returnUrl: string;
  // fliterText: string= 'admin';
  errorMessage: string;
    _listFilter: string;


    get listFilter(): string{
    return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter= value;
        this.filteredProducts= this._listFilter.length!==0 ? this.performFilter(this._listFilter): this.checkers;
    }
    filteredProducts: User[];
    // products: User[]= [];
  constructor(private userService: UserService, private http: HttpClient, private router: Router, private route: ActivatedRoute,) {  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}
  
  performFilter(filterBy: string): User[]{
    filterBy =filterBy.toLocaleLowerCase();
    return this.checkers.filter((product: User)=>
    product.email.toLocaleLowerCase().indexOf (filterBy) !== -1);
}
  ngOnInit() {


    this.loadsuppliers();

   
      // $('.new').click(function(){
      //   $(this).parents('tr').siblings('tr').toggle();
      //   // alert('hi');
      // });
      $(document).ready(function(){
        console.log("doc ready loading")
        $('body').unbind('click').on("click",".new",function(){
          console.log(this);
          $(this).parents('tr').siblings('tr').toggle();
  
        });
      });
    
    // this.deletevendor();
    // $(document).ready(function(){
    //   $('.flash').click(function(){
    //     // $(this).parents('tr').siblings('tr').toggle();
    //     alert("hi");
    //   });
    // });
  // $(".rowShow").hide();

  // $('.showhide').click(function(){
  //   //alert("clicked");
  //   var row=$(this).parent().parent().next();
  //   $(row).toggle();
  //   $(row).next().toggle();
  // });


  
}
// toggle() {
//   this.show = !this.show;

//   // CHANGE THE NAME OF THE BUTTON.
  
// }
// adddet(event){
//   $(this).parents('tr').siblings('tr').toggle();
//   console.log("clicked");
// }

private loadsuppliers() {
  this.userService.getSupplierlist().pipe(first()).subscribe(result => { 
      this.checkers = result['data']; 
      this.filteredProducts=this.checkers;
        this.checkers1 = result['data'][0]['orgId']['status']; 
      //console.log(result['data']);
       //console.log(result['data'][0]['orgId']['status']);
  });
}
// private deletevendor(){
//   this.userService.deletevendorbyId(id).pipe(first()).subscribe(result => { 
//     // this.checkers = result['data']; 
//     //   this.checkers1 = result['data'][0]['orgId']['status']; 
//     // console.log(result['data']);
//     //  console.log(result['data'][0]['orgId']['status']);
// });
// }
setOrder(value: string) {
  if (this.order === value) {
    this.reverse = !this.reverse;
  }

  this.order = value;
}
appendToContainer(id) {
   console.log(id); 
  // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/addunitarysupplier';
  this.router.navigate(['./addunitarysupplier', id]);
}
// deletevendornew(id){
//   console.log(id);
// }
}
