interface NxGet2GetOptions {
  isEmpty: (v: any) => boolean;
}
interface NxStatic {
  get2get: (target: any, paths: string[], value?: any, opts?: NxGet2GetOptions) => any;
}
