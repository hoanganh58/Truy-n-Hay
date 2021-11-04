import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store'
import { TNSFontIcon, fonticon } from 'nativescript-fonticon'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'
Vue.use(RadSideDrawer)

Vue.registerElement('RadioGroup', () => require('@webileapps/nativescript-radiobutton').RadioGroup)
Vue.registerElement('RadioButton', () => require('@webileapps/nativescript-radiobutton').RadioButton)

TNSFontIcon.debug = true; 
TNSFontIcon.paths = { fa: './assets/css/fontawesome.min.css', far: './assets/css/regular.min.css', fas: './assets/css/solid.min.css', fab: './assets/css/brand.min.css' }
TNSFontIcon.loadCss() 
Vue.filter('fonticon', fonticon) 

Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
