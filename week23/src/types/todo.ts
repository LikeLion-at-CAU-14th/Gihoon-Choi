export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

export interface QuoteResponse {
  id: number;
  quote: string;
  author: string;
}

export type FilterType = 'all' | 'active' | 'completed';