import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n<Hds::Text\n  @group=\"body\"\n  @size={{this.size}}\n  @weight={{this.weight}}\n  @align={{@align}}\n  @color={{@color}}\n  @tag={{@tag}}\n  ...attributes\n>{{yield}}</Hds::Text>");

/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const DEFAULT_SIZE = '200';
const AVAILABLE_SIZES = [300, 200, 100];
const DEFAULT_WEIGHT = 'regular';
const AVAILABLE_WEIGHTS_PER_SIZE = {
  300: ['regular', 'medium', 'semibold'],
  200: ['regular', 'medium', 'semibold'],
  100: ['regular', 'medium', 'semibold']
};
class HdsTextBodyComponent extends Component {
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
    assert(`@size for "Hds::Text::Body" must be one of the following: ${AVAILABLE_SIZES.join(', ')}; received: ${size}`, AVAILABLE_SIZES.includes(size));
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
      weight = DEFAULT_WEIGHT
    } = this.args;
    const availableWeights = AVAILABLE_WEIGHTS_PER_SIZE[this.size];
    assert(`@weight for "Hds::Text::Body" with @size=${this.size} must be one of the following: ${availableWeights.join(', ')}; received: ${weight}`, availableWeights.includes(weight));
    return weight;
  }
}
setComponentTemplate(TEMPLATE, HdsTextBodyComponent);

export { AVAILABLE_SIZES, AVAILABLE_WEIGHTS_PER_SIZE, DEFAULT_SIZE, DEFAULT_WEIGHT, HdsTextBodyComponent as default };
//# sourceMappingURL=body.js.map
