export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'ey354lnsxlkcngdsiiuqht9NFIDSNFJdoidfsamnj438nflkj',
        user: {
          name: 'Vinicius',
          email: 'martnght@gmail.com',
        },
      });
    }, 1500);
  });
}

export interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
