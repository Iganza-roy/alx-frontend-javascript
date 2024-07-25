export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    if (!fileName) {
      resolve('successfully uploaded');
    } else {
      reject(new Error(`${fileName} cannot be processed`));
    }
  });
}
