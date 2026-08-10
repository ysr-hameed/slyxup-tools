export const onRequest: PagesFunction<{ TOOLS_API_ORIGIN?: string }> = async ({ request, env }) => {
  const base = env.TOOLS_API_ORIGIN ?? 'https://api-tools.slyxup.online';
  const url = new URL(request.url);
  const target = `${base}${url.pathname}${url.search}`;

  const proxy = new Request(target, {
    method: request.method,
    headers: request.headers,
    body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
    redirect: 'follow',
  });

  return fetch(proxy);
};
