/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'website/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { globalAxeOptions } from 'website/tests/a11y-helper';

module('Acceptance | components/application-state', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /components/application-state', async function (assert) {
    await visit('/components/application-state');

    assert.strictEqual(currentURL(), '/components/application-state');
  });
  test('Components/application-state page passes automated a11y checks', async function (assert) {
    await visit('/components/application-state');

    await a11yAudit(globalAxeOptions);

    assert.ok(true, 'a11y automation audit passed');
  });
});
