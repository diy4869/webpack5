console.log('hello world')

console.log(666666666)

const something = 'something'

function usingSomething() {
  return something;
}

export function test() {
  console.log('test')
  return usingSomething();
}
test()

import('./assets/user').then(data => {
  console.log(data)
})