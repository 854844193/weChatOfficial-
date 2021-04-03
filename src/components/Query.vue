<template>
  <div class="all query">
    <div class="cover"></div>
    <div class="main">
      <div class="top">
        <div class="topText">
          <van-icon
            class="backLeft"
            name="arrow-left"
            color="#fff"
            @click="reBack"
          />
          <p>疫苗接种记录查询</p>
          <p>请填写下列信息进行查询</p>
        </div>
        <div class="personImg">
          <img src="../assets/imgs/doctor.png" alt="" />
        </div>
      </div>
      <div class="formBody">
        <div class="topRadius"></div>
        <div class="container">
          <div class="inputSearch">
            <label for="">请输入身份证号进行查询</label>
            <input
              type="text"
              placeholder="请在此输入您的身份证号"
              v-model="searchText"
            />
          </div>
          <div class="btnList">
            <van-button class="btnItem" round color="#2270ec" @click="toSearch">
              查&nbsp;&nbsp;询
            </van-button>
            <van-button
              class="btnItem"
              round
              color="#FFB508"
              @click="searchText == ''"
            >
              重&nbsp;&nbsp;置
            </van-button>
          </div>
          <div class="box">
            <div class="boxHeader">疫苗接种记录</div>
            <div class="boxText">
              <p>
                <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                <span class="answer">{{ personName }}</span>
              </p>
              <p>
                <span>身份证号：</span>
                <span class="answer">{{ personalIdcard }}</span>
              </p>
              <p>
                <span>乡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;镇：</span>
                <span class="answer">{{ personalTown }}</span>
              </p>
            </div>
            <div class="boxTable">
              <table width="100%" border="1" style="border-collapse: collapse">
                <tr>
                  <th>接种疫苗</th>
                  <th>针次</th>
                  <th>时间</th>
                </tr>
                <tr class="tesc" v-for="(item,index) in recordList" :key="index">
                  <td>{{ item.inoculateName }}</td>
                  <td>{{ item.inoculatetimes }}</td>
                  <td>{{ item.inoculateDate }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      personName: "李某",
      personalIdcard: "530120xxxxxxxx0911",
      personalTown: "昆明市五华区高新区",
      recordList: [
        {
          inoculateName: "新冠病毒疫苗1",
          inoculatetimes: 1,
          inoculateDate: "2021-02-22",
        },
        {
          inoculateName: "新冠病毒疫苗2",
          inoculatetimes: 2,
          inoculateDate: "2021-03-31",
        },
        {
          inoculateName: "新冠病毒疫苗2",
          inoculatetimes: 2,
          inoculateDate: "2021-03-31",
        },
        {
          inoculateName: "新冠病毒疫苗2",
          inoculatetimes: 2,
          inoculateDate: "2021-03-31",
        },
        {
          inoculateName: "新冠病毒疫苗2",
          inoculatetimes: 2,
          inoculateDate: "2021-03-31",
        },
      ],
    };
  },
  methods: {
    toSearch() {
      console.log(this.searchText);
    },
    reBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
@import "../assets/style/common.css";

.personImg img {
  width: 2rem;
  position: absolute;
  bottom: -0.2rem;
  right: -0.2rem;
}

.topText .backLeft {
  font-size: 0.3rem;
  margin-top: -0.2rem;
  margin-left: -0.2rem;
}

.topText p:nth-of-type(1) {
  font-size: 0.4rem;
}

.topText p:last-child {
  font-size: 0.25rem;
  font-weight: normal;
}

.formBody .container {
  width: 90%;
  margin: 0 auto;
  padding: 5% 0;
}

.container .inputSearch {
  width: 100%;
}

.inputSearch > label {
  display: block;
  width: 100%;
  font-size: 0.4rem;
  font-weight: 600;
  text-align: center;
}

.inputSearch > input {
  outline: none;
  width: 100%;
  height: 1rem;
  margin: 0.25rem 0;
  background-color: #f9ffff;
  border: 0.02rem dashed gainsboro;
  text-align: center;
}

input::placeholder {
  color: #b8bebe;
  font-size: 0.2rem;
  font-weight: 600;
}

input::-ms-input-placeholder {
  text-align: center;
}

input::-webkit-input-placeholder {
  text-align: center;
}

.container .btnList {
  width: 4rem;
  height: 0.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.btnList .btnItem {
  width: 1.8rem;
  height: 0.5rem;
  font-size: 0.2rem;
  text-align: center;
  color: #ffffff;
  border-radius: 1.125rem;
}

.container .box {
  width: 100%;
  margin-top: 0.5rem;
  border: 0.02rem dashed gainsboro;
  background-color: #f9ffff;
}

.box .boxHeader {
  width: 100%;
  height: 1rem;
  background-color: #f1f1f1;
  font-size: 0.4rem;
  font-weight: 600;
  text-align: center;
  line-height: 1rem;
}

.box .boxText {
  width: 100%;
  font-size: 0.2rem;
  padding: 0.5rem 0.4rem;
  font-weight: 600;
  box-sizing: border-box;
}

.boxText p:nth-child(2) {
  margin: 0.2rem 0;
}

.boxText .answer {
  color: #a3a7a8;
}

.answer:nth-child(2) {
  letter-spacing: 0;
}

.box .boxTable {
  width: 100%;
  padding: 0 0.4rem;
  margin-bottom: 0.3rem;
  box-sizing: border-box;
}

.boxTable table {
  margin: 0 auto;
}

table tr {
  height: 0.6rem;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.6rem;
}

.boxTable .tesc {
  color: #a3a7a8;
}
</style>
