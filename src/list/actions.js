import { fetch, buildUrl } from 'domain/Api';

export function getLibs() {
  const url = buildUrl('/libraries.min.json');
  const options = {
    method: 'GET',
  }
  return fetch(url, options)
    .then((res) => formattResult(res));
}


function formattResult(response = []) {
  return response.map((lib) => ({
    name: lib[0],
    description: lib[1],
    stars: lib[2]
  }));
}
