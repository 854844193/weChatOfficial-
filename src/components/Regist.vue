<template>
  <div class="regist all">
    <div class="cover"></div>
    <div class="main">
      <div class="top">
        <div class="topText">
          <p>新冠疫苗</p>
          <p>预约接种登记表</p>
          <p>请填写下列信息</p>
        </div>
        <div class="personImg">
          <img src="../assets/imgs/nurse.png" alt="" />
        </div>
      </div>
      <div class="formBody">
        <div class="topRadius"></div>
        <div class="inputList">
          <div class="inputItem">
            <label for="">乡镇</label>
            <input
              type="text"
              placeholder="请选择乡镇"
              v-model="formData.townValue"
              readonly
              @click="townShow = true"
            />
            <van-icon class="checkIcon" name="arrow" color="gainsboro" />
          </div>
          <div class="inputItem">
            <label for="">村委会</label>
            <input
              type="text"
              v-model="formData.villageValue"
              readonly
              @click="villageShow = true"
              placeholder="请选择村委会"
            />
            <van-icon class="checkIcon" name="arrow" color="gainsboro" />
          </div>
          <div class="inputItem">
            <label for="">姓名</label>
            <input
              type="text"
              v-model="formData.name"
              placeholder="请填写姓名"
            />
          </div>
          <div class="inputItem">
            <label for="">身份证号码</label>
            <input
              type="text"
              v-model="formData.idcard"
              placeholder="请填写您的身份证号码"
            />
          </div>
          <div class="inputItem">
            <label for="">手机号</label>
            <input
              type="text"
              v-model="formData.phone"
              placeholder="请填写手机号"
            />
          </div>
          <div class="inputItem">
            <label for="">职业</label>
            <input
              type="text"
              v-model="formData.job"
              placeholder="请填写职业"
            />
          </div>
          <div class="inputItem">
            <label for="">家庭住址</label>
            <input
              type="text"
              v-model="formData.address"
              placeholder="请填写家庭住址"
            />
          </div>
          <div class="inputItem">
            <label for="">预约时间</label>
            <input
              type="text"
              placeholder="请选择预约时间"
              :value="formData.orderDate"
              readonly
              @click="dateShow = true"
            />
            <van-icon class="checkIcon" name="arrow" color="gainsboro" />
          </div>
          <van-button class="submitBtn" round type="info" @click="toQuery">
            提&nbsp;&nbsp;&nbsp;&nbsp;交
          </van-button>
        </div>
      </div>
      <!-- 级联选择乡镇、村委会 -->
      <van-popup v-model="townShow" round position="bottom">
        <van-cascader
          v-model="cascaderValue1"
          title="请选择所在乡镇"
          :options="options1"
          active-color="#1989fa"
          @close="townShow = false"
          @finish="onFinishTown"
        />
      </van-popup>
      <van-popup v-model="villageShow" round position="bottom">
        <van-cascader
          v-model="cascaderValue2"
          title="请选择所在村委会"
          :options="options2"
          active-color="#1989fa"
          @close="villageShow = false"
          @finish="onFinishVillage"
        />
      </van-popup>
      <!-- 日历选择器 -->
      <van-calendar color="#1989fa" v-model="dateShow" @confirm="onConfirm" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        orderDate: "",
        townValue: "",
        villageValue: "",
        name: "",
        idcard: "",
        phone: "",
        job: "",
        address: "",
      },
      villageShow: false,
      dateShow: false,
      townShow: false,
      cascaderValue1: "",
      cascaderValue2: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options1: [
        {
          text: "云南省",
          value: "330000",
          children: [
            { text: "昆明市", value: "330100" },
            { text: "曲靖市", value: "330101" },
            { text: "玉溪市", value: "330102" },
          ],
        },
        {
          text: "四川省",
          value: "320000",
          children: [{ text: "成都市", value: "320100" }],
        },
        {
          text: "广东省",
          value: "310000",
          children: [{ text: "深圳市", value: "310100" }],
        },
      ],
      options2: [
        {
          text: "昆明市",
          value: "330000",
          children: [
            { text: "五华区", value: "330100" },
            { text: "盘龙区", value: "330101" },
            { text: "官渡区", value: "330102" },
            { text: "西山区", value: "330103" },
            { text: "呈贡区", value: "330104" },
          ],
        },
      ],
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirm(date) {
      this.dateShow = false;
      this.formData.orderDate = this.formatDate(date);
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinishTown({ selectedOptions }) {
      this.townShow = false;
      this.formData.townValue = selectedOptions
        .map((option) => option.text)
        .join("/");
    },
    onFinishVillage({ selectedOptions }) {
      this.villageShow = false;
      this.formData.villageValue = selectedOptions
        .map((option) => option.text)
        .join("/");
    },
    toQuery() {
      this.$router.push("/Query");
    },
  },
};
</script>

<style scoped>
@import "../assets/style/common.css";
.personImg img {
  width: 1.2rem;
  position: absolute;
  bottom: -0.05rem;
  right: 0.3rem;
  transform: translate(-50%, 0);
}
.topText p:first-child {
  font-size: 0.4rem;
}
.topText p:nth-child(2) {
  font-size: 0.45rem;
}
.topText p:last-child {
  font-size: 0.25rem;
  font-weight: normal;
}

.formBody .inputList {
  width: 90%;
  margin: 0 auto;
  padding: 5% 0;
}
.inputList .inputItem {
  margin-bottom: 0.25rem;
  width: 100%;
  position: relative;
}

.inputItem > label {
  display: block;
  width: 100%;
  font-size: 0.3rem;
  font-weight: 600;
  padding: 0 0.5rem;
  position: relative;
  box-sizing: border-box;
}
.checkIcon {
  color: gainsboro;
  position: absolute;
  bottom: 0.1rem;
  right: 0.2rem;
}

label::before {
  display: inline-block;
  content: "";
  width: 0.12rem;
  height: 0.35rem;
  position: absolute;
  top: 0.06rem;
  left: 0;
  background-color: #1f8bfa;
}

.inputList input {
  outline: none;
  border: none;
  width: 100%;
  font-size: 0.25rem;
  color: #000;
  height: 0.5rem;
  padding: 0 0.5rem;
  border-bottom: 0.04rem solid #f2f2f2;
  box-sizing: border-box;
}
.submitBtn {
  font-size: 0.3rem;
  font-weight: bold;
  background-image: url("../assets/imgs/buttonImg.png");
  background-size: cover;
  display: block;
  width: 5rem;
  height: 0.6rem;
  margin: 0 auto;
}
</style>