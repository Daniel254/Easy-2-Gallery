/* Floatbox v3.52.2 */
Floatbox.prototype.getLeftTop_module=function(C,R){var N=this,G=C.offsetLeft||0,P=C.offsetTop||0,Y=C.ownerDocument,V=Y.getElementsByTagName("body")[0],F=Y.documentElement||Y.document,J=Y.defaultView||Y.parentWindow,A=N.getScroll(J);if(C.getBoundingClientRect&&!R){var B=C.getBoundingClientRect();G=B.left+A.left;P=B.top+A.top;if(N.ie){G-=F.clientLeft||V.clientLeft;P-=F.clientTop||V.clientTop}}else{var X=N.getStyle(C,"position").toLowerCase(),W=/absolute|fixed|relative/,M=!W.test(X),E=M,S=C;if(X==="fixed"){G+=A.left;P+=A.top}while(X!=="fixed"&&(S=S.offsetParent)){var D=0,O=0,I=true,X=N.getStyle(S,"position").toLowerCase(),I=!W.test(X);if(N.opera){if(R&&S!==V){G+=S.scrollLeft-S.clientLeft;P+=S.scrollTop-S.clientTop}}else{if(N.ie){if(S.currentStyle.hasLayout&&S!==Y.documentElement){D=S.clientLeft;O=S.clientTop}}else{D=parseInt(N.getStyle(S,"border-left-width"),10);O=parseInt(N.getStyle(S,"border-top-width"),10);if(N.ff&&S===C.offsetParent&&!I&&(N.ffOld||!M)){G+=D;P+=O}}}if(!I){if(R){return{left:G,top:P}}E=false}if(S.offsetLeft>0){G+=S.offsetLeft}G+=D;P+=S.offsetTop+O;if(X==="fixed"){G+=A.left;P+=A.top}if(!(N.opera&&M)&&S!==V&&S!==Y.documentElement){G-=S.scrollLeft;P-=S.scrollTop}}if(N.ff&&E){G+=parseInt(N.getStyle(V,"border-left-width"),10);P+=parseInt(N.getStyle(V,"border-top-width"),10)}}if(!R&&J!==self){var H=J.parent.document.getElementsByTagName("iframe"),U=H.length;while(U--){var S=H[U],Q=N.getIframeDocument(S);if(Q===Y){var K=N.getLeftTop(S);G+=K.left-A.left;P+=K.top-A.top;if(N.ie||N.opera){var T=0,L=0;if(!N.ie||M){T=parseInt(N.getStyle(S,"padding-left"),10);L=parseInt(N.getStyle(S,"padding-top"),10)}G+=S.clientLeft+T;P+=S.clientTop+L}else{G+=parseInt(N.getStyle(S,"border-left-width"),10)+parseInt(N.getStyle(S,"padding-left"),10);P+=parseInt(N.getStyle(S,"border-top-width"),10)+parseInt(N.getStyle(S,"padding-top"),10)}break}}}return{left:G,top:P}};
