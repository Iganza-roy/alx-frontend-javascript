export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    const success = false;
    if (success) {
      resolve("successfully uploaded");
    } else {
      reject(new Error("guillaume.jpg cannot be processed"));
    }
  });
}
