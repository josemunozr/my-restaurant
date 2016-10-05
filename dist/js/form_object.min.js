"use strict";$.fn.formObject=function(){var n={};return $.each($(this).serializeArray(),function(e,t){n[t.name]=t.value||""}),n};
