import axios from 'axios';

export async function getLibs() {
  const response =  await axios.get('https://api.bootcdn.cn/libraries.min.json');
  return response.data;
}

function formattResult(libs) {
  return 
}
