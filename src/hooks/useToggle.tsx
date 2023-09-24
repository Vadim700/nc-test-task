import React, { useCallback } from 'react';

export const useToggle = (initialValue: boolean = false) => {
   const [open, setOpen] = React.useState<boolean>(initialValue);

   const toggle = useCallback(() => setOpen((open) => !open), []);

   return [open, toggle];
};
