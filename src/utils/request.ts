// import axios from 'axios';

export const fetchSuccessInfo = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log('console: fetchSuccessInfo');
      resolve('success');
    }, 10)
  );

export default { fetchSuccessInfo };
