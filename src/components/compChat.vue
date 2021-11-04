<template>
  <Page>
    <ActionBar backgroundColor="#03396c" title="Chat chít" class="txtTitle">
        <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <!-- thiet ke layout -->
    <FlexboxLayout>
      <StackLayout>
        <Label text="Nhập tin nhắn" />
        <GridLayout columns="*,50" rows="auto">
          <TextField col="0" hint="Input name ..." v-model="inputText" />
          <Button col="1" class="fas" fontSize="25" horizontalAlignment="center" verticalAlignment="center" :text="icons[0] | fonticon" @tap="sendText" />
        </GridLayout>
        <Label text="Tin nhắn:" />
        <ListView for="obj in chatChit">
          <v-template>
            <GridLayout columns="auto,*">
              <Label col="0" class="txtNameChat" :text="obj.myName + ': '" />
              <TextView isEnabled="false" horizontalAlignment="left" col="1" class="txtChat" :text="obj.chatChit" />
            </GridLayout>
          </v-template>
        </ListView>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  props: ["tenIndex","chatChit"],
  data() {
    return {
      icons:["fa-paper-plane"],
      inputText: null,
    };
  },
  methods: {
    sendText() {
      console.log(this.tenIndex)
      console.log(this.chatChit)
      if (this.tenIndex == "") {
        var ten = "Khách"
      }
      else if (this.tenIndex != "") {
        var ten =this.tenIndex
      }
      let data={
        myName:ten,
        chatChit:this.inputText
      }
      this.chatChit.splice(0,0,data)

    }
  }
};
</script>

<style>
.txtNameChat {
  font-size: 15px;
  font-weight: bold
}
.txtChat {
  font-size: 10px;
}
</style>