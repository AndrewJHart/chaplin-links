// Generated by CoffeeScript 1.4.0
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['chaplin', 'views/base/collection_view', 'views/tag_view', 'models/tag', 'text!templates/tags_sidebar.hbs'], function(Chaplin, CollectionView, TagView, Tag, template) {
  'use strict';

  var TagsSidebarView, mediator;
  mediator = Chaplin.mediator;
  return TagsSidebarView = (function(_super) {

    __extends(TagsSidebarView, _super);

    function TagsSidebarView() {
      this.tagClicked = __bind(this.tagClicked, this);

      this.hideExtraInfo = __bind(this.hideExtraInfo, this);

      this.showExtraInfo = __bind(this.showExtraInfo, this);
      return TagsSidebarView.__super__.constructor.apply(this, arguments);
    }

    TagsSidebarView.prototype.template = template;

    template = null;

    TagsSidebarView.prototype.container = '#tags-section';

    TagsSidebarView.prototype.className = 'sidebar';

    TagsSidebarView.prototype.tagName = 'div';

    TagsSidebarView.prototype.id = 'tag-list';

    TagsSidebarView.prototype.listSelector = 'ul';

    TagsSidebarView.prototype.active_links = false;

    TagsSidebarView.prototype.initialize = function() {
      TagsSidebarView.__super__.initialize.apply(this, arguments);
      this.extra_info = $(this.el).find('.extra-info');
      this.subscribeEvent('tags:add', this.addTags);
      this.subscribeEvent('Links:startup', this.showExtraInfo);
      this.subscribeEvent('Links:disposal', this.hideExtraInfo);
      this.subscribeEvent('matchRoute', this.removeActiveState);
      return this.delegate('click', 'li:.tag', this.tagClicked);
    };

    TagsSidebarView.prototype.addTags = function(tag_list) {
      var existing_tag, name, tag, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = tag_list.length; _i < _len; _i++) {
        name = tag_list[_i];
        existing_tag = this.collection.filterByTagName(name);
        if (existing_tag.length === 0) {
          tag = new Tag({
            name: name
          });
          this.collection.add(tag);
          _results.push(tag.save());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    TagsSidebarView.prototype.getView = function(item) {
      return new TagView({
        model: item
      });
    };

    TagsSidebarView.prototype.showExtraInfo = function() {
      this.extra_info.show();
      $(this.el).find('li').css('cursor', 'pointer');
      return this.active_links = true;
    };

    TagsSidebarView.prototype.hideExtraInfo = function() {
      this.extra_info.hide();
      $(this.el).find('li').css('cursor', '');
      return this.active_links = false;
    };

    TagsSidebarView.prototype.tagClicked = function(e) {
      var t, tag_name;
      t = $(e.currentTarget);
      tag_name = t.html();
      this.removeActiveState();
      t.addClass('active');
      return mediator.publish('TagsSidebarView:tagClicked', tag_name);
    };

    TagsSidebarView.prototype.removeActiveState = function() {
      return $(this.el).find('li').removeClass('active');
    };

    return TagsSidebarView;

  })(CollectionView);
});
