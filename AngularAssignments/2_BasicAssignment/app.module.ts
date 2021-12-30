import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { MyPipePipe } from './my-pipe.pipe';
import { TempConvertPipe } from './temp-convert.pipe';
//import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { TwoWayDemoComponent } from './two-way-demo/two-way-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { PipeAssignmentPipe } from './pipe-assignment.pipe';
import { BankComponent } from './bank/bank.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormGroupComponent } from './reactive-form-group/reactive-form-group.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { CubeServeDemoComponent } from './cube-serve-demo/cube-serve-demo.component';
import { InsertNewLeadComponent } from './insert-new-lead/insert-new-lead.component';
import { GlobalServeComponent } from './global-serve/global-serve.component';
import { ServiceGlobalDemoService } from './service-global-demo.service';
import { EmployeeComponent } from './employee/employee.component';
import { ServeEmployeeService } from './serve-employee.service';
import { MyChildComponent } from './my-child/my-child.component';
import { MyParentComponent } from './my-parent/my-parent.component';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { QueryParameterComponent } from './query-parameter/query-parameter.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveIfComponent,
    DataBindingComponent,
    PipeDemoComponent,
    MyPipePipe,
    TempConvertPipe,
    //AttributeDemoComponent,
    TwoWayDemoComponent,
    ClassStyleBindingComponent,
    PipeAssignmentPipe,
    BankComponent,
    LifeCycleComponent,
    FormDemoComponent,
    ReactiveFormComponent,
    ReactiveFormGroupComponent,
    CalculatorComponent,
    LoginComponent,
    CubeServeDemoComponent,
    InsertNewLeadComponent,
    GlobalServeComponent,
    EmployeeComponent,
    MyChildComponent,
    MyParentComponent,
    CrudOperationComponent,
    QueryParameterComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [ServiceGlobalDemoService,ServeEmployeeService],
  bootstrap: [AppComponent,DataBindingComponent]
})
export class AppModule { }
