

$el = $(".external");
$linkToUpdate = $(".js-link-to-update");

$el.each(function(){
  $extLink = $(this).find(".link a").text();
  $(this).find(".link a").remove();
  console.log($extLink);
  $(this).find($linkToUpdate).attr("href", $extLink);
});

$('.nav a').each(function() {
    if($(this).attr('href') == window.location.href) {
        $(this).addClass('current');
    }
});


//Twitter Parsers

/*********************************************************************
*  #### Twitter Post Fetcher v14.0 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
(function(B,n){"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?module.exports=n():n()})(this,function(){function B(a){if(null===r){for(var g=a.length,c=0,k=document.getElementById(C),f="<ul>";c<g;)f+="<li>"+a[c]+"</li>",c++;k.innerHTML=f+"</ul>"}else r(a)}function n(a){return a.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,c){return c}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function D(a){a=a.getElementsByTagName("a");
for(var g=a.length-1;0<=g;g--)a[g].setAttribute("target","_blank")}function l(a,g){for(var c=[],k=new RegExp("(^| )"+g+"( |$)"),f=a.getElementsByTagName("*"),h=0,b=f.length;h<b;h++)k.test(f[h].className)&&c.push(f[h]);return c}function E(a){if(void 0!==a)return a=a.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],decodeURIComponent(a).split('"')[1]}var C="",g=20,F=!0,w=[],y=!1,x=!0,t=!0,z=null,A=!0,G=!0,r=null,H=!0,I=!1,u=!0,J=!0,K=!1,m=null,L={fetch:function(a){void 0===a.maxTweets&&(a.maxTweets=
20);void 0===a.enableLinks&&(a.enableLinks=!0);void 0===a.showUser&&(a.showUser=!0);void 0===a.showTime&&(a.showTime=!0);void 0===a.dateFunction&&(a.dateFunction="default");void 0===a.showRetweet&&(a.showRetweet=!0);void 0===a.customCallback&&(a.customCallback=null);void 0===a.showInteraction&&(a.showInteraction=!0);void 0===a.showImages&&(a.showImages=!1);void 0===a.linksInNewWindow&&(a.linksInNewWindow=!0);void 0===a.showPermalinks&&(a.showPermalinks=!0);void 0===a.dataOnly&&(a.dataOnly=!1);if(y)w.push(a);
else{y=!0;C=a.domId;g=a.maxTweets;F=a.enableLinks;t=a.showUser;x=a.showTime;G=a.showRetweet;z=a.dateFunction;r=a.customCallback;H=a.showInteraction;I=a.showImages;u=a.linksInNewWindow;J=a.showPermalinks;K=a.dataOnly;var l=document.getElementsByTagName("head")[0];null!==m&&l.removeChild(m);m=document.createElement("script");m.type="text/javascript";m.src="https://cdn.syndication.twimg.com/widgets/timelines/"+a.id+"?&lang="+(a.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+
Math.random();l.appendChild(m)}},callback:function(a){function m(a){var b=a.getElementsByTagName("img")[0];b.src=b.getAttribute("data-src-2x");return a}var c=document.createElement("div");c.innerHTML=a.body;"undefined"===typeof c.getElementsByClassName&&(A=!1);a=[];var k=[],f=[],h=[],b=[],p=[],q=[],e=0;if(A)for(c=c.getElementsByClassName("tweet");e<c.length;){0<c[e].getElementsByClassName("retweet-credit").length?b.push(!0):b.push(!1);if(!b[e]||b[e]&&G)a.push(c[e].getElementsByClassName("e-entry-title")[0]),
p.push(c[e].getAttribute("data-tweet-id")),k.push(m(c[e].getElementsByClassName("p-author")[0])),f.push(c[e].getElementsByClassName("dt-updated")[0]),q.push(c[e].getElementsByClassName("permalink")[0]),void 0!==c[e].getElementsByClassName("inline-media")[0]?h.push(c[e].getElementsByClassName("inline-media")[0]):h.push(void 0);e++}else for(c=l(c,"tweet");e<c.length;)a.push(l(c[e],"e-entry-title")[0]),p.push(c[e].getAttribute("data-tweet-id")),k.push(m(l(c[e],"p-author")[0])),f.push(l(c[e],"dt-updated")[0]),
q.push(l(c[e],"permalink")[0]),void 0!==l(c[e],"inline-media")[0]?h.push(l(c[e],"inline-media")[0]):h.push(void 0),0<l(c[e],"retweet-credit").length?b.push(!0):b.push(!1),e++;a.length>g&&(a.splice(g,a.length-g),k.splice(g,k.length-g),f.splice(g,f.length-g),b.splice(g,b.length-g),h.splice(g,h.length-g),q.splice(g,q.length-g));var c=[],e=a.length,d=0;if(K)for(;d<e;)c.push({tweet:a[d].innerHTML,author:k[d].innerHTML,time:f[d].innerText,image:E(h[d]),rt:b[d],tid:p[d],permalinkURL:q[d].href}),d++;else for(;d<
e;){if("string"!==typeof z){var b=f[d].getAttribute("datetime"),v=new Date(f[d].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),b=z(v,b);f[d].setAttribute("aria-label",b);if(a[d].innerText)if(A)f[d].innerText=b;else{var v=document.createElement("p"),r=document.createTextNode(b);v.appendChild(r);v.setAttribute("aria-label",b);f[d]=v}else f[d].textContent=b}b="";F?(u&&(D(a[d]),t&&D(k[d])),t&&(b+='<div class="user">'+n(k[d].innerHTML)+"</div>"),b+='<p class="tweet">'+n(a[d].innerHTML)+
"</p>",x&&(b=J?b+('<p class="timePosted"><a href="'+q[d]+'">'+f[d].getAttribute("aria-label")+"</a></p>"):b+('<p class="timePosted">'+f[d].getAttribute("aria-label")+"</p>"))):a[d].innerText?(t&&(b+='<p class="user">'+k[d].innerText+"</p>"),b+='<p class="tweet">'+a[d].innerText+"</p>",x&&(b+='<p class="timePosted">'+f[d].innerText+"</p>")):(t&&(b+='<p class="user">'+k[d].textContent+"</p>"),b+='<p class="tweet">'+a[d].textContent+"</p>",x&&(b+='<p class="timePosted">'+f[d].textContent+"</p>"));H&&
(b+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+p[d]+'" class="twitter_reply_icon"'+(u?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+p[d]+'" class="twitter_retweet_icon"'+(u?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+p[d]+'" class="twitter_fav_icon"'+(u?' target="_blank">':">")+"Favorite</a></p>");I&&void 0!==h[d]&&(b+='<div class="media"><img src="'+E(h[d])+'" alt="Image from tweet" /></div>');
c.push(b);d++}B(c);y=!1;0<w.length&&(L.fetch(w[0]),w.splice(0,1))}};return window.twitterFetcher=L});


/**
 * ### HOW TO CREATE A VALID ID TO USE: ###
 * Go to www.twitter.com and sign in as normal, go to your settings page.
 * Go to "Widgets" on the left hand side.
 * Create a new widget for what you need eg "user time line" or "search" etc.
 * Feel free to check "exclude replies" if you don't want replies in results.
 * Now go back to settings page, and then go back to widgets page and
 * you should see the widget you just created. Click edit.
 * Look at the URL in your web browser, you will see a long number like this:
 * 345735908357048478
 * Use this as your ID below instead!
 */

