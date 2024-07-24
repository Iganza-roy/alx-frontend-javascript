export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    const fileName = false;
    if (fileName) {
      resolve('successfully uploaded');
    } else {
      reject(new Error('guillaume.jpg cannot be processed'));
    }
  });
}
