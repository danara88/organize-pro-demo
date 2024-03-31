export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
}

export interface AccountResponse {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}
