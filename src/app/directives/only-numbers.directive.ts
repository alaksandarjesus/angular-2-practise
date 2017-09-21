import { Directive, HostListener, ElementRef } from '@angular/core';
declare var jQuery:any;
@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor(private el: ElementRef) {

   }

   @HostListener('keydown', ["$event"]) onkeydown($event){
   	 let keypressed = $event.which || $event.keycode;
   	 this.clearError();
   	 console.log(keypressed)
   	 if(keypressed >= 8 && keypressed <= 57) return;
   	 if(keypressed >= 96 && keypressed <= 105) return;
   	 this.setError();
   	 setTimeout(()=>{
   	 	this.clearError();
   	 }, 2000);
   	 $event.preventDefault();
   }

   clearError(){
   	jQuery(this.el.nativeElement).removeClass("is-invalid");
   	jQuery(this.el.nativeElement).next(".invalid-feedback").remove()
   }

   setError(){
   	jQuery(this.el.nativeElement).addClass("is-invalid");
   	jQuery(this.el.nativeElement).after('<span class="invalid-feedback">Only numbers allowed.</span>');
   }

}
