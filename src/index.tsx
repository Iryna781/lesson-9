import React from 'react'
import ReactDOM from 'react-dom/client'
import Content, { test } from './Content'
// PascalCase
// function App() {
//     return (
//         <div>
//             <h1>Hello React.js</h1>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
//                 quaerat distinctio repellendus minus quibusdam et laudantium
//                 inventore magnam eum exercitationem quidem consectetur nihil
//                 dolores perferendis nam, unde porro numquam saepe.
//             </p>
//         </div>
//     )
// }
// const Title = () => {
//     return <h1>Hello React.js</h1>
// }

type TitleProps = {
    title: string
    text?: string
}

const Title = ({ title, text = 'TEST' }: TitleProps) => {
    return (
        <h1>
            {text} {title}
        </h1>
    )
}

const App = () => {
    return (
        // <React.Fragment>
        <>
            <Title text="Hello" title="React" />
            <Content />
        </>
        // </React.Fragment>
    )
}
// JSX
// const h1 = <h1 id="title" className="test">Hello world</h1>

// without jsx
// const h1 = React.createElement('h1', null, 'Hello React')

// const h1 = React.createElement(
//     'h1',
//     { id: 'title', className: 'test' },
//     'Hello React'
// )

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
