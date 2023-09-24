import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Note } from '../../types';

const notes: Note[] = [
   {
      id: 1,
      title: 'Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
      date: '20.12.2019',
      image: '',
   },
   {
      id: 2,
      title: 'Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
      date: '22.03.2022',
      image: '../../../images/png/map.png',
   },
];

type NoteState = {
   list: Note[];
};

const initialState: NoteState = {
   list: notes,
};

export const noteSlice = createSlice({
   name: 'notes',
   initialState,
   reducers: {
      addNote: (state, { payload }: PayloadAction<Note>) => {
         const { title } = payload;
         title && state.list.push(payload);
      },

      removeNote: (state, { payload }: PayloadAction<number | undefined>) => {
         state.list = state.list.filter((item) => item.id !== payload);
      },

      editNote: (state, { payload }: PayloadAction<Note>) => {
         const { date, title } = payload;
         const editedNote = state.list.find((note) => note.id === payload.id);
         if (editedNote && title) {
            editedNote.date = date;
            editedNote.title = title;
         }
      },
   },
});

export const { addNote, removeNote, editNote } = noteSlice.actions;

export default noteSlice.reducer;
