import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.customPad', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.customPad('abc', 6, '-'), '--abc-', `('abc', 6, '-') -> '--abc-'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.customPad('abc', 5, '-'), '-abc-', `('abc', 5, '-') -> '-abc-'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.customPad('abc', 3, '-'), 'abc', `('abc', 3, '-') -> 'abc'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.customPad('abc', 2, '-'), 'abc', `('abc', 2, '-') -> 'abc'`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.customPad('abc', 10, ''), 'abc', `('abc', 10, '') -> 'abc'`);
});