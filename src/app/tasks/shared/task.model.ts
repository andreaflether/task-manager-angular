export class Task {
  id: number;
  title: string;
  description?: string;
  done?: boolean;
  deadline?: string;

  constructor(
    id: number,
    title: string,
    description?: string,
    done?: boolean,
    deadline?: string
  ) { }
}