declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

declare module '*.global.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  const content: any
  export default content
  const classNames: IClassNames
  export = classNames
}

declare module '*.gql' {
  import type { DocumentNode } from 'graphql'

  const value: {
    [key: string]: DocumentNode
  }
  export = value
}
