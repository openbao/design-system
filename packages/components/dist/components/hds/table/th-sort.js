import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n<th\n  class={{this.classNames}}\n  aria-sort={{this.ariaSort}}\n  {{style width=@width minWidth=@width}}\n  ...attributes\n  scope=\"col\"\n>\n  <button type=\"button\" {{on \"click\" this.onClick}}>\n    <div class=\"hds-table__th-sort--button-content\">\n      <span class=\"hds-typography-body-200 hds-font-weight-semibold\">{{yield}}</span>\n      <FlightIcon @name={{this.icon}} />\n    </div>\n  </button>\n</th>");

/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const NOOP = () => {};
const ALIGNMENTS = ['left', 'center', 'right'];
const DEFAULT_ALIGN = 'left';
class HdsTableThSortComponent extends Component {
  /**
   * @param ariaSort
   * @type {string}
   * @private
   * @default none
   * @description Sets the aria-sort attribute based on the sort order defined; acceptable values are ascending, descending, none(default) and other. Authors SHOULD only apply this property to table headers or grid headers. If the property is not provided, there is no defined sort order. For each table or grid, authors SHOULD apply aria-sort to only one header at a time.
   */
  get ariaSort() {
    switch (this.args.sortOrder) {
      case 'asc':
        return 'ascending';
      case 'desc':
        return 'descending';
      default:
        // none is the default per the spec.
        return 'none';
    }
  }

  /**
   * @param icon
   * @type {string}
   * @private
   * @default swap-vertical
   * @description Determines which icon to use based on the sort order defined
   */
  get icon() {
    switch (this.args.sortOrder) {
      case 'asc':
        return 'arrow-up';
      case 'desc':
        return 'arrow-down';
      default:
        return 'swap-vertical';
    }
  }

  /**
   * @param align
   * @type {string}
   * @default left
   * @description Determines the text alignment of the header or cell content. Options are: "left", "center", "right". If no align is defined, "left" is used.
   */
  get align() {
    let {
      align = DEFAULT_ALIGN
    } = this.args;
    assert(`@align for "Hds::Table" must be one of the following: ${ALIGNMENTS.join(', ')}; received: ${align}`, ALIGNMENTS.includes(align));
    return align;
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
    return onClick || NOOP;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-table__th-sort'];

    // add a class based on the @align argument
    if (this.align) {
      classes.push(`hds-table__th-sort--text-${this.align}`);
    }
    return classes.join(' ');
  }
}
setComponentTemplate(TEMPLATE, HdsTableThSortComponent);

export { HdsTableThSortComponent as default };
//# sourceMappingURL=th-sort.js.map
