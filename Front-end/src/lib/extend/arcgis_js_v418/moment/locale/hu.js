//>>built
(function(f,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],a):a(f.moment)})(this,function(f){function a(d,b,e,c){switch(e){case "s":return c||b?"n\u00e9h\u00e1ny m\u00e1sodperc":"n\u00e9h\u00e1ny m\u00e1sodperce";case "ss":return d+(c||b)?" m\u00e1sodperc":" m\u00e1sodperce";case "m":return"egy"+(c||b?" perc":" perce");case "mm":return d+(c||b?" perc":" perce");case "h":return"egy"+
(c||b?" \u00f3ra":" \u00f3r\u00e1ja");case "hh":return d+(c||b?" \u00f3ra":" \u00f3r\u00e1ja");case "d":return"egy"+(c||b?" nap":" napja");case "dd":return d+(c||b?" nap":" napja");case "M":return"egy"+(c||b?" h\u00f3nap":" h\u00f3napja");case "MM":return d+(c||b?" h\u00f3nap":" h\u00f3napja");case "y":return"egy"+(c||b?" \u00e9v":" \u00e9ve");case "yy":return d+(c||b?" \u00e9v":" \u00e9ve")}return""}var g="vas\u00e1rnap h\u00e9tf\u0151n kedden szerd\u00e1n cs\u00fct\u00f6rt\u00f6k\u00f6n p\u00e9nteken szombaton".split(" ");
return f.defineLocale("hu",{months:"janu\u00e1r febru\u00e1r m\u00e1rcius \u00e1prilis m\u00e1jus j\u00fanius j\u00falius augusztus szeptember okt\u00f3ber november december".split(" "),monthsShort:"jan. feb. m\u00e1rc. \u00e1pr. m\u00e1j. j\u00fan. j\u00fal. aug. szept. okt. nov. dec.".split(" "),monthsParseExact:!0,weekdays:"vas\u00e1rnap h\u00e9tf\u0151 kedd szerda cs\u00fct\u00f6rt\u00f6k p\u00e9ntek szombat".split(" "),weekdaysShort:"vas h\u00e9t kedd sze cs\u00fct p\u00e9n szo".split(" "),weekdaysMin:"v h k sze cs p szo".split(" "),
longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(d){return"u"===d.charAt(1).toLowerCase()},meridiem:function(d,b,e){return 12>d?!0===e?"de":"DE":!0===e?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return"["+g[this.day()]+"] LT[-kor]"},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return"[m\u00falt] ["+g[this.day()]+"] LT[-kor]"},
sameElse:"L"},relativeTime:{future:"%s m\u00falva",past:"%s",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});