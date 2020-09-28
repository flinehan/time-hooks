/**
 * This would be a library to fetch and work with our time "api"
 * just using local storage as our api "db" this is a nice way to quickly prototype if there is no api
 */
export default class TimeApi {
  constructor(storage = localStorage, namespace = 'v1/time') {
    this.storage = storage
    this.timeApiNameSpace = namespace
  }

  /**
   * mock network activity
   * @param {*} callback 
   */
  _simulateApiCall(callback) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(callback())
      }, 300)
    })
  }

  /**
   * get all data under the namespace
   */
  async get() {
    return this._simulateApiCall(() => {
      const time = localStorage.getItem(this.timeApiNameSpace)

      if (time) {
        return JSON.parse(time)
      }

      return {}
    })
  }

  /**
   * update data
   * @param {*} value 
   */
  async update(value) {
    return this._simulateApiCall(() => {
      localStorage.setItem(this.timeApiNameSpace, JSON.stringify(value))
      return JSON.parse(localStorage.getItem(this.timeApiNameSpace))
    })
  }
}

export const timeApi = new TimeApi()