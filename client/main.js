import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// template name="hello"が生成されたときの挙動を制御する
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

// template name="hello" で利用する変数について定義する
Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  hello() {
    return 'Hello World';
  }
});

// main.htmlのtemplate name="hello"でクリックされたときの挙動を制御する
Template.hello.events({
  'click button'(event, instance) {
    // clickされたらカウンターをインクリメントする
    instance.counter.set(instance.counter.get() + 1);
  },
});
