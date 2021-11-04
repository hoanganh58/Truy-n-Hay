<template>
  <Page>
    <ActionBar backgroundColor="#03396c">
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
      <GridLayout columns="*,50">
        <Label col="0" class="txtTitle" text="Bộ lộc truyện" />
        <Button col="1" width="50" class="fas" :text="icons[0] | fonticon" @tap="closeLocData" />
      </GridLayout>
    </ActionBar>
    <!-- thiet ke layout -->
    <FlexboxLayout>
      <StackLayout>
        <Label class="txtTextLoc" text="Trạng thái" />
        <RadioGroup  @selected="selectedRadio1" orientation="horizontal">
          <RadioButton checked="true" text="Tất cả" />
          <RadioButton text="Hoàn thành" />
          <RadioButton text="Chưa hoàn thành" />
        </RadioGroup>
        <Label class="txtTextLoc" text="Thể loại" />
        <RadioGroup
          @selected="selectedRadio2">
          <RadioButton checked="true" text="Tất cả" />
          <RadioButton v-for="item in categoryList" :key="item.id" :text="item.text" />
        </RadioGroup>
        
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import compApp from "./App.vue"
export default {
  data() {
    return {
      icons: ["fa-check"],
      categoryList: [
        {id: "1", text:"Ngôn tình"},
        {id: "2", text:"Tu tiên"},
        {id: "3", text:"Đô thị"},
        {id: "4", text:"Kiếm hiệp"},
        {id: "5", text:"Dị giới"},
        {id: "6", text:"Trùng sinh"},
      ],
      obj1: null,
      obj2: null
    };
  },
  methods: {
    selectedRadio1(a) {
      this.obj1 = a.value
    },
    selectedRadio2(b) {
      this.obj2 = b.value
    },
    closeLocData() {
      let data={
        status:this.obj1,
        category:this.obj2
      }
      this.$navigateTo(compApp, {
        props: {
          data: data
        }
      })
    }
  }
};
</script>

<style>
.txtTitle {
  font-size: 25px;
  text-align: center;
  color: white
}
.txtTextLoc {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
</style>