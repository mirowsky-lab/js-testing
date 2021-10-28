export interface INode {
  value: unknown;
  next: INode | null; // Pointer or reference
}

export class Node implements INode {
  value: INode['value'];
  next: INode['next'];

  constructor(value: unknown) {
    this.value = value;
    this.next = null;
  }
}
