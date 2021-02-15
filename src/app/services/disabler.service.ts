export module Disabler {
  export let disableEnable = function (
    toDisable: HTMLButtonElement[],
    toEnable: HTMLButtonElement[],
  ) {
    toDisable.forEach((but) => {
      but.disabled = true;
      but.classList.toggle('btn-disabled');
    });
    toEnable.forEach((but) => {
      but.disabled = false;
      but.classList.toggle('btn-disabled');
    });
  };
}
