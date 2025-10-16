<!--參考來源-->
<!--https://blog.csdn.net/weixin_39570751/article/details/123570923?spm=1001.2100.3001.7377&utm_medium=distribute.pc_feed_blog_category.none-task-blog-classify_tag-3.nonecase&depth_1-utm_source=distribute.pc_feed_blog_category.none-task-blog-classify_tag-3.nonecase-->

<template>
  <div class="maju">
    <div class="maju__body" @mousemove="updateCoordinates">
      <div class="maju-eyes left">
        <div class="eye-ball"></div>
      </div>
      <div class="maju-eyes right">
        <div class="eye-ball"></div>
      </div>
      <div class="maju-nose"></div>
      <div class="maju-lips left"></div>
      <div class="maju-lips right"></div>
      <div class="maju-mouth"></div>
      <div class="maju-blush left"></div>
      <div class="maju-blush right"></div>
      <div class="maju-beard left">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="maju-beard right">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="login-box" :class="{ 'up': inputFocus }">
        <div class="login-box__wrapper">
          <h1>用戶登入</h1>
          <div class="login-form">
            <div class="ipt-box">
              <input type="text" required="">
              <label>用户名</label>
            </div>
            <div class="ipt-box">
              <input 
                type="text" 
                required=""
                @focus="onFocus($event)"
                @blur="onBlur($event)"
              >
              <label>密碼</label>
            </div>
          </div>
          <div class="form-submit-btn">
            <p>登　　入</p>
          </div>
        </div>
      </div>
    </div>
    <div class="maju__hands left" :class="{ 'up': inputFocus }"></div>
    <div class="maju__hands right" :class="{ 'up': inputFocus }"></div>
    <div class="maju__tail"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
let x = ref('5px');
let y = ref('5px');
let inputFocus = ref(false);

const updateCoordinates = (event) => {
  // pass event object, bound to mouse move with updat
  x.value = event.clientX / 50 + 'px';
  y.value = event.clientY / 50 + 'px';
}

const onFocus = (e) => {
  // console.log(e.target)
  e.target.select();
  inputFocus.value = true;
};

const onBlur = (event) => {
  inputFocus.value = false;
};
</script>

<style scoped lang="scss">
@mixin flex($justify-content: center, $align-center: center, $flex-direction: row) {
  display: flex;
  justify-content: $justify-content;
  align-items: $align-center;
  flex-direction: $flex-direction;
}

$mainColor: lightblue;
$border: 3px solid;

* {
  box-sizing: border-box;
}

body {
  background: $mainColor;
}

@keyframes mouthActive{
	0% {
	  height: 4px;
	}
	100% {
	  height: -90px;
	}	
}


.maju {
  position: relative;
  display: inline-block;
  &__body {
    position: relative;
    width: 470px;
    height: 500px;
    border: $border;
    border-radius: 50%;
    background: #fff;
    .maju-eyes {
      position: absolute;
      top: 20%;
      width: 39px;
      height: 39px;
      background: black;
      border-radius: 50%;
      .eye-ball {
        position: absolute;
        top: v-bind(y);
        left: v-bind(x);
        width: 10px;
        height: 10px;
        background: #fff;
        border-radius: 50%;
      }
      &.left {
        left: 30%;
      }
      &.right {
        right: 30%;
      }
    }
    .maju-nose {
      position: absolute;
      top: 25%;
      left: 47.1%;
      width: 25px;
      height: 25px;
      background: black;
      border-radius: 50%;
    }
    .maju-lips {
      position: absolute;
      top: 28%;
      width: 40px;
      height: 20px;
      border: $border;
      border-radius: 50%;
      background: #fff;
      z-index: 2;
      &.left {
        left: 41.5%;
      }
      &.right {
        right: 41.5%;
      }
    }
    .maju-mouth {
      position: absolute;
      top: 30.5%;
      left: 46.85%;
      width: 27px;
      height: 40px;
      border: $border;
      border-radius: 60%;
      border-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      background: #f58da0;
      transition: all linear 1s;
      animation: mouthActive .8s linear infinite alternate;
      z-index: 1;
    }
    .maju-blush {
      position: absolute;
      top: 23%;
      width: 70px;
      height: 60px;
      border-radius: 50%;
      background: pink;
      &.left {
        left: 12%;
      }
      &.right {
        right: 12%;
      }
    }
    .maju-beard {
      >div {
        width: 20px;
        height: 2px;
        background: black;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        &:nth-of-type(1) {
          transform: rotate(12deg);
        }
        &:nth-of-type(3) {
          transform: rotate(-12deg);
        }
      }
      &.left {
        position: relative;
        top: 28%;
        left: 25%;
        width: 70px;
        height: 60px;
        transform: rotate(-12deg);
      }
      &.right {
        position: relative;
        top: 10%;
        left: 60%;
        width: 70px;
        height: 60px;
        transform: rotate(180deg);
      }
    }
    .login-box {
      position: absolute;
      top: 66%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 490px;
      height: 260px;
      border-radius: 5px;
      background: rgb(255, 255, 255);
      box-shadow: 0 0 15px #bbbbbb;
      transition: top .8s, transform .8s;
      z-index: 4;
      &__wrapper {
        height: 220px;
        margin: 20px;
        border: 1px solid;
        >h1 {
          margin: 0;
          padding: 10px;
          font-size: 1.8rem;
          font-weight: bold;
          color: $mainColor;
          @include flex;
        }
        .login-form {
          position: relative;
          top: -40px;
          width: 80%;
          margin: auto;
          .ipt-box {
            width: 100%;
            margin-top: 25px;
            position: relative;
            label {
              position: absolute;
              left: 5px;
              top: 5px;
              font-size: 14px;
              color: #888;
              transition: 0.3s;
              pointer-events: none;
            }
            input {
              width: 100%;
              height: 35px;
              border: none;
              border-bottom: 1px solid #bbb;
              text-indent: 5px;
              outline: none;
              transition: 0.3s;
              &:focus ~ label {
                color: $mainColor;
                font-size: 12px;
                transform: translateY(-15px);
              }
            }
          }
        }
        .form-submit-btn {
          position: relative;
          top: -14%;
          width: 50%;
          margin: auto;
          background: $mainColor;
          border-radius: 5px;
          cursor: pointer;
          >p {
            margin: 0;
            padding: 12px;
            font-size: 1.1rem;
            color: #fff;
            font-weight: bold;
            @include flex;
          }
          &:hover {
            letter-spacing: 5px;
            text-indent: 5px;
            background-color: #69b4cd;
          }
        }
      }
      &.up {
        transform: translate(-50%, -200px);
      }
    }
  }
  
  &__tail {
    position: absolute;
    top: 93%;
    left: 41%;
    transform: translate(-50%, -50%);
    width: 72px;
    height: 110px;
    border: $border;
    border-radius: 50%;
    background: #fff;
    z-index: 4;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: -118%;
      transform: inherit;
      width: inherit;
      height: inherit;
      border: inherit;
      border-radius: inherit;
      background: inherit;
      transform: rotate(45deg);
      z-index: inherit;
    }
  }
  
  &__hands {
    position: absolute;
    top: 61%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 64px;
    border: $border;
    border-radius: 50%;
    background: #fff;
    transition: top .8s, transform .8s;
    z-index: 4;
    &.left {
      left: 0;
    }
    &.right {
      right: -17%;
    }
    &.up {
      top: 40%;
    }
  }
}
</style>

