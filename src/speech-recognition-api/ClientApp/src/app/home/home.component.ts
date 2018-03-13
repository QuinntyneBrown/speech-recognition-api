import { Component, ElementRef } from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition/speech-recognition.service';
import { takeUntil, filter, map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    private _speechRecognitionService: SpeechRecognitionService,
    private _elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
    this.startDictationBehavior();
  }

  private onDestroy: Subject<void> = new Subject();

  public ngOnDestroy() {
    this.onDestroy.next();
  }

  public quillEditorFormControl: FormControl = new FormControl('');

  public speech: string;

  public startDictationBehavior() {
    this._speechRecognitionService.start();

    this._speechRecognitionService.finalTranscript$
      .pipe(
        takeUntil(this.onDestroy),
        filter(x => x && x.length > 0),
        map(x => this.quillEditorFormControl.patchValue(`${this.quillEditorFormControl.value}<p>${x}</p>`))
      ).subscribe();
  }
}
