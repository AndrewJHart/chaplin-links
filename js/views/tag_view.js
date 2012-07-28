// Generated by CoffeeScript 1.3.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['views/base/view', 'text!templates/tag.hbs'], function(View, template) {
  'use strict';

  var TagView;
  return TagView = (function(_super) {

    __extends(TagView, _super);

    function TagView() {
      return TagView.__super__.constructor.apply(this, arguments);
    }

    TagView.prototype.template = template;

    template = null;

    TagView.prototype.tagName = 'li';

    TagView.prototype.className = 'tag';

    return TagView;

  })(View);
});
