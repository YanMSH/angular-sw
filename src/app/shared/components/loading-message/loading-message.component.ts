import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports:[LoadingMessageComponent],
  selector: 'loading-message',
  template: '<div class="text-center text-2xl">Loading...</div>'
})
export class LoadingMessageComponent {}
