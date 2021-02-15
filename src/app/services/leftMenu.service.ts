export module LeftMenuService {
  export let showPreview = function (
    preview: HTMLImageElement,
    field: Element,
  ): void {
    let fieldId: string = field.id;
    console.log(fieldId);
    if (
      fieldId == 'f0' ||
      fieldId == 'f10' ||
      fieldId == 'f20' ||
      fieldId == 'f30'
    ) {
      return;
    } else {
      preview.src = images[`${fieldId}`];
    }
  };

  export let showPlayerCard = function (
    preview: HTMLImageElement,
    id: string,
  ): void {
    preview.src = images[`${id}`];
  };

  export const images: { [index: string]: any } = {
    f0: require(`../../../images/cards/0.png`),
    f1: require(`../../../images/cards/1.png`),
    f2: require(`../../../images/cards/2.png`),
    f3: require(`../../../images/cards/3.png`),
    f4: require(`../../../images/cards/4.png`),
    f5: require(`../../../images/cards/5.png`),
    f6: require(`../../../images/cards/6.png`),
    f7: require(`../../../images/cards/7.png`),
    f8: require(`../../../images/cards/8.png`),
    f9: require(`../../../images/cards/9.png`),
    f10: require(`../../../images/cards/10.png`),
    f11: require(`../../../images/cards/11.png`),
    f12: require(`../../../images/cards/12.png`),
    f13: require(`../../../images/cards/13.png`),
    f14: require(`../../../images/cards/14.png`),
    f15: require(`../../../images/cards/15.png`),
    f16: require(`../../../images/cards/16.png`),
    f17: require(`../../../images/cards/17.png`),
    f18: require(`../../../images/cards/18.png`),
    f19: require(`../../../images/cards/19.png`),
    f20: require(`../../../images/cards/20.png`),
    f21: require(`../../../images/cards/21.png`),
    f22: require(`../../../images/cards/22.png`),
    f23: require(`../../../images/cards/23.png`),
    f24: require(`../../../images/cards/24.png`),
    f25: require(`../../../images/cards/25.png`),
    f26: require(`../../../images/cards/26.png`),
    f27: require(`../../../images/cards/27.png`),
    f28: require(`../../../images/cards/28.png`),
    f29: require(`../../../images/cards/29.png`),
    f30: require(`../../../images/cards/30.png`),
    f31: require(`../../../images/cards/31.png`),
    f32: require(`../../../images/cards/32.png`),
    f33: require(`../../../images/cards/33.png`),
    f34: require(`../../../images/cards/34.png`),
    f35: require(`../../../images/cards/35.png`),
    f36: require(`../../../images/cards/36.png`),
    f37: require(`../../../images/cards/37.png`),
    f38: require(`../../../images/cards/38.png`),
    f39: require(`../../../images/cards/39.png`),
  };
}
