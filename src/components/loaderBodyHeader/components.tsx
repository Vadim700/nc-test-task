import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import { JSX } from 'react/jsx-runtime';

export const LoaderHeaderBody = (
   props: JSX.IntrinsicAttributes & IContentLoaderProps,
) => (
   <ContentLoader
      speed={2}
      width={400}
      height={50}
      viewBox="0 0 400 50"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
   >
      <rect x="0" y="5" rx="3" ry="3" width="250" height="15" />
      <rect x="0" y="30" rx="0" ry="0" width="60" height="12" />
   </ContentLoader>
);
