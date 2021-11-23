export class APIResponse<T = {}> {
  constructor(
    private _result: boolean,
    private _message: string,
    private _data: T
  ) { }

  get result() {
    return this._result
  }

  get message() {
    return this._message
  }

  get data() {
    return this._data
  }
}