import axios from 'axios'

const url = 'https://api.myjson.com/bins/aso7r'
axios.defaults.headers.put['Content-Type'] = 'application/json'

export const get = () => axios.get(url)

export const update = (data) => get().then((response) =>
    axios.put(url, JSON.stringify([...response.data, data]))
)
