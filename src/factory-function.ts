export const factoryFunction = <TPrototype extends Object>(
  prototype: TPrototype,
  args: Partial<TPrototype>,
): TPrototype => {
  return Object.assign(Object.create(prototype), { ...args });
};

interface IProto {
  readonly name: string;
  hello: () => string;
}

const proto: IProto = {
  name: '',

  hello() {
    return `Hello, my name is ${this.name}`;
  },
};

export const protoFActory = factoryFunction(proto, { name: 'hello' });
