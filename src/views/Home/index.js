import Book from '../../schemas/book'
import Quotes from '../../schemas/quotes'
import Utils from '../../utils'

import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

SwiperCore.use([Navigation])

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      page: 0,
      quotes: Quotes.map(
        q =>
          new Book(q.author, q.title, q.edition, q.place, q.editorial, q.year)
      ),
      book: null,
      references: [],
      paperLines: [],
      c: 0
    }
  },
  methods: {
    addReference () {
      this.references.push(this.book)
      this.setRandomQuote()
      setTimeout(() => {
        this.scrollToBottom()
      }, 50)
    },
    removeReference () {
      this.references.pop()
    },
    handleSliderChange (e) {
      this.book = this.quotes[e.activeIndex]
      console.log(this.book)
    },
    setRandomQuote () {
      const quote = Quotes[Math.floor(Math.random() * Quotes.length)]
      this.book = new Book(
        quote.author,
        quote.title,
        quote.edition,
        quote.place,
        quote.editorial,
        quote.year
      )
      this.book.type = 1
    },
    renderQuote (book, index) {
      let author = ''
      for (let i = 0; i < book.author.length - 1; i++) {
        author += book.author[i]
      }
      author += `and ${book.author[book.author.length - 1]}`

      // [num] Autores. Titulo. Edicion. Lugar: Editorial, Año
      return `[${index}] ${author}. ${book.title}. ${book.editorial}, ${book.year}`
    },
    scrollToBottom () {
      const refs = this.$refs.refsBox
      refs.scrollTop = refs.scrollHeight

      const paper = this.$refs.paperBox
      paper.scrollTop = paper.scrollHeight
    },
    getRandom: Utils.getRandom
  },
  beforeMount () {
    this.setRandomQuote()
  }
}
