/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'dummy/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | Component | hds/dismiss-button', function (hooks) {
  setupApplicationTest(hooks);

  test('Components/dismiss-button passes a11y automated checks', async function (assert) {
    await visit('/utilities/dismiss-button');
    await a11yAudit();

    assert.ok(true, 'a11y automation audit passed');
  });
});
