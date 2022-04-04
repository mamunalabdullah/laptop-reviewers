import React from 'react';

const Blogs = () => {
    return (
        <div className="p-10">
            <div className="border-4 border-y-8 p-4">
                <h1 className="text-3xl text-center font-serif font-semibold text-blue-600"> What is Context api?
                </h1>
                <p className=" text-justify p-4 font-serif">
                    The React Context API is a way for a React app to effectively produce
                    global variables that can be passed around. This is the alternative to
                    "prop drilling" or moving props from grandparent to child to parent,
                    and so on. Context is also touted as an easier, lighter approach to
                    state management using Redux.
                </p>
            </div>
            <div className="border-4 border-y-8 p-4 mt-4">
                <h1 className="text-3xl text-center font-serif font-semibold text-blue-600"> What are semantic elements?
                </h1>
                <p className=" text-justify p-4 font-serif">
                    Semantic elements have meaningful names which tells about type of content. For example header, footer, table, … etc. HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them. 
                </p>
            </div>
        </div>
    );
};

export default Blogs;