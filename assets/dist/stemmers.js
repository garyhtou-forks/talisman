webpackJsonp([9],{0:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var $=i(1),s=n($),l=i(14),a=i(11),r=n(a),u=i(356),o=n(u),d=i(358),c=n(d),A=i(359),f=n(A),g=i(360),y=n(g),m=i(362),v=n(m);(0,l.render)(s.default.createElement(r.default,{algorithm:o.default}),document.getElementById("lancaster-mount")),(0,l.render)(s.default.createElement(r.default,{algorithm:c.default}),document.getElementById("lovins-mount")),(0,l.render)(s.default.createElement(r.default,{algorithm:f.default}),document.getElementById("porter-mount")),(0,l.render)(s.default.createElement(r.default,{algorithm:y.default}),document.getElementById("s-stemmer-mount")),(0,l.render)(s.default.createElement(r.default,{algorithm:v.default}),document.getElementById("uea-lite-mount"))},11:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var $=i(1),s=n($),l=i(13),a=i(12),r=n(a),u=function(e){return e},o=function(e,t){return e===t},d=(0,l.compose)((0,l.withState)("wordOne","setWordOne",""),(0,l.withState)("wordTwo","setWordTwo","")),c=d(function(e){var t=e.algorithm,i=e.codeRenderer,n=void 0===i?u:i,$=e.comparator,l=void 0===$?o:$,a=e.wordOne,d=e.wordTwo,c=e.setWordOne,A=e.setWordTwo,f=a?t(a):null,g=d?t(d):null,y=f?n(f):"",m=g?n(g):"",v="·",h="default";return f&&g&&(console.log(f,g),l(f,g)?(v="=~",h="success"):(v="!~",h="error")),s.default.createElement("table",null,s.default.createElement("tbody",null,s.default.createElement("tr",null,s.default.createElement("td",null,s.default.createElement(r.default,{placeholder:"Word 1",value:a,onChange:function(e){return c(e.target.value)},status:h})),s.default.createElement("td",{style:{width:"15%",textAlign:"center"}},s.default.createElement("strong",null,v)),s.default.createElement("td",null,s.default.createElement(r.default,{placeholder:"Word 2",value:d,onChange:function(e){return A(e.target.value)},status:h}))),s.default.createElement("tr",null,s.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},y," "),s.default.createElement("td",null),s.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},m," "))))});t.default=c},356:function(e,t){"use strict";function i(e){return u.test(e.charAt(0))?e.length>1:e.length>2&&u.test(e)}function n(e){var t=e.toLowerCase(),n=!0,l=r[t.charAt(t.length-1)];if(!l)return t;for(var u=-1,o=l.length;++u<o;){var d=l[u],c=d[0],A=d[1],f=d[2];if(n||f!==$){var g=t.length-c.length;if(!(g<0||t.substr(g)!==c)){if(f===a)return t;var y=t.substr(0,g)+A;if(i(y)&&(t=y,f===s)){if(n=!1,l=r[t.charAt(t.length-1)],!l)return t;u=-1,o=l.length}}}}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var $="INTACT",s="CONTINUE",l="STOP",a="PROTECT",r={a:[["ia","",$],["a","",$]],b:[["bb","b",l]],c:[["ytic","ys",l],["ic","",s],["nc","nt",s]],d:[["dd","d",l],["ied","y",s],["ceed","cess",l],["eed","ee",l],["ed","",s],["hood","",s]],e:[["e","",s]],f:[["lief","liev",l],["if","",s]],g:[["ing","",s],["iag","y",l],["ag","",s],["gg","g",l]],h:[["th","",$],["guish","ct",l],["ish","",s]],i:[["i","",$],["i","y",s]],j:[["ij","id",l],["fuj","fus",l],["uj","ud",l],["oj","od",l],["hej","her",l],["verj","vert",l],["misj","mit",l],["nj","nd",l],["j","s",l]],l:[["ifiabl","",l],["iabl","y",l],["abl","",s],["ibl","",l],["bil","bl",s],["cl","c",l],["iful","y",l],["ful","",s],["ul","",l],["ial","",s],["ual","",s],["al","",s],["ll","l",l]],m:[["ium","",l],["um","",$],["ism","",s],["mm","m",l]],n:[["sion","j",s],["xion","ct",l],["ion","",s],["ian","",s],["an","",s],["een","",a],["en","",s],["nn","n",l]],p:[["ship","",s],["pp","p",l]],r:[["er","",s],["ear","",a],["ar","",l],["ior","",s],["or","",s],["ur","",s],["rr","r",l],["tr","t",s],["ier","y",s]],s:[["ies","y",s],["sis","s",l],["is","",s],["ness","",s],["ss","",a],["ous","",s],["us","",$],["s","",s],["s","",l]],t:[["plicat","ply",l],["at","",s],["ment","",s],["ent","",s],["ant","",s],["ript","rib",l],["orpt","orb",l],["duct","duc",l],["sumpt","sum",l],["cept","ceiv",l],["olut","olv",l],["sist","",a],["ist","",s],["tt","t",l]],u:[["iqu","",l],["ogu","og",l]],v:[["siv","j",s],["eiv","",a],["iv","",s]],y:[["bly","bl",s],["ily","y",s],["ply","",a],["ly","",s],["ogy","og",l],["phy","ph",l],["omy","om",l],["opy","op",l],["ity","",s],["ety","",s],["lty","l",l],["istry","",l],["ary","",s],["ory","",s],["ify","",l],["ncy","nt",s],["acy","",s]],z:[["iz","",s],["yz","ys",l]]},u=/[aeiouy]/;e.exports=t.default},358:function(e,t){"use strict";function i(e){e=e.toLowerCase().replace(/^a-z'/g,"");for(var t=e,i=0,n=$.length;i<n;i++){var s=$[i],l=s[0],u=s[1];if(t=e.replace(l,""),t.length>1&&t.length<e.length&&a[u](t))break}/[bdglmnprst]{2,}$/.test(t)&&t[t.length-1]===t[t.length-2]&&(t=t.slice(0,-1));for(var o=0,d=r.length;o<d;o++){var c=r[o],l=c[0],A=c[1];t=t.replace(l,A)}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;for(var n=[/alistically$/,"B",/arizability$/,"A",/izationally$/,"B",/antialness$/,"A",/arisations$/,"A",/arizations$/,"A",/entialness$/,"A",/allically$/,"C",/antaneous$/,"A",/antiality$/,"A",/arisation$/,"A",/arization$/,"A",/ationally$/,"B",/ativeness$/,"A",/eableness$/,"E",/entations$/,"A",/entiality$/,"A",/entialize$/,"A",/entiation$/,"A",/ionalness$/,"A",/istically$/,"A",/itousness$/,"A",/izability$/,"A",/izational$/,"A",/ableness$/,"A",/arizable$/,"A",/entation$/,"A",/entially$/,"A",/eousness$/,"A",/ibleness$/,"A",/icalness$/,"A",/ionalism$/,"A",/ionality$/,"A",/ionalize$/,"A",/iousness$/,"A",/izations$/,"A",/lessness$/,"A",/ability$/,"A",/aically$/,"A",/alistic$/,"B",/alities$/,"A",/ariness$/,"E",/aristic$/,"A",/arizing$/,"A",/ateness$/,"A",/atingly$/,"A",/ational$/,"B",/atively$/,"A",/ativism$/,"A",/elihood$/,"E",/encible$/,"A",/entally$/,"A",/entials$/,"A",/entiate$/,"A",/entness$/,"A",/fulness$/,"A",/ibility$/,"A",/icalism$/,"A",/icalist$/,"A",/icality$/,"A",/icalize$/,"A",/ication$/,"G",/icianry$/,"A",/ination$/,"A",/ingness$/,"A",/ionally$/,"A",/isation$/,"A",/ishness$/,"A",/istical$/,"A",/iteness$/,"A",/iveness$/,"A",/ivistic$/,"A",/ivities$/,"A",/ization$/,"F",/izement$/,"A",/oidally$/,"A",/ousness$/,"A",/aceous$/,"A",/acious$/,"B",/action$/,"G",/alness$/,"A",/ancial$/,"A",/ancies$/,"A",/ancing$/,"B",/ariser$/,"A",/arized$/,"A",/arizer$/,"A",/atable$/,"A",/ations$/,"B",/atives$/,"A",/eature$/,"Z",/efully$/,"A",/encies$/,"A",/encing$/,"A",/ential$/,"A",/enting$/,"C",/entist$/,"A",/eously$/,"A",/ialist$/,"A",/iality$/,"A",/ialize$/,"A",/ically$/,"A",/icance$/,"A",/icians$/,"A",/icists$/,"A",/ifully$/,"A",/ionals$/,"A",/ionate$/,"D",/ioning$/,"A",/ionist$/,"A",/iously$/,"A",/istics$/,"A",/izable$/,"E",/lessly$/,"A",/nesses$/,"A",/oidism$/,"A",/acies$/,"A",/acity$/,"A",/aging$/,"B",/aical$/,"A",/alist$/,"A",/alism$/,"B",/ality$/,"A",/alize$/,"A",/allic$/,"BB",/anced$/,"B",/ances$/,"B",/antic$/,"C",/arial$/,"A",/aries$/,"A",/arily$/,"A",/arity$/,"B",/arize$/,"A",/aroid$/,"A",/ately$/,"A",/ating$/,"I",/ation$/,"B",/ative$/,"A",/ators$/,"A",/atory$/,"A",/ature$/,"E",/early$/,"Y",/ehood$/,"A",/eless$/,"A",/elity$/,"A",/ement$/,"A",/enced$/,"A",/ences$/,"A",/eness$/,"E",/ening$/,"E",/ental$/,"A",/ented$/,"C",/ently$/,"A",/fully$/,"A",/ially$/,"A",/icant$/,"A",/ician$/,"A",/icide$/,"A",/icism$/,"A",/icist$/,"A",/icity$/,"A",/idine$/,"I",/iedly$/,"A",/ihood$/,"A",/inate$/,"A",/iness$/,"A",/ingly$/,"B",/inism$/,"J",/inity$/,"CC",/ional$/,"A",/ioned$/,"A",/ished$/,"A",/istic$/,"A",/ities$/,"A",/itous$/,"A",/ively$/,"A",/ivity$/,"A",/izers$/,"F",/izing$/,"F",/oidal$/,"A",/oides$/,"A",/otide$/,"A",/ously$/,"A",/able$/,"A",/ably$/,"A",/ages$/,"B",/ally$/,"B",/ance$/,"B",/ancy$/,"B",/ants$/,"B",/aric$/,"A",/arly$/,"K",/ated$/,"I",/ates$/,"A",/atic$/,"B",/ator$/,"A",/ealy$/,"Y",/edly$/,"E",/eful$/,"A",/eity$/,"A",/ence$/,"A",/ency$/,"A",/ened$/,"E",/enly$/,"E",/eous$/,"A",/hood$/,"A",/ials$/,"A",/ians$/,"A",/ible$/,"A",/ibly$/,"A",/ical$/,"A",/ides$/,"L",/iers$/,"A",/iful$/,"A",/ines$/,"M",/ings$/,"N",/ions$/,"B",/ious$/,"A",/isms$/,"B",/ists$/,"A",/itic$/,"H",/ized$/,"F",/izer$/,"F",/less$/,"A",/lily$/,"A",/ness$/,"A",/ogen$/,"A",/ward$/,"A",/wise$/,"A",/ying$/,"B",/yish$/,"A",/acy$/,"A",/age$/,"B",/aic$/,"A",/als$/,"BB",/ant$/,"B",/ars$/,"O",/ary$/,"F",/ata$/,"A",/ate$/,"A",/eal$/,"Y",/ear$/,"Y",/ely$/,"E",/ene$/,"E",/ent$/,"C",/ery$/,"E",/ese$/,"A",/ful$/,"A",/ial$/,"A",/ian$/,"A",/ics$/,"A",/ide$/,"L",/ied$/,"A",/ier$/,"A",/ies$/,"P",/ily$/,"A",/ine$/,"M",/ing$/,"N",/ion$/,"Q",/ish$/,"C",/ism$/,"B",/ist$/,"A",/ite$/,"AA",/ity$/,"A",/ium$/,"A",/ive$/,"A",/ize$/,"F",/oid$/,"A",/one$/,"R",/ous$/,"A",/ae$/,"A",/al$/,"BB",/ar$/,"X",/as$/,"B",/ed$/,"E",/en$/,"F",/es$/,"E",/ia$/,"A",/ic$/,"A",/is$/,"A",/ly$/,"B",/on$/,"S",/or$/,"T",/um$/,"U",/us$/,"V",/yl$/,"R",/s'/,"A",/'s$/,"A",/a$/,"A",/e$/,"A",/i$/,"A",/o$/,"A",/s$/,"W",/y$/,"B"],$=[],s=0,l=n.length;s<l;s+=2)$.push([n[s],n[s+1]]);var a={A:function(){return!0},B:function(e){return e.length>2},C:function(e){return e.length>3},D:function(e){return e.length>4},E:function(e){return!/e$/.test(e)},F:function(e){return a.B(e)&&a.E(e)},G:function(e){return a.B(e)&&/f$/.test(e)},H:function(e){return/(t|ll)$/.test(e)},I:function(e){return!/[oe]$/.test(e)},J:function(e){return!/[ae]$/.test(e)},K:function(e){return a.B(e)&&/(l|i|(u\we))$/.test(e)},L:function(e){return!/(u|x|([^o]s))$/.test(e)},M:function(e){return!/[acem]$/.test(e)},N:function(e){return/s\w{2}$/.test(e)?a.C(e):a.B(e)},O:function(e){return/[li]$/.test(e)},P:function(e){return!/c$/.test(e)},Q:function(e){return a.B(e)&&!/[ln]$/.test(e)},R:function(e){return/[nr]$/.test(e)},S:function(e){return/(dr|[^t]t)$/.test(e)},T:function(e){return/(s|[^o]t)$/.test(e)},U:function(e){return/[lmnr]$/.test(e)},V:function(e){return/c$/.test(e)},W:function(e){return!/[su]$/.test(e)},X:function(e){return/(l|i|u\we)$/.test(e)},Y:function(e){return/in$/.test(e)},Z:function(e){return!/f$/.test(e)},AA:function(e){return/([dflt]|ph|th|er|or|es)$/.test(e)},BB:function(e){return a.B(e)&&!/(met|ryst)/.test(e)},CC:function(e){return/l$/.test(e)}},r=[[/iev$/,"ief"],[/uct$/,"uc"],[/umpt$/,"um"],[/rpt$/,"rb"],[/urs$/,"ur"],[/istr$/,"ister"],[/metr$/,"meter"],[/olv$/,"olut"],[/([^aoi])ul$/,"$1l"],[/bex$/,"bic"],[/dex$/,"dic"],[/pex$/,"pic"],[/tex$/,"tic"],[/ax$/,"ac"],[/ex$/,"ec"],[/ix$/,"ic"],[/lux$/,"luc"],[/uad$/,"uas"],[/vad$/,"vas"],[/cid$/,"cis"],[/lid$/,"lis"],[/erid$/,"eris"],[/pand$/,"pans"],[/([^s])end$/,"$1ens"],[/ond$/,"ons"],[/lud$/,"lus"],[/rud$/,"rus"],[/([^pt])her$/,"$1hes"],[/mit$/,"mis"],[/([^m])ent$/,"$1ens"],[/ert$/,"ers"],[/([^n])et$/,"$1es"],[/(yt|yz)$/,"ys"]];e.exports=t.default},359:function(e,t){"use strict";function i(e){return e.slice(0,-1)}function n(e,t){var i=e.exec(t);return e.lastIndex=0,i}function $(e){if(e=e.toLowerCase(),e.length<3)return e;var t=null;if("y"===e[0]&&(e="Y"+e.slice(1)),e=e.replace(b,"$1$2"),e=e.replace(E,"$1$2"),t=n(B,e)){var $=t,s=$[1];m.test(s)&&(e=i(e))}else if(t=n(z,e)){var l=t,a=l[1];p.test(a)&&(e=a,w.test(e)?e+="e":x.test(e)?e=i(e):j.test(e)&&(e+="e"))}if(t=n(C,e)){var A=t,f=A[1];e=f+"i"}if(t=n(r,e)){var g=t,y=g[1],I=g[2];m.test(y)&&(e=y+d[I])}if(t=n(u,e)){var T=t,M=T[1],P=T[2];m.test(M)&&(e=M+c[P])}if(t=n(o,e)){var F=t,S=F[1];h.test(S)&&(e=S)}else if(t=n(R,e)){var W=t,L=W[1],Z=W[2],N=L+Z;h.test(N)&&(e=N)}if(t=n(_,e)){var Y=t,k=Y[1];(h.test(k)||v.test(k)&&!O.test(k))&&(e=k)}return/ll$/.test(e)&&h.test(e)&&(e=i(e)),e.toLowerCase()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=$;var s=["ational","tional","enci","anci","izer","bli","alli","entli","eli","ousli","ization","ation","ator","alism","iveness","fulness","ousness","aliti","iviti","biliti","logi"],l=["icate","ative","alize","iciti","ical","ful","ness"],a=["al","ance","ence","er","ic","able","ible","ant","ement","ment","ent","ou","ism","ate","iti","ous","ive","ize"],r=new RegExp("^(.+?)("+s.join("|")+")$"),u=new RegExp("^(.+?)("+l.join("|")+")$"),o=new RegExp("^(.+?)("+a.join("|")+")$"),d={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},c={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},A="[^aeiou]",f="[aeiouy]",g=""+A+A+"*",y=""+f+f+"*",m=new RegExp("^("+g+")?"+y+g),v=new RegExp("^("+g+")?"+y+g+"("+y+")?$"),h=new RegExp("^("+g+")?"+y+g+y+g),p=new RegExp("^("+g+")?"+f),b=/^(.+?)(ss|i)es$/,E=/^(.+?)([^s])s$/,B=/^(.+?)eed$/,z=/^(.+?)(ed|ing)$/,w=/(at|bl|iz)$/,x=/([^aeiouylsz])\1$/,j=new RegExp("^"+g+f+"[^aeiouwxy]$"),C=new RegExp("^(.*"+f+".*)y$"),R=/^(.+?)(s|t)(ion)$/,_=/^(.+?)e$/,O=new RegExp("^"+g+f+"[^aeiouwxy]$");e.exports=t.default},360:function(e,t){"use strict";function i(e){var t=e.length;if(t<3||"s"!==e[t-1])return e;var i=e[t-2];if("u"===i||"s"===i)return e;if("e"===i){if(t>3&&"i"===e[t-3]&&"a"!==e[t-4]&&"e"!==e[t-4])return e.slice(0,-3)+"y";if("i"===e[t-3]||"a"===e[t-3]||"o"===e[t-3]||"e"===e[t-3])return e}return e.slice(0,-1)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},362:function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function n(e){var t=e;if(s.has(e))return{rule:"90",stem:t};if(/'/.test(e)){/'s?$/i.test(e)&&(t=t.replace(/'s?$/i,""));for(var n=0,$=l.length;n<$;n++){var a;t=(a=t).replace.apply(a,i(l[n]))}return{rule:"94",stem:t}}for(var u=0,o=r.length;u<o;u++){var d=r[u],c=d[0],A=d[1],f=d[2];if("string"==typeof A){var g=t.replace(c,A);if(g!==t)return{rule:f,stem:g}}if(c.test(t))return"function"==typeof A?t=A(t):A&&(t=t.slice(0,-A)),{rule:f,stem:t}}return{rule:"0",stem:e}}function $(e){return n(e).stem}Object.defineProperty(t,"__esModule",{value:!1}),t.withRule=n,t.default=$;var s=new Set(["is","as","this","has","was","during","menses"]),l=[[/n't/," not"],[/'ve/," have"],[/'re/," are"],[/'m/," am"]],a=function(e){return"s"===e[e.length-1]&&(e=e.slice(0,-1)),"ing"===e.slice(-3)?e=e.slice(0,-3):"ed"===e.slice(-2)&&(e=e.slice(0,-2)),e[e.length-1]===e[e.length-2]&&(e=e.slice(0,-1)),e},r=[[/^\d+$/,null,"90.3"],[/^\w+-\w+$/,null,"90.2"],[/-/,null,"90.1"],[/_/,null,"90"],[/^[A-Z]+s$/,1,"91.1"],[/^[A-Z]+$/,null,"91"],[/^(?:.*[A-Z].*[A-Z]|[A-Z]{1}).*$/,null,"92"],[/aceous$/,6,"1"],[/ces$/,1,"2"],[/cs$/,null,"3"],[/sis$/,null,"4"],[/tis$/,null,"5"],[/ss$/,null,"6"],[/eed$/,null,"7"],[/eeds$/,1,"7"],[/ued$/,1,"8"],[/ues$/,1,"9"],[/ees$/,1,"10"],[/iases$/,2,"11.4"],[/uses$/,1,"11.3"],[/sses$/,2,11.2],[/eses$/,"esis","11.1"],[/ses$/,1,"11"],[/tled$/,1,"12.5"],[/pled$/,1,"12.4"],[/bled$/,1,"12.3"],[/eled$/,2,"12.2"],[/lled$/,2,"12.1"],[/led$/,2,"12"],[/ened$/,2,"13.7"],[/ained$/,2,"13.6"],[/erned$/,2,"13.5"],[/rned$/,2,"13.4"],[/nned$/,3,"13.3"],[/oned$/,2,"13.2"],[/gned$/,2,"13.1"],[/ned$/,1,"13"],[/ifted$/,2,"14"],[/ected$/,2,"15"],[/vided$/,1,"16"],[/ved$/,1,"17"],[/ced$/,1,"18"],[/arred$/,3,"19.1"],[/erred$/,3,"19"],[/urred$/,3,"20.5"],[/lored$/,2,"20.4"],[/eared$/,2,"20.3"],[/tored$/,1,"20.2"],[/ered$/,2,"20.1"],[/red$/,1,"20"],[/reds$/,2,"20"],[/tted$/,3,"21"],[/noted$/,1,"22.6"],[/leted$/,1,"22.5"],[/[^vm]ited$/,2,"22.4"],[/(?:ch|[vm])i[td]ed$/,1,"22.3"],[/uted$/,1,"22.2"],[/ated$/,1,"22.1"],[/ted$/,2,"22"],[/anges$/,1,"23"],[/aining$/,3,"24"],[/acting$/,3,"25"],[/ttings?$/,"t","26"],[/viding$/,"vide","27"],[/ssed$/,2,"28"],[/sed$/,1,"29"],[/titudes$/,1,"30"],[/oed$/,1,"31.3"],[/d?oes$/,2,"31.2"],[/[oaiu]ked$/,1,"31.1"],[/[aiu]med/,1,"31"],[/ulted$/,2,"32"],[/uming$/,"ume","33"],[/fulness$/,4,"34"],[/ousness$/,4,"35"],[/r[aeiou]bed$/,1,"36.1"],[/beds?$/,"b","36"],[/ssings?$/,"ss","37"],[/ulting$/,3,"38"],[/vings?$/,"v","39"],[/vings$/],[/eadings?$/,"ead","40.7"],[/oadings?$/,"oad","40.6"],[/edings?$/,"ed","40.5"],[/ddings?$/,"d","40.4"],[/ldings?$/,"ld","40.3"],[/rdings?$/,"rd","40.2"],[/ndings?$/,"nd","40.1"],[/dings?/,"de","40"],[/llings?$/,"l","41"],[/ealings?$/,"eal","42.4"],[/olings?$/,"ol","42.3"],[/ailings?$/,"ail","42.2"],[/elings?$/,"el","42.1"],[/lings?$/,"le","42"],[/nged$/,1,"43.2"],[/gged$/,3,"43.1"],[/ged$/,1,"43"],[/mmings?$/,"m","44.3"],[/rming$/,3,"44.2"],[/lming$/,3,"44.1"],[/mings?$/,"me","44"],[/ngings?$/,"ng","45.2"],[/ggings?$/,"g","45.1"],[/gings?$/,"ge","45"],[/aning$/,3,"46.6"],[/ening$/,3,"46.5"],[/gning$/,3,"46.4"],[/nning$/,4,"46.3"],[/oning$/,3,"46.2"],[/rning$/,3,"46.1"],[/ning$/,"ne","46"],[/stings?$/,"st","47"],[/etings?$/,"et","48.4"],[/pting$/,3,"48.3"],[/ntings?$/,"nt","48.2"],[/cting$/,3,"48.1"],[/tings?$/,"ct","48.1"],[/ssed$/,2,"49"],[/les$/,1,"50"],[/tes$/,1,"51"],[/zed$/,1,"52"],[/lled$/,2,"53"],[/irings?$/,"ire","54.4"],[/urings?$/,"ure","54.3"],[/ncings?$/,"nce","54.2"],[/zing$/,3,"54.1"],[/sings?$/,"se","54"],[/lling$/,3,"55"],[/ied$/,"e","56"],[/ating$/,"ate","57"],[/dying$/,"die","58.2"],[/^lying$/,"lie","58.2"],[/tying$/,"tie","58.2"],[/thing$/,null,"58.1"],[/things$/,1,"58.1"],[/\w{2}ings?$/,a,"58"],[/ies$/,"y","59"],[/lves$/,"lf","60.1"],[/ves$/,1,"60"],[/aped$/,1,"61.3"],[/uded$/,1,"61.2"],[/oded$/,1,"61.1"],[/\w{2}eds?$/,a,"62"],[/des$/,1,"63.10"],[/res$/,1,"63.9"],[/pes$/,1,"63.8"],[/mes$/,1,"63.7"],[/ones$/,1,"63.6"],[/izes$/,1,"63.5"],[/ures$/,1,"63.4"],[/ines$/,1,"63.3"],[/ides$/,1,"63.2"],[/[kg]es$/,1,"63.1"],[/es$/,2,"63"],[/is$/,"e","64"],[/ous$/,null,"65"],[/ums$/,null,"66"],[/us$/,null,"67"],[/s$/,1,"68"]];e.exports=t.default,t.default.withRule=t.withRule}});