import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-4xl font-bold my-4" {...props} />,
    h2: (props) => <h2 className="text-3xl font-bold my-4" {...props} />,
    h3: (props) => <h3 className="text-2xl font-bold my-4" {...props} />,
    h4: (props) => <h4 className="text-xl font-bold my-4" {...props} />,
    p: (props) => <p className="" {...props} />,
    a: (props) => <a className="text-blue-500 hover:underline" {...props} />,
    ul: (props) => <ul className="list-disc pl-6 mb-4" {...props} />,
    ol: (props) => <ol className="list-decimal pl-6 mb-4" {...props} />,
    li: (props) => <li className="mb-2" {...props} />,
    img: (props) => <img className="rounded-lg w-full max-h-96 object-cover" {...props} />,
    code: (props) => <code className="rounded-lg" {...props} />,
    pre: (props) => <pre className="rounded-lg" {...props} />,
    table: (props) => <table className="rounded-lg" {...props} />,
    th: (props) => <th className="p-2" {...props} />,
    td: (props) => <td className="p-2" {...props} />,
    blockquote: (props) => <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-700" {...props} />,
    hr: (props) => <hr className="my-4" {...props} />,
    ...components,
  }
}
