import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  status: boolean;
  query: string;

  @Output() keyPressed = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    this.toggle()
  }

  public keyboard(element: HTMLElement): void{
    var key = element.innerText
    this.keyPressed.emit(key)
  }

  public keyboardClick(element): void{
    var el = element.target.innerText
    this.keyPressed.emit(el)
  }

  inputText(key){
    this.query = this.query += key;
  }

  toggle(){
    if(this.status){
      this.status = false;
    }
    else{
      this.status = true;
    }

  }
}
