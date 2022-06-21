export default function ({ $axios, redirect }) {
  $axios.setToken(process.env.ACCESS_TOKEN, 'Bearer')
}
