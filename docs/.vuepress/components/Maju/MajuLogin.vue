<!--參考來源-->
<!--https://blog.csdn.net/weixin_39570751/article/details/123570923?spm=1001.2100.3001.7377&utm_medium=distribute.pc_feed_blog_category.none-task-blog-classify_tag-3.nonecase&depth_1-utm_source=distribute.pc_feed_blog_category.none-task-blog-classify_tag-3.nonecase-->

<template>
  <div class="maju">
    <div class="maju__body" @mousemove="handleMouseMove">
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
      <div class="login-box" :class="{ 'up': isPasswordFocused }">
        <div class="login-box__wrapper">
          <h1>用戶登入</h1>
          <form class="login-form" @submit.prevent="handleSubmit">
            <div class="ipt-box">
              <input 
                v-model="formData.username"
                type="text" 
                required
                autocomplete="username"
              >
              <label>用户名</label>
            </div>
            <div class="ipt-box">
              <input 
                v-model="formData.password"
                type="password" 
                required
                autocomplete="current-password"
                @focus="handlePasswordFocus"
                @blur="handlePasswordBlur"
              >
              <label>密碼</label>
            </div>
          </form>
          <button type="submit" class="form-submit-btn" @click="handleSubmit">
            <p>登　　入</p>
          </button>
        </div>
      </div>
    </div>
    <div class="maju__hands left" :class="{ 'up': isPasswordFocused }"></div>
    <div class="maju__hands right" :class="{ 'up': isPasswordFocused }"></div>
    <div class="maju__tail"></div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

/**
 * 眼球移動的偏移量
 */
const EYE_MOVEMENT_DIVISOR = 50;

/**
 * 節流延遲時間（毫秒）
 */
const THROTTLE_DELAY = 16; // ~60fps

/**
 * 眼球 X 軸位置
 */
const eyeBallX = ref('5px');

/**
 * 眼球 Y 軸位置
 */
const eyeBallY = ref('5px');

/**
 * 密碼輸入框聚焦狀態
 */
const isPasswordFocused = ref(false);

/**
 * 表單資料
 */
const formData = reactive({
  username: '',
  password: ''
});

/**
 * 節流計時器
 */
let throttleTimer = null;

/**
 * 處理滑鼠移動事件（帶節流）
 * @param {MouseEvent} event - 滑鼠事件
 */
const handleMouseMove = (event) => {
  if (throttleTimer) return;
  
  throttleTimer = setTimeout(() => {
    eyeBallX.value = `${event.clientX / EYE_MOVEMENT_DIVISOR}px`;
    eyeBallY.value = `${event.clientY / EYE_MOVEMENT_DIVISOR}px`;
    throttleTimer = null;
  }, THROTTLE_DELAY);
};

/**
 * 處理密碼輸入框聚焦
 * @param {FocusEvent} event - 聚焦事件
 */
const handlePasswordFocus = (event) => {
  event.target.select();
  isPasswordFocused.value = true;
};

/**
 * 處理密碼輸入框失焦
 */
const handlePasswordBlur = () => {
  isPasswordFocused.value = false;
};

/**
 * 處理表單提交
 */
const handleSubmit = () => {
  console.log('登入資料：', formData);
  // TODO: 實作登入邏輯
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
$transitionDuration: 0.8s;

* {
  box-sizing: border-box;
}

@keyframes mouthActive {
  0% {
    height: 40px;
  }
  100% {
    height: 20px;
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
        top: v-bind(eyeBallY);
        left: v-bind(eyeBallX);
        width: 10px;
        height: 10px;
        background: #fff;
        border-radius: 50%;
        transition: all 0.1s ease-out;
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
      animation: mouthActive 0.8s linear infinite alternate;
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
      > div {
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
      transition: top $transitionDuration, transform $transitionDuration;
      z-index: 4;
      
      &__wrapper {
        height: 220px;
        margin: 20px;
        border: 1px solid;
        
        > h1 {
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
              
              &:focus ~ label,
              &:valid ~ label {
                color: $mainColor;
                font-size: 12px;
                transform: translateY(-15px);
              }
            }
          }
        }
        
        .form-submit-btn {
          @include flex;
          position: relative;
          top: -14%;
          width: 50%;
          margin: auto;
          background: $mainColor;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
          
          > p {
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
    transition: top $transitionDuration, transform $transitionDuration;
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

