export interface CompilerRequestMessage<T> {
  type: CompilerMessageType;
  data: T;
  id: number;
}

export enum CompilerMessageType {
  Compile
}

export interface CompilerResponseMessage<T> {
  data?: T;
  isErroneous?: boolean;
  error?;
  id: number;
}