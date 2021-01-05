import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([1000, 3, -5, 0]);
numbersCollection.sort();
console.log('RESULT: ', numbersCollection.data);

const charactersCollection = new CharactersCollection('ykAoISEwaXbC');
charactersCollection.sort();
console.log('RESULT: ', charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
