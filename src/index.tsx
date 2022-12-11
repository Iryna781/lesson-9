import React from 'react'
import ReactDOM from 'react-dom/client'

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
    title: string | number
}

const Title = (props: TitleProps) => {
    return <h1>Hello {props.title}</h1>
}

const Content = () => {
    return (
        // <React.Fragment>
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                quaerat distinctio repellendus minus quibusdam et laudantium
                inventore magnam eum exercitationem quidem consectetur nihil
                dolores perferendis nam, unde porro numquam saepe.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                quasi illum ut voluptatibus, maiores nam harum vero enim dolorem
                corrupti iusto odit accusamus, omnis fugit necessitatibus dolore
                quam quidem dolorum.
            </p>
        </>
        // </React.Fragment>
    )
}
const App = () => {
    return (
        // <React.Fragment>
        <>
            <Title title={10} />
            <Title title="About" />
            <Title title="Bla-bla" />

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
