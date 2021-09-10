import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

/*
Since the posts slice only knows about the data it's responsible for,
the state argument will be the array of posts by itself, and not the entire Redux state object.
*/

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
        reducer(state, action) {
            state.push(action.payload)
        },
        prepare(title, content, userId) {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    user: userId,
                }
            }
        }
    },
    postUpdated(state, action) {
        const { id, title, content } = action.payload
        const existingPost = state.find(post => post.id === id)
        if (existingPost) {
          existingPost.title = title
          existingPost.content = content
        }
    },
  }
})

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;