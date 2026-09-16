/* Loader: retain approved Matrix workshop-pack engine from immutable deployment, then add service enquiry forms. */
(function(){
  function load(src,done){var s=document.createElement('script');s.src=src;s.onload=done||function(){};s.onerror=function(){console.error('Could not load '+src)};document.head.appendChild(s)}
  load('https://the-extra-mind-mhgfv5odn-padraigstan-7772.vercel.app/matrix-original-names.js',function(){load('/inquiries.js?v=1')});
})();