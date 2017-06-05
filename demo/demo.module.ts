import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxFeatherIconsModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, NgxFeatherIconsModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}