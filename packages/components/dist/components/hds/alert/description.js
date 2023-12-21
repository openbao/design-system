import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n<div class=\"hds-alert__description hds-font-weight-regular hds-foreground-primary\" ...attributes>{{yield}}</div>");

var description = setComponentTemplate(TEMPLATE, templateOnly());

export { description as default };
//# sourceMappingURL=description.js.map
