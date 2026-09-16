/* The Extra Mind — persistent Business tools & support footer on every view */
(function(){
  const footerHTML='<section class="tool-launchers-wrap global-tools-footer" id="globalToolsFooter"><div class="section-title"><h2>Business tools &amp; support</h2><span>Open when you need them</span></div><div class="tool-launchers"><button class="tool-launch matrix-launch" onclick="showView(\'matrix\');window.scrollTo({top:0,behavior:\'smooth\'})"><span class="tool-kicker">Business Tools</span><strong>The Matrix</strong><small>10 proven consulting frameworks adapted for real SMEs.</small><em>Open The Matrix →</em></button><button class="tool-launch mind-launch" onclick="showView(\'wellbeing\');window.scrollTo({top:0,behavior:\'smooth\'})"><span class="tool-kicker">Wellbeing</span><strong>Mind Yourself</strong><small>Short resets for breathing, focus, movement and recovery.</small><em>Take a reset →</em></button><button class="tool-launch market-launch" onclick="showView(\'market\');window.scrollTo({top:0,behavior:\'smooth\'})"><span class="tool-kicker">Resources</span><strong>Marketplace</strong><small>Business-service offers for SMEs.</small><em>Browse Marketplace →</em></button><button class="tool-launch steel-launch" onclick="showView(\'steel\');window.scrollTo({top:0,behavior:\'smooth\'})"><span class="tool-kicker">Decision Support</span><strong>Steelmind</strong><small>Pressure-test pricing, hiring, growth and investment decisions.</small><em>Start Steelmind →</em></button></div></section>';
  function install(){
    const shell=document.querySelector('.shell'), footer=shell&&shell.querySelector(':scope > footer.footer');
    if(!shell||!footer)return false;
    const existing=document.getElementById('globalToolsFooter');
    if(!existing) footer.insertAdjacentHTML('beforebegin',footerHTML);
    /* Homepage already has the identical launcher block in its content: hide that duplicate only. */
    const home=document.getElementById('home');
    if(home){const old=home.querySelector('.tool-launchers-wrap');if(old)old.style.display='none';}
    return true;
  }
  if(!install()){let n=0,t=setInterval(function(){n++;if(install()||n>30)clearInterval(t)},100)}
})();