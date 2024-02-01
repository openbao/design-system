import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n<div class=\"hds-button-set\" ...attributes>\n  {{yield}}\n</div>");

var index = setComponentTemplate(TEMPLATE, templateOnly());

export { index as default };
//# sourceMappingURL=index.js.map
