import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent  {
currentPicture= 1;  
pictures=[
  'https://images.unsplash.com/photo-1511789421096-2b3be5f1f623?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8e2f9b6ddc7b729ef90fde26207e2f26&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1518897761968-5a3544c369b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1fcafacc76f4b2fd6822d41f2b251be8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a76e75ea82cc42c0c63081c584cbb70&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4992edab2aa7dcdaeeb878e2b8adbe4&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1504113897779-231f76737a4e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f264bf40175453d2130f7d354122bfb6&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1523065144972-e5f5c9ea6ed9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4f0025299a23f1423e55bd6036a1e03&auto=format&fit=crop&w=500&q=60'
  ];

  selectPicture(i) {
   
    this.currentPicture= i;
  };

   selectNextPicture() {
    if ( this.currentPicture === this.pictures.length-1){this.currentPicture = 0}
    else {this.currentPicture= this.currentPicture + 1}
  };

   selectPrevPicture() {
      if ( this.currentPicture === 0){ this.currentPicture= this.pictures.length-1}   
    else {this.currentPicture= this.currentPicture - 1}
  };

}