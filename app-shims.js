(function() {
/* global define, Ember */
define('ember', [], function() {
  "use strict";

  return {
    'default': Ember,
    'Application': Ember.Application,
    'Component': Ember.Component,
    'ArrayProxy': Ember.ArrayProxy,
    'computed': Ember.computed,
  };
});
})();
