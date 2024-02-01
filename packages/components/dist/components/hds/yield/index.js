import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n{{! template-lint-disable no-yield-only }}\n{{yield}}");

var index = setComponentTemplate(TEMPLATE, templateOnly());

export { index as default };
//# sourceMappingURL=index.js.map
