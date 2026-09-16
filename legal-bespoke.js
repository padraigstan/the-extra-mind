/* The Extra Mind — bespoke legal contract enquiry */
(function(){
  function install(){
    const legal=document.getElementById('legal');
    if(!legal) return false;
    const head=legal.querySelector('.pagehead');
    if(!head) return false;
    if(!document.getElementById('legalSolicitorRequest')){
      const wrap=document.createElement('div');
      wrap.className='matrix-human';
      wrap.id='legalSolicitorRequest';
      wrap.innerHTML='<div><button type="button" onclick="requestBespokeContract()">Request Solicitor to build bespoke contract →</button><small>For contracts that need to be built specifically for your business.</small></div>';
      head.appendChild(wrap);
    }
    return true;
  }
  window.requestBespokeContract=function(){
    const kicker=document.getElementById('modalKicker'), title=document.getElementById('modalTitle'), body=document.getElementById('modalBody'), modal=document.getElementById('modal');
    kicker.textContent='Legal & Contracts · Bespoke Solicitor Service';
    title.textContent='Request a solicitor to build a bespoke contract';
    body.innerHTML='<p>For agreements that need more than a standard template, The Extra Mind works with a panel of Irish solicitors who can build a bespoke contract around your specific requirements.</p><p><strong>Tell us what you need below. After you submit your request, we will review the requirement and respond with a price for the custom contract before any work begins.</strong></p><div class="host-form"><label>Your name<input id="legalName" type="text" autocomplete="name" placeholder="Name" required></label><label>Email<input id="legalEmail" type="email" autocomplete="email" placeholder="you@business.ie" required></label><label class="full">Contract required<input id="legalContract" type="text" placeholder="e.g. Shareholders Agreement, bespoke supplier contract…" required></label><label class="full">Tell us what you need<textarea id="legalDetails" placeholder="Describe the parties involved, what the agreement needs to cover, any important commercial terms and your timing." required></textarea></label><div class="full"><button class="primary" type="button" onclick="submitBespokeContract()">Request a price →</button></div></div>';
    modal.classList.add('show');
  };
  window.submitBespokeContract=function(){
    const name=document.getElementById('legalName'), email=document.getElementById('legalEmail'), contract=document.getElementById('legalContract'), details=document.getElementById('legalDetails');
    if(!name.value.trim()||!email.value.trim()||!contract.value.trim()||!details.value.trim()){ if(typeof toastMsg==='function')toastMsg('Please complete your name, email and contract details.'); return; }
    if(!/^\S+@\S+\.\S+$/.test(email.value.trim())){ if(typeof toastMsg==='function')toastMsg('Please enter a valid email address.'); return; }
    body=document.getElementById('modalBody');
    body.innerHTML='<div style="padding:12px 0 24px"><div class="kicker">REQUEST RECEIVED</div><h3 style="font-size:24px;margin:8px 0 12px">Thank you, '+name.value.trim().replace(/[<>]/g,'')+'.</h3><p>We have captured your request for a <strong>'+contract.value.trim().replace(/[<>]/g,'')+'</strong>.</p><p>The requirement will be reviewed and we will respond to <strong>'+email.value.trim().replace(/[<>]/g,'')+'</strong> with a price for the bespoke contract before any work begins.</p></div>';
  };
  if(!install()){let tries=0,t=setInterval(function(){tries++;if(install()||tries>30)clearInterval(t)},100)}
})();