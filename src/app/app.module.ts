import { ReportsComponent } from './../components/reports/reports.component';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { UsersComponent } from './../components/users/users.component';
import { SmartTablesModule } from './views/smart-tables/smart-tables.module';
import { PagesModule } from './views/pages/pages.module';
import { IconsModule } from './views/icons/icons.module';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { CoreUIFormsModule } from './views/forms/forms.module';
import { ChartsModule } from './views/plugins/charts/charts.module';
import { ButtonsModule } from './views/buttons/buttons.module';
import { BaseModule } from './views/base/base.module';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsModule } from './views/notifications/notifications.module';
import { NgModule } from '@angular/core';
import {
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultAsideComponent,
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
  EmailLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  ModalModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  SmartTableModule,
  TabsModule,
  UtilitiesModule,
  WidgetModule,
} from '@coreui/angular-pro';

import { IconModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultAsideComponent,
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
  EmailLayoutComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    UsersComponent,
    ReportsComponent,
  ],
  imports: [
    AppRoutingModule,
    AvatarModule,
    BadgeModule,
    BaseModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonGroupModule,
    ButtonModule,
    ButtonsModule,
    ChartjsModule,
    CoreUIFormsModule,
    CardModule,
    DashboardModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    HeaderModule,
    HttpClientModule,
    IconModule,
    IconsModule,
    ListGroupModule,
    ListGroupModule,
    NavModule,
    NotificationsModule,
    PagesModule,
    PerfectScrollbarModule,
    ProgressModule,
    ReactiveFormsModule,
    SmartTableModule,
    SharedModule,
    SidebarModule,
    SidebarModule,
    TabsModule,
    UtilitiesModule,
    WidgetModule,
    ModalModule,
    FormsModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
