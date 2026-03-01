interface Person {
  name: string;
  email: string;
}

interface Director extends Person {
  numMoviesDirected: number;
}

interface CastMember extends Person {
  role: string;
  rehearse: (sceneNumber: number) => void;
}

