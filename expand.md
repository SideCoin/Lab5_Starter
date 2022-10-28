# Expand
1. IDs and Classes hold meaning. If the Id or class is nonsense, it's hard to be sure what the element is before having to manually check the html file. This can leads to tons of bugs, especially in JS where you're often calling an specific class or id. 
2. Data attributes allow us to store custom information in an element. You access the data attribute through the dataset object. Some implications of using data attributes could store extra information easily. 
3. DOM fragments are useful as the DOM fragment's children can be appended to the main DOM tree. 
4. Virtual DOM is an representation of an UI is in memory and synced with the actual DOM. VDOM solves the problem of updating unnecessary objects. Virtual DOM can cause higher memory usage. 
5. You can't do this because other elements can share the class attribute.
6. Event listeners can almost infinite amount attached to a single element while an element can only have 1 inline event attached to it. 