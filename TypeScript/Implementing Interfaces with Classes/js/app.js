"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Performer {
    name = "";
    email = "";
    role = "";
    rehearse = (sceneNumber) => {
        console.log(`${this.name} is rehearsing scene number: ${sceneNumber}`);
    };
}
let favoriteCastMember = new Performer();
favoriteCastMember.name = "Daisy";
favoriteCastMember.rehearse(25);
//# sourceMappingURL=app.js.map