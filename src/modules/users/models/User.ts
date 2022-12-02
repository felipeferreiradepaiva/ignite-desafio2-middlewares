import { v4 as uuidV4 } from 'uuid';

class User {
  id: string;
  name: string;
  username: string;
  pro: boolean
  todos: string[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    this.pro = false;
  }
};


export { User };