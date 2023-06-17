export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type FilterState = 'All' | 'Active' | 'Completed';
