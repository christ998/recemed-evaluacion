import { dangerouslySkipEscape, escapeInject } from 'vike/server';
import { renderToHtml } from 'vike-react/server';
export { onRenderHtml };

async function onRenderHtml(pageContext) {
  const { Page, data } = pageContext;
  const pageHtml = await renderToHtml(createElement(Page, data));

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>My SSR App</title>
      </head>
      <body>
        <div id="page-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can define pageContext values here
    },
  };
}
