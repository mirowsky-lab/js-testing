interface INode {
  value: unknown;
  next: INode | null; // Pointer or reference
}

export class Node implements INode {
  value: INode['value'];
  next: INode['next'];

  constructor(data: unknown) {
    this.value = data;
    this.next = null;
  }
}
