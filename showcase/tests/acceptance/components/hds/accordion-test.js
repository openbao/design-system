/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'showcase/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | Component | hds/accordion', function (hooks) {
  setupApplicationTest(hooks);

  test('Components/hds/accordion page passes automated a11y checks', async function (assert) {
    await visit('/components/accordion');

    await a11yAudit();

    assert.ok(true, 'a11y automation audit passed');
  });
});
