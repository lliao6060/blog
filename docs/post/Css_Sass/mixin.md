# scss mixin

```scss
@mixin flex($justify-content: center, $align-center: center, $flex-direction: row) {
  display: flex;
  justify-content: $justify-content;
  align-items: $align-center;
  flex-direction: $flex-direction;
}

@mixin img-horizontal-flip() {
  -moz-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);
}

@mixin top-distance($dis: -1.1) {
  position: relative;
  top: $dis * 1%;
}

@mixin boxContent($color: --linen, $lineHeight: 1.8) {
  color: var($color);
  line-height: $lineHeight;
}

@mixin background-img($path, $name) {
  background: url('#{$path}/assets/images/#{$name}');
}

@mixin customScrollBar($color) {
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }


  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: $color;
  }
}


$xxl: 1600;
$xl: 1380;
$lg: 1024;
$md-lg: 992;
$md: 768;
$sm-md: 576;
$sm: 480;
$mini: 375;
$smallest: 320;
$breakpoints: ($xxl, $xl, $lg, $md-lg, $md, $sm-md, $sm, $mini, $smallest);
$minW: ($xxl, $xl, $lg, $md-lg, $md, $sm-md, $sm, $mini, $smallest);
$maxW: ($xxl, $xl, $lg, $md-lg, $md, $sm-md, $sm, $mini, $smallest);
$height: ($xxl, $xl, $lg, $md-lg, $md, $sm-md, $sm, $mini, $smallest);


@mixin min-width-RWD($breakpoints) {
  @media screen and (min-width: ($breakpoints * 1px)) {
    @content
  }
}

@mixin RWD($breakpoints) {
  @media screen and (max-width: ($breakpoints * 1px)) {
    @content
  }
}


@mixin RWD-max-height($breakpoints, $height) {
  @media screen and (max-width: ($breakpoints * 1px)) and (max-height: ($height * 1px)) {
    @content
  }
}

@mixin RWD-min-with-max-width($minW, $maxW) {
  @media screen and (min-width: ($minW * 1px)) and (max-width: ($maxW * 1px)) {
    @content
  }
}

@mixin landscape-RWD($breakpoints) {
  @media only screen and (max-device-width: ($breakpoints * 1px)) and (orientation : landscape) {
    @content
  }
}

@mixin portrait-RWD($breakpoints) {
  @media only screen and (max-device-width: ($breakpoints * 1px)) and (orientation : portrait) {
    @content
  }
}

@mixin safe-modal($base: 75vmin) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: $base;
}
```
