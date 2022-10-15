import IPerson from "./person/IPerson";
import Person, { makePerson } from "./person/Person";

const testMakePerson = (): void => {
  let jane: IPerson = makePerson("jane");
  let jack: IPerson = makePerson("jack");
  console.log(jane, jack);
};

testMakePerson();
