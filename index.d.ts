interface Options {
  isEmpty: (v: any) => boolean;
}
interface NxStatic {
  get2get: (target: any, paths: string[], value?: any, opts?: Options) => any;
}
