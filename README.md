# DicionarioGrego

<div>
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
</div>

# Abouth the project

https://dicionariogrego.com

Dicionariogrego.com is a digitalized version of the Dictionary Greek-Portuguese by Isidro Pereira, the dataset for this project was built using Tesseract OCR, the data was filtered and reviewed with python scripts to ensure the diacritics where in the correct place. <br>The dataset was also proofread to ensure the scripts ran accordingly.

## Web Layout 

<img src="https://res.cloudinary.com/dsques4uz/image/upload/v1675710310/dicionariogrego/webhome_ublok9.gif"/>

<details><summary>Web Layout</summary>
<p>
  Home page
  <img src="https://res.cloudinary.com/dsques4uz/image/upload/v1675710309/dicionariogrego/webhome_ng9n2g.png"/>
  How to use page
  <img src="https://res.cloudinary.com/dsques4uz/image/upload/v1675710310/dicionariogrego/homehowto_aqed9d.png"/>
  Contact page
  <img src="https://res.cloudinary.com/dsques4uz/image/upload/v1675710309/dicionariogrego/homecontact_xj3wam.png"/>
</p>
</details>

### Features

#### Virtual Keyboard

<img src="https://res.cloudinary.com/dsques4uz/image/upload/v1675710311/dicionariogrego/keyboard_ggwysp.gif"/>

<details><summary>Keyboard</summary>
<p>
  Draggable virtual keyboard, to help write letters in case one does remember the location of a specific letter.
<img src="https://dicionariogrego.com/assets/images/keyboard-layout.png"/>
</p>
</details>

#### Zoom-in

<img src="https://res.cloudinary.com/dsques4uz/image/upload/v1675710310/dicionariogrego/zoom-in_nrrdi3.gif"/>

<details><summary>Zoom-in</summary>
<p>
  Zoom-in feature to help visualize diacritics<br>
<img src="https://dicionariogrego.com/assets/images/zoom-in.png"/>
</p>
</details>

## Mobile Layout
<div>
  <img src="https://res.cloudinary.com/dsques4uz/image/upload/v1675710310/dicionariogrego/mobilehome_b0fpjk.png"/>
</div>

## How to use
The search needs to be done in lowercase and without any diacritics, the front-end will force the input to lowercase and replace the latin characters of the keyboard for the correspondant Greek ones, thus replacing a for α, b for β and so on.<br>The layout for replacing is the same for Virtual Keyboard. The search can also be done using the native Greek keyboard, but keep in mind that the search has to be done in lower case and without any diacritics.

## Technologies used

- HTML / CSS / TypeScript / JavaScript 
- Angular

# Running the project locally

## Front end
Pre-requesites: Angular 12+ & npm / yarn

```bash
# clone repository
git clone https://github.com/AbidielChagas/Dicionario-Grego-Frontend.git

# install dependencies
yarn install

# run project
yarn start
```

# Author

#### Abidiel Chagas

https://linkedin.com/in/abidiel-chagas-562286134/
