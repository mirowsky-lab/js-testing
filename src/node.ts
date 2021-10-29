export interface INode {
  value: unknown;
  next: INode | null; // Pointer or reference
  print: () => void;
  addToEnd: (value: unknown) => void;
}

export class Node implements INode {
  value: INode['value'];
  next: INode['next'];

  constructor(value: unknown) {
    this.value = value;
    this.next = null;
  }

  public print(): void {
    console.log(this.value);

    if (this.next !== null) {
      this.next.print();
    }
  }

  public addToEnd(value: unknown): void {
    if (this.next === null) {
      this.next = new Node(value);
    } else {
      this.next.addToEnd(value);
    }
  }
}
