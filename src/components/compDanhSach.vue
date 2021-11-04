<template>
  <Page>
    <ActionBar backgroundColor="#03396c" title="Danh Sach Truyen" class="txtTitle">
        <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <!-- thiet ke layout -->
    <StackLayout>
            <ListView for="i in item.noiDung">
              <v-template>
                <StackLayout>
                  <GridLayout columns="100,*" rows="*" @tap="showDOC(i)">
                    <Label class="txtDanhSach" col="0" :text="'Chương: '+i.stt" />
                    <Label class="txtDanhSach" col="1" :text="i.chuong" />
                  </GridLayout>
                </StackLayout>
              </v-template>
            </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import compDOC from "./compDOC.vue"
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    showDOC(i) {
      this.item.seen =true
      this.$navigateTo(compDOC,{
        props: {
          item: this.item.noiDung,
          index: i
        }
      });
    },
  }
};
</script>

<style>
.txtDanhSach {
  font-size: 20px;
  font-weight: bold;
  color:black;
}
</style>