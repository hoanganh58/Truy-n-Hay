<template>
  <Page>
    <ActionBar backgroundColor="#03396c" title="Truyện đã đọc" class="txtTitle">
        <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <!-- thiet ke layout -->
    <ListView for="obj in item">
      <v-template>
        <StackLayout>
          <GridLayout v-if="obj.seen==true" columns="50,*" rows="*">
            <Image col="0" class="imageSrc" :src="obj.imgsrc" @tap="showDetail(obj)"  />
            <Label col="1" :text="obj.name" @tap="showDetail(obj)" />
          </GridLayout>
        </StackLayout>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import compDetail from "./compDetail.vue"
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    showDetail(obj) {
      this.$navigateTo(compDetail,{
        props: {
          item: obj
        }
      })
    },
  }
};
</script>

<style>
</style>