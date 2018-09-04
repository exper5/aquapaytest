import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routing,routes} from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './supportingcomponents/home/home.component';
import { CardsliderComponent } from './supportingcomponents/cardslider/cardslider.component';
import { PaystatusComponent } from './supportingcomponents/paystatus/paystatus.component';
import { DatepickerComponent } from './supportingcomponents/datepicker/datepicker.component';
import { SupstatusComponent } from './supportingcomponents/supstatus/supstatus.component';
import { ToppaymentComponent } from './supportingcomponents/toppayment/toppayment.component';
import { CardactivityComponent } from './supportingcomponents/cardactivity/cardactivity.component';
import { LastpaymentComponent } from './supportingcomponents/lastpayment/lastpayment.component';
import { Routes,RouterModule} from '@angular/router';
import { DashboardComponent } from './routingcomponent/dashboard/dashboard.component';
import { AddunitarysupplierComponent } from './routingcomponent/addunitarysupplier/addunitarysupplier.component';
import { FileuploadComponent } from './supportingcomponents/fileupload/fileupload.component';
import { ListpaymentComponent } from './routingcomponent/listpayment/listpayment.component';
import { CheckboxComponent } from './supportingcomponents/checkbox/checkbox.component';
import { FaqComponent } from './supportingcomponents/faq/faq.component';
import { ReportnameComponent } from './supportingcomponents/reportname/reportname.component';
import { MakeunitarypaymentComponent } from './routingcomponent/makeunitarypayment/makeunitarypayment.component';
import { PaysliderComponent } from './supportingcomponents/payslider/payslider.component';
import { NavfilterComponent } from './supportingcomponents/navfilter/navfilter.component';
import { PaycardtabComponent } from './supportingcomponents/paycardtab/paycardtab.component';
import { PaginationComponent } from './supportingcomponents/pagination/pagination.component';
import { PaymentreviewdetalsComponent } from './supportingcomponents/paymentreviewdetals/paymentreviewdetals.component';
import { RulevalidatorComponent } from './supportingcomponents/rulevalidator/rulevalidator.component';
import { CardsComponent } from './supportingcomponents/cards/cards.component';
import { MyprofileComponent } from './supportingcomponents/myprofile/myprofile.component';
import { ContactusComponent } from './supportingcomponents/contactus/contactus.component';
import { NotificationmatrixComponent } from './supportingcomponents/notificationmatrix/notificationmatrix.component';
import { MakebulkpaymentComponent } from './routingcomponent/makebulkpayment/makebulkpayment.component';
import { PaymentreviewuploadedfileComponent } from './supportingcomponents/paymentreviewuploadedfile/paymentreviewuploadedfile.component';
import { SelectcardComponent } from './supportingcomponents/selectcard/selectcard.component';
import { AddbulksuppierComponent } from './routingcomponent/addbulksuppier/addbulksuppier.component';
import { SupplierreviewdetailsComponent } from './supportingcomponents/supplierreviewdetails/supplierreviewdetails.component';
import { SupplierlistComponent } from './routingcomponent/supplierlist/supplierlist.component';
import { SuppliersreportComponent } from './supportingcomponents/suppliersreport/suppliersreport.component';
import { SelectcarddetailsComponent } from './supportingcomponents/selectcarddetails/selectcarddetails.component';
import { MakernavigationComponent } from './supportingcomponents/makernavigation/makernavigation.component';
import { AsnavComponent } from './supportingcomponents/asnav/asnav.component';
import { AsorganisationComponent } from './asroutingcomponent/asorganisation/asorganisation.component';
import { MasterComponent } from './master/master.component';
import { AsnotificationmatrixComponent } from './asroutingcomponent/asnotificationmatrix/asnotificationmatrix.component';
import { AscontactusComponent } from './asroutingcomponent/ascontactus/ascontactus.component';
import { AsmyprofileComponent } from './asroutingcomponent/asmyprofile/asmyprofile.component';
import { AsfaqComponent } from './asroutingcomponent/asfaq/asfaq.component';
import { AsapprovecardComponent } from './supportingcomponents/asapprovecard/asapprovecard.component';
import { AsgrouplistComponent } from './asroutingcomponent/asgrouplist/asgrouplist.component';
import { AsgroupspendingComponent } from './asroutingcomponent/asgroupspending/asgroupspending.component';
import { AsgroupsuccessmsgComponent } from './supportingcomponents/asgroupsuccessmsg/asgroupsuccessmsg.component';
import { AsviewrulesComponent } from './asroutingcomponent/asviewrules/asviewrules.component';
import { AsrulevalidationComponent } from './asroutingcomponent/asrulevalidation/asrulevalidation.component';
import { AsrulesucessmsgComponent } from './supportingcomponents/asrulesucessmsg/asrulesucessmsg.component';
import { AsapproveotpComponent } from './supportingcomponents/asapproveotp/asapproveotp.component';
import { AsuserlistComponent } from './asroutingcomponent/asuserlist/asuserlist.component';
import { AscardsuccessComponent } from './supportingcomponents/ascardsuccess/ascardsuccess.component';
import { AscardsComponent } from './asroutingcomponent/ascards/ascards.component';
import { AspendingusersComponent } from './supportingcomponents/aspendingusers/aspendingusers.component';
import { AsuserapprovemsgComponent } from './supportingcomponents/asuserapprovemsg/asuserapprovemsg.component';
import { AsuserslistreportComponent } from './supportingcomponents/asuserslistreport/asuserslistreport.component';
import { AssuppliersComponent } from './asroutingcomponent/assuppliers/assuppliers.component';
import { AsreviewcardComponent } from './asroutingcomponent/asreviewcard/asreviewcard.component';
import { MfaqComponent } from './routingcomponent/mfaq/mfaq.component';
import { MmyprofileComponent } from './routingcomponent/mmyprofile/mmyprofile.component';
import { MnotificationmatrixComponent } from './routingcomponent/mnotificationmatrix/mnotificationmatrix.component';
import { McontactusComponent } from './routingcomponent/mcontactus/mcontactus.component';
import { McardsComponent } from './routingcomponent/mcards/mcards.component';
import { MrulevalidationComponent } from './routingcomponent/mrulevalidation/mrulevalidation.component';
import { AsdashboardComponent } from './asroutingcomponent/asdashboard/asdashboard.component';
import { AshomeComponent } from './supportingcomponents/ashome/ashome.component';
import { AscardsliderComponent } from './supportingcomponents/ascardslider/ascardslider.component';
import { AscardactivityComponent } from './supportingcomponents/ascardactivity/ascardactivity.component';
import { AstopcardactivityComponent } from './supportingcomponents/astopcardactivity/astopcardactivity.component';
import { AspaymentsComponent } from './asroutingcomponent/aspayments/aspayments.component';
import { MpaymentComponent } from './routingcomponent/mpayment/mpayment.component';
import { AsreportnameComponent } from './supportingcomponents/asreportname/asreportname.component';
import { MreportnameComponent } from './supportingcomponents/mreportname/mreportname.component';
import { AssuppliersreportComponent } from './supportingcomponents/assuppliersreport/assuppliersreport.component';
import { MsuppliersreportComponent } from './supportingcomponents/msuppliersreport/msuppliersreport.component';
import { AsnpendingusersComponent } from './asroutingcomponent/asnpendingusers/asnpendingusers.component';
import { CheckernavigationComponent } from './supportingcomponents/checkernavigation/checkernavigation.component';
import { CrulevalidationComponent } from './chroutingcomponents/crulevalidation/crulevalidation.component';
import { AslastpaymentComponent } from './asroutingcomponent/aslastpayment/aslastpayment.component';
import { ChdashboardComponent } from './chroutingcomponents/chdashboard/chdashboard.component';
import { ChhomeComponent } from './supportingcomponents/chhome/chhome.component';
import { ChpaystatusComponent } from './supportingcomponents/chpaystatus/chpaystatus.component';
import { ChsuprequestComponent } from './supportingcomponents/chsuprequest/chsuprequest.component';
import { ChcardsliderComponent } from './supportingcomponents/chcardslider/chcardslider.component';
import { ChpaymentComponent } from './chroutingcomponents/chpayment/chpayment.component';
import { ChreportnameComponent } from './supportingcomponents/chreportname/chreportname.component';
import { ChpendingpaymentComponent } from './chroutingcomponents/chpendingpayment/chpendingpayment.component';
import { ChreviewpaymentComponent } from './supportingcomponents/chreviewpayment/chreviewpayment.component';
import { ChpaymentsuccessmsgComponent } from './supportingcomponents/chpaymentsuccessmsg/chpaymentsuccessmsg.component';
import { ChcardsComponent } from './chroutingcomponents/chcards/chcards.component';
import { ChfaqComponent } from './chroutingcomponents/chfaq/chfaq.component';
import { ChmyprofileComponent } from './chroutingcomponents/chmyprofile/chmyprofile.component';
import { ChcontactusComponent } from './chroutingcomponents/chcontactus/chcontactus.component';
import { ChnotificationComponent } from './chroutingcomponents/chnotification/chnotification.component';
import { ChlastpaymentComponent } from './supportingcomponents/chlastpayment/chlastpayment.component';
import { ChsupplierlistComponent } from './chroutingcomponents/chsupplierlist/chsupplierlist.component';
import { ChsupplierreportComponent } from './supportingcomponents/chsupplierreport/chsupplierreport.component';
import {FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import { CanavigationComponent } from './supportingcomponents/canavigation/canavigation.component';
import { CadashboardComponent } from './caroutingcomponent/cadashboard/cadashboard.component';
import { CahomeComponent } from './supportingcomponents/cahome/cahome.component';
import { CalastpaymentComponent } from './supportingcomponents/calastpayment/calastpayment.component';
import { CacardsliderComponent } from './supportingcomponents/cacardslider/cacardslider.component';
import { CaorganisationComponent } from './caroutingcomponent/caorganisation/caorganisation.component';
import { Caorganisation2Component } from './supportingcomponents/caorganisation2/caorganisation2.component';
import { CamyprofileComponent } from './caroutingcomponent/camyprofile/camyprofile.component';
import { CacontactusComponent } from './caroutingcomponent/cacontactus/cacontactus.component';
import { CanotificationmatrixComponent } from './caroutingcomponent/canotificationmatrix/canotificationmatrix.component';
import { CafaqComponent } from './caroutingcomponent/cafaq/cafaq.component';
import { CacardsComponent } from './caroutingcomponent/cacards/cacards.component';
import { CaaddcardsComponent } from './supportingcomponents/caaddcards/caaddcards.component';
import { CaaddcardsuccessmsgComponent } from './supportingcomponents/caaddcardsuccessmsg/caaddcardsuccessmsg.component';
import { CagroupsComponent } from './caroutingcomponent/cagroups/cagroups.component';
import { CarulevalidationComponent } from './caroutingcomponent/carulevalidation/carulevalidation.component';
import { CapaymentComponent } from './caroutingcomponent/capayment/capayment.component';
import { CaviewgroupsComponent } from './caroutingcomponent/caviewgroups/caviewgroups.component';
import { GrouplistComponent } from './supportingcomponents/grouplist/grouplist.component';
import { CacreateruleComponent } from './caroutingcomponent/cacreaterule/cacreaterule.component';
import { CareportnameComponent } from './supportingcomponents/careportname/careportname.component';
import { CasupplierComponent } from './caroutingcomponent/casupplier/casupplier.component';
import { CasuppliersreportComponent } from './supportingcomponents/casuppliersreport/casuppliersreport.component';
import { CauserlistComponent } from './caroutingcomponent/causerlist/causerlist.component';
import { CaaddunitaryuserComponent } from './caroutingcomponent/caaddunitaryuser/caaddunitaryuser.component';
import { CauserreviewdetailsComponent } from './supportingcomponents/causerreviewdetails/causerreviewdetails.component';
import { CauserreportComponent } from './supportingcomponents/causerreport/causerreport.component';
import { CaaddbulkusersComponent } from './caroutingcomponent/caaddbulkusers/caaddbulkusers.component';
import { CareviewusersComponent } from './supportingcomponents/careviewusers/careviewusers.component';
import { UserreportsComponent } from './supportingcomponents/userreports/userreports.component';
import { AsuserreportComponent } from './supportingcomponents/asuserreport/asuserreport.component';
import { ChpendingsupplierComponent } from './chroutingcomponents/chpendingsupplier/chpendingsupplier.component';
import { ChreviewsupplierComponent } from './supportingcomponents/chreviewsupplier/chreviewsupplier.component';
import { ChsuppliersuccessComponent } from './chsuppliersuccess/chsuppliersuccess.component';
import { WorkflowService } from './workflow/workflow.service';
import {DataTableModule} from "angular-6-datatable";
import { FormDataService } from './data/formData.service';
import { ResultComponent } from './result/result.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserService, AuthenticationService, AlertService } from './_services';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './_helpers';
import { OwlModule } from 'ngx-owl-carousel';
import { SuccesspageComponent } from './successpage/successpage.component';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HighchartsChartModule } from 'highcharts-angular';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgSelectModule } from '@ng-select/ng-select';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsliderComponent,
    PaystatusComponent,
    DatepickerComponent,
    SupstatusComponent,
    ToppaymentComponent,
    CardactivityComponent,
    LastpaymentComponent,
    DashboardComponent,
    AddunitarysupplierComponent,
    FileuploadComponent,
    ListpaymentComponent,
    CheckboxComponent,
    FaqComponent,
    ReportnameComponent,
    MakeunitarypaymentComponent,
    PaysliderComponent,
    NavfilterComponent,
    PaycardtabComponent,
    PaginationComponent,
    PaymentreviewdetalsComponent,
    RulevalidatorComponent,
    CardsComponent,
    MyprofileComponent,
    ContactusComponent,
    NotificationmatrixComponent,
    MakebulkpaymentComponent,
    PaymentreviewuploadedfileComponent,
    SelectcardComponent,
    AddbulksuppierComponent,
    SupplierreviewdetailsComponent,
    SupplierlistComponent,
    SuppliersreportComponent,
    SelectcarddetailsComponent,
    MakernavigationComponent,
    AsnavComponent,
    AsorganisationComponent,
    MasterComponent,
    AsnotificationmatrixComponent,
    AscontactusComponent,
    AsmyprofileComponent,
    AsfaqComponent,
    AsapprovecardComponent,
    AsgrouplistComponent,
    AsgroupspendingComponent,
    AsgroupsuccessmsgComponent,
    AsviewrulesComponent,
    AsrulevalidationComponent,
    AsrulesucessmsgComponent,
    AsapproveotpComponent,
    AsuserlistComponent,
    AscardsuccessComponent,
    AscardsComponent,
    AspendingusersComponent,
    AsuserapprovemsgComponent,
    AsuserslistreportComponent,
    AssuppliersComponent,
    AsreviewcardComponent,
    MfaqComponent,
    MmyprofileComponent,
    MnotificationmatrixComponent,
    McontactusComponent,
    McardsComponent,
    MrulevalidationComponent,
    AsdashboardComponent,
    AshomeComponent,
    AscardsliderComponent,
    AscardactivityComponent,
    AstopcardactivityComponent,
    AspaymentsComponent,
    MpaymentComponent,
    AsreportnameComponent,
    MreportnameComponent,
    AssuppliersreportComponent,
    MsuppliersreportComponent,
    AsnpendingusersComponent,
    CheckernavigationComponent,
    CrulevalidationComponent,
    AslastpaymentComponent,
    ChdashboardComponent,
    ChhomeComponent,
    ChpaystatusComponent,
    ChsuprequestComponent,
    ChcardsliderComponent,
    ChpaymentComponent,
    ChreportnameComponent,
    ChpendingpaymentComponent,
    ChreviewpaymentComponent,
    ChpaymentsuccessmsgComponent,
    ChcardsComponent,
    ChfaqComponent,
    ChmyprofileComponent,
    ChcontactusComponent,
    ChnotificationComponent,
    ChlastpaymentComponent,
    ChsupplierlistComponent,
    ChsupplierreportComponent,
    CanavigationComponent,
    CadashboardComponent,
    CahomeComponent,
    CalastpaymentComponent,
    CacardsliderComponent,
    CaorganisationComponent,
    Caorganisation2Component,
    CamyprofileComponent,
    CacontactusComponent,
    CanotificationmatrixComponent,
    CafaqComponent,
    CacardsComponent,
    CaaddcardsComponent,
    CaaddcardsuccessmsgComponent,
    CagroupsComponent,
    CarulevalidationComponent,
    CapaymentComponent,
    CaviewgroupsComponent,
    GrouplistComponent,
    CacreateruleComponent,
    CareportnameComponent,
    CasupplierComponent,
    CasuppliersreportComponent,
    CauserlistComponent,
    CaaddunitaryuserComponent,
    CauserreviewdetailsComponent,
    CauserreportComponent,
    CaaddbulkusersComponent,
    CareviewusersComponent,
    UserreportsComponent,
    AsuserreportComponent,
    ChpendingsupplierComponent,
    ChreviewsupplierComponent,
    ChsuppliersuccessComponent,
    ResultComponent,
    LoginComponent,
    SuccesspageComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    DataTableModule,
    CommonModule, 
    MatToolbarModule, 
    MatInputModule, 
    MatTableModule,
    NgxDatatableModule,
    OwlModule,
    HighchartsChartModule,
    MultiselectDropdownModule,
    NgSelectModule,
    NgxPaginationModule
  ],
  providers: [ { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }, AlertService,
    AuthenticationService,UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
  },
  ],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
