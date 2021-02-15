import { BADHINTS } from "dns";

export module Disabler {
  export let disableEnable = function (
    toDisable: HTMLButtonElement[],
    toEnable: HTMLButtonElement[],
  ) {
    toDisable.forEach((but) => {
      if(!but.disabled){
      but.disabled = true;
      but.classList.toggle('btn-disabled');
      }
    });
    toEnable.forEach((but) => {
      if(but.disabled){
      but.disabled = false;
      but.classList.toggle('btn-disabled');
      }
    });
  };
}
