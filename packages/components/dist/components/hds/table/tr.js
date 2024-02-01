import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n<tr class=\"hds-table__tr\" ...attributes>\n  {{yield}}\n</tr>");

var tr = setComponentTemplate(TEMPLATE, templateOnly());

export { tr as default };
//# sourceMappingURL=tr.js.map
