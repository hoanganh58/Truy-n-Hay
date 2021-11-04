<template>
  <Page>
    <ActionBar backgroundColor="#03396c" title="Đánh giá truyện" class="txtTitle">
        <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <!-- thiet ke layout -->
    <FlexboxLayout>
      <StackLayout>
        <Label text="chọn số sao:" />
        <RadioGroup  @selected="selectedRadio" orientation="horizontal">
          <RadioButton>
            <FormattedString>
              <Span text="1" />
              <Span class="fas" :text="icons[1] | fonticon" />
            </FormattedString>
          </RadioButton>
          <RadioButton>
            <FormattedString>
              <Span text="2" />
              <Span class="fas" :text="icons[1] | fonticon" />
            </FormattedString>
          </RadioButton>
          <RadioButton>
            <FormattedString>
              <Span text="3" />
              <Span class="fas" :text="icons[1] | fonticon" />
            </FormattedString>
          </RadioButton>
          <RadioButton>
            <FormattedString>
              <Span text="4" />
              <Span class="fas" :text="icons[1] | fonticon" />
            </FormattedString>
          </RadioButton>
          <RadioButton checked="true">
            <FormattedString>
                <Span text="5" />
                <Span class="fas" :text="icons[1] | fonticon" />
              </FormattedString>
          </RadioButton>
        </RadioGroup>
        <Label text="Nhập tin nhắn" />
        <GridLayout columns="*,50" rows="auto">
          <TextField col="0" hint="Input name ..." v-model="inputText" />
          <Button col="1" class="fas" fontSize="25" horizontalAlignment="center" verticalAlignment="center" :text="icons[0] | fonticon" @tap="sendText" />
        </GridLayout>
        <Label text="Đã đánh giá:" />
        <ListView for="obj in item">
          <v-template>
            <GridLayout columns="auto,50,*">
              <Label col="0" verticalAlignment="center" class="txtNameVote" :text="obj.name + ': '" />
              <Label col="1" verticalAlignment="center">
                <FormattedString>
                  <Span fontSize="15" :text="obj.star" />
                  <Span class="fas" fontSize="15" :text="icons[1] | fonticon" />
                </FormattedString>
              </Label>
              <TextView isEnabled="false" horizontalAlignment="left" col="2" class="txtText2" :text="obj.text" />
            </GridLayout>
          </v-template>
        </ListView>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      icons:["fa-paper-plane","fa-star"],
      inputText: null,
      radio: null,
    };
  },
  methods: {
    selectedRadio(a) {
      this.radio = a.value
    },
    sendText() {
      let data={
        name:"Khách",
        star:this.radio,
        text:this.inputText
      }
      this.item.splice(0,0,data)
    }
  }
};
</script>

<style>
.txtNameVote {
  font-size: 15px;
  font-weight: bold
}
.txtText2 {
  font-size: 15px;
  color: black;
}
</style>