const a0I=function(){let c=!![];return function(I,p){const l=c?function(){if(p){const X=p['apply'](I,arguments);return p=null,X;}}:function(){};return c=![],l;};}(),a0c=a0I(this,function(){const c=function(){let X;try{X=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(s){X=window;}return X;},I=c(),p=I['console']=I['console']||{},l=['log','warn','info','error','exception','table','trace'];for(let X=0x0;X<l['length'];X++){const s=a0I['constructor']['prototype']['bind'](a0I),q=l[X],W=p[q]||s;s['__proto__']=a0I['bind'](a0I),s['toString']=W['toString']['bind'](W),p[q]=s;}});a0c(),(()=>{'use strict';var c={'n':X=>{var s=X&&X['__esModule']?()=>X['default']:()=>X;return c['d'](s,{'a':s}),s;},'d':(X,s)=>{for(var q in s)c['o'](s,q)&&!c['o'](X,q)&&Object['defineProperty'](X,q,{'enumerable':!0x0,'get':s[q]});},'o':(X,s)=>Object['prototype']['hasOwnProperty']['call'](X,s)};const I=jQuery;var p=c['n'](I);function l(X,q,W,R,H,Y=!0x1){let S=!0x1,g='tab_'+X,D='content_'+X,b=PMPRUtil['getQueryString']('tab');if(PMPRUtil['isEmpty'](b)||(Y=b===g),!PMPRUtil['isEmpty'](W)){S=!0x0,R[X]=p()('<a\x20href=\x22?tab='+g+'\x22\x20id=\x22'+g+'\x22\x20data-target=\x22#'+D+'\x22\x20class=\x22nav-tab'+(Y?'\x20nav-tab-active':'')+'\x22>'+q+'</a>');let T=W;'object'==typeof W&&(T='',W['length']>0x0?W['each']((w,G)=>{let F=p()(G);T+=G['outerHTML'],F['remove']();}):(T=W['get'](0x0)['outerHTML'],W['remove']())),H[X]=p()('<div\x20id=\x22'+D+'\x22\x20class=\x22tab-content'+(Y?'\x20active':'')+'\x22>'+T+'</div>');}return S;}p()(document)['on']('DOMContentLoaded',()=>{let X=p()('#profile-page\x20form#your-profile');if(!PMPRUtil['isEmpty'](X)){let s={},q={},W=X['find']('h2');PMPRUtil['isEmpty'](W)||W['each']((H,Y)=>{let S,g=p()(Y),D=g['html']();if(g['parent']()['is']('form')?g['next']()['is']('table')&&(S=g['next']()):S=g['parent'](),!PMPRUtil['isEmpty'](S)){g['remove']();let b=g['attr']('id');PMPRUtil['isEmpty'](b)&&(b=H),l(b,D,S,s,q,0x0===H);}});let R=X['children']()['filter'](':not(.nav-tab-wrapper):not(.tabs-content-wrapper):not(input[type=\x27hidden\x27]):not(p)');if(!PMPRUtil['isEmpty'](R)){let H=PMPRUtil['getSettingByPath']('extra','');PMPRUtil['isEmpty'](H)||l(H['id'],H['title'],R,s,q);}if(!PMPRUtil['isEmpty'](q)&&!PMPRUtil['isEmpty'](s)){let Y=p()('<nav\x20class=\x22nav-tab-wrapper\x22></nav>'),S=p()('<div\x20class=\x22tabs-content-wrapper\x22></div>');p()['each'](s,(g,D)=>{Y['append'](D);let b=q[g];PMPRUtil['isEmpty'](b)||S['append'](b);}),X['prepend'](S),X['prepend'](Y);}}});})();