// React18からchildrenを明示しないといけなくなったので、children持ち用の型を定義する
declare namespace React {
  type FCX<P = Record<string, unknown>> = FC<P & { children?: ReactNode }>
}
