import { addTask } from './render'

export const handleSubmit = (event) => {
  event.preventDefault()
  addTask(event.target[0].value)  
}