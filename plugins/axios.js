export default function ({ $axios, error: nuxtError }) {
  $axios.onError(error => {
    nuxtError({
      stausCode: error.response.status,
      messge: error.message,
    })
  })
  $axios.setToken(process.env.ACCESS_TOKEN, 'Bearer')
}
