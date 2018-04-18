import axios from 'axios'

export function Getaways() {
  return axios.get('https://bird.ioliu.cn/v2/?url=https://www.groupon.com/partial/mobile', {
    params: {
      page:4,
      isTouchRequest:true,
      headers: {
        referer: 'https://www.groupon.com/',
        host: 'www.groupon.com'
      }
    }
  }).then((response) => {
    return Promise.resolve(response.data)
  })
    .catch(function (error) {
      console.log(error)
    })
}
