 const Api_tex = 'https://catfact.ninja/fact'

 export const getRandomFact = async () => {
  return fetch(Api_tex)
  .then(res => res.json())
  .then(data => {
    const { fact } = data
    return fact
  })
  }
