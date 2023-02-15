import { Component, Input, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Word } from '../models/word';

@Component({
  selector: 'app-word-result',
  templateUrl: './word-result.component.html',
  styleUrls: ['./word-result.component.css'],
  animations: [trigger('fadeSlideInOut', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(15px)' }),
    animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
  transition(':leave', [
    animate('500ms', style({ opacity: 0, transform: 'translateY(15px)' })),
  ]),
]),]
})
export class WordResultComponent implements OnInit {

  @Input() word: Word;
  constructor() { }

  ngOnInit(): void {
  }

}