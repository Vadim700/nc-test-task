export type User = {
   id: number;
   photo?: string;
   name: string;
   fullName?: string;
   age: number;
   sex?: string;
   selected?: boolean;
   mark?: string;
};

export type Note = {
   id?: number;
   title: string;
   date: string;
   image?: string;
};
