const baseUrl = 'https://api.bootcdn.cn/';

function buildUrl(url) {
  return `${baseUrl}${url}`;
}

export default buildUrl;
