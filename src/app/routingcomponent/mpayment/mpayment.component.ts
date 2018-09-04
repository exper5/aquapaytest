import { Component, OnInit } from '@angular/core';
import { User } from '../../_models';
import { UserService } from '../../_services';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-mpayment',
  templateUrl: './mpayment.component.html',
  styleUrls: ['./mpayment.component.css']
})
export class MpaymentComponent implements OnInit {
  currentUser: User;
  p: number = 1;
  listofpaymentsarr: User[] = [];
  errorMessage: string;
    _listFilter: string;


    get listFilter(): string{
    return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter= value;
        this.filteredProducts= this._listFilter.length!==0 ? this.performFilter(this._listFilter): this.listofpaymentsarr;
    }
    filteredProducts: User[];
  constructor(private userService: UserService, private http: HttpClient) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}
 
  performFilter(filterBy: string): User[]{
    filterBy =filterBy.toLocaleLowerCase();
    return this.listofpaymentsarr.filter((product: any)=>
    product['vender']['vendorcode'].toLocaleLowerCase().indexOf (filterBy) !== -1);
}
  ngOnInit() {
    //console.log("oninit loading")
    this.listofpayments();

    $(document).ready(function(){
      console.log("doc ready loading")
      $('body').unbind('click').on("click",".new",function(){
       // console.log(this);
        $(this).parents('tr').siblings('tr').toggle();

      });
    });



    // $(".nxt2").click(function () {
    //   $("#reportname").show();
    //   $("#payreport").hide();
    //   $("#lstpaymt").hide();
    //  // $("#myModal").show();
    // });
    //---------------------------------------Datepicker js start--------------------------------------------

    // $('.from').datepicker({
    //   autoclose: true,
    //   minViewMode: 1,
    //   format: 'M'
    // }).on('changeDate', function (selected) {
    //   var startDate = new Date(selected.date.valueOf());
    //   startDate.getDate();
    // });
    
    // $('.example1').datepicker({
    //   autoclose: true,
    //   format: "dd M yy"
    // });
//---------------------------------------Datepicker js END-------------------------------------------
      //---------------------------------------check box js -------------------------------------------
  
  // $(".place").click(function () {
  //   $(this).toggleClass("green");
  // });


  //---------------------------------------check box js edn-------------------------------------------
  
  //---------------------------------------Prevent anchor default action-------------------------------------------
  
  
  $('.dropdown-menuu').on('click', function (e) {
    if ($(this).hasClass('dropdown-menuu')) {
        e.stopPropagation();
    }
  });
  
  //---------------------------------------Prevent anchor default action-------------------------------------------
  
//---------------------------------------toggle class for table collapse-------------------------------------------
// $(".rowShow").hide();

// $('.showhide').click(function(){
//   //alert("clicked");
//   var row=$(this).parent().parent().next();
//   $(row).toggle();
//   $(row).next().toggle();
// });

//---------------------------------------toggle class for table collapse-------------------------------------------
//nav active

//------------------pagignation strt--------------------------
// $(".one a").on("click", function () {
//   $(".one").addClass("active");
//   $(".one").siblings(".active").removeClass("active");
// });

// $(".two a").on("click", function () {
//   $(".two").addClass("active");
//   $(".two").siblings(".active").removeClass("active");
// });

// $(".three a").on("click", function () {
//   $(".three").addClass("active");
//   $(".three").siblings(".active").removeClass("active");
// });
//------------------page end----------------------------------
//-----------------on click all row select---------------------------------------------------------

$(" input[name='mainmenu']").click(function(){
  var  is_checked=$(this).is(":checked");
    $("input[name='submenu']").prop("checked",is_checked);
});
//-----------------------------on click all row select-----------------------------------------------------
  }

  private listofpayments() {
    this.userService.listofpaymentsall().pipe(first()).subscribe(result => { 
        // this.payments = result['data']; 
       
        this.listofpaymentsarr = result['data'];
        this.filteredProducts=this.listofpaymentsarr;
          console.log(this.filteredProducts);
        
    });
  }
}
