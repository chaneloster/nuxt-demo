import MyComponent from '../../../../slices/Myslice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Myslice'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"myslice","items":[],"primary":{"title":[{"type":"heading1","text":"Empower frictionless channels","spans":[]}],"description":[{"type":"paragraph","text":"Esse nisi amet adipisicing ut sint ut aliquip cillum nostrud deserunt nulla. Amet pariatur quis anim anim laborum amet eu pariatur do.","spans":[]}],"lien":{"link_type":"Web","url":"http://google.com"},"couleur":"#5a6b57"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
