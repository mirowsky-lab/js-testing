interface IStack {
  top: unknown | null;
  size: number;
  push: (data: unknown) => INode;
  pop: () => unknown;
}
export class Stack implements IStack {
  top: IStack['top'] = null;
  size: IStack['size'] = 0;

  public push(data: unknown) {
    const node = new Node(data);

    node.previous = this.top;
    this.top = node;
    this.size++;

    return this.top as INode;
  }

  public pop() {
    const temp = this.top as INode;
    this.top = temp.previous;
    this.size--;
    return temp;
  }
}

interface INode {
  data: unknown;
  previous: unknown | null;
}
export class Node implements INode {
  data;
  previous: INode['previous'];

  constructor(data: unknown) {
    this.data = data;
    this.previous = null;
  }
}
