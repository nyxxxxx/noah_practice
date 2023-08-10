<template>
  <canvas id="canvas"></canvas>
</template>

<script>
import springImage from '@/assets/images/season/logo/sakura.png'
import winterImage from '@/assets/images/season/logo/snow.png'
import { onBeforeMount } from 'vue';


export default {
  name: 'CanvasBackground',
  props: {
    imagePath: String,
  },
  setup(props) {
    var img = new Image();//粒子圖片
    img.width = 30;
    img.height = 30;
    onBeforeMount(() => {
      if (props.imagePath == 'spring') {
        img.src = springImage;
      }
      else if (props.imagePath == 'winter') {
        img.src = winterImage;
      }
    });



    img.onload = function () {

      var canvas = document.getElementById('canvas'),
        content = canvas.getContext('2d'),
        round = [],//粒子陣列
        WIDTH,
        HEIGHT;

      const initRoundPopulation = 50;//粒子數量
      WIDTH = document.documentElement.scrollWidth;
      HEIGHT = document.documentElement.scrollHeight;

      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      //粒子物件
      function Round_item(index, x, y) {
        this.index = index;
        this.x = x;//X座標
        this.y = y;//Y座標
        this.x_dir = Math.random() < 0.5 ? true : false;//粒子向左或是向右飄
        this.x_speed = (Math.floor(Math.random() * 80) + 20) / 100; //x方向 speed range 0.2~1;
        this.y_speed = (Math.floor(Math.random() * 80) + 20) / 100; //y方向 speed range 0.2~1;
        this.r = Math.random() * 6;//初始角度
        this.rDir = Math.random() < 0.5 ? 1 : -1; // 隨機設置旋轉方向為1或-1
      }

      //粒子 創建原型function
      Round_item.prototype.draw = function () {
        content.save();
        content.translate(this.x + img.width / 2, this.y + img.height / 2);
        // content.translate(this.x, this.y);
        content.rotate(this.r);
        content.drawImage(img, -img.width / 2, -img.height / 2, img.width, img.height);
        // content.drawImage(img, 0, 0, 30, 30);
        content.restore();
      }
      //粒子 移動原型function
      Round_item.prototype.move = function () {
        // X軸移動
        this.x += this.x_dir ? this.x_speed : -this.x_speed;
        // Y軸移動
        this.y += this.y_speed;
        // 旋轉粒子
        this.r += this.rDir * (Math.PI / 180);
        if (this.y >= HEIGHT) {//超出頁面長度
          this.y = -10;//重置Y座標
        }
        else if (this.x <= -10) {//超出頁面左邊
          this.x = WIDTH + 10;//從右邊回來
        }
        else if (this.x >= WIDTH + 10) {//超出頁面右邊
          this.x = -10;//從左邊回來
        }

        this.draw();
      }
      //動畫
      function animate() {
        content.clearRect(0, 0, WIDTH, HEIGHT);//清除

        for (var i in round) {
          round[i].move();//move原型函數改變X Y座標
        }
        requestAnimationFrame(animate);//重繪，不斷重複執行
      }

      //創建粒子
      function Round_item_create() {
        for (var i = 0; i < initRoundPopulation; i++) {
          round[i] = new Round_item(i, Math.random() * WIDTH, Math.random() * HEIGHT);
          round[i].draw();
        }
        animate();
      }

      Round_item_create();
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //font css

canvas {
  position: absolute;
  z-index: -1;
}
</style>