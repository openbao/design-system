/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('foundations', function () {
    this.route('typography');
    this.route('elevation');
    this.route('focus-ring');
  });
  this.route('components', function () {
    this.route('alert');
    this.route('avatar');
    this.route('badge');
    this.route('badge-count');
    this.route('breadcrumb');
    this.route('button');
    this.route('button-set');
    this.route('card');
    this.route('dropdown');
    this.route('empty-state');
    this.route('flyout');
    this.route('form', function () {
      this.route('base-elements');
      this.route('checkbox');
      this.route('radio');
      this.route('select');
      this.route('text-input');
      this.route('textarea');
      this.route('toggle');
      this.route('radio-card');
    });
    this.route('icon-tile');
    this.route('link', function () {
      this.route('inline');
      this.route('standalone');
    });
    this.route('modal');
    this.route('pagination');
    this.route('stepper');
    this.route('table');
    this.route('tag');
    this.route('toast');
    this.route('tabs');
  });
  this.route('utilities', function () {
    this.route('disclosure');
    this.route('dismiss-button');
    this.route('interactive');
  });
  this.route('overrides', function () {
    this.route('power-select');
  });
});
