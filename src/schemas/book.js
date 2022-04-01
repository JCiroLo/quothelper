import Utils from '../utils'

export default class Book {
  constructor (author, title, edition, place, editorial, year) {
    this.type = Utils.getRandom(1, 5)
    this.randomLines = Utils.getRandom(2, 15)
    this.author = author
    this.title = title
    this.edition = edition
    this.place = place
    this.editorial = editorial
    this.year = year
  }

  getType () {
    return this.type
  }

  getAuthor () {
    return this.author
  }

  getTitle () {
    return this.title
  }

  getEdition () {
    return this.edition
  }

  getPlace () {
    return this.place
  }

  getEditorial () {
    return this.editorial
  }

  getYear () {
    return this.year
  }
}
