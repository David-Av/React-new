const { default: profileReducer, addPostActionCreator } = require("./profile_reducer");
test('New Post Should Be Added', () => {
  //1.start datda
  let action = addPostActionCreator("KAMO")
  let state = {
    posts: [
      { id: 1, message: "HI", likesCount: 11 },
      { id: 2, message: "first Post", likesCount: 12 },
      { id: 3, message: "Second Post", likesCount: 55 },
    ],
  }
  //2.action
  let newState = profileReducer(state,action)
  //!! 3. expectation 
 expect(newState.posts.length).toBe(4)
  
});



