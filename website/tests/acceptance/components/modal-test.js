/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'website/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { globalAxeOptions } from 'website/tests/a11y-helper';

module('Acceptance | components/modal', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /components/modal', async function (assert) {
    await visit('/components/modal');

    assert.strictEqual(currentURL(), '/components/modal');
  });

  test('components/modal passes a11y automated checks', async function (assert) {
    await visit('/components/modal');
    await a11yAudit(globalAxeOptions);
    assert.ok(true, 'a11y automation audit passed');
  });
});
