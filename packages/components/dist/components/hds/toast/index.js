import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n<Hds::Alert\n  class=\"hds-toast\"\n  @type=\"inline\"\n  @color={{@color}}\n  @icon={{@icon}}\n  @onDismiss={{@onDismiss}}\n  ...attributes\n  as |A|\n>\n  {{yield\n    (hash Title=A.Title Description=A.Description Button=A.Button Link::Standalone=A.Link::Standalone Generic=A.Generic)\n  }}\n</Hds::Alert>");

var index = setComponentTemplate(TEMPLATE, templateOnly());

export { index as default };
//# sourceMappingURL=index.js.map
