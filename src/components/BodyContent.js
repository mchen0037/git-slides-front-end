import React, { Component } from 'react';

// var body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius cursus metus in hendrerit. Vivamus ex mi, bibendum sit amet ex bibendum, vehicula pharetra ante. Etiam a egestas dolor. Vivamus non pulvinar dolor. Nam sit amet pulvinar nunc. Maecenas elementum nec enim et molestie. Pellentesque pretium risus felis, eu laoreet turpis congue id. Donec at auctor nibh, a pulvinar nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fermentum accumsan nisi, et aliquet lacus feugiat vitae. Curabitur congue ex et est dictum aliquam.\nSed libero purus, mollis ac ipsum a, commodo commodo enim. Donec sollicitudin egestas felis, eu ultricies augue. Quisque pretium massa nunc, non sollicitudin erat sodales sit amet. Etiam non ullamcorper arcu. Mauris luctus turpis at tortor mattis aliquet. Mauris euismod tellus sed congue sagittis. Phasellus rutrum ipsum diam, nec fermentum dolor pharetra vel. Nunc fermentum quis massa dictum dapibus. Aliquam tristique congue condimentum. Sed euismod ultricies tortor, laoreet ultrices turpis sagittis sit amet. Aenean erat ipsum, mattis id est ut, fringilla placerat orci. Ut eget ex leo.\nAenean lobortis urna non dapibus sagittis. Praesent scelerisque lacus a fringilla auctor. Donec dictum tortor ac mauris dapibus porttitor. Nulla euismod scelerisque purus, sed cursus magna convallis id. Etiam lobortis dui non nisi semper venenatis. Integer semper, turpis nec feugiat maximus, enim mauris porttitor sapien, vitae molestie felis felis ac augue. Mauris mauris arcu, venenatis ut egestas blandit, porttitor in libero. Phasellus accumsan massa sed nunc varius, id convallis felis condimentum. Proin egestas mauris non neque tempor tincidunt. Morbi sagittis ligula vitae ipsum blandit efficitur. Curabitur iaculis lacus sed felis dignissim, et blandit odio tristique. Mauris tincidunt vitae diam et semper.\nInteger tempus eros eu molestie venenatis. Fusce in magna sed dui blandit gravida eget pulvinar nisi. Donec vulputate leo a nisi efficitur, vel ultricies dui cursus. Cras quis volutpat dui, quis ullamcorper tellus. Aliquam mattis turpis feugiat, accumsan libero non, ultricies magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis lorem eros, pulvinar sit amet nisl eget, porttitor semper magna. Quisque cursus congue libero, et commodo arcu auctor et. Morbi feugiat tincidunt ullamcorper. Integer aliquam sagittis dui eget dictum. In non arcu leo. Integer at semper metus.\nMorbi lorem ipsum, cursus ut efficitur ac, ultrices non augue. Nunc convallis libero sit amet viverra consectetur. Morbi nulla libero, euismod quis tortor eget, gravida tincidunt libero. Integer commodo id quam at maximus. Nam lobortis sapien eget ipsum bibendum, ac pellentesque nunc cursus. Donec magna tortor, gravida et orci sed, placerat sodales risus. Nullam ut scelerisque tellus, ac gravida lorem. Aliquam eu mauris id velit lacinia iaculis at vulputate lorem. Donec pretium leo quis gravida lacinia. Integer placerat lorem nec vulputate scelerisque. Nulla rutrum ligula at vestibulum dignissim. Nam vehicula eu sapien et tincidunt. Vestibulum pretium pharetra tellus, quis tincidunt quam bibendum sed. Sed quis orci vel nisl venenatis maximus in vitae elit. Vivamus at suscipit ex, eget facilisis erat.";


class BodyContent extends Component {
  render() {
    console.log("BodyContent props:", this.props)
    return(
      <div>
        <div>
          {
            //FIXME: need to render more than just one slide later lol
            this.props.slides[0] &&
            <h2>{this.props.slides[0].slide_code}</h2>
          }
        </div>
        <div>
          {
            this.props.exercise[0] &&
            <h1> {this.props.exercise[0].exercise_instructions} </h1>
          }
        </div>
        <div>
          {

          }
        </div>
      </div>

    )
  }
}

export default BodyContent;
