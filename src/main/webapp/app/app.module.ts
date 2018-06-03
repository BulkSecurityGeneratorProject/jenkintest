import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { Jenkintest3SharedModule, UserRouteAccessService } from './shared';
import { Jenkintest3AppRoutingModule} from './app-routing.module';
import { Jenkintest3HomeModule } from './home/home.module';
import { Jenkintest3AdminModule } from './admin/admin.module';
import { Jenkintest3AccountModule } from './account/account.module';
import { Jenkintest3EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        Jenkintest3AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        Jenkintest3SharedModule,
        Jenkintest3HomeModule,
        Jenkintest3AdminModule,
        Jenkintest3AccountModule,
        Jenkintest3EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class Jenkintest3AppModule {}
