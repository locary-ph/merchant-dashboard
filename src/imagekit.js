import ImageKit from "imagekit-javascript";

const imagekit = new ImageKit({
    publicKey: process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT,
    authenticationEndpoint: `${process.env.REACT_APP_REST_API_BASE_URL}/imagekit/auth`
});

export default imagekit;
