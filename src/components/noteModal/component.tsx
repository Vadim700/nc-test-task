import * as React from 'react';
import { Box, Button, Modal } from '@mui/material';
import styles from './style.module.scss';
import { NoteForm } from '../noteForm/component';
import { Route, Routes } from 'react-router-dom';
import { ReactComponent as PlusIcon } from '../../svg/Plus.svg';

type NoteModalProps = {
   idNote?: number;
   props?: 'newNote' | 'editNote';
};

const popupBodyStyle = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 500,
   bgcolor: 'background.paper',
   border: '1px solid var(--stroke)',
   borderRadius: '4px',
   boxShadow: 24,
   p: 4,
};

export const NoteModal: React.FC<NoteModalProps> = ({ idNote, props }) => {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const onSubmit = () => setOpen(false);

   const id = idNote;

   return (
      <>
         {props === 'editNote' && (
            <Button onClick={handleOpen}>Изменить</Button>
         )}
         {props === 'newNote' && (
            <Button onClick={handleOpen}>
               <div className={styles.addItem}>
                  <Routes>
                     <Route
                        index
                        path="notes"
                        element={<span>Новая заметка</span>}
                     />
                     <Route
                        path="consultation"
                        element={<span>Записать</span>}
                     />
                     <Route
                        path="movies"
                        element={<span>Рекомендовать</span>}
                     />
                     <Route
                        path="events"
                        element={<span>Рекомендовать</span>}
                     />
                  </Routes>
                  <span>
                     <PlusIcon />
                  </span>
               </div>
            </Button>
         )}

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={popupBodyStyle}>
               {props === 'editNote' && (
                  <>
                     <p className={styles.title}>Изменить запись</p>
                     <NoteForm onSubmit={onSubmit} id={id} props={'editNote'} />
                  </>
               )}
               {props === 'newNote' && (
                  <>
                     <p className={styles.title}>Новая запись</p>
                     <NoteForm onSubmit={onSubmit} id={id} props={'newNote'} />
                  </>
               )}
            </Box>
         </Modal>
      </>
   );
};