/**
 * How to use TwitterFetcher's fetch function:
 * 
 * @function fetch(object) Fetches the Twitter content according to
 *     the parameters specified in object.
 * 
 * @param object {Object} An object containing case sensitive key-value pairs
 *     of properties below.
 * 
 * You may specify at minimum the following two required properties:
 * 
 * @param object.id {string} The ID of the Twitter widget you wish
 *     to grab data from (see above for how to generate this number).
 * @param object.domId {string} The ID of the DOM element you want
 *     to write results to.
 *
 * You may also specify one or more of the following optional properties
 *     if you desire:
 *
 * @param object.maxTweets [int] The maximum number of tweets you want
 *     to return. Must be a number between 1 and 20. Default value is 20.
 * @param object.enableLinks [boolean] Set false if you don't want
 *     urls and hashtags to be hyperlinked.
 * @param object.showUser [boolean] Set false if you don't want user
 *     photo / name for tweet to show.
 * @param object.showTime [boolean] Set false if you don't want time of tweet
 *     to show.
 * @param object.dateFunction [function] A function you can specify
 *     to format date/time of tweet however you like. This function takes
 *     a JavaScript date as a parameter and returns a String representation
 *     of that date.
 * @param object.showRetweet [boolean] Set false if you don't want retweets
 *     to show.
 * @param object.customCallback [function] A function you can specify
 *     to call when data are ready. It also passes data to this function
 *     to manipulate them yourself before outputting. If you specify
 *     this parameter you must output data yourself!
 * @param object.showInteraction [boolean] Set false if you don't want links
 *     for reply, retweet and favourite to show.
 * @param object.showImages [boolean] Set true if you want images from tweet
 *     to show.
 * @param object.lang [string] The abbreviation of the language you want to use
 *     for Twitter phrases like "posted on" or "time ago". Default value
 *     is "en" (English).
 */

// ##### Simple example 1 #####
// A simple example to get my latest tweet and write to a HTML element with
// id "example1". Also automatically hyperlinks URLS and user mentions and
// hashtags.



// ##### Simple example 3 #####
// A simple example to get latest 5 tweets for #API tag and shows any images
// attached to tweets.
var config3 = {
  "id": '702379887429079041',
  "domId": 'example3',
  "maxTweets": 2,
  "enableLinks": true,
  "showImages": false,
  "showPermalinks": false,
  "showTime": false,
  "showUser": false,
  "showRetweet": false,
  "showInteraction": false
};
twitterFetcher.fetch(config3);


// ##### Advanced example #####
// An advance example to get latest 5 posts using hashtag #API and write to a
// HTML element with id "tweets2" without showing user details and using a
// custom format to display the date/time of the post, and does not show
// retweets.

// For advanced example which allows you to customize how tweet time is
// formatted you simply define a function which takes a JavaScript date as a
// parameter and returns a string!
// See http://www.w3schools.com/jsref/jsref_obj_date.asp for properties
// of a Date object.


