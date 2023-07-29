interface NxStatic {
  get2get: (
    target: any,
    paths: string[],
    value?: any,
    opts?: {
      isEmpty: (v: any) => boolean;
    }
  ) => any;
}
