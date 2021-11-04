<template>
  <Page actionBarHidden="true">
    <GridLayout columns="*" rows="40,*,40">
      <Label backgroundColor="#03396c" row="0" class="txtDoc" color="white" :text="'Chuong '+index.stt+' '+index.chuong" />
      <ScrollView row="1" height="100%" backgroundColor="gray" color="white">
        <TextView isEnabled="false" :text="index.nd" />
      </ScrollView>
      <GridLayout backgroundColor="#03396c" row="2" dock="bottom" verticalAlignment="bottom" columns="100,*,100" height="40" >
            <Button col="0" text="back" @tap="btnBack" />
            <Button col="2" text="next" @tap="btnNext" />
          </GridLayout>
    </GridLayout>
  </Page>
</template>

<script>

export default {
  props: ["item","index"],
  data() {
    return {};
  },
  methods: {
    btnBack () {
      for (let i = 0; i < this.item.length; i++) {
        if (this.index.stt-this.item[i].stt==1) {
          this.index = this.item[i]
        }
      }
    },
    btnNext () {
      for (let i = 0; i < this.item.length; i++) {
        if (this.index.stt-this.item[i].stt==-1) {
          this.index = this.item[i]
          break
        }
      }
    }
  }
};
</script>

<style>
.txtDoc {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}
</style>