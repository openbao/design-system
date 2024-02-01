import { helper } from '@ember/component/helper';

/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */


/*
 * This helper can be used to safely pass a @query argument to the `<LinkTo>` component
 * without the risk of triggering an assertion if the argument is undefined
 *
 * The result of this helper should be passed into the `@query` argument of the `<LinkTo>` component:
 *
 * ```hbs
 * <LinkTo @query={{hds-link-to-query @query}} />
 * ```
 */

// this is a workaround for https://github.com/emberjs/ember.js/issues/19693
// don't remove until we drop support for ember 3.27 and 3.28

function hdsLinkToQuery([query]) {
  return query ?? {};
}
var hdsLinkToQuery$1 = helper(hdsLinkToQuery);

export { hdsLinkToQuery$1 as default, hdsLinkToQuery };
//# sourceMappingURL=hds-link-to-query.js.map
