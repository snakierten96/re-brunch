import { NgModule }       from '@angular/core';
import { BrowswerModule } from '@angular/platform-browser';

import { NgRedux }        from 'ng2-redux';
import createLogger       from 'redux-logger';

import { AppComponent }   from 'app.component';
import { IAppState, rootReducer } from '../store';

@NgModule({
  imports: [BrowswerModule],
  providers: [NgRedux],
  declarations:[AppComponent],
  bootstrap:[AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.configureStore(
      rootReducer,
      {},
      [ createLogger() ]
    )
  }
}