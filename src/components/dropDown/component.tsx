import React from 'react';
import styles from './style.module.scss';

export const DropDown: React.FC = () => {
   const [open, setOpen] = React.useState<boolean>(false);
   const dropDownRef = React.useRef<HTMLDivElement>(null);

   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen((open) => !open);
   };

   React.useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
         if (event.key === 'Escape') {
            setOpen(false);
         }
      };
      document.addEventListener('keydown', handleEsc);

      return () => {
         document.removeEventListener('keydown', handleEsc);
      };
   }, []);

   return (
      <div className={styles.root} ref={dropDownRef}>
         <button
            className={open ? styles.active : styles.open}
            onClick={handleClick}
         >
            <span></span>
         </button>
         {open && (
            <span className={styles.action}>
               <button onClick={handleClick}>Изменить</button>
               <button onClick={handleClick}>Удалить</button>
            </span>
         )}
      </div>
   );
};
