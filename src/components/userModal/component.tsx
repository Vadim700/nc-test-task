import * as React from 'react';
import { Box, Button, Modal } from '@mui/material';
import styles from './style.module.scss';
import { FormUser } from '../formUser/component';
import { useParams } from 'react-router-dom';

type UserModalProps = {};

const popupBodyStyle = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '70%',
   maxWidth: '400px',
   bgcolor: 'background.paper',
   border: '1px solid var(--stroke)',
   borderRadius: '4px',
   boxShadow: 24,
   p: 3,
};

export const UserModal: React.FC<UserModalProps> = () => {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const onSubmitModal = () => setOpen(false);

   const { id } = useParams() as { id: string };

   const closeForm = (): void => {};

   return (
      <>
         <Button onClick={handleOpen}>Изменить</Button>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={popupBodyStyle}>
               <p className={styles.title}>Изменить данные пользователя</p>
               <FormUser
                  props={'editUser'}
                  onSubmitModal={onSubmitModal}
                  currentId={id}
                  onSumbit={closeForm}
               />
            </Box>
         </Modal>
      </>
   );
};
