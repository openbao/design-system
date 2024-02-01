import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n<button\n  class={{this.classNames}}\n  aria-label={{this.text}}\n  ...attributes\n  aria-expanded={{if @isOpen \"true\" \"false\"}}\n  {{on \"click\" this.onClick}}\n  type=\"button\"\n>\n  <div class=\"hds-dropdown-toggle-icon__wrapper\">\n    {{#if @imageSrc}}\n      <img src={{@imageSrc}} alt=\"\" role=\"presentation\" height=\"32\" width=\"32\" />\n    {{else if @icon}}\n      <FlightIcon @name={{@icon}} @size={{this.iconSize}} />\n    {{/if}}\n  </div>\n  {{#if this.hasChevron}}\n    <Hds::Dropdown::Toggle::Chevron />\n  {{/if}}\n</button>");

/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const DEFAULT_SIZE = 'medium';
const SIZES = ['small', 'medium'];
const NOOP = () => {};
class HdsDropdownToggleIconComponent extends Component {
  constructor() {
    super(...arguments);
    if (!(this.args.icon || this.args.imageSrc)) {
      assert('@icon or @imageSrc must be defined for "Hds::Dropdown::Toggle::Icon"');
    }
  }

  /**
   * @param text
   * @type {string}
   * @description The text of the `aria-label` applied to the toggle
   */
  get text() {
    let {
      text
    } = this.args;
    assert('@text for "Hds::Dropdown::Toggle::Icon" must have a valid value', text !== undefined);
    return text;
  }

  /**
   * @param size
   * @type {string}
   * @default medium
   * @description The size of the button; acceptable values are `small` and `medium`
   */
  get size() {
    let {
      size = DEFAULT_SIZE
    } = this.args;
    assert(`@size for "Hds::Dropdown::Toggle::Icon" must be one of the following: ${SIZES.join(', ')}; received: ${size}`, SIZES.includes(size));
    return size;
  }

  /**
   * @param iconSize
   * @type {string}
   * @default 24
   * @description ensures that the correct icon size is used
   */
  get iconSize() {
    if (this.args.size === 'small') {
      return '16';
    } else {
      return '24';
    }
  }

  /**
   * Indicates if a dropdown chevron icon should be displayed; should be displayed unless the "more-horizontal" icon is used.
   *
   * @param hasChevron
   * @type {boolean}
   * @default true
   */
  get hasChevron() {
    return this.args.hasChevron ?? true;
  }

  /**
   * @param onClick
   * @type {function}
   * @default () => {}
   */
  get onClick() {
    let {
      onClick
    } = this.args;

    // notice: this is a guard used in case the toggle is used as standalone element (eg. in the showcase)
    // in reality it's always used inside the Dropdown main component as yielded component, so the onClick handler is always defined
    if (typeof onClick === 'function') {
      return onClick;
    } else {
      return NOOP;
    }
  }

  /**
   * Get the class names to apply to the component.
   * @method ToggleIcon#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-dropdown-toggle-icon'];

    // add a class based on the @size argument
    classes.push(`hds-dropdown-toggle-icon--size-${this.size}`);

    // add a class based on the @isOpen argument
    if (this.args.isOpen) {
      classes.push('hds-dropdown-toggle-icon--is-open');
    }
    return classes.join(' ');
  }
}
setComponentTemplate(TEMPLATE, HdsDropdownToggleIconComponent);

export { DEFAULT_SIZE, SIZES, HdsDropdownToggleIconComponent as default };
//# sourceMappingURL=icon.js.map
