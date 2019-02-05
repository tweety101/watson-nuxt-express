export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove (state, { message }) {
    state.list.splice(state.list.indexOf(message), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}