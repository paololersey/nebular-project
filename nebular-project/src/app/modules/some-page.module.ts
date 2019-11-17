import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { SomePageComponent } from './some-page.component';

@NgModule({
    declarations: [
        SomePageComponent
      ],
  imports: [
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule
  ]
})
export class SomePageModule {

}
