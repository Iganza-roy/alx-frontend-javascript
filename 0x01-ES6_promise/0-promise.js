export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const loaded = true;
    if (loaded) {
      resolve('success');
    }else {
      reject('failed to load data');
    }
  });
}
