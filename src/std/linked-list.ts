import { INode, Node } from './node';

export interface ILinkedList {
  headNode: INode | null;
  print: () => void;
  delete: () => void;
  insert: <TValue>(index: number, value: TValue) => void;
  append: <TValue>(value: TValue) => void;
  prepend: <TValue>(value: TValue) => void;
  replace: <TValue>(index: number, value: TValue) => void;
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

  public replace<TValue>(index: number, value: TValue) {
    if (index > this.length) {
      throw new Error('Index out of bounds');
    } else {
      const temp = new Node(value);
      let targetNode = this.headNode;
      let targetNodeLeft: INode | null = null;
      let targetNodeRight: INode | null = null;
      if (!targetNode) {
        this.headNode = temp;
      } else if (index === 0) {
        temp.next = this.headNode?.next ?? null;
        this.headNode = temp;
      } else {
        for (let i = 0; i < index; i++) {
          if (targetNode.next) {
            targetNodeLeft = targetNode;
            targetNode = targetNode.next;
            targetNodeRight = targetNode.next;
          }
        }

        temp.next = targetNode;
        targetNode.next = targetNodeRight;
      }
    }
  }

  public insert<TValue>(index: number, value: TValue) {
    if (index > this.length) {
      throw new Error('Index out of bounds');
    } else {
      const temp = new Node(value);
      let targetNode = this.headNode;
      let targetNodeLeft: INode | null = null;
      let targetNodeRight: INode | null = null;

      if (!targetNode) {
        this.headNode = temp;
      } else if (index === 0) {
        temp.next = this.headNode?.next ?? null;
        this.headNode = temp;
      } else {
        for (let i = 0; i < index; i++) {
          if (targetNode.next) {
            targetNodeLeft = targetNode;
            targetNode = targetNode.next;
            targetNodeRight = targetNode.next;
          }
        }

        targetNode = temp;
        targetNodeLeft && (targetNodeLeft.next = targetNode);
        targetNode && (targetNode.next = targetNodeRight);
      }
    }
  }
}
