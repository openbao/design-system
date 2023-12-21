import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n\n<button\n  class={{this.classNames}}\n  type=\"button\"\n  {{on \"click\" @onClickToggle}}\n  aria-controls={{@contentId}}\n  aria-expanded={{if @isOpen \"true\" \"false\"}}\n  aria-label={{@ariaLabel}}\n  ...attributes\n>\n  <FlightIcon @name=\"chevron-down\" @size=\"24\" @isInlineBlock={{false}} />\n</button>");

/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

class HdsAccordionItemButtonComponent extends Component {
  /**
   * Get the class names to apply to the component.
   * @method ItemButton#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-accordion-item__button'];

    // add a class based on the @isOpen argument
    if (this.args.isOpen) {
      classes.push('hds-accordion-item__button--is-open');
    }
    if (this.args.parentContainsInteractive === false) {
      classes.push('hds-accordion-item__button--parent-does-not-contain-interactive');
    } else {
      classes.push('hds-accordion-item__button--parent-contains-interactive');
    }
    return classes.join(' ');
  }
}
setComponentTemplate(TEMPLATE, HdsAccordionItemButtonComponent);

export { HdsAccordionItemButtonComponent as default };
//# sourceMappingURL=button.js.map
