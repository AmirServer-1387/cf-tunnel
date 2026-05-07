export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname + url.search;
    const targetUrl = `http://154.91.170.7:9000/m8Xk9Lp2Qw5RtY7${path}`;

    const response = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    return new Response(response.body, {
      status: response.status,
      headers: response.headers
    });
  }
};
