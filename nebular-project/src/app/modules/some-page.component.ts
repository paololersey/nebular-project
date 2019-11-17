import { Component } from '@angular/core';

@Component({
    selector: 'app-some-page',
    template: `

      <nb-layout>
        <nb-layout-header fixed>Lynx</nb-layout-header>

        <nb-sidebar>Sidebar Lynx</nb-sidebar>

        <nb-layout-column>
          Page Content <button nbButton>Page nebular</button>
        </nb-layout-column>
      </nb-layout>
    `
  })
export class SomePageComponent {}
