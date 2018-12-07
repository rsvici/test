<template>
  <div id="app">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti perferendis eveniet repellat quae vel sunt maiores nisi officia ullam. Explicabo quo ipsum facere sint, est provident quas odio sit.
    Exercitationem nihil ipsam blanditiis pariatur temporibus placeat impedit, sint error magni ullam, animi consequuntur eaque necessitatibus nostrum fugit facilis, fugiat quod deleniti.
    <ol class="shopItem">
      <li
        v-for="item in showArr"
        :key="item.name"
      >
        {{item.name}}
      </li>
    </ol>
  </div>

</template>

<script>
export default {
  name: "app",
  data() {
    return {
      count: 0,
      pageNum: 0,
      newObj: [
        [
          {
            name: "one"
          },
          {
            name: "two"
          },
          {
            name: "three"
          }
        ],
        [
          {
            name: "one1"
          },
          {
            name: "two1"
          },
          {
            name: "three1"
          }
        ],
        [
          {
            name: "one2"
          },
          {
            name: "two2"
          },
          {
            name: "three2"
          }
        ],
        [
          {
            name: "one3"
          },
          {
            name: "two3"
          },
          {
            name: "three3"
          }
        ],
        [
          {
            name: "one4"
          },
          {
            name: "two4"
          },
          {
            name: "three4"
          }
        ],
        [
          {
            name: "one5"
          },
          {
            name: "two5"
          },
          {
            name: "three5"
          }
        ],
        [
          {
            name: "one6"
          },
          {
            name: "two6"
          },
          {
            name: "three6"
          }
        ],
        [
          {
            name: "one7"
          },
          {
            name: "two7"
          },
          {
            name: "three7"
          }
        ],
        [
          {
            name: "one8"
          },
          {
            name: "two8"
          },
          {
            name: "three8"
          }
        ],
        [
          {
            name: "one9"
          },
          {
            name: "two9"
          },
          {
            name: "three9"
          }
        ],
        [
          {
            name: "one10"
          },
          {
            name: "two10"
          },
          {
            name: "three10"
          }
        ],
        [
          {
            name: "one11"
          },
          {
            name: "two11"
          },
          {
            name: "three11"
          }
        ],
        [
          {
            name: "one12"
          },
          {
            name: "two12"
          },
          {
            name: "three12"
          }
        ]
      ],
      showArr: []
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollFn);
  },
  methods: {
    scrollFn: function scrollFn() {
      //真实内容的高度
      var pageHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight
      );
      //视窗的高度
      var viewportHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight ||
        0;
      //隐藏的高度
      var scrollHeight =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      // var shopItemLength = $(".shopItem").length;
      // console.log(shopItemLength);
      if (pageHeight - viewportHeight - scrollHeight < 10) {
        //如果满足触发条件，执行
        this.query();
        this.pageNum++;
      }
      // if (this.count > shopItemLength) {
      //   if (pageHeight - viewportHeight - scrollHeight < 10) {
      //     //如果满足触发条件，执行
      //     this.pageNum++;
      //     this.query();
      //   }
      // } else if (this.count == shopItemLength) {
      //   if (this.flag1) {
      //     this.flag1 = false;
      //     this.query();
      //   }
      // }
    },
    query: function query(index) {
      var that = this;
      //成功函数
      var newGetArr = that.newObj[that.pageNum];
      if(newGetArr){
        that.showArr = that.showArr.concat(newGetArr);
      }
      // console.log(newGetArr);
      // that.count += newGetArr.length;
    }
  }
};
</script>

<style>
div {
  line-height: 100px;
  width: 60vw;
  margin: 0 auto;
  font-size: 80px;
}
</style>
