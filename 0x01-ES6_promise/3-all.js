import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
