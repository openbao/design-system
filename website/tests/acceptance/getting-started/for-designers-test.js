/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'website/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { globalAxeOptions } from 'website/tests/a11y-helper';

module('Acceptance | getting started/for designers', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /getting-started/for-designers', async function (assert) {
    await visit('/getting-started/for-designers');

    assert.strictEqual(currentURL(), '/getting-started/for-designers');
  });

  test('getting-started/for-designers page passes automated a11y checks', async function (assert) {
    await visit('/getting-started/for-designers');

    await a11yAudit(globalAxeOptions);

    assert.ok(true, 'a11y automation audit passed');
  });
});
