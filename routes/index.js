import page from './page'
import api from './api'

export default app => {
  app.use(page.routes())
  app.use(api.routes())
}