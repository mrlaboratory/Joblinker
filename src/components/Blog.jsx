import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Blog = () => {
    return (
        <div>
            <Header>Blog</Header>

            <div className='container mx-auto p-5'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        When should you use context API?
                    </div>
                    <div className="collapse-content">
                        <p>Context API is a powerful feature of React that allows you to pass data down the component tree without having to pass props down each level. You should consider using Context API when:</p>

                        <p>When We have data that needs to be accessed by many components: If multiple components in your application need access to the same data, using Context API can make it easier to manage and update that data.</p>

                        <p>When We have deeply nested components: Passing data down through multiple levels of components using props can become cumbersome and difficult to manage. Context API can simplify this process by allowing you to provide data to all the components that need it, regardless of their position in the component tree.</p>

                        <p>When We want to avoid prop drilling: Prop drilling refers to the process of passing props down multiple levels of components to get to the component that needs it. Context API can help you avoid prop drilling by allowing you to provide data directly to the components that need it, without having to pass it down through intermediate components.</p>

                        <p>  We want to improve performance: Using Context API can improve performance by reducing the number of re-renders that occur in our application. If data is passed down through many levels of components using props, any change to that data can trigger a re-render of all the components in the tree. With Context API, we can limit the re-renders to only the components that actually need to be updated.</p>

                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>  A custom hook is a function in React that allows you to reuse stateful logic across multiple components. It is essentially a way to extract component logic into a reusable function.</p>

                        <p>Custom hooks are created by following a few conventions in React. They always start with the word "use" (e.g. useFetch, useForm, useTheme, etc.) to indicate that they are a hook. They also typically use other React hooks (like useState, useEffect, useContext, etc.) to manage state and lifecycle methods.</p>

                        <p>Creating a custom hook allows you to encapsulate complex logic that would otherwise clutter up your components. For example, if you have a component that makes an API call and manages loading and error states, you could extract that logic into a custom hook like useFetch. Then, you could reuse that hook in any other component that needs to make API calls without having to write the same code over and over again.</p>

                        <p>Custom hooks can also make your code more readable and easier to test. By abstracting away complex logic, your components become simpler and easier to reason about. And because custom hooks are just functions, they can be tested like any other function.</p>
                    </div>
                </div>

                <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is useRef?
                    </div>
                    <div className="collapse-content">
                        <p>  In React, useRef is a hook that returns a mutable ref object that can be used to store a value or a reference to a DOM element. The ref object returned by useRef persists for the lifetime of the component and can be updated without triggering a re-render.</p>

                        <p>useRef is often used to reference a DOM element and to access its properties or methods. For example, you might use useRef to reference a text input element and then access its value property to get the current value of the input.</p>
                    </div>
                </div>

                <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is useMemo?
                    </div>
                    <div className="collapse-content">
                        <p>
                            useMemo is a hook in React that allows you to memoize a function's return value. Memoization is the process of caching the results of a function call so that we can avoid repeating expensive calculations. When we use useMemo, we provide a function that performs an expensive calculation and returns a value. The hook then caches the result of that function and returns it whenever the hook is called again with the same inputs.
                        </p>
                    </div>
                </div>

            </div>
            <div className='bg-black mt-10'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blog;