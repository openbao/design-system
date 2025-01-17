/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'website/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { globalAxeOptions } from 'website/tests/a11y-helper';

module('Acceptance | about/accessibility statement', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /about/accessibility-statement', async function (assert) {
    await visit('/about/accessibility-statement');

    assert.strictEqual(currentURL(), '/about/accessibility-statement');
  });

  test('about/accessibility-statement page passes automated a11y checks', async function (assert) {
    await visit('/about/accessibility-statement');

    await a11yAudit(globalAxeOptions);

    assert.ok(true, 'a11y automation audit passed');
  });
});
