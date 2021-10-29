import { INode, Node } from './node';

export interface ILinkedList {
  headNode: INode | null;
  print: () => void;
  delete: () => void;
  append: <TValue>(value: TValue) => void;
  prepend: <TValue>(value: TValue) => void;
  empty: boolean;
  length: number;
}

export class LinkedList implements ILinkedList {
  public headNode: ILinkedList['headNode'];
  public empty: ILinkedList['empty'];
  public length: ILinkedList['length'];

  constructor() {
    this.headNode = null;
    this.empty = true;
    this.length = 0;
  }

  public print(): void {
    console.log(this.headNode?.value ?? null);

    let p = this.headNode;

    while (p?.next !== null) {
      p = (p as INode).next;
      console.log(p?.value);
    }
  }

  //   This properly works because javascript is "pass by copy of a reference.
  //   Since the headnode is an instance (object.create) of INode "p" actually
  //   holds a a reference to the local linked list structure headnode

  public delete(): void {
    let p = this.headNode;

    if (p !== null) {
      while (p.next !== null) {
        if (p.next.next === null) {
          p.next = null;
        } else {
          p = p?.next;
        }
      }
    }

    this.headNode === null ? (this.empty = true) : (this.empty = false);

    this.length--;
  }

  public prepend<TValue>(value: TValue): void {
    const tempNode = new Node(value);
    const currentHeadNode = this.headNode;
    tempNode.next = currentHeadNode;

    if (!currentHeadNode) {
      this.headNode = tempNode;
    } else {
      this.headNode = tempNode;
    }
  }

  public append<TValue>(value: TValue): void {
    const tempNode = new Node(value);
    let node = this.headNode;

    if (!node) {
      this.headNode = tempNode;
    } else {
      while (node.next) {
        node = node.next;
      }

      node.next = tempNode;
    }

    this.empty ? (this.empty = false) : (this.empty = true);

    this.length++;
  }
}
