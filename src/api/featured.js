import axios from 'axios'

export function FeaturedCommodity() {
  return axios.get('https://bird.ioliu.cn/v2/?url=https://www.groupon.com/partial/mobile', {
    params: {
      page:1,
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
