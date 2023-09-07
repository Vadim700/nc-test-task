import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import { JSX } from 'react/jsx-runtime';
import styles from './style.module.scss';

export const LoaderHeaderBody = (
   props: JSX.IntrinsicAttributes & IContentLoaderProps,
) => (
   <div className={styles.root}>
      <ContentLoader
         speed={2}
         width={250}
         height={50}
         viewBox="0 0 250 50"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
         {...props}
      >
         <rect x="0" y="5" rx="3" ry="3" width="250" height="15" />
         <rect x="0" y="30" rx="0" ry="0" width="60" height="13" />
      </ContentLoader>
   </div>
);
