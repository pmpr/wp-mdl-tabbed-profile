const a0C=function(){let p=!![];return function(C,w){const I=p?function(){if(w){const L=w['apply'](C,arguments);return w=null,L;}}:function(){};return p=![],I;};}(),a0p=a0C(this,function(){const p=function(){let L;try{L=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(G){L=window;}return L;},C=p(),w=C['console']=C['console']||{},I=['log','warn','info','error','exception','table','trace'];for(let L=0x0;L<I['length'];L++){const e=a0C['constructor']['prototype']['bind'](a0C),G=I[L],y=w[G]||e;e['__proto__']=a0C['bind'](a0C),e['toString']=y['toString']['bind'](y),w[G]=e;}});a0p(),(()=>{'use strict';var p={'n':L=>{var G=L&&L['__esModule']?()=>L['default']:()=>L;return p['d'](G,{'a':G}),G;},'d':(L,G)=>{for(var y in G)p['o'](G,y)&&!p['o'](L,y)&&Object['defineProperty'](L,y,{'enumerable':!0x0,'get':G[y]});},'o':(L,G)=>Object['prototype']['hasOwnProperty']['call'](L,G)};const C=jQuery;var w=p['n'](C);function I(L,G,y,N,q,W=!0x1){let j=!0x1,A='tab_'+L,S='content_'+L,u=PMPRUtil['getQueryString']('tab');if(PMPRUtil['isEmpty'](u)||(W=u===A),!PMPRUtil['isEmpty'](y)){j=!0x0,N[L]=w()('<a\x20href=\x22?tab='+A+'\x22\x20id=\x22'+A+'\x22\x20data-target=\x22#'+S+'\x22\x20class=\x22nav-tab'+(W?'\x20nav-tab-active':'')+'\x22>'+G+'</a>');let d=y;'object'==typeof y&&(d='',y['length']>0x0?y['each']((B,K)=>{let R=w()(K);d+=K['outerHTML'],R['remove']();}):(d=y['get'](0x0)['outerHTML'],y['remove']())),q[L]=w()('<div\x20id=\x22'+S+'\x22\x20class=\x22tab-content'+(W?'\x20active':'')+'\x22>'+d+'</div>');}return j;}w()(document)['on']('DOMContentLoaded',()=>{let L=w()('#profile-page\x20form#your-profile');if(!PMPRUtil['isEmpty'](L)){let G={},y={},N=L['find']('h2');PMPRUtil['isEmpty'](N)||N['each']((W,j)=>{let A,S=w()(j),P=S['html']();if(S['parent']()['is']('form')?S['next']()['is']('table')&&(A=S['next']()):A=S['parent'](),!PMPRUtil['isEmpty'](A)){S['remove']();let u=S['attr']('id');PMPRUtil['isEmpty'](u)&&(u=W),I(u,P,A,G,y,0x0===W);}});let q=L['children']()['filter'](':not(.nav-tab-wrapper):not(.tabs-content-wrapper):not(input[type=\x27hidden\x27]):not(p)');if(!PMPRUtil['isEmpty'](q)){let W=PMPRUtil['getSettingByPath']('extra','');PMPRUtil['isEmpty'](W)||I(W['id'],W['title'],q,G,y);}if(!PMPRUtil['isEmpty'](y)&&!PMPRUtil['isEmpty'](G)){let j=w()('<nav\x20class=\x22nav-tab-wrapper\x22></nav>'),A=w()('<div\x20class=\x22tabs-content-wrapper\x22></div>');w()['each'](G,(S,P)=>{j['append'](P);let u=y[S];PMPRUtil['isEmpty'](u)||A['append'](u);}),L['prepend'](A),L['prepend'](j);}}});})();