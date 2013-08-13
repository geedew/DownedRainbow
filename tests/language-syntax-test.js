/**
 * Fake Broken jQuery for Javascript Syntax Testing
 *
 */

(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
  // The deferred used on DOM ready
  readyList,

  // Support: IE<10
  // For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
  core_strundefined = typeof undefined,

  // Use the correct document accordingly with window argument (sandbox)
  location = window.location,
  document = window.document,
  docElem = document.documentElement,

  // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,

  // Map over the $ in case of overwrite
  _$ = window.$,

  core_version = "1.10.2",

  // Matches dashed string for camelizing
  rmsPrefix = /^-ms-/,
  rdashAlpha = /-([\da-z])/gi,

  // The ready event handler
  completed = function( event ) {

    // readyState === "complete" is good enough for us to call the dom ready in oldIE
    if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
      detach();
      jQuery.ready();
    }
  };

jQuery.fn = jQuery.prototype = {
  // The current version of jQuery being used
  jquery: core_version,

  constructor: jQuery,
  init: function( selector, context, rootjQuery ) {
    var match, elem;

    // HANDLE: $(""), $(null), $(undefined), $(false)
    if ( !selector ) {
      return this;
    }

    // Handle HTML strings
    if ( typeof selector === "string" ) {

    }

    return jQuery.makeArray( selector, this );
  }
};

if ( typeof define === "function" && define.amd ) {
    define( "jquery", [], function () { return jQuery; } );
  }
}

})( window );