(function($) {
  Axe = {
    behaviors: {}
  };

  Axe.behaviors.autoscroll = {
    $el: null,

    init: function ($el) {
      this.$el = $el;
      this.bindEvents();
    },

    bindEvents: function () {
      this.$el.on('click', $.proxy(this.handleClick, this));
    },

    handleClick: function (e) {
      e.preventDefault();

      var $link = $(e.currentTarget),
        namedAnchor = $link.attr('href').substr(1),
        anchorPosition = $('[name="' + namedAnchor + '"]').offset().top;

      $('html, body').animate({
        scrollTop: anchorPosition
      }, 700, 'easeOutQuart');
    }
  };

  Axe.behaviors.animated_panel = {
    $el: null,

    init: function ($el) {
      this.$el = $el;
      this.start();
    },

    start: function () {
      var that = this;

      this.$el.waypoint(function (direction) {
        if (direction === 'down') {
          that.$el.addClass('on-screen');
          if (!that.$el.data('has_been_seen')) {
            that.$el.addClass('first-time-on-screen');
            that.$el.data('has_been_seen', true);
          }
        } else {
          that.$el.removeClass('on-screen');
          that.$el.removeClass('first-time-on-screen');
          that.$el.addClass('has-been-on-screen');
        }
      }, { offset: '90%' });

      this.$el.waypoint(function (direction) {
        if (direction === 'down') {
          that.$el.removeClass('on-screen');
          that.$el.removeClass('first-time-on-screen');
          that.$el.addClass('has-been-on-screen');
        } else {
          that.$el.addClass('on-screen');
          if (!that.$el.data('has_been_seen')) {
            that.$el.addClass('first-time-on-screen');
            that.$el.data('has_been_seen', true);
          }
        }
      }, { offset: function () { return -that.$el.outerHeight() } });
    }
  };

  $(document).ready(function() {
    $('[data-behavior]').each(function() {
      var $this = $(this);
      var behavior = $this.data('behavior');

      if (behavior in Axe.behaviors) {
        var obj = Object.create(Axe.behaviors[behavior]);
        obj.init($this);
      }
    });
  });
})(jQuery);
