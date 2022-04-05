import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="p-6">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h2 class="text-xl font-bold mb-2 text-gray-800">1. What is the purpose of Context API ?</h2>
                    <p class="text-gray-700">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
            </div>
            <div class="p-6">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h2 class="text-xl font-bold mb-2 text-gray-800">2. What is Semantic Tag ?</h2>
                    <p class="text-gray-700"> A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements: div and span - Tells nothing about its content. Examples of semantic elements: form, table, and article - Clearly defines its content.</p>
                </div>
            </div>
            <div class="p-6">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h2 class="text-xl font-bold mb-2 text-gray-800">3. What are the differences between inline, block and inline block elements ?</h2>
                    <p class="text-gray-700 font-bold">Inline</p>
                    <p class="text-gray-700">Inline displays the element inline or on the same line. In other words, inline elements do NOT start on a new line and only takes up as much width as its content. So, if you try to set any width and height, it will have no effects.</p>
                    <p class="text-gray-700 font-bold">Block</p>
                    <p class="text-gray-700">Block starts on a new line and takes up the full width available. So that means, block elements will occupy the entire width of its parent element.</p>
                    <p class="text-gray-700 font-bold">Inline-block</p>
                    <p class="text-gray-700">Displays an element as an inline-level block container. You can set height and width values. Its essentially the same thing as inline, except that you can set height and width values.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;