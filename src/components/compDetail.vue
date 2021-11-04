<template>
  <Page>
    <ActionBar backgroundColor="#03396c" :title="item.name" class="txtTitle">
        <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <!-- thiet ke layout -->
    <GridLayout columns="*" rows="150,100,150,*,50">
      <GridLayout row="0" columns="130,*" rows="150">
        <Image col="0" height="150" marginRight="20" width="120"  class="imageSrcDetail" :src="item.imgsrc" />
        <StackLayout col="1">
          <Label class="txtText" :text="'Tác giả: '+item.author" />
          <Label class="txtText" :text="'Thể loại: '+item.category" />
          <Label class="txtText" :text="'Chương: '+item.soLuong" />
          <RadioGroup @selected="selectedRadio" orientation="horizontal" horizontalAlignment="center" verticalAlignment="center">
          <RadioButton text="1" />
          <RadioButton text="2" />
          <RadioButton text="3" />
          <RadioButton text="4" />
          <RadioButton text="5" />
        </RadioGroup>
        </StackLayout>
      </GridLayout>
      <GridLayout row="1" columns="*,*,*" rows="100">
        <Button backgroundColor="lightseagreen" col="0" text="Đọc truyện" @tap="showDOC" />
        <Button backgroundColor="darkseagreen" col="1" text="Danh sách" @tap="showDanhsach" />
        <Button backgroundColor="lightblue" fontSize="30" v-if="item.follow==true" :text="icons[0] | fonticon" class="fas" col="2" @tap="followMe" />
        <Button backgroundColor="lightblue" fontSize="30" v-else :text="icons[0] | fonticon" class="far" col="2" @tap="followMe" />
      </GridLayout>
      <ScrollView row="2">
        <StackLayout>
          <Label fontSize="25" fontWeight="bold" text="Giới thiệu:" />
          <TextView editable="false" :text="item.gioithieu" />
        </StackLayout>
      </ScrollView>
      <ScrollView row="3">
        <StackLayout>
          <Label fontSize="25" fontWeight="bold" text="Bình luận:" />
          <GridLayout v-for="obj in item.binhLuan" :key="obj.ten" columns="100,*">
            <Label col="0" :text="obj.ten" />
            <Label col="1" :text="obj.chat" />
          </GridLayout>
        </StackLayout>
      </ScrollView>
      <GridLayout verticalAlignment="bottom" columns="*,100" row="4">
        <TextField col="0" verticalAlignment="bottom" width="100%" hint="Input review ..." v-model="inputBinhLuan" />
        <Button col="1" verticalAlignment="bottom" text="Submit" width="100%" @tap="sendBinhLuan" />
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script>
import compDanhSach from "./compDanhSach.vue"
import compDOC from "./compDOC.vue"
export default {
  props: ["item","indexTen"],
  data() {
    return {
      icons: ["fa-star"],
      radio: null,
      inputBinhLuan: null
    };
  },
  methods: {
    showDanhsach() {
      this.$navigateTo(compDanhSach,{
        props: {
          item: this.item
        }
      });
    },
    showDOC() {
      this.item.seen = true
      this.$navigateTo(compDOC,{
        props: {
          index: this.item.noiDung[0],
          item: this.item.noiDung
        }
      });
    },
    followMe() {
      this.item.follow = !this.item.follow
      this.$emit("followUS", this.item)
    },
    selectedRadio(a) {
      this.item.vote=a.value
    },
    sendBinhLuan() {
      console.log(this.indexTen)
      console.log(this.item.binhLuan[0].ten)
      console.log(this.item.binhLuan[0].chat)
      if (this.indexTen=="") {
        var inTen="Khách: "
      } else if (this.indexTen!="") {
        var inTen=this.indexTen
      }
      let data={
        ten:inTen,
        chat:this.inputBinhLuan
      }
      console.log(data)
      this.item.binhLuan.splice(0,0,data)
    }
  },
};
</script>

<style>
.txtTitle {
    background-color: #03396c;
    color: white;
    font-size: 25px;    
}
.imageSrcDetail {
  border-radius: 30px;
  background-color: whitesmoke;
  border: black;
  border-width: 1px;
}
.txtText {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 10px;
  color:black;
}
</style>