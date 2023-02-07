import { ReactNode, useState } from "react";

type QueryParam = {
  key: string;
  value: string;
};

type StackItem = {
  key: string;
  component: ReactNode;
  queryParams: QueryParam[];
};

export const useStack = () => {
  const [stack, setStack] = useState<StackItem[]>([]);

  const push = (item: StackItem) => {
    setStack((prev) => [...prev, item]);
  };

  const pop = () => setStack(stack.slice(0, -1));

  const isEmpty = () => stack.length === 0;

  const next = () => stack?.[stack.length - 1] ?? null;

  const peek = () => stack;

  return {
    isEmpty,
    next,
    peek,
    pop,
    push,
  };
};
