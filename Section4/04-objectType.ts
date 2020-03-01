const john: { name: string, age: number } = { name: 'John', age: 25};

interface User {
    name: string;
    age?: number;
}

const jane: User = { name: 'Jane', age: 27};
const Jack: User = { name: 'Jack' };

type Person = User;
const rick: Person = { name: 'Rick', age: 31 };

// -----------------------------------------------

interface Foo { hoge?: number, fuga: string };
interface Bar { hoge: number };
interface Buz { piyo: string };

type FooBar1 = Foo & Bar;
type FooBar2 = Foo | Bar;
type FooBuz1 = Foo & Buz;
type FooBuz2 = Foo | Buz;