 // Google Fonts
WebFontConfig = {
  google: { families: [ 'Lato:400,700,300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons
$.contactButtons({
  effect  : 'slide-on-scroll',
  buttons : {
    'facebook':   { class: 'facebook', use: true, link: '#', extras: 'target="_blank"' },
    'linkedin':   { class: 'linkedin', use: true, link: '#' },
    'google':     { class: 'gplus',    use: true, link: '#' }, 
    'phone':      { class: 'phone separated',    use: true, link: '#' },
    'email':      { class: 'email',    use: true, link: '#' }
  }
});