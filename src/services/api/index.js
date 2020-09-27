/**
 * This would be a library to fetch and work with our time "api"
 * just using local storage as our api "db" this is a nice way to quickly prototype if there is no api
 */
export default class TimeApi {
  constructor(storage = localStorage) {
    this.storage = storage
    this.timeApiNameSpace = 'v1/time'
  }

  _simulateApiCall(callback) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(callback)
      }, 300)
    })
  }

  get() {
    this._simulateApiCall(() => {
      const time = localStorage.getItem(this.timeApiNameSpace)
      
      if(time){
        return JSON.parse(time)
      }
      
      return {}

    })
  }
}