import { a as _applyDecoratedDescriptor, b as _initializerDefineProperty, _ as _defineProperty } from '../../../../_rollupPluginBabelHelpers-lqPQKyNs.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n<Hds::Text::Body\n  @tag=\"div\"\n  @size=\"100\"\n  class={{this.classNames}}\n  id={{this.id}}\n  {{did-insert this.onInsert}}\n  {{will-destroy this.willDestroyNode}}\n  ...attributes\n  aria-live=\"polite\"\n>\n  {{#if (has-block)}}\n    {{yield\n      (hash\n        minLength=this.minLength\n        maxLength=this.maxLength\n        currentLength=this.currentLength\n        remaining=this.remaining\n        shortfall=this.shortfall\n      )\n    }}\n  {{else}}\n    {{this.message}}\n  {{/if}}\n</Hds::Text::Body>");

var _class, _descriptor;
const ID_PREFIX = 'character-count-';
const NOOP = () => {};
let HdsFormCharacterCountIndexComponent = (_class = class HdsFormCharacterCountIndexComponent extends Component {
  constructor(...args) {
    super(...args);
    // The current number of characters in the associated input
    _initializerDefineProperty(this, "currentLength", _descriptor, this);
    _defineProperty(this, "inputControl", document.getElementById(this.args.controlId));
  }
  // Inflector utility function to determine plural or singular for 'character' noun
  pluralize(count, prefix = '', noun = 'character', suffix = 's') {
    return `${count}${prefix ? ' ' + prefix : ''} ${noun}${count !== 1 ? suffix : ''}`;
  }

  /**
   * @param maxLength
   * @type {number}
   * @default null
   * @description The maximum number of characters allowed.
   */
  get maxLength() {
    let {
      maxLength
    } = this.args;
    return parseInt(maxLength);
  }

  /**
   * @param minLength
   * @type {number}
   * @default null
   * @description The minimum number of characters allowed.
   */
  get minLength() {
    let {
      minLength
    } = this.args;
    return parseInt(minLength);
  }

  /**
   * @param remaining
   * @type {number}
   * @default null
   * @description The remaining number of characters.
   */
  get remaining() {
    return this.maxLength - this.currentLength;
  }

  /**
   * @param shortfall
   * @type {number}
   * @default null
   * @description The number of characters the content is falling short of.
   */
  get shortfall() {
    return this.minLength - this.currentLength;
  }

  /**
   * @param message
   * @type {string}
   * @default null
   * @description The character count message presented to users
   */
  get message() {
    let messageText = '';
    if (this.minLength && this.currentLength === 0) {
      messageText = `${this.pluralize(this.minLength)} required`;
    } else if (this.minLength && this.currentLength < this.minLength) {
      messageText = `${this.pluralize(this.shortfall, 'more')} required`;
    } else if (this.maxLength && this.currentLength === 0) {
      messageText = `${this.pluralize(this.maxLength)} allowed`;
    } else if (this.maxLength && this.currentLength <= this.maxLength) {
      messageText = `${this.pluralize(this.remaining)} remaining`;
    } else if (this.currentLength > this.maxLength) {
      messageText = `Exceeded by ${this.pluralize(-this.remaining)}`;
    } else {
      messageText = `${this.pluralize(this.currentLength)} entered`;
    }
    return messageText;
  }

  /**
   * Determines the unique ID to assign to the element
   * @method id
   * @return {(string|null)} The "id" attribute to apply to the element or null, if no controlId is provided
   */
  get id() {
    let {
      controlId
    } = this.args;
    if (controlId) {
      return `${ID_PREFIX}${controlId}`;
    }
    return null;
  }

  /**
   * @param onInsert
   * @type {function}
   * @default () => {}
   */
  get onInsert() {
    let {
      onInsert
    } = this.args;
    if (!this.inputControl || this.inputControl.value === undefined) {
      console.error('`Hds::Form::CharacterCount` component - `@controlId` selector provided does not point to a valid input element, check the id', this.args.controlId);
    } else {
      this.updateCurrentLength();
      this.inputControl.addEventListener('input', this.updateCurrentLength, true);
    }

    // notice: this is a guard used to prevent triggering an error when the component is used as standalone element
    if (typeof onInsert === 'function') {
      return onInsert;
    } else {
      return NOOP;
    }
  }
  willDestroyNode() {
    if (this.inputControl) {
      this.inputControl.removeEventListener('input', this.updateCurrentLength, true);
    }
  }
  updateCurrentLength() {
    this.currentLength = this.inputControl?.value?.length;
    if (typeof this.args.onInput === 'function') {
      this.args.onInput({
        inputControl: this.inputControl,
        currentLength: this.currentLength,
        maxLength: this.maxLength,
        minLength: this.minLength,
        remaining: this.remaining,
        shortfall: this.shortfall
      });
    }
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-form-character-count'];

    // add a class based on the @contextualClass argument
    // notice: this will *not* be documented for public use
    // the reason for this is that the contextual component declarations don't pass attributes to the component
    if (this.args.contextualClass) {
      classes.push(this.args.contextualClass);
    }
    return classes.join(' ');
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "currentLength", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "willDestroyNode", [action], Object.getOwnPropertyDescriptor(_class.prototype, "willDestroyNode"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateCurrentLength", [action], Object.getOwnPropertyDescriptor(_class.prototype, "updateCurrentLength"), _class.prototype)), _class);
setComponentTemplate(TEMPLATE, HdsFormCharacterCountIndexComponent);

export { HdsFormCharacterCountIndexComponent as default };
//# sourceMappingURL=index.js.map
