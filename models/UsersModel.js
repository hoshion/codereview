const fs = require('fs').promises

class UsersModel {
  constructor () {
    fs.readFile('users.json', 'utf-8').then(usersJSON => {
      this.object = JSON.parse(usersJSON)
      this.array = this.object.users
    })
  }

  async add (email, password) {
    this.array.push({ email, password })
    await this.save()
    return { email }
  }

  exists (email) {
    return this.array.some(user => user.email === email)
  }

  async save () {
    await fs.writeFile('users.json', JSON.stringify(this.object))
  }

  find (email) {
    return this.array.find(user => user.email === email)
  }
}

module.exports = new UsersModel()
