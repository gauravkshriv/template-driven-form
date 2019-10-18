import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from '@uirouter/angular';
import 'jquery/dist/jquery';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
import { UIRouterConfigFn } from './app.router';
import { appStates } from './app.states';
import { NavbarComponent } from './navbar/navbar.component';
import { StateProvider, GradeProvider } from './data/stateDataModel';
import { FormDataService } from './data/formData.service';
import { StudentComponent } from './student/student.component';
import { TuitionpaymentComponent } from './tuitionpayment/tuitionpayment.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { PaymentmodesComponent } from './paymentmodes/paymentmodes.component';

import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { PaymentProvider } from './data/paymentData.model'

import { PaymentplanComponent } from './paymentplan/paymentplan.component';
import { HighlightPaymentDirective } from './highlight-payment.directive';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { ValidateFormComponent } from './validate-form/validate-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent,
    NavbarComponent,
    StudentComponent,
    TuitionpaymentComponent,
    LogincomponentComponent,
    PaymentmodesComponent,
    PaymentdetailsComponent,
    HighlightPaymentDirective,
    PaymentplanComponent,
    FieldErrorDisplayComponent,
    ValidateFormComponent
  ],
  imports: [
    // NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    UIRouterModule.forRoot({
      states: appStates,
      useHash: true,
      config: UIRouterConfigFn
    })
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService }, StateProvider, GradeProvider,PaymentProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
