"use strict";require("@sveltejs/kit/dist/renderer");var e=require("./app.js"),t=require("./Nav.js");const a=e.create_ssr_component(((a,n,r,o)=>{let{param:p}=n;return void 0===n.param&&r.param&&void 0!==p&&r.param(p),`<h1>About</h1>\n<p>Here is some <em>italic</em> text. <strong>Bold</strong> of you to assume it will be rendered! <strong>Muahahaha!!</strong></p>\n<p>Can you <em>count</em> on <strong>this</strong> working?</p>\n${e.validate_component(t.Counter,"Counter").$$render(a,{},{},{})}\n<p>Well, well, well. You can!</p>\n<p>And here is a slot for other text:</p>\n${o.default?o.default({}):""}\n<p>Now let’s see what the containing page put in here.</p>\n<p>And I can have parameters in my Markdown, too!\nThe containing page gave us ${e.escape(p)} as a parameter.</p>`}));const n=e.create_ssr_component(((n,r,o,p)=>`<main>${e.validate_component(t.Nav,"Nav").$$render(n,{},{},{})}\n    ${e.validate_component(a,"About").$$render(n,{param:38},{},{default:()=>`<p>Inserted ${e.escape(42)} into the about page.</p>`})}</main>`));exports.default=n;
//# sourceMappingURL=index2.js.map
