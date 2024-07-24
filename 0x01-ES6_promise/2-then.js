export function handleResponseFromAPI(promise) {
  return Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: success,
      });
    } else {
      reject (new Error)
    }
  });
}
