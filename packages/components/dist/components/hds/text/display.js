import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n<Hds::Text\n  @group=\"display\"\n  @size={{this.size}}\n  @weight={{this.weight}}\n  @align={{@align}}\n  @color={{@color}}\n  @tag={{@tag}}\n  ...attributes\n>{{yield}}</Hds::Text>");

/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const DEFAULT_SIZE = '200';
const AVAILABLE_SIZES = [500, 400, 300, 200, 100];
const DEFAULT_WEIGHTS_PER_SIZE = {
  500: ['bold'],
  400: ['semibold'],
  300: ['semibold'],
  200: ['semibold'],
  100: ['medium']
};
const AVAILABLE_WEIGHTS_PER_SIZE = {
  500: ['bold'],
  400: ['medium', 'semibold', 'bold'],
  300: ['medium', 'semibold', 'bold'],
  200: ['semibold'],
  100: ['medium']
};
class HdsTextDisplayComponent extends Component {
  /**
   * Sets the "size" for the text
   * Accepted values: see AVAILABLE_SIZES
   *
   * @type {string}
   *
   * @param size
   */
  get size() {
    let {
      size = DEFAULT_SIZE
    } = this.args;

    // let's be a bit forgiving with the consumers
    if (typeof size === 'string') {
      size = parseInt(size, 10);
    }
    assert(`@size for "Hds::Text::Display" must be one of the following: ${AVAILABLE_SIZES.join(', ')}; received: ${size}`, AVAILABLE_SIZES.includes(size));
    return size;
  }

  /**
   * Sets the "weight" for the text
   * Accepted values: see AVAILABLE_WEIGHTS_PER_SIZE
   *
   * @type {string}
   *
   * @param variant
   */
  get weight() {
    let {
      weight
    } = this.args;
    if (weight) {
      const availableWeights = AVAILABLE_WEIGHTS_PER_SIZE[this.size];
      assert(`@weight for "Hds::Text::Display" with @size=${this.size} must be one of the following: ${availableWeights.join(', ')}; received: ${weight}`, availableWeights.includes(weight));
    } else {
      // use the default (first item in the array)
      weight = DEFAULT_WEIGHTS_PER_SIZE[this.size];
    }
    return weight;
  }
}
setComponentTemplate(TEMPLATE, HdsTextDisplayComponent);

export { AVAILABLE_SIZES, AVAILABLE_WEIGHTS_PER_SIZE, DEFAULT_SIZE, DEFAULT_WEIGHTS_PER_SIZE, HdsTextDisplayComponent as default };
//# sourceMappingURL=display.js.map
