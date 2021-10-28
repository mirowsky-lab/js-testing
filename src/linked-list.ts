import { INode, Node } from './node';

export interface ILinkedList {
  headNode: INode | null;
  print: () => void;
  addToEnd: <T>(data: T) => void;
  addToBeginning: <T>(data: T) => void;
}

export class LinkedList implements ILinkedList {
  public headNode: ILinkedList['headNode'];

  constructor() {
    this.headNode = null;
  }

  public print(): void {
    console.log(this.headNode?.value ?? null);

    if (this.headNode?.next !== null) {
      console.log(this.headNode?.next.value);
    }
  }

  public addToEnd<T>(data: T): void {
    if (this.headNode === null) {
      this.headNode = new Node(data);
    } else if (this.headNode.next !== null) {
    }
  }
}
