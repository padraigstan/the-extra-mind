/* Restore recognised framework names while preserving the approved SME guidance and worksheets. */
(function applyOriginalMatrixNames(){
  const names=['SWOT Analysis','Ansoff Matrix','PESTLE Analysis',"Porter’s Five Forces",'Business Model Canvas','Value Proposition Canvas','BCG Growth-Share Matrix','Impact × Effort Matrix','Scenario Planning','Root Cause Analysis / 5 Whys'];
  function apply(){
    try{
      if(typeof matrixTools!=='undefined' && Array.isArray(matrixTools)){
        matrixTools.forEach((t,i)=>{if(names[i]) t.name=names[i]});
        if(typeof renderMatrix==='function') renderMatrix();
        return true;
      }
    }catch(e){}
    return false;
  }
  if(!apply()){let n=0;const timer=setInterval(()=>{n++;if(apply()||n>30)clearInterval(timer)},100)}
})();