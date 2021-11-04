<template>
  <Page>
    <!-- thiet ke layout -->
    <FlexboxLayout flexDirection="row">
      <StackLayout>
        <Image src="~/assets/images/imageTitle.png" />
        <Label color="red" horizontalAlignment="center" :text="txtThongBao" />
        <TextField width="60%" v-model="txtUser" hint="Input name ..." />
        <TextField secure="true" width="60%" v-model="txtPass" hint="Input password ..." />
        <GridLayout columns="*,*" rows="auto" width="60%">
            <Button col="0" text="Đăng nhập" @tap="dangnhap" />
            <Button col="1" text="Đăng Kí" @tap="dangKi" />
        </GridLayout>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      account: [{user:"admin", password:"admin"}],
      txtUser:null,
      txtPass:null,
      txtThongBao:"",
    };
  },
  methods: {
    dangKi() {
      if (this.txtUser == null || this.txtPass == null) {
        this.txtThongBao="Mời nhập thông tin vào"
      } else {
        for (let i = 0; i < this.account.length; i++) {
          if (this.account[i].user==this.txtUser) {
            this.txtThongBao="User or Password đã có người sử dụng"
            break
          } else if (this.account.user!=this.txtUser) {
            let data={
              user:this.txtUser,
              password:this.txtPass
            }
            this.account.splice(0,0,data)
            alert({
              title:"thông báo",
              message:"Đăng kí thành công",
              okButtonText:"Ok"
            })
            break
          }
        }
      }
      
    },
    dangnhap() {
      if (this.txtUser == null || this.txtPass == null) {
        this.txtThongBao="Mời nhập thôn tin vào"
      } else {
          for (let i = 0; i < this.account.length; i++) {
            if (this.account[i].user==this.txtUser&&this.account[i].password==this.txtPass) {
              this.txtThongBao=""
              this.$modal.close(this.txtUser)
              alert({
                title:"thông báo",
                message:"Đăng nhập thành công",
                okButtonText:"Ok"
              })
            } else if (this.account[i].user!=this.txtUser||this.account[i].password!=this.txtPass) {
              this.txtThongBao="User hoặc Password đã sai. Nhập lại"
            }
          }
        }
    },
  }
};
</script>

<style>
</style>