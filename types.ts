import type { ReactNode } from 'react';

export type Sender = 'user' | 'bot';

export interface Message {
  id: number;
  sender: Sender;
  // Fix: Use `ReactNode` to correctly type message content that can be a string or JSX,
  // which resolves the "Cannot find namespace 'JSX'" error.
  text: ReactNode;
}
