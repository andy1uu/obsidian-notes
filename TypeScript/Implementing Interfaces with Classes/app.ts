interface Person {
  name: string;
  email: string;
}

interface CastMember extends Person {
  role: string;
  rehearse: (sceneNumber: number) => void;
}

class Performer implements CastMember {
  name: string = "";
  email: string = "";
  role: string = "";

  rehearse = (sceneNumber: number): void => {
    console.log(`${this.name} is rehearsing scene number: ${sceneNumber}`);
  };
}

let favoriteCastMember: CastMember = new Performer();
favoriteCastMember.name = "Daisy";
favoriteCastMember.rehearse(25);
