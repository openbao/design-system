import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n<input type=\"checkbox\" class=\"hds-form-checkbox\" ...attributes value={{@value}} />");

var base = setComponentTemplate(TEMPLATE, templateOnly());

export { base as default };
//# sourceMappingURL=base.js.map
