import { INode, Node } from './node';

interface IStack {
  top: INode | null;
  size: number;
  push: (data: unknown) => INode;
  pop: () => unknown;
}
export class Stack implements IStack {
  top: IStack['top'] = null;
  size: IStack['size'] = 0;

  public push(data: unknown) {
    const node = new Node(data);

    this.top ? (this.top.next = node) : (this.top = null);

    this.top = node;

    this.size++;

    return this.top as INode;
  }

  public pop() {
    const temp = this.top as INode;
    this.size--;
    return temp;
  }
}
