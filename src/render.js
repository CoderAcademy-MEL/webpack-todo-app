import moment from 'moment'
import { div } from './elements'

export const addTask = (task) => {
  const date = moment().startOf('minute').fromNow(); 
  div.insertAdjacentHTML("afterbegin", `
    <div>
      <p>${task}</p>
      <p>${date}</p>
      <hr>
    </div>
  `)
}