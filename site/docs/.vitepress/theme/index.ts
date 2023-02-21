import Theme from 'vitepress/theme'
import './style/vitepress.less'

import kt from 'kitty-ui'

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.use(kt)
  }
}
