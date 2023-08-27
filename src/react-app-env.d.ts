/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_NAME: string
    readonly REACT_APP_AGE: number
  }
}
