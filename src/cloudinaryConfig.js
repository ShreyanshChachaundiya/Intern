import { CloudinaryContext } from 'cloudinary-react';

const CloudinaryConfig = ({ cloudName, children }) => (
  <CloudinaryContext cloudName={cloudName}>{children}</CloudinaryContext>
);

export default CloudinaryConfig;
