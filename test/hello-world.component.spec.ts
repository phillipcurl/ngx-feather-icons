import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import { HelloWorldComponent } from '../src/hello-world.component';
import { NgxFeatherIconsModule } from '../src';

describe('icon-hello-world component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxFeatherIconsModule.forRoot()
      ]
    });
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<HelloWorldComponent> = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal('Hello world from the ngx-feather-icons module!');
  });

});
