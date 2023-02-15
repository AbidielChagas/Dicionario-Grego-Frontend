import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { dataService } from '../_services/data.service';
import { Word } from '../models/word';

declare var mobileKey: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  results: Word[] = [];
  hasQuery: Boolean = false;
  display: boolean = false;
  query: string;

  @ViewChild('input') input: ElementRef;

  constructor(private DataService: dataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log(this.input.nativeElement.value)
  }

  toggle(){
    if(this.display){
      this.display =false
    }
    else{
      this.display = true
    }
  }
  
  searchService(){
    if(this.query.length < 1){
      this.results = []
      this.hasQuery = false;
      return
    }
    this.DataService.searchName(this.query).subscribe(result => {
    this.results = result;
    this.hasQuery = true;
  }, error =>{
    console.log(error);
  });
  }

  replaceCharacters(){
    const lat_grc={
    "A" : "α",
    "a" : "α",
    "B" : "β",
    "b" : "β",
    "c" : "ψ",
    "C" : "ψ",
    "D" : "δ",
    "d" : "δ",
    "E" : "ε",
    "e" : "ε",
    "Ê" : "η",
    "ê" : "η",
    "é" : "η",
    "è" : "η",
    "F" : "Φ",
    "f" : "φ",
    "G" : "γ",
    "g" : "γ",
    "H" : "η",
    "h" : "η",
    "I" : "ι",
    "i" : "ι",
    "J" : "ξ",
    "j" : "ξ",
    "K" : "κ",
    "k" : "κ",
    "L" : "λ",
    "l" : "λ",
    "M" : "μ",
    "m" : "μ",
    "N" : "ν",
    "n" : "ν",
    "O" : "ο",
    "o" : "ο",
    "Ô" : "ω",
    "ô" : "ω",
    "P" : "π",
    "p" : "π",
    "U" : "θ",
    "u" : "θ",
    "R" : "ρ",
    "r" : "ρ",
    "S" : "σ",
    "s" : "σ",
    "T" : "τ",
    "t" : "τ",
    "Y" : "υ",
    "y" : "υ",
    "V" : "ω",
    "v" : "ω",
    "w" : "ς",
    "W" : "ς",
    "x" : "χ",
    "X" : "χ",
    "Z" : "ζ",
    "z" : "ζ"
    }

    var inputFieldValue = this.input.nativeElement.value
    var input = inputFieldValue.split('')

    //Handle numbers
    const regex = /[0-9]/g;
    const found = inputFieldValue.match(regex);

    if(found != null){
      inputFieldValue = inputFieldValue.replace(regex, '')
      this.input.nativeElement.value = this.input.nativeElement.value.replace(regex, '')
      var input = inputFieldValue.split('')
    }

    //Handle paste on mobile and tablet.
    if(input[input.length -1] == ' '){
      input.pop()
      this.input.nativeElement.value = inputFieldValue.slice(0, -1)
    }

    if(this.input){
      setTimeout(() => {
      this.query = ''
      input.forEach(element => {
        let curval = lat_grc[element]
        if(curval == undefined){
          this.query += element
           return
        }
        this.query += mobileKey(element)
      });
      this.input.nativeElement.value = this.query

      this.searchService()
      if(this.query.length < 1){
        this.results = []
      }
    }, 0)
    }
  }

}
