export default {
   username: 'db_username_here',
   password: 'db_password_here',
   mongoURL: `db_url_here`,
   get mongoURI () {
      return `mongodb://${this.username}:${this.password}@${this.mongoURL}`
   }
}
