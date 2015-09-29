/*
 * grunt-jquery-sample
 * https://github.com/barogi/grunt-jquery-sample
 *
 * Copyright (c) 2015 barogi
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.grunt_jquery_sample = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.grunt_jquery_sample = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.grunt_jquery_sample.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.grunt_jquery_sample.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].grunt_jquery_sample = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
