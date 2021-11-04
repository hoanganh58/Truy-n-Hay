<template>
  <Page actionBarHidden="true">
    <!-- thiết kế giao diện -->
    <GridLayout rows="*">
      <!-- Drawer -->
      <RadSideDrawer ref="drawer">
        <!-- Main -->
        <StackLayout ~mainContent>
          <!-- ActionBar -->
          <FlexboxLayout height="50" backgroundColor="#03396c" width="100%">
            <GridLayout columns="auto,*,auto" rows="auto" width="100%">
              <Button col="0" width="50" class="fas borderTitle" :text="icons[0] | fonticon" @tap="onOpenDrawerLeft()" />
              <TextField col="1" v-model="searching" backgroundColor="white" borderRadius="10" hint="Search..." height="45" />
              <Button col="2" width="50" class="fas borderTitle" :text="icons[1] | fonticon" @tap="showLocData()" />
            </GridLayout>
          </FlexboxLayout>
          <!-- thong tin -->
          <StackLayout>
            <ListView for="obj in filterName" @followUS="update" height="100%">
              <v-template>
                <StackLayout>
                  <GridLayout columns="100,*">
                    <Image marginRight="10" col="0" height="100" width="100" class="imageSrc" :src="obj.imgsrc" @tap="showDetail(obj)" />
                    <StackLayout col="1" @tap="showDetail(obj)">
                      <Label :text="obj.name" class="txtNameVue" />
                      <Label :text="'Đánh giá: '+obj.vote+' sao'" />
                      <Label :text="'Tác giả: '+obj.author" />
                      <FlexboxLayout>
                        <Label :text="'T.thái: '+ obj.status" />
                        <Label :text="' Chương: '+ obj.soLuong" /> 
                      </FlexboxLayout>
                    </StackLayout>
                  </GridLayout>
                </StackLayout>
              </v-template>
            </ListView>
          </StackLayout>
          
        </StackLayout>
        <StackLayout ~drawerContent>
        </StackLayout>
      </RadSideDrawer> 
      <!-- DrawerLeft -->
      <RadSideDrawer ref="drawerLeft">
        <StackLayout ~drawerContent class="sideStackLayout" backgroundColor="#03396c" color="white">
          <StackLayout class="sideTitleStackLayout">
            <Label class="textTitle" text="Top Truyện Anh "></Label>
            <Image src="~/assets/images/imageTitle.png"  />
            <Label :text="indexItem" fontSize="25" fontWeight="bold" horizontalAlignment="center" />
            <Button v-if="indexItem==''" class="textDN" text="Đăng nhập" width="150" @tap="showLogin()" />
            <Button v-else class="textDN" text="Đăng xuất" width="150" @tap="showLogout()" />
          </StackLayout>
          <StackLayout class="sideStackLayout">
            <GridLayout columns="50,*" rows="auto,auto,auto,auto,auto,auto,auto,auto,auto">
              <Label row="0" col="0" class="fas iconLine" :text="icons[2] | fonticon" />
              <Label row="0" col="1" class="txtlink" text="Danh Sách truyện" @tap="onCloseDrawerLeft()" />
              <Label row="1" col="0" class="fas iconLine" :text="icons[3] | fonticon" />
              <Label row="1" col="1" class="textLine" text="Tủ truyện" />
              <Label row="2" col="1" marginLeft="10" class="txtlink" text="+ Truyện đã đọc" @tap="showTruyenDoc()" />
              <Label row="3" col="1" marginLeft="10" class="txtlink" text="+ Truyện theo dõi" @tap="showTruyenFollow()" />
              <Label row="4" col="0" class="fas iconLine" :text="icons[5] | fonticon" />
              <Label row="4" col="1" class="txtlink" text="Chat chít" @tap="showChat()" />
              <Label row="5" col="0" class="fas iconLine" :text="icons[5] | fonticon" />
              <Label row="5" col="1" class="textLine" text="Thông tin" />
              <Label row="6" col="1" marginLeft="10" class="textLine" text="+ Chia sẻ" @tap="btnShare" />
              <Label row="7" col="1" marginLeft="10" class="textLine" text="+ Góp ý" @tap="btnShare" />
              <Label row="8" col="1" marginLeft="10" class="textLine" text="+ Đánh giá ứng dụng" @tap="btnShare" />
            </GridLayout>
          </StackLayout>
        </StackLayout>
      </RadSideDrawer>
    </GridLayout>
  </Page>
</template>

<script >
import compLocData from "./compLocData.vue"
import compLogin from "./compLogin.vue"
import compChat from "./compChat.vue"
import compTruyenDoc from "./compTruyenDoc.vue"
import compTruyenFollow from "./compTruyenFollow.vue"
import compDetail from "./compDetail.vue"
export default {
  props: ["data"],
  data() {
    return {
      icons: ["fa-bars","fa-clipboard-list","fa-list","fa-address-book","fa-circle","fa-info","fa-check"],
      products: [
        {
          imgsrc: "~/assets/images/image1.png",
          name: "Cữu Dương Bình Vương",
          author: "Thúy Ca",
          status: "Hoàn thành",
          follow: false,
          category: "Đô thị",
          soLuong: 3,
          noiDung: [
            {
              stt: 1,
              chuong: "Mở đầu",
              nd: "Tám giờ sáng, thành phố Trung Hải, khu biệt thự Lệ Thủy. Lâm Phi vừa về đến nhà liền cảm thấy bầu không khí hôm nay có chút bất thường.Vợ của hắn là Mộ San San sống ở khu biệt thự dành cho người giàu, nhưng hắn thì phải thuê phòng trọ ở ngoài rồi làm một sạp ngoài đường kiếm sống, cũng hơn nửa năm rồi chưa về nhà, vợ chồng hắn không được hòa thuận, nguyên nhân cũng không gì khác là do cô vợ hắn – một tổng giám đốc xinh đẹp luôn cho rằng hắn là một tên bỏ đi không có chí tiến thủ, không ngờ rằng, lúc ở nước ngoài, hắn lại là một tên quỷ vương không ai dám động tới.'Chào cậu, ông chủ và cô chủ đang đợi cậu.' dì Quế kính cẩn mở cửa chào hắn.Dì Quế là giúp việc của Mộ San San vợ Lâm Phi, bao nhiêu năm như vậy, vẫn ở trong nhà họ Mộ, hầu hạ người nhà họ Mộ.Lâm Phi vâng lời dì Quế, đi thẳng vào phòng khách.'Ngồi đi.'Bố vợ Lâm Phi Mộ Hồng đang nhắm mắt tập trung nghĩ ngợi, nghe thấy tiếng bước chân, liền mở mắt, sau khi biết là Lâm Phi lập tức ngẩng đầu tỏ ý bảo Lâm Phi ngồi xuống.Lâm Phi theo lời ngồi xuống, ánh mắt vô thức lại liếc nhìn người phụ nữ xinh đẹp tuyệt trần ngồi bên cạnh bố vợ Mộ Hồng, cũng chính là vợ của hắn, chủ tịch tập toàn Mộ Thị, Mộ San San.Mộ San San mặc áo ngắn ngắn tay màu nâu nhạt, tôn lên chiếc cổ trắng nõn nà, chiếc quần đùi bó sát, rất hợp với đôi guốc da Ferragamo đen, để lộ ra đôi chân dài thẳng, thon đẹp.Gương mặt thanh thú của cô ta được điểm một lớp phấn nhẹ, nước da trắng ngần, liễu yếu đào tơ.Cô ta như cửu thiên huyền nữ hạ phàm, thanh lệ thoát tục, cao quý vô ngần, khiến cho người khác không dám khinh nhờn.Mộ San San ngẩng đầu, hướng đôi mắt long lanh nhìn Lâm Phi, lạnh nhạt nói: “Anh đến muộn mất ba mươi lăm phút.”",
            },
            { stt: 2,
              chuong: "Giọng nói lạnh lẽo",
              nd: "Giọng nói lạnh lẽo khác thường, như được truyền đến từ cung trăng vậy.'Anh là chồng em, không phải cấp dưới của em, đến muộn thì đã sao.' Lâm Phi nhịn không được trong lòng bực bội oán trách, đương nhiên, không dám thể hiện ra mặt, dù gì thì người nhà cũng vẫn đang ở đó.Dưới cái nhìn chằm chằm của Mộ San San, Lâm Phi rút ra một điếu thuốc rẻ tiền, vừa châm thuốc, đôi mắt vừa không chút cả nể dò xét từng đường nét nhấp nhô trên cơ thể tuyệt mỹ của Mộ San San.Mộ San San vẫn giữ một vẻ lạnh lùng, chẳng có chút gì che đậy trên gương mặt và dáng người ấy cả.Ngay cả trong mắt một 'thợ săn' từng trải nhiều năm như Lâm Phi cũng không tìm ra được bất kỳ khuyết điểm nhỏ nào, trước đây khi còn là lính đánh thuê ở nước ngoài, hắn đã từng gặp rất nhiều người đẹp, thậm chí đã từng thân mật hoặc nói thẳng ra là đã từng qua đêm cùng những cô gái đó, nhưng cái cảm giác đặc biệt của vợ hắn, thật sự rất hiếm gặp.Nhưng Mộ San San cũng không thèm quay đầu lại nhìn Lâm Phi dù chỉ một cái.Mặc dù đã kết hôn với Lâm Phi được hơn nửa năm, nhưng đến tận bây giờ, Mộ San San cũng không muốn thừa nhận một sự thật rằng Lâm Phi là chồng cô ta.Lúc đầu, khi bố cô ta là Mộ Hồng bắt cô ta và Lâm Phi kết hôn, Mộ San San sống chết chối từ.Đến nỗi Mộ Hồng phải dọa cắt đứt quan hệ cha con, ép Mộ San San và Lâm Phi kí vào tờ đăng kí kết hôn.Kết hôn rồi, Mộ San San cũng chưa từng thử mở lòng chấp nhận Lâm Phi.Mộ San San không phải là người nhẫn nhịn chịu đựng, cô ta tin rằng sự hấp dẫn và năng lực của cô ta có thể khiến Lâm Phi trở thành một người chồng chuẩn mực, nhưng kết hôn đã hơn nửa năm, càng tìm hiểu Lâm Phi, Mộ San San càng cảm thấy tuyệt vọng."
            },
            { stt: 3,
              chuong: "phẩm chất và hành vi",
              nd: "Mọi phẩm chất và hành vi Mộ San San ghét nhất trên đời này như: Hút thuốc, nghiện rượu, háo sắc, lười nhác,…, Lâm Phi gần như chả thiếu cái gì.Mộ Hồng dường như không chút để tâm đến sự bất hòa giữa hai người, hai chân vắt chéo, nhìn thẳng Lâm Phi nói: “Nghe dì Quế nói nửa năm nay rồi con không về nhà, ở bên ngoài bận chuyện gì sao?”“Ban ngày nằm ngủ, tối đến suy nghĩ sự đời, tiện thể bán hàng rong kiếm vài đồng qua ngày.” Lâm Phi cười đáp.Mộ Hồng và Lâm Phi sớm đã chẳng tình nghĩa cha con gì, cũng từng là tinh anh của một công ty trinh sát, hôm nay ông ta hỏi như vậy, gần như chắc chắn đã cho người điều tra rồi, Lâm Phi cũng chẳng cần gì phải nói dối.Mộ Hồng cũng chẳng nói chẳng chỉ gật đầu, hình như là khá bằng lòng với thái độ thành thực của Lâm Phi, đương nhiên điều này không có nghĩa Mộ Hồng bỏ qua sự thật rằng Lâm Phi không chịu về nhà.Ông ta sớm đã biết hết mọi chuyện, kể cả việc trong một đêm cách đây mấy ngày, Lâm Phi cứu được một mỹ nữ, sau đó đã vui vẻ với cô ta ở quán rượu.Còn Mộ San San thì mắt chữ O mồm chữ A, đôi mắt đẹp đẽ ấy không một chớp mắt nhìn chằm chằm Lâm Phi, trên khuôn dung đẹp đẽ ấy tràn đầy sự sửng sốt: “Bán hàng rong?!”.“Trời ạ, sao sấm sét không đánh chết tên khốn này đi!”Mộ San San trợn ngược mắt, nhịn không được trong lòng gào lên một câu.Đôi mắt Mộ San San lạnh ngắt như băng giá, nhìn chăm chằm Lâm Phi, cô ta rất muốn chia đôi cái đầu của Lâm Phi xem xem, bên trong đó chứa cái gì?“Dù sao thì cũng đã là người có gia đình, không nên suốt ngày chơi bời lêu lổng.” Mộ Hồng khoan thai nói: “Bố sắp phải rời khỏi thành phố Trung Hải một thời gian, San San dù gì cũng là con gái, để nó một mình gánh vác công ty quả thật là làm khó nó quá. Con là chồng nó, cũng nên san sẻ gánh nặng này với nó. Đừng có cái gì mà ra đường đi bán hàng rong nữa, đi giúp vợ con làm việc đi.”"
            },
            { stt: 4,
              chuong: "Kết thúc",
              nd: "Cảm ơn các bạn đã đọc"
            },
          ],
          vote: 5,
          gioithieu:"TruyệnCửu Dương Binh Vương của tác giả Thủy Ca kể về nhân vật chính: Lâm Phi từng là lính đánh thuê ở nước ngoài, là Cửu Dương Binh Vương – sáng lập ra tổ chức trong thế giới ngầm. Vợ hắn – Mộ San San là một tổng giám đốc xinh đẹp, giỏi giang, từng du học nước ngoài về. Trong mắt Mộ San San, Lâm Phi luôn là đồ vô dụng. Cuộc sống hôn nhân của họ không hề có tình cảm, liệu rằng cuộc sống của Lâm Phi còn sóng gió gì sau những năm sống trong thế giới ngầm, cuộc sống hôn nhân của hắn và vợ liệu có thể có cái kết hạnh phúc?",
          binhLuan: [{ ten: "Admin:", chat: "hay" }],
          seen: false,
        },
        {
          imgsrc: "~/assets/images/image2.png",
          name: "Tam Quốc Diễn Nghĩa",
          author: "La Quán Trung",
          status: "Hoàn thành",
          follow: false,
          category: "Kiếm hiệp",
          soLuong: 3,
          noiDung: [
            {
              stt: 1,
              chuong: "Hồi 1A",
              nd: "Thế lớn trong thiên hạ, cứ tan lâu rồi lại hợp, hợp lâu rồi lại tan: như cuối đời nhà Chu, bảy nước tranh giành xâu xé nhau rồi sau lại hợp về nhà Tần. Đến khi nhà Tần mất, thì Hán Sở tranh hùng rồi sau thiên hạ lại hợp về tay nhà Hán.Nhà Hán, từ lúc vua Cao tổ (Bái Công) chém rắn trắng khởi nghĩa, thống nhất được thiên hạ, sau vua Quang Vũ lên ngôi, rồi truyền mãi đến vua Hiến đế; lúc bấy giờ lại chia ra thành ba nước.Nguyên nhân gây ra biến loạn ấy là do hai vua Hoàn đế, Linh đế. Vua Hoàn đế tin dùng lũ hoạn quan, cấm cố những người hiền sĩ. Đến lúc vua Hoàn đế băng hà, vua Linh đế lên ngôi nối nghiệp; được quan đại tướng quân Đậu Vũ, quan thái phó Trần Phồn giúp đỡ. Khi ấy, trong triều có bọn hoạn quan là lũ Tào Tiết lộng quyền. Đậu Vũ, Trần Phồn lập mưu định trừ bọn ấy đi, nhưng vì cơ mưu tiết lộ nên lại bị chúng nó giết mất. Từ đấy, bọn hoạn quan ngày càng ngạo ngược.Ngày rằm tháng tư năm Kiến Ninh thứ hai (167 sau công lịch) vua ngự điện Ôn Đức. Tự nhiên có cơn gió to ầm ầm từ góc điện nổi lên, rồi thấy một con rắn xanh lớn ở trên xà nhà quăng xuống quằn quại trên long án. Vua kinh hoàng ngã đùng ra, các quan tả hữu vội cứu vực vào cung; ở ngoài văn võ cũng sợ chạy cả. Được một lát con rắn biến mất và bỗng nhiên mưa to, sấm sét ầm ầm; lại thêm mưa đá rào rào mãi đến nửa đêm mới tạnh, đổ nhà đổ cửa không biết bao nhiêu mà kểTháng hai, năm Kiến Ninh thứ tư (169) tỉnh Lạc Dương có động đất, nước bể dâng lên ngập lưng trời, dân cư ở ven bể bị sóng lớn cuốn trôi đi mất cả.Năm Quang Hoá thứ nhất (178), một con gà mái tự dưng hoá ra gà trống. Mồng một tháng sáu năm ấy, một luồng khí đen dài chừng hơn mươi trượng bay vào trong điện Ôn Đức. Qua sang tháng bảy, lại có lắm điều gở lạ: cầu vồng mọc ở giữa Ngọc đường; rặng núi Ngũ Nguyên bỗng dưng lở sụt xuống.",
            },
            { stt: 2,
              chuong: "Hồi 1B",
              nd: "Vua hạ chiếu, hỏi chư thần từ đâu mà sinh ra những điềm quái gở ấy. Có quan nghị lang là Sái Ung dâng sớ lên, lời lẽ thống thiết, nói rằng: “Cầu vồng sa xuống, gà mái hoá trống, ấy là bởi quyền chính trong nước ở tay đàn bà và ở tay hoạn quan”. Vua xem sớ ngậm ngùi thở dài, đứng dậy thay áo. Tào Tiết khi ấy đứng hầu sau ngai nghe trộm thấy, trong lòng căm giận, bèn mách bảo đồng bọn, bàn mưu kiếm cớ vu hãm Sái Ung, cách quan đuổi về quê quán.Về sau bọn hoạn quan là Trương Nhượng, Triệu Trung, Phong Tư, Đoan Khuê, Tào Tiết, Hầu Lãm, Kiển Thạc, Trình Khoáng, Hạ Huy, Quách Thắng, cả thảy mười người gọi là mười quan “thường thị” bè đảng với nhau kéo cánh làm càn. Nhà vua tin dùng tôn trọng Trương Nhượng, gọi là “Á phụ” (nghĩa là vua coi như cha).Từ đấy chính sự trong triều ngày càng đổ nát, lòng người náo loạn, giặc cướp nổi lên như ong.Khi ấy ở đất Cự Lộc, có một nhà ba anh em: anh cả là Trương Giác, em hai là Trương Bảo, em út là Trương Lương.Trương Giác vốn thi tú tài trượt, nhân thế bực mình vào núi hái thuốc. Đi đường gặp một ông cụ già mặt tròn mắt biếc, tay chống gậy lê, gọi Trương Giác vào trong một cái động, trao cho ba quyển sách và bảo rằng: “Đây là cuốn “Thái bình yêu thuật”, có được cuốn này ngươi nên thay trời dạy người, để cứu lấy đời. Nếu sau này manh tâm tà gian ắt bị ác báo”. Trương Giác sụp xuống lạy, hỏi họ tên thì cụ già nói: “Ta là Nam Hoa lão tiên”, nói đoạn hoá ra một trận gió biến mất.Trương Giác được ba quyển sách ấy đem về ngày đêm học tập, không bao lâu biết đủ các phép hô gió mưa, tự xưng là Thái Bình đạo nhân.Đến tháng giêng, năm Trung Bình thứ nhất (184), có bệnh ôn dịch. Trương Giác làm ra nước phép chữa bệnh, cứu được nhiều người, tự xưng là Đại hiền lương sư. Giác có đồ đệ năm trăm người, đi dạo các nơi, ai cũng biết phép thư phù niệm chú. Về sau đồ đệ ngày càng đông; Giác bèn chia học trò ra ba mươi sáu phương, phương lớn hơn một vạn người, phương nhỏ sáu bảy ngàn người, phương nào cũng đặt một người làm thủ lĩnh xưng là tướng quân. Giác nói phao lên rằng: “Trời xanh đã chết, trời vàng nên dựng”, “Đến năm Giáp Tý, thiên hạ thái bình”. Rồi sai người lấy đất thó trắng viết hai chữ “Giáp Tý” ở ngay giữa cửa. Nhân dân tám châu Thanh, U, Từ, Ký, Kinh, Dương, Duyện, Dư nhà nào cũng thờ mấy chữ hiệu: “Đại hiền lương sư Trương Giác”."
            },
            { stt: 3,
              chuong: "hổi 1C",
              nd: "Trương Giác lại sai đồng đảng là Mã Nguyên Nghĩa mật đem vàng lụa vào kinh kết giao với tên hoạn quan Phong Tư, đi làm nội ứng, rồi bàn với hai em rằng:Không gì khó bằng thu phục được lòng dân, nay lòng dân đã quy thuận về ta, nếu không thừa thế chiếm lấy thiên hạ thì thật là đáng tiếc lắm.Bèn một mặt sai may cờ vàng hẹn ngày khởi sự, một mặt sai đồ đệ là Đường Châu đem thư báo cho Phong Tư biết. Nhưng Đường Châu lại đi thẳng đến cửa cung tố cáo.Được tin, vua liền triệu quan đại tướng quân là Hà Tiến điều binh bắt chém Mã Nguyên Nghĩa và bắt cả bọn Phong Tư bỏ ngục. Trương Giác thấy việc đã tiết lộ, vội vàng cử binh khởi sự, tự xưng là Thiên công tướng quân, Trương Bảo xưng Địa công tướng quân, Trương Lương xưng Nhân công tướng quân; nói với mọi người rằng: “Nay vận nhà Hán sắp hết, đại thánh nhân ra đời. Các ngươi nên thuận mệnh trời, theo về ta để cùng vui hưởng thái bình!”Nhân dân bốn phương đội khăn vàng, đi theo Trương Giác có tới bốn năm mươi vạn người. Thế giặc dữ dội, quan quân thua chạy như vịt. Hà Tiến một mặt tâu vua, xin hoả tốc xuống chiếu cho các nơi phòng giữ giết giặc lập công; một mặt sai ba quan trung lang tướng là Lư Thực, Hoàng Phủ Tung, Chu Tuấn đem quân tinh nhuệ chia ra làm ba ngả dẹp giặc.Trong khi ấy, quân Trương Giác có một toán xâm phạm vào bờ cõi U Châu. Quan thái thú châu ấy là Lưu Yên, người làng Kính Lăng, đất Giang Hạ, dòng dõi Lỗ Cung vương nhà Hán, nghe tin quân giặc sắp đến, liền triệu quan hiệu uý Châu Tĩnh đến bàn luận. Tĩnh nói:- Quân giặc nhiều, quân ta ít, ông nên tức khắc chiêu mộ thêm quân thì mới kịp ứng phó."
            },
            { stt: 4,
              chuong: "Kết thúc",
              nd: "Cảm ơn các bạn đã đọc"
            },
          ],
          vote: 5,
          gioithieu:"Một trong tứ đại danh tác Trung Hoa, quá kinh điển để review. Tam Quốc gồm 120 chương hồi, kể về một thời kì biến động hơn 100 năm của Trung Quốc. Mình đọc bộ 3 tập, bản dịch của Phan Kế Bính năm 2003. Hôm trước mình có ra hiệu sách, thấy bản năm 2017 còn có thêm lời bình của Mao Tôn Cương nữa (recommend mua bản này). Thật ra mình đọc Tam Quốc từ hồi năm nhất, nhưng lết mãi mới hết tập 1. Dạo gần đây, quyết tâm đọc lại, và trong 2 tuần xong luôn 2 tập kia. Điểm nổi bật của Tam Quốc là quan niệm ủng Lưu, phản Tào nên những chi tiết về nhà Thục khá là khoa trương: tính nhân đức của Lưu Bị, tài phù thủy của Khổng Minh. Đọc Tam quốc mà muốn hiểu rõ về sự thật lich sử thì phải gạn lọc thật kĩ bởi nó được xây dựng theo lối bảy hư ba thực. Sau đây là một số cảm nghĩ của Q về các nhân vật.",
          binhLuan: [{ ten: "Admin:", chat: "hay" }],
          seen: false,
        },
        {
          imgsrc: "~/assets/images/image3.png",
          name: "Vô thường",
          author: "Mặc Mặc",
          status: "Chưa hoàn thành",
          follow: false,
          category: "Dị giới",
          soLuong: 2,
          noiDung: [
            {
              stt: 1,
              chuong: "Hồi 1A",
              nd: "Đường Phong cảm thấy bản thân mình vô cùng xui xẻo.Mười lăm năm trước Đường Phong mang một thân công phu rời khỏi Đường gia chu du thiên hạ, trên đường vì tình cờ cứu một đứa trẻ khỏi cảnh bị cán chết dưới vó ngựa mà tự rước họa vào thân.Lần tai nạn đó khiến hắn trở thành phế nhân, suốt mười lăm năm qua chỉ có thể nằm yên trên giường. Tuy rằng các vị trưởng lão trong môn nhiều lần truyền cho hắn nội lực tinh thuần của chính mình, nhưng vẫn không thể khiến hắn một lần nữa có thể đứng dậy được.Chuyện này khiến cả Đường môn từ cao đến thấp tiếc nuối khôn nguôi, Đường Phong là kỳ tài trăm năm mới gặp của Đường Môn, chỉ cần một quãng thời gian nữa thôi thì không ai dám nói trước thành tựu của hắn có thể cao đến đâu, thế nhưng một phân hy vọng này lại sớm lụi tàn.Suốt mấy năm nằm trên giường, Đường Phong từng tự vấn lương tâm của mình vô số lần, nếu có thể quay ngược lại thời điểm đó liệu hắn có ra tay cứu đứa trẻ kia hay không?Đáp án là có! Nếu không cứu, e là hắn sẽ cắn rứt lương tâm cả đời, thành tựu ngày sau có cao đến mấy cũng ích lợi gì? Hiện tại, tuy nửa thân dưới của hắn bị liệt nhưng đổi lấy nửa đời thanh thản.Mạng người quý như trời, nhân tính không thể mất!Mười lăm năm qua, Đường Phong không ngừng nghiên cứu y khắp thiên hạ, kết hợp cùng hiện trạng của mình, nghiên cứu ra một phương pháp chữa bệnh bằng ngân châm, lúc này mới cảm thấy có chút khởi sắc, khó khăn lắm mới cảm nhận được nửa thân dưới của mình có chút phản ứng, một đạo sấm sét rạch ngang trời cứ thế bổ trúng vào người hắn, Đường Phong còn đang mơ mơ màng màng đã bị ngưu đầu mã diện áp tới Diêm La điện.Đường Phong nghĩ đến nát óc cũng không hiểu, rõ ràng mình đang nằm trên giường, chẳng chọc đến ai, thế nào lại xuất hiện một đạo sấm sét kì quái từ cửa sổ đánh vào, lại còn vô cùng xảo diệu đánh trúng vào mình.",
            },
            { stt: 2,
              chuong: "Hồi 1B",
              nd: "Đường Phong cố nén giận ngẩng đầu lên, dùng ánh mắt sắc lạnh nhìn vị tráng hán mặt đen đang ngồi ngay ngắn như một ngọn núi đá sừng sững trên đài cao.Chính là hắn, Diêm La vương, kẻ được xuy tôn là người nắm giữ vận mệnh của người sống, chưởng quản lục đạo luân hồi- Đường Phong!Diêm vương vỗ mạnh án mộc trên bàn, hét lớn một tiếng.Đường Phong bước lên vài bước, ánh mắt lạnh lùng nhìn hắn.- Nhà ngươi có biết tội của mình chưa?Diêm vương rung đùi đắc ý, lại quát thêm một tiếng.- Ta có tội gì?Đường Phong giận đến mức mặt mũi đỏ bừng, rống lên một tiếng.- Ngươi có biết thọ mệnh của ngươi chỉ có mười lăm năm hay không? Lẽ ra mười lăm năm trước hồn phách của ngươi phải xuống địa phủ chịu mệnh, tiến nhập luân hồi mới phải chứ.Diêm vương ho nhẹ một tiếng, khẩu khí tuy cường ngạnh nhưng cũng đã hòa hoãn ít nhiều- Diêm vương muốn ngươi chết lúc canh ba, ai dám giữ ngươi lại đến canh năm?Đường Phong trừng mắt nhìn Diêm La đang ngồi trên đài:- Sống chết của ta vốn nằm trong tay ngươi! Sao bỗng nhiên ta lại sống thêm được mười lăm năm?- Khụ, chuyện này...Vẻ mặt Diêm vương thoáng chút ngượng ngùng.- Bổn vương bận rộn trăm bề, đôi khi cũng phạm chút sai lầm là điều khó tránh khỏi.- Chuyện này thì liên quan gì đến ta?Đường Phong càng nghĩ càng tức giận.- Mười lăm năm trước ta liều mình cứu người khác, chỉ đổi được nỗi khổ tàn phế suốt mười lăm năm, vất vả lắm mới có được chút khởi sắc, ngươi lại phái ngưu đầu mã diện bắt ta đến đây như thế, vậy tội của ta là gì? Ngươi làm Diêm vương kiểu gì vậy hả?Ngưu đầu mã diện đứng một bên nhìn Đường Phong nổi cơn thịnh nộ, liền chạy đến giữ chặt hắn lại, vừa cười xoa dịu hắn vừa nói:- Xin nhân huynh bớt giận, bớt giận!Mặt Diêm vương đã đen nay lại đen thêm một phần, yếu ớt lên tiếng"
            },
            { stt: 3,
              chuong: "Chưa hoàn thành",
              nd: "Cảm ơn đã theo dõi. truyện sẽ được cập nhật sớm"
            },
          ],
          vote: 5,
          gioithieu:"Thà gặp Diêm La Vương, đừng chọc Đường Môn lang!Hành tẩu trong bóng đêm, hèn hạ nhưng không mất bản tính, vô sỉ cũng không bỏ đi phong độ chính là Câu hồn sứ giả!Phân chia cảnh giới: Luyện Cương kỳ, Huyền giai, Hoàng giai, Địa giai, Thiên giai, Linh giai!Luyện Cương kỳ chia làm cửu phẩm, từ nhất phẩm tới cửu phẩm.Huyền giai, Hoàng giai, Địa giai, Thiên giai, Linh giai mỗi cảnh giới chia làm hạ phẩm, trung phẩm, thượng phẩm!",
          binhLuan: [{ ten: "Admin:", chat: "hay" }],
          seen: false,
        },
        {
          imgsrc: "~/assets/images/image4.png",
          name: "Yêu thần ký",
          author: "Oa ngưu",
          status: "Chưa hoàn thành",
          follow: false,
          category: "Tu tiên",
          soLuong: 1,
          noiDung: [
            {
              stt: 1,
              chuong: "Hồi 1A",
              nd: "Sơn mạch Thánh Tổ liên miên không dứt, ánh mặt trời xuyên thấu qua những khe hở của dãy núi, chiếu sâu vào trong hạp cốc. Giữa sườn núi bên cạnh hạp cốc còn lưu lại một chút bằng tuyết.Đã đầu hạ rồi, mà bằng tuyết vẫn chưa tan, cái rét nơi đây đặc biệt dài, thi thoảng còn có âm thanh yêu thú gào thét, vang vọng giữa núi rừng.Một tòa thành trì to lớn, sừng sững đứng trên bình nguyên bên trong hạp cốc.Thế giới bên ngoài Thánh Tổ sơn mạch, đã bị yêu thú chiếm lĩnh, những người ở đây đã mấy trăm năm ko có liên hệ với thế giới bên ngoài rồi.Thế giới bên ngoài trông như thế nào, người trong thành trì không hề biết, truyền thuyết thời điểm huy hoàng nhất của nhân loại có tới mấy nghìn Yêu Linh Sư Truyền Kỳ cùng Võ Giả Truyền Kỳ, bên trên đại lục rộng lớn đã thành lập nên một đế quốc khổng lồ. Nhưng đế quốc đó, đã không còn tồn tại, những người ở đây cũng không biết, họ có đúng là những người cuối cùng còn sống sót hay không?Vị trí của tòa thành này rất bí ẩn, là tòa thành hoàn hảo nhất được lưu lại từ thời đại hắc ám, tuy thi thoảng gặp phải Phong Tuyết yêu thú cường đại trong Yêu Tổ sơn mạch tập kích, nhưng tòa thành thị này, vẫn kiên cường phát triển và tồn tại.Bức tường thành này, chính là một tấm bia bất diệt!Tòa thành thị này gọi là Quang Huy Chi Thành, ý là Hy Vọng Nhân Loại.Học viên thánh lan, lớp học Võ Giả sơ cấp.",
            },
            { stt: 2,
              chuong: "Chưa hoàn thành",
              nd: "Cảm ơn đã theo dõi. truyện sẽ được cập nhật sớm"
            },
          ],
          vote: 5,
          gioithieu:"Yêu Thần vừa ra, ai dám tranh phongYêu Linh sư mạnh nhất - Nhiếp Ly - bởi vì một quyển thần bí Thời Không Yêu Linh Chi Thư trùng sinh lại thời còn trẻ, tu luyện công pháp mạnh nhất, lực lượng Yêu Linh mạnh nhất, bước chân lên võ đạo đỉnh phong!Cừu nhân kiếp trước, toàn bộ thanh toán.Nếu như trùng sinh, ở kiếp này ta chính là Chúa Tể tất cả Chúng Thần Chi Vương, để cho hết thảy đều run rẩy ở dưới chân ta a.",
          binhLuan: [{ ten: "Admin:", chat: "hay" }],
          seen: false,
        },
        {
          imgsrc: "~/assets/images/image5.png",
          name: "Song hành",
          author: "Hạ Vỹ Nhiên",
          status: "Chưa hoàn thành",
          follow: false,
          category: "Ngôn tình",
          soLuong: 1,
          noiDung: [
            {
              stt: 1,
              chuong: "Hồi 1A",
              nd: "Sơn mạch Thánh Tổ liên miên không dứt, ánh mặt trời xuyên thấu qua những khe hở của dãy núi, chiếu sâu vào trong hạp cốc. Giữa sườn núi bên cạnh hạp cốc còn lưu lại một chút bằng tuyết.Đã đầu hạ rồi, mà bằng tuyết vẫn chưa tan, cái rét nơi đây đặc biệt dài, thi thoảng còn có âm thanh yêu thú gào thét, vang vọng giữa núi rừng.Một tòa thành trì to lớn, sừng sững đứng trên bình nguyên bên trong hạp cốc.Thế giới bên ngoài Thánh Tổ sơn mạch, đã bị yêu thú chiếm lĩnh, những người ở đây đã mấy trăm năm ko có liên hệ với thế giới bên ngoài rồi.Thế giới bên ngoài trông như thế nào, người trong thành trì không hề biết, truyền thuyết thời điểm huy hoàng nhất của nhân loại có tới mấy nghìn Yêu Linh Sư Truyền Kỳ cùng Võ Giả Truyền Kỳ, bên trên đại lục rộng lớn đã thành lập nên một đế quốc khổng lồ. Nhưng đế quốc đó, đã không còn tồn tại, những người ở đây cũng không biết, họ có đúng là những người cuối cùng còn sống sót hay không?Vị trí của tòa thành này rất bí ẩn, là tòa thành hoàn hảo nhất được lưu lại từ thời đại hắc ám, tuy thi thoảng gặp phải Phong Tuyết yêu thú cường đại trong Yêu Tổ sơn mạch tập kích, nhưng tòa thành thị này, vẫn kiên cường phát triển và tồn tại.Bức tường thành này, chính là một tấm bia bất diệt!Tòa thành thị này gọi là Quang Huy Chi Thành, ý là Hy Vọng Nhân Loại.Học viên thánh lan, lớp học Võ Giả sơ cấp.",
            },
            { stt: 2,
              chuong: "Chưa hoàn thành",
              nd: "Cảm ơn đã theo dõi. truyện sẽ được cập nhật sớm"
            },
          ],
          vote: 5,
          gioithieu:"Cô yêu anh. Lúc bên anh cô luôn dịu dàng và săn sóc. Nhưng còn anh, anh lại dùng sự lạnh lùng, hờ hững mà đối mặt với cô.một bản án do chính tay anh đề ra, chỉ là, dành cho anh hay cho cô? Sau bao tháng ngày sống thiếu hơi thở và bóng dáng của người ấy, chợt nhận ra là anh tự mua dây buộc mình. Anh biết trái tim mình muốn gì, anh yêu cô. Anh muốn cô trở về bên anh, anh vốn nghĩ cô sẽ luyến tiếc, sẽ thương yêu anh như trước đây. Nhưng anh đã lầm tưởng, từ lúc cô quyết định kí tờ đơn mà anh đưa kia, anh đã chính thức trở thành người dưng trong tâm trí Lâm Mặc. Hóa ra, hóa ra do hưởng thụ sự cưng chiều của cô bấy lâu nay mà anh cũng quên rằng, cô vốn còn hờ hững và lạnh lùng hơn cả anh. Là anh may mắn, nhưng lại tự làm chính mình xui xẻo.",
          binhLuan: [{ ten: "Admin:", chat: "hay" }],
          seen: false,
        },
        {
          imgsrc: "~/assets/images/image6.png",
          name: "Tiên đế trùng sinh",
          author: "Lam Phong",
          status: "Hoàn thành",
          follow: false,
          category: "Trùng sinh",
          soLuong: 3,
          noiDung: [
            {
              stt: 1,
              chuong: "Hồi 1A",
              nd: "Thế lớn trong thiên hạ, cứ tan lâu rồi lại hợp, hợp lâu rồi lại tan: như cuối đời nhà Chu, bảy nước tranh giành xâu xé nhau rồi sau lại hợp về nhà Tần. Đến khi nhà Tần mất, thì Hán Sở tranh hùng rồi sau thiên hạ lại hợp về tay nhà Hán.Nhà Hán, từ lúc vua Cao tổ (Bái Công) chém rắn trắng khởi nghĩa, thống nhất được thiên hạ, sau vua Quang Vũ lên ngôi, rồi truyền mãi đến vua Hiến đế; lúc bấy giờ lại chia ra thành ba nước.Nguyên nhân gây ra biến loạn ấy là do hai vua Hoàn đế, Linh đế. Vua Hoàn đế tin dùng lũ hoạn quan, cấm cố những người hiền sĩ. Đến lúc vua Hoàn đế băng hà, vua Linh đế lên ngôi nối nghiệp; được quan đại tướng quân Đậu Vũ, quan thái phó Trần Phồn giúp đỡ. Khi ấy, trong triều có bọn hoạn quan là lũ Tào Tiết lộng quyền. Đậu Vũ, Trần Phồn lập mưu định trừ bọn ấy đi, nhưng vì cơ mưu tiết lộ nên lại bị chúng nó giết mất. Từ đấy, bọn hoạn quan ngày càng ngạo ngược.Ngày rằm tháng tư năm Kiến Ninh thứ hai (167 sau công lịch) vua ngự điện Ôn Đức. Tự nhiên có cơn gió to ầm ầm từ góc điện nổi lên, rồi thấy một con rắn xanh lớn ở trên xà nhà quăng xuống quằn quại trên long án. Vua kinh hoàng ngã đùng ra, các quan tả hữu vội cứu vực vào cung; ở ngoài văn võ cũng sợ chạy cả. Được một lát con rắn biến mất và bỗng nhiên mưa to, sấm sét ầm ầm; lại thêm mưa đá rào rào mãi đến nửa đêm mới tạnh, đổ nhà đổ cửa không biết bao nhiêu mà kểTháng hai, năm Kiến Ninh thứ tư (169) tỉnh Lạc Dương có động đất, nước bể dâng lên ngập lưng trời, dân cư ở ven bể bị sóng lớn cuốn trôi đi mất cả.Năm Quang Hoá thứ nhất (178), một con gà mái tự dưng hoá ra gà trống. Mồng một tháng sáu năm ấy, một luồng khí đen dài chừng hơn mươi trượng bay vào trong điện Ôn Đức. Qua sang tháng bảy, lại có lắm điều gở lạ: cầu vồng mọc ở giữa Ngọc đường; rặng núi Ngũ Nguyên bỗng dưng lở sụt xuống.",
            },
            { stt: 2,
              chuong: "Hồi 1B",
              nd: "Vua hạ chiếu, hỏi chư thần từ đâu mà sinh ra những điềm quái gở ấy. Có quan nghị lang là Sái Ung dâng sớ lên, lời lẽ thống thiết, nói rằng: “Cầu vồng sa xuống, gà mái hoá trống, ấy là bởi quyền chính trong nước ở tay đàn bà và ở tay hoạn quan”. Vua xem sớ ngậm ngùi thở dài, đứng dậy thay áo. Tào Tiết khi ấy đứng hầu sau ngai nghe trộm thấy, trong lòng căm giận, bèn mách bảo đồng bọn, bàn mưu kiếm cớ vu hãm Sái Ung, cách quan đuổi về quê quán.Về sau bọn hoạn quan là Trương Nhượng, Triệu Trung, Phong Tư, Đoan Khuê, Tào Tiết, Hầu Lãm, Kiển Thạc, Trình Khoáng, Hạ Huy, Quách Thắng, cả thảy mười người gọi là mười quan “thường thị” bè đảng với nhau kéo cánh làm càn. Nhà vua tin dùng tôn trọng Trương Nhượng, gọi là “Á phụ” (nghĩa là vua coi như cha).Từ đấy chính sự trong triều ngày càng đổ nát, lòng người náo loạn, giặc cướp nổi lên như ong.Khi ấy ở đất Cự Lộc, có một nhà ba anh em: anh cả là Trương Giác, em hai là Trương Bảo, em út là Trương Lương.Trương Giác vốn thi tú tài trượt, nhân thế bực mình vào núi hái thuốc. Đi đường gặp một ông cụ già mặt tròn mắt biếc, tay chống gậy lê, gọi Trương Giác vào trong một cái động, trao cho ba quyển sách và bảo rằng: “Đây là cuốn “Thái bình yêu thuật”, có được cuốn này ngươi nên thay trời dạy người, để cứu lấy đời. Nếu sau này manh tâm tà gian ắt bị ác báo”. Trương Giác sụp xuống lạy, hỏi họ tên thì cụ già nói: “Ta là Nam Hoa lão tiên”, nói đoạn hoá ra một trận gió biến mất.Trương Giác được ba quyển sách ấy đem về ngày đêm học tập, không bao lâu biết đủ các phép hô gió mưa, tự xưng là Thái Bình đạo nhân.Đến tháng giêng, năm Trung Bình thứ nhất (184), có bệnh ôn dịch. Trương Giác làm ra nước phép chữa bệnh, cứu được nhiều người, tự xưng là Đại hiền lương sư. Giác có đồ đệ năm trăm người, đi dạo các nơi, ai cũng biết phép thư phù niệm chú. Về sau đồ đệ ngày càng đông; Giác bèn chia học trò ra ba mươi sáu phương, phương lớn hơn một vạn người, phương nhỏ sáu bảy ngàn người, phương nào cũng đặt một người làm thủ lĩnh xưng là tướng quân. Giác nói phao lên rằng: “Trời xanh đã chết, trời vàng nên dựng”, “Đến năm Giáp Tý, thiên hạ thái bình”. Rồi sai người lấy đất thó trắng viết hai chữ “Giáp Tý” ở ngay giữa cửa. Nhân dân tám châu Thanh, U, Từ, Ký, Kinh, Dương, Duyện, Dư nhà nào cũng thờ mấy chữ hiệu: “Đại hiền lương sư Trương Giác”."
            },
            { stt: 3,
              chuong: "hổi 1C",
              nd: "Trương Giác lại sai đồng đảng là Mã Nguyên Nghĩa mật đem vàng lụa vào kinh kết giao với tên hoạn quan Phong Tư, đi làm nội ứng, rồi bàn với hai em rằng:Không gì khó bằng thu phục được lòng dân, nay lòng dân đã quy thuận về ta, nếu không thừa thế chiếm lấy thiên hạ thì thật là đáng tiếc lắm.Bèn một mặt sai may cờ vàng hẹn ngày khởi sự, một mặt sai đồ đệ là Đường Châu đem thư báo cho Phong Tư biết. Nhưng Đường Châu lại đi thẳng đến cửa cung tố cáo.Được tin, vua liền triệu quan đại tướng quân là Hà Tiến điều binh bắt chém Mã Nguyên Nghĩa và bắt cả bọn Phong Tư bỏ ngục. Trương Giác thấy việc đã tiết lộ, vội vàng cử binh khởi sự, tự xưng là Thiên công tướng quân, Trương Bảo xưng Địa công tướng quân, Trương Lương xưng Nhân công tướng quân; nói với mọi người rằng: “Nay vận nhà Hán sắp hết, đại thánh nhân ra đời. Các ngươi nên thuận mệnh trời, theo về ta để cùng vui hưởng thái bình!”Nhân dân bốn phương đội khăn vàng, đi theo Trương Giác có tới bốn năm mươi vạn người. Thế giặc dữ dội, quan quân thua chạy như vịt. Hà Tiến một mặt tâu vua, xin hoả tốc xuống chiếu cho các nơi phòng giữ giết giặc lập công; một mặt sai ba quan trung lang tướng là Lư Thực, Hoàng Phủ Tung, Chu Tuấn đem quân tinh nhuệ chia ra làm ba ngả dẹp giặc.Trong khi ấy, quân Trương Giác có một toán xâm phạm vào bờ cõi U Châu. Quan thái thú châu ấy là Lưu Yên, người làng Kính Lăng, đất Giang Hạ, dòng dõi Lỗ Cung vương nhà Hán, nghe tin quân giặc sắp đến, liền triệu quan hiệu uý Châu Tĩnh đến bàn luận. Tĩnh nói:- Quân giặc nhiều, quân ta ít, ông nên tức khắc chiêu mộ thêm quân thì mới kịp ứng phó."
            },
            { stt: 4,
              chuong: "Kết thúc",
              nd: "Cảm ơn các bạn đã đọc"
            },
          ],
          vote: 5,
          gioithieu:"Tiên Đế tung hoành ngang dọc khắp vũ trụ - Diệp Thành bị rơi xuống thiên kiếp, trùng sinh về Địa Cầu lúc mình 20 tuổiKiếp trước anh có gia cảnh tầm thường, vợ chưa cưới hãm hại, bị tình địch xúc phạm, đối mặt với cường quyền, anh chỉ có thể cúi đầu, mẹ bị mất tích, anh bất lực đứng nhìn, bố gặp tình cảnh bi thảm, anh cũng không có cách nào thay đổi.Nhưng bây giờ, Tiên Đế quay trở lại, tất cả nỗi đau khổ đã gặp trước kia, anh sẽ bắt kẻ địch trả giá gấp trăm nghìn lần, để sự bất công trên thế giới này đều tiêu tan theo mây khói.",
          binhLuan: [{ ten: "Admin:", chat: "hay" }],
          seen: false,
        },
        {
          imgsrc: "~/assets/images/image7.png",
          name: "Thiên kỳ truyện",
          author: "Thiên Vy",
          status: "Chưa hoàn thành",
          follow: false,
          category: "Trùng sinh",
          soLuong: 1,
          noiDung: [
            {
              stt: 1,
              chuong: "Hồi 1A",
              nd: "Sơn mạch Thánh Tổ liên miên không dứt, ánh mặt trời xuyên thấu qua những khe hở của dãy núi, chiếu sâu vào trong hạp cốc. Giữa sườn núi bên cạnh hạp cốc còn lưu lại một chút bằng tuyết.Đã đầu hạ rồi, mà bằng tuyết vẫn chưa tan, cái rét nơi đây đặc biệt dài, thi thoảng còn có âm thanh yêu thú gào thét, vang vọng giữa núi rừng.Một tòa thành trì to lớn, sừng sững đứng trên bình nguyên bên trong hạp cốc.Thế giới bên ngoài Thánh Tổ sơn mạch, đã bị yêu thú chiếm lĩnh, những người ở đây đã mấy trăm năm ko có liên hệ với thế giới bên ngoài rồi.Thế giới bên ngoài trông như thế nào, người trong thành trì không hề biết, truyền thuyết thời điểm huy hoàng nhất của nhân loại có tới mấy nghìn Yêu Linh Sư Truyền Kỳ cùng Võ Giả Truyền Kỳ, bên trên đại lục rộng lớn đã thành lập nên một đế quốc khổng lồ. Nhưng đế quốc đó, đã không còn tồn tại, những người ở đây cũng không biết, họ có đúng là những người cuối cùng còn sống sót hay không?Vị trí của tòa thành này rất bí ẩn, là tòa thành hoàn hảo nhất được lưu lại từ thời đại hắc ám, tuy thi thoảng gặp phải Phong Tuyết yêu thú cường đại trong Yêu Tổ sơn mạch tập kích, nhưng tòa thành thị này, vẫn kiên cường phát triển và tồn tại.Bức tường thành này, chính là một tấm bia bất diệt!Tòa thành thị này gọi là Quang Huy Chi Thành, ý là Hy Vọng Nhân Loại.Học viên thánh lan, lớp học Võ Giả sơ cấp.",
            },
            { stt: 2,
              chuong: "Chưa hoàn thành",
              nd: "Cảm ơn đã theo dõi. truyện sẽ được cập nhật sớm"
            },
          ],
          vote: 5,
          gioithieu:"Tư Nhược Hàn là Tam tiểu thư của Tư gia, mồ côi mẹ từ nhỏ. Năm 18 tuổi bị cha coi như món hàng trao đổi, ép kết hôn với kẻ giết anh trai mình. Cô uất hận mang mối thù hằn mà giết cha và hôn phu rồi tự sát. Sau đó được trọng sinh vào cơ thể của Tư Thiên Kỳ, với một cuộc đời mới, cô sẽ sống tiếp ra sao?“Người đẹp như vậy, chết thật uổng phí, tôi sẽ sống thật tốt, sống cho tôi và cả cô nữa.”",
          binhLuan: [{ ten: "Admin:", chat: "hay" }],
          seen: false,
        },
        {
          imgsrc: "~/assets/images/image8.png",
          name: "Đặt tên cho bóng đêm",
          author: "No name",
          status: "Hoàn thành",
          follow: false,
          category: "Dị giới",
          soLuong: 3,
          noiDung: [
            {
              stt: 1,
              chuong: "Mở đầu",
              nd: "Tám giờ sáng, thành phố Trung Hải, khu biệt thự Lệ Thủy. Lâm Phi vừa về đến nhà liền cảm thấy bầu không khí hôm nay có chút bất thường.Vợ của hắn là Mộ San San sống ở khu biệt thự dành cho người giàu, nhưng hắn thì phải thuê phòng trọ ở ngoài rồi làm một sạp ngoài đường kiếm sống, cũng hơn nửa năm rồi chưa về nhà, vợ chồng hắn không được hòa thuận, nguyên nhân cũng không gì khác là do cô vợ hắn – một tổng giám đốc xinh đẹp luôn cho rằng hắn là một tên bỏ đi không có chí tiến thủ, không ngờ rằng, lúc ở nước ngoài, hắn lại là một tên quỷ vương không ai dám động tới.'Chào cậu, ông chủ và cô chủ đang đợi cậu.' dì Quế kính cẩn mở cửa chào hắn.Dì Quế là giúp việc của Mộ San San vợ Lâm Phi, bao nhiêu năm như vậy, vẫn ở trong nhà họ Mộ, hầu hạ người nhà họ Mộ.Lâm Phi vâng lời dì Quế, đi thẳng vào phòng khách.'Ngồi đi.'Bố vợ Lâm Phi Mộ Hồng đang nhắm mắt tập trung nghĩ ngợi, nghe thấy tiếng bước chân, liền mở mắt, sau khi biết là Lâm Phi lập tức ngẩng đầu tỏ ý bảo Lâm Phi ngồi xuống.Lâm Phi theo lời ngồi xuống, ánh mắt vô thức lại liếc nhìn người phụ nữ xinh đẹp tuyệt trần ngồi bên cạnh bố vợ Mộ Hồng, cũng chính là vợ của hắn, chủ tịch tập toàn Mộ Thị, Mộ San San.Mộ San San mặc áo ngắn ngắn tay màu nâu nhạt, tôn lên chiếc cổ trắng nõn nà, chiếc quần đùi bó sát, rất hợp với đôi guốc da Ferragamo đen, để lộ ra đôi chân dài thẳng, thon đẹp.Gương mặt thanh thú của cô ta được điểm một lớp phấn nhẹ, nước da trắng ngần, liễu yếu đào tơ.Cô ta như cửu thiên huyền nữ hạ phàm, thanh lệ thoát tục, cao quý vô ngần, khiến cho người khác không dám khinh nhờn.Mộ San San ngẩng đầu, hướng đôi mắt long lanh nhìn Lâm Phi, lạnh nhạt nói: “Anh đến muộn mất ba mươi lăm phút.”",
            },
            { stt: 2,
              chuong: "Giọng nói lạnh lẽo",
              nd: "Giọng nói lạnh lẽo khác thường, như được truyền đến từ cung trăng vậy.'Anh là chồng em, không phải cấp dưới của em, đến muộn thì đã sao.' Lâm Phi nhịn không được trong lòng bực bội oán trách, đương nhiên, không dám thể hiện ra mặt, dù gì thì người nhà cũng vẫn đang ở đó.Dưới cái nhìn chằm chằm của Mộ San San, Lâm Phi rút ra một điếu thuốc rẻ tiền, vừa châm thuốc, đôi mắt vừa không chút cả nể dò xét từng đường nét nhấp nhô trên cơ thể tuyệt mỹ của Mộ San San.Mộ San San vẫn giữ một vẻ lạnh lùng, chẳng có chút gì che đậy trên gương mặt và dáng người ấy cả.Ngay cả trong mắt một 'thợ săn' từng trải nhiều năm như Lâm Phi cũng không tìm ra được bất kỳ khuyết điểm nhỏ nào, trước đây khi còn là lính đánh thuê ở nước ngoài, hắn đã từng gặp rất nhiều người đẹp, thậm chí đã từng thân mật hoặc nói thẳng ra là đã từng qua đêm cùng những cô gái đó, nhưng cái cảm giác đặc biệt của vợ hắn, thật sự rất hiếm gặp.Nhưng Mộ San San cũng không thèm quay đầu lại nhìn Lâm Phi dù chỉ một cái.Mặc dù đã kết hôn với Lâm Phi được hơn nửa năm, nhưng đến tận bây giờ, Mộ San San cũng không muốn thừa nhận một sự thật rằng Lâm Phi là chồng cô ta.Lúc đầu, khi bố cô ta là Mộ Hồng bắt cô ta và Lâm Phi kết hôn, Mộ San San sống chết chối từ.Đến nỗi Mộ Hồng phải dọa cắt đứt quan hệ cha con, ép Mộ San San và Lâm Phi kí vào tờ đăng kí kết hôn.Kết hôn rồi, Mộ San San cũng chưa từng thử mở lòng chấp nhận Lâm Phi.Mộ San San không phải là người nhẫn nhịn chịu đựng, cô ta tin rằng sự hấp dẫn và năng lực của cô ta có thể khiến Lâm Phi trở thành một người chồng chuẩn mực, nhưng kết hôn đã hơn nửa năm, càng tìm hiểu Lâm Phi, Mộ San San càng cảm thấy tuyệt vọng."
            },
            { stt: 3,
              chuong: "phẩm chất và hành vi",
              nd: "Mọi phẩm chất và hành vi Mộ San San ghét nhất trên đời này như: Hút thuốc, nghiện rượu, háo sắc, lười nhác,…, Lâm Phi gần như chả thiếu cái gì.Mộ Hồng dường như không chút để tâm đến sự bất hòa giữa hai người, hai chân vắt chéo, nhìn thẳng Lâm Phi nói: “Nghe dì Quế nói nửa năm nay rồi con không về nhà, ở bên ngoài bận chuyện gì sao?”“Ban ngày nằm ngủ, tối đến suy nghĩ sự đời, tiện thể bán hàng rong kiếm vài đồng qua ngày.” Lâm Phi cười đáp.Mộ Hồng và Lâm Phi sớm đã chẳng tình nghĩa cha con gì, cũng từng là tinh anh của một công ty trinh sát, hôm nay ông ta hỏi như vậy, gần như chắc chắn đã cho người điều tra rồi, Lâm Phi cũng chẳng cần gì phải nói dối.Mộ Hồng cũng chẳng nói chẳng chỉ gật đầu, hình như là khá bằng lòng với thái độ thành thực của Lâm Phi, đương nhiên điều này không có nghĩa Mộ Hồng bỏ qua sự thật rằng Lâm Phi không chịu về nhà.Ông ta sớm đã biết hết mọi chuyện, kể cả việc trong một đêm cách đây mấy ngày, Lâm Phi cứu được một mỹ nữ, sau đó đã vui vẻ với cô ta ở quán rượu.Còn Mộ San San thì mắt chữ O mồm chữ A, đôi mắt đẹp đẽ ấy không một chớp mắt nhìn chằm chằm Lâm Phi, trên khuôn dung đẹp đẽ ấy tràn đầy sự sửng sốt: “Bán hàng rong?!”.“Trời ạ, sao sấm sét không đánh chết tên khốn này đi!”Mộ San San trợn ngược mắt, nhịn không được trong lòng gào lên một câu.Đôi mắt Mộ San San lạnh ngắt như băng giá, nhìn chăm chằm Lâm Phi, cô ta rất muốn chia đôi cái đầu của Lâm Phi xem xem, bên trong đó chứa cái gì?“Dù sao thì cũng đã là người có gia đình, không nên suốt ngày chơi bời lêu lổng.” Mộ Hồng khoan thai nói: “Bố sắp phải rời khỏi thành phố Trung Hải một thời gian, San San dù gì cũng là con gái, để nó một mình gánh vác công ty quả thật là làm khó nó quá. Con là chồng nó, cũng nên san sẻ gánh nặng này với nó. Đừng có cái gì mà ra đường đi bán hàng rong nữa, đi giúp vợ con làm việc đi.”"
            },
            { stt: 4,
              chuong: "Kết thúc",
              nd: "Cảm ơn các bạn đã đọc"
            },
          ],
          vote: 5,
          gioithieu:"Đây là câu chuyện của Khánh Trần, một đứa nhỏ 17 tuổi bất hạnh cha mẹ không quan tâm đến, phải tự sinh sống dưới đáy một xã hội tuy hiện đại nhưng cũng đầy rẫy những sự khốn cùng. Rồi một ngày nọ, nó có được một sự lựa chọn, hoặc là một cơ hội để có được một cuộc đời khác, đó chính là xuyên qua một thế giới khác, một thế giới mà nó hoàn toàn không biết. Dĩ nhiên nó không mấy đắn đo khi lựa chọn xuyên không, bởi thế giới này có gì để nó luyến tiếc đâu, ngoài sự khổ đau cùng khốn khó?Nhưng khi xuyên qua nó mới phát hiện, thế giới mà nó xuyên qua là một thế giới máy móc, cơ khí hóa, tự động hóa, hiện đại nhưng cũng tàn nhẫn tới cực điểm, và nó chỉ là một tù nhân trong một nhà giam dành cho những kẻ xuyên không giống như nó. Bất quá, sự xuyên không này cũng không vĩnh viễn, mà chỉ tồn tại 48 giờ cho mỗi người xuyên không ở mỗi không gian, và họ sẽ phải sống 2 cuộc đời ở 2 không gian khác nhau",
          binhLuan: [{ ten: "Admin:", chat: "hay" }],
          seen: false,
        },
        {
          imgsrc: "~/assets/images/image9.png",
          name: "Khó thoát",
          author: "Thanh Đường",
          status: "Chưa hoàn thành",
          follow: false,
          category: "Đô thị",
          soLuong: 2,
          noiDung: [
            {
              stt: 1,
              chuong: "Hồi 1A",
              nd: "Đường Phong cảm thấy bản thân mình vô cùng xui xẻo.Mười lăm năm trước Đường Phong mang một thân công phu rời khỏi Đường gia chu du thiên hạ, trên đường vì tình cờ cứu một đứa trẻ khỏi cảnh bị cán chết dưới vó ngựa mà tự rước họa vào thân.Lần tai nạn đó khiến hắn trở thành phế nhân, suốt mười lăm năm qua chỉ có thể nằm yên trên giường. Tuy rằng các vị trưởng lão trong môn nhiều lần truyền cho hắn nội lực tinh thuần của chính mình, nhưng vẫn không thể khiến hắn một lần nữa có thể đứng dậy được.Chuyện này khiến cả Đường môn từ cao đến thấp tiếc nuối khôn nguôi, Đường Phong là kỳ tài trăm năm mới gặp của Đường Môn, chỉ cần một quãng thời gian nữa thôi thì không ai dám nói trước thành tựu của hắn có thể cao đến đâu, thế nhưng một phân hy vọng này lại sớm lụi tàn.Suốt mấy năm nằm trên giường, Đường Phong từng tự vấn lương tâm của mình vô số lần, nếu có thể quay ngược lại thời điểm đó liệu hắn có ra tay cứu đứa trẻ kia hay không?Đáp án là có! Nếu không cứu, e là hắn sẽ cắn rứt lương tâm cả đời, thành tựu ngày sau có cao đến mấy cũng ích lợi gì? Hiện tại, tuy nửa thân dưới của hắn bị liệt nhưng đổi lấy nửa đời thanh thản.Mạng người quý như trời, nhân tính không thể mất!Mười lăm năm qua, Đường Phong không ngừng nghiên cứu y khắp thiên hạ, kết hợp cùng hiện trạng của mình, nghiên cứu ra một phương pháp chữa bệnh bằng ngân châm, lúc này mới cảm thấy có chút khởi sắc, khó khăn lắm mới cảm nhận được nửa thân dưới của mình có chút phản ứng, một đạo sấm sét rạch ngang trời cứ thế bổ trúng vào người hắn, Đường Phong còn đang mơ mơ màng màng đã bị ngưu đầu mã diện áp tới Diêm La điện.Đường Phong nghĩ đến nát óc cũng không hiểu, rõ ràng mình đang nằm trên giường, chẳng chọc đến ai, thế nào lại xuất hiện một đạo sấm sét kì quái từ cửa sổ đánh vào, lại còn vô cùng xảo diệu đánh trúng vào mình.",
            },
            { stt: 2,
              chuong: "Hồi 1B",
              nd: "Đường Phong cố nén giận ngẩng đầu lên, dùng ánh mắt sắc lạnh nhìn vị tráng hán mặt đen đang ngồi ngay ngắn như một ngọn núi đá sừng sững trên đài cao.Chính là hắn, Diêm La vương, kẻ được xuy tôn là người nắm giữ vận mệnh của người sống, chưởng quản lục đạo luân hồi- Đường Phong!Diêm vương vỗ mạnh án mộc trên bàn, hét lớn một tiếng.Đường Phong bước lên vài bước, ánh mắt lạnh lùng nhìn hắn.- Nhà ngươi có biết tội của mình chưa?Diêm vương rung đùi đắc ý, lại quát thêm một tiếng.- Ta có tội gì?Đường Phong giận đến mức mặt mũi đỏ bừng, rống lên một tiếng.- Ngươi có biết thọ mệnh của ngươi chỉ có mười lăm năm hay không? Lẽ ra mười lăm năm trước hồn phách của ngươi phải xuống địa phủ chịu mệnh, tiến nhập luân hồi mới phải chứ.Diêm vương ho nhẹ một tiếng, khẩu khí tuy cường ngạnh nhưng cũng đã hòa hoãn ít nhiều- Diêm vương muốn ngươi chết lúc canh ba, ai dám giữ ngươi lại đến canh năm?Đường Phong trừng mắt nhìn Diêm La đang ngồi trên đài:- Sống chết của ta vốn nằm trong tay ngươi! Sao bỗng nhiên ta lại sống thêm được mười lăm năm?- Khụ, chuyện này...Vẻ mặt Diêm vương thoáng chút ngượng ngùng.- Bổn vương bận rộn trăm bề, đôi khi cũng phạm chút sai lầm là điều khó tránh khỏi.- Chuyện này thì liên quan gì đến ta?Đường Phong càng nghĩ càng tức giận.- Mười lăm năm trước ta liều mình cứu người khác, chỉ đổi được nỗi khổ tàn phế suốt mười lăm năm, vất vả lắm mới có được chút khởi sắc, ngươi lại phái ngưu đầu mã diện bắt ta đến đây như thế, vậy tội của ta là gì? Ngươi làm Diêm vương kiểu gì vậy hả?Ngưu đầu mã diện đứng một bên nhìn Đường Phong nổi cơn thịnh nộ, liền chạy đến giữ chặt hắn lại, vừa cười xoa dịu hắn vừa nói:- Xin nhân huynh bớt giận, bớt giận!Mặt Diêm vương đã đen nay lại đen thêm một phần, yếu ớt lên tiếng"
            },
            { stt: 3,
              chuong: "Chưa hoàn thành",
              nd: "Cảm ơn đã theo dõi. truyện sẽ được cập nhật sớm"
            },
          ],
          vote: 5,
          gioithieu:"Là tác phẩm đầu tiên mà tác giả Thanh Đường viết về đề tài nhạy cảm mà trước giờ ít có tác giả nào khai thác - người thứ 3, Khó Thoát mang đến cho bạn đọc một cái nhìn khác, hiểu hơn về những con người bị nhiều người ghét.Lần đầu tiên Hướng Tình nhìn thấy Hoắc Đông, hắn một thân âu phục màu đen thẳng tắp, nghiêm túc mà cấm dục. Trên ngón áp út, chiếc nhẫn được đeo một cách vững chắc. Người đàn ông lạnh nhạt và xa cách như vậy ở trên giường sẽ như thế nào, cô rất hiếu kỳ.",
          binhLuan: [{ ten: "Admin:", chat: "hay" }],
          seen: false,
        },
        {
          imgsrc: "~/assets/images/image10.png",
          name: "Quan môn",
          author: "Thao Lang",
          status: "Chưa hoàn thành",
          follow: false,
          category: "Kiếm hiệp",
          soLuong: 2,
          noiDung: [
            {
              stt: 1,
              chuong: "Hồi 1A",
              nd: "Đường Phong cảm thấy bản thân mình vô cùng xui xẻo.Mười lăm năm trước Đường Phong mang một thân công phu rời khỏi Đường gia chu du thiên hạ, trên đường vì tình cờ cứu một đứa trẻ khỏi cảnh bị cán chết dưới vó ngựa mà tự rước họa vào thân.Lần tai nạn đó khiến hắn trở thành phế nhân, suốt mười lăm năm qua chỉ có thể nằm yên trên giường. Tuy rằng các vị trưởng lão trong môn nhiều lần truyền cho hắn nội lực tinh thuần của chính mình, nhưng vẫn không thể khiến hắn một lần nữa có thể đứng dậy được.Chuyện này khiến cả Đường môn từ cao đến thấp tiếc nuối khôn nguôi, Đường Phong là kỳ tài trăm năm mới gặp của Đường Môn, chỉ cần một quãng thời gian nữa thôi thì không ai dám nói trước thành tựu của hắn có thể cao đến đâu, thế nhưng một phân hy vọng này lại sớm lụi tàn.Suốt mấy năm nằm trên giường, Đường Phong từng tự vấn lương tâm của mình vô số lần, nếu có thể quay ngược lại thời điểm đó liệu hắn có ra tay cứu đứa trẻ kia hay không?Đáp án là có! Nếu không cứu, e là hắn sẽ cắn rứt lương tâm cả đời, thành tựu ngày sau có cao đến mấy cũng ích lợi gì? Hiện tại, tuy nửa thân dưới của hắn bị liệt nhưng đổi lấy nửa đời thanh thản.Mạng người quý như trời, nhân tính không thể mất!Mười lăm năm qua, Đường Phong không ngừng nghiên cứu y khắp thiên hạ, kết hợp cùng hiện trạng của mình, nghiên cứu ra một phương pháp chữa bệnh bằng ngân châm, lúc này mới cảm thấy có chút khởi sắc, khó khăn lắm mới cảm nhận được nửa thân dưới của mình có chút phản ứng, một đạo sấm sét rạch ngang trời cứ thế bổ trúng vào người hắn, Đường Phong còn đang mơ mơ màng màng đã bị ngưu đầu mã diện áp tới Diêm La điện.Đường Phong nghĩ đến nát óc cũng không hiểu, rõ ràng mình đang nằm trên giường, chẳng chọc đến ai, thế nào lại xuất hiện một đạo sấm sét kì quái từ cửa sổ đánh vào, lại còn vô cùng xảo diệu đánh trúng vào mình.",
            },
            { stt: 2,
              chuong: "Hồi 1B",
              nd: "Đường Phong cố nén giận ngẩng đầu lên, dùng ánh mắt sắc lạnh nhìn vị tráng hán mặt đen đang ngồi ngay ngắn như một ngọn núi đá sừng sững trên đài cao.Chính là hắn, Diêm La vương, kẻ được xuy tôn là người nắm giữ vận mệnh của người sống, chưởng quản lục đạo luân hồi- Đường Phong!Diêm vương vỗ mạnh án mộc trên bàn, hét lớn một tiếng.Đường Phong bước lên vài bước, ánh mắt lạnh lùng nhìn hắn.- Nhà ngươi có biết tội của mình chưa?Diêm vương rung đùi đắc ý, lại quát thêm một tiếng.- Ta có tội gì?Đường Phong giận đến mức mặt mũi đỏ bừng, rống lên một tiếng.- Ngươi có biết thọ mệnh của ngươi chỉ có mười lăm năm hay không? Lẽ ra mười lăm năm trước hồn phách của ngươi phải xuống địa phủ chịu mệnh, tiến nhập luân hồi mới phải chứ.Diêm vương ho nhẹ một tiếng, khẩu khí tuy cường ngạnh nhưng cũng đã hòa hoãn ít nhiều- Diêm vương muốn ngươi chết lúc canh ba, ai dám giữ ngươi lại đến canh năm?Đường Phong trừng mắt nhìn Diêm La đang ngồi trên đài:- Sống chết của ta vốn nằm trong tay ngươi! Sao bỗng nhiên ta lại sống thêm được mười lăm năm?- Khụ, chuyện này...Vẻ mặt Diêm vương thoáng chút ngượng ngùng.- Bổn vương bận rộn trăm bề, đôi khi cũng phạm chút sai lầm là điều khó tránh khỏi.- Chuyện này thì liên quan gì đến ta?Đường Phong càng nghĩ càng tức giận.- Mười lăm năm trước ta liều mình cứu người khác, chỉ đổi được nỗi khổ tàn phế suốt mười lăm năm, vất vả lắm mới có được chút khởi sắc, ngươi lại phái ngưu đầu mã diện bắt ta đến đây như thế, vậy tội của ta là gì? Ngươi làm Diêm vương kiểu gì vậy hả?Ngưu đầu mã diện đứng một bên nhìn Đường Phong nổi cơn thịnh nộ, liền chạy đến giữ chặt hắn lại, vừa cười xoa dịu hắn vừa nói:- Xin nhân huynh bớt giận, bớt giận!Mặt Diêm vương đã đen nay lại đen thêm một phần, yếu ớt lên tiếng"
            },
            { stt: 3,
              chuong: "Chưa hoàn thành",
              nd: "Cảm ơn đã theo dõi. truyện sẽ được cập nhật sớm"
            },
          ],
          vote: 5,
          gioithieu:"Đọc truyện Quan Môn của tác giả Thao Lang chương mới nhất full prc pdf ebook hỗ trợ xem trên thiết bị di động hoặc xem trực tuyến tại webtruyen.com.Tại một thời gian nào đó, trong văn phòng quản lý “Tam phản – Phản xuyên việt – Phản trọng sinh – Phản dị năng ” của thời không.- Tuy cậu là hồng tam đại nhưng điều kiện bản thân quá kém, không có nhiều không gian phát triển.",
          binhLuan: [{ ten: "Admin:", chat: "hay" }],
          seen: false,
        },
        {
          imgsrc: "~/assets/images/image11.png",
          name: "Đừng ép anh động tâm",
          author: "Hề Lục",
          status: "Hoàn thành",
          follow: false,
          category: "Ngôn tình",
          soLuong: 3,
          noiDung: [
            {
              stt: 1,
              chuong: "Mở đầu",
              nd: "Tám giờ sáng, thành phố Trung Hải, khu biệt thự Lệ Thủy. Lâm Phi vừa về đến nhà liền cảm thấy bầu không khí hôm nay có chút bất thường.Vợ của hắn là Mộ San San sống ở khu biệt thự dành cho người giàu, nhưng hắn thì phải thuê phòng trọ ở ngoài rồi làm một sạp ngoài đường kiếm sống, cũng hơn nửa năm rồi chưa về nhà, vợ chồng hắn không được hòa thuận, nguyên nhân cũng không gì khác là do cô vợ hắn – một tổng giám đốc xinh đẹp luôn cho rằng hắn là một tên bỏ đi không có chí tiến thủ, không ngờ rằng, lúc ở nước ngoài, hắn lại là một tên quỷ vương không ai dám động tới.'Chào cậu, ông chủ và cô chủ đang đợi cậu.' dì Quế kính cẩn mở cửa chào hắn.Dì Quế là giúp việc của Mộ San San vợ Lâm Phi, bao nhiêu năm như vậy, vẫn ở trong nhà họ Mộ, hầu hạ người nhà họ Mộ.Lâm Phi vâng lời dì Quế, đi thẳng vào phòng khách.'Ngồi đi.'Bố vợ Lâm Phi Mộ Hồng đang nhắm mắt tập trung nghĩ ngợi, nghe thấy tiếng bước chân, liền mở mắt, sau khi biết là Lâm Phi lập tức ngẩng đầu tỏ ý bảo Lâm Phi ngồi xuống.Lâm Phi theo lời ngồi xuống, ánh mắt vô thức lại liếc nhìn người phụ nữ xinh đẹp tuyệt trần ngồi bên cạnh bố vợ Mộ Hồng, cũng chính là vợ của hắn, chủ tịch tập toàn Mộ Thị, Mộ San San.Mộ San San mặc áo ngắn ngắn tay màu nâu nhạt, tôn lên chiếc cổ trắng nõn nà, chiếc quần đùi bó sát, rất hợp với đôi guốc da Ferragamo đen, để lộ ra đôi chân dài thẳng, thon đẹp.Gương mặt thanh thú của cô ta được điểm một lớp phấn nhẹ, nước da trắng ngần, liễu yếu đào tơ.Cô ta như cửu thiên huyền nữ hạ phàm, thanh lệ thoát tục, cao quý vô ngần, khiến cho người khác không dám khinh nhờn.Mộ San San ngẩng đầu, hướng đôi mắt long lanh nhìn Lâm Phi, lạnh nhạt nói: “Anh đến muộn mất ba mươi lăm phút.”",
            },
            { stt: 2,
              chuong: "Giọng nói lạnh lẽo",
              nd: "Giọng nói lạnh lẽo khác thường, như được truyền đến từ cung trăng vậy.'Anh là chồng em, không phải cấp dưới của em, đến muộn thì đã sao.' Lâm Phi nhịn không được trong lòng bực bội oán trách, đương nhiên, không dám thể hiện ra mặt, dù gì thì người nhà cũng vẫn đang ở đó.Dưới cái nhìn chằm chằm của Mộ San San, Lâm Phi rút ra một điếu thuốc rẻ tiền, vừa châm thuốc, đôi mắt vừa không chút cả nể dò xét từng đường nét nhấp nhô trên cơ thể tuyệt mỹ của Mộ San San.Mộ San San vẫn giữ một vẻ lạnh lùng, chẳng có chút gì che đậy trên gương mặt và dáng người ấy cả.Ngay cả trong mắt một 'thợ săn' từng trải nhiều năm như Lâm Phi cũng không tìm ra được bất kỳ khuyết điểm nhỏ nào, trước đây khi còn là lính đánh thuê ở nước ngoài, hắn đã từng gặp rất nhiều người đẹp, thậm chí đã từng thân mật hoặc nói thẳng ra là đã từng qua đêm cùng những cô gái đó, nhưng cái cảm giác đặc biệt của vợ hắn, thật sự rất hiếm gặp.Nhưng Mộ San San cũng không thèm quay đầu lại nhìn Lâm Phi dù chỉ một cái.Mặc dù đã kết hôn với Lâm Phi được hơn nửa năm, nhưng đến tận bây giờ, Mộ San San cũng không muốn thừa nhận một sự thật rằng Lâm Phi là chồng cô ta.Lúc đầu, khi bố cô ta là Mộ Hồng bắt cô ta và Lâm Phi kết hôn, Mộ San San sống chết chối từ.Đến nỗi Mộ Hồng phải dọa cắt đứt quan hệ cha con, ép Mộ San San và Lâm Phi kí vào tờ đăng kí kết hôn.Kết hôn rồi, Mộ San San cũng chưa từng thử mở lòng chấp nhận Lâm Phi.Mộ San San không phải là người nhẫn nhịn chịu đựng, cô ta tin rằng sự hấp dẫn và năng lực của cô ta có thể khiến Lâm Phi trở thành một người chồng chuẩn mực, nhưng kết hôn đã hơn nửa năm, càng tìm hiểu Lâm Phi, Mộ San San càng cảm thấy tuyệt vọng."
            },
            { stt: 3,
              chuong: "phẩm chất và hành vi",
              nd: "Mọi phẩm chất và hành vi Mộ San San ghét nhất trên đời này như: Hút thuốc, nghiện rượu, háo sắc, lười nhác,…, Lâm Phi gần như chả thiếu cái gì.Mộ Hồng dường như không chút để tâm đến sự bất hòa giữa hai người, hai chân vắt chéo, nhìn thẳng Lâm Phi nói: “Nghe dì Quế nói nửa năm nay rồi con không về nhà, ở bên ngoài bận chuyện gì sao?”“Ban ngày nằm ngủ, tối đến suy nghĩ sự đời, tiện thể bán hàng rong kiếm vài đồng qua ngày.” Lâm Phi cười đáp.Mộ Hồng và Lâm Phi sớm đã chẳng tình nghĩa cha con gì, cũng từng là tinh anh của một công ty trinh sát, hôm nay ông ta hỏi như vậy, gần như chắc chắn đã cho người điều tra rồi, Lâm Phi cũng chẳng cần gì phải nói dối.Mộ Hồng cũng chẳng nói chẳng chỉ gật đầu, hình như là khá bằng lòng với thái độ thành thực của Lâm Phi, đương nhiên điều này không có nghĩa Mộ Hồng bỏ qua sự thật rằng Lâm Phi không chịu về nhà.Ông ta sớm đã biết hết mọi chuyện, kể cả việc trong một đêm cách đây mấy ngày, Lâm Phi cứu được một mỹ nữ, sau đó đã vui vẻ với cô ta ở quán rượu.Còn Mộ San San thì mắt chữ O mồm chữ A, đôi mắt đẹp đẽ ấy không một chớp mắt nhìn chằm chằm Lâm Phi, trên khuôn dung đẹp đẽ ấy tràn đầy sự sửng sốt: “Bán hàng rong?!”.“Trời ạ, sao sấm sét không đánh chết tên khốn này đi!”Mộ San San trợn ngược mắt, nhịn không được trong lòng gào lên một câu.Đôi mắt Mộ San San lạnh ngắt như băng giá, nhìn chăm chằm Lâm Phi, cô ta rất muốn chia đôi cái đầu của Lâm Phi xem xem, bên trong đó chứa cái gì?“Dù sao thì cũng đã là người có gia đình, không nên suốt ngày chơi bời lêu lổng.” Mộ Hồng khoan thai nói: “Bố sắp phải rời khỏi thành phố Trung Hải một thời gian, San San dù gì cũng là con gái, để nó một mình gánh vác công ty quả thật là làm khó nó quá. Con là chồng nó, cũng nên san sẻ gánh nặng này với nó. Đừng có cái gì mà ra đường đi bán hàng rong nữa, đi giúp vợ con làm việc đi.”"
            },
            { stt: 4,
              chuong: "Kết thúc",
              nd: "Cảm ơn các bạn đã đọc"
            },
          ],
          vote: 5,
          gioithieu:"Giang Điềm có một người hàng xóm bí ẩn, chỉ hận không thể bóp chết côKhông nghĩ tới có một ngày, Lục Minh Chu sẽ đập cửa nhà cô, đi đến ngồi trên sô pha, đau lòng giúp cô lau khô nước mắt, dỗ dành hết lần này đến lần khác: “Đừng khóc nữa.”Đường đường là Hoàng tử của giải trí Thành Niệm được người người nể trọng, thế mà anh lại bị một cô nhóc trở mặt không nhận người",
          binhLuan: [{ ten: "Admin:", chat: "hay" }],
          seen: false,
        },
        {
          imgsrc: "~/assets/images/image12.png",
          name: "Tung hoành",
          author: "Hành Thiên Hạ",
          status: "Hoàn thành",
          follow: false,
          category: "Tu tiên",
          soLuong: 3,
          noiDung: [
            {
              stt: 1,
              chuong: "Mở đầu",
              nd: "Tám giờ sáng, thành phố Trung Hải, khu biệt thự Lệ Thủy. Lâm Phi vừa về đến nhà liền cảm thấy bầu không khí hôm nay có chút bất thường.Vợ của hắn là Mộ San San sống ở khu biệt thự dành cho người giàu, nhưng hắn thì phải thuê phòng trọ ở ngoài rồi làm một sạp ngoài đường kiếm sống, cũng hơn nửa năm rồi chưa về nhà, vợ chồng hắn không được hòa thuận, nguyên nhân cũng không gì khác là do cô vợ hắn – một tổng giám đốc xinh đẹp luôn cho rằng hắn là một tên bỏ đi không có chí tiến thủ, không ngờ rằng, lúc ở nước ngoài, hắn lại là một tên quỷ vương không ai dám động tới.'Chào cậu, ông chủ và cô chủ đang đợi cậu.' dì Quế kính cẩn mở cửa chào hắn.Dì Quế là giúp việc của Mộ San San vợ Lâm Phi, bao nhiêu năm như vậy, vẫn ở trong nhà họ Mộ, hầu hạ người nhà họ Mộ.Lâm Phi vâng lời dì Quế, đi thẳng vào phòng khách.'Ngồi đi.'Bố vợ Lâm Phi Mộ Hồng đang nhắm mắt tập trung nghĩ ngợi, nghe thấy tiếng bước chân, liền mở mắt, sau khi biết là Lâm Phi lập tức ngẩng đầu tỏ ý bảo Lâm Phi ngồi xuống.Lâm Phi theo lời ngồi xuống, ánh mắt vô thức lại liếc nhìn người phụ nữ xinh đẹp tuyệt trần ngồi bên cạnh bố vợ Mộ Hồng, cũng chính là vợ của hắn, chủ tịch tập toàn Mộ Thị, Mộ San San.Mộ San San mặc áo ngắn ngắn tay màu nâu nhạt, tôn lên chiếc cổ trắng nõn nà, chiếc quần đùi bó sát, rất hợp với đôi guốc da Ferragamo đen, để lộ ra đôi chân dài thẳng, thon đẹp.Gương mặt thanh thú của cô ta được điểm một lớp phấn nhẹ, nước da trắng ngần, liễu yếu đào tơ.Cô ta như cửu thiên huyền nữ hạ phàm, thanh lệ thoát tục, cao quý vô ngần, khiến cho người khác không dám khinh nhờn.Mộ San San ngẩng đầu, hướng đôi mắt long lanh nhìn Lâm Phi, lạnh nhạt nói: “Anh đến muộn mất ba mươi lăm phút.”",
            },
            { stt: 2,
              chuong: "Giọng nói lạnh lẽo",
              nd: "Giọng nói lạnh lẽo khác thường, như được truyền đến từ cung trăng vậy.'Anh là chồng em, không phải cấp dưới của em, đến muộn thì đã sao.' Lâm Phi nhịn không được trong lòng bực bội oán trách, đương nhiên, không dám thể hiện ra mặt, dù gì thì người nhà cũng vẫn đang ở đó.Dưới cái nhìn chằm chằm của Mộ San San, Lâm Phi rút ra một điếu thuốc rẻ tiền, vừa châm thuốc, đôi mắt vừa không chút cả nể dò xét từng đường nét nhấp nhô trên cơ thể tuyệt mỹ của Mộ San San.Mộ San San vẫn giữ một vẻ lạnh lùng, chẳng có chút gì che đậy trên gương mặt và dáng người ấy cả.Ngay cả trong mắt một 'thợ săn' từng trải nhiều năm như Lâm Phi cũng không tìm ra được bất kỳ khuyết điểm nhỏ nào, trước đây khi còn là lính đánh thuê ở nước ngoài, hắn đã từng gặp rất nhiều người đẹp, thậm chí đã từng thân mật hoặc nói thẳng ra là đã từng qua đêm cùng những cô gái đó, nhưng cái cảm giác đặc biệt của vợ hắn, thật sự rất hiếm gặp.Nhưng Mộ San San cũng không thèm quay đầu lại nhìn Lâm Phi dù chỉ một cái.Mặc dù đã kết hôn với Lâm Phi được hơn nửa năm, nhưng đến tận bây giờ, Mộ San San cũng không muốn thừa nhận một sự thật rằng Lâm Phi là chồng cô ta.Lúc đầu, khi bố cô ta là Mộ Hồng bắt cô ta và Lâm Phi kết hôn, Mộ San San sống chết chối từ.Đến nỗi Mộ Hồng phải dọa cắt đứt quan hệ cha con, ép Mộ San San và Lâm Phi kí vào tờ đăng kí kết hôn.Kết hôn rồi, Mộ San San cũng chưa từng thử mở lòng chấp nhận Lâm Phi.Mộ San San không phải là người nhẫn nhịn chịu đựng, cô ta tin rằng sự hấp dẫn và năng lực của cô ta có thể khiến Lâm Phi trở thành một người chồng chuẩn mực, nhưng kết hôn đã hơn nửa năm, càng tìm hiểu Lâm Phi, Mộ San San càng cảm thấy tuyệt vọng."
            },
            { stt: 3,
              chuong: "phẩm chất và hành vi",
              nd: "Mọi phẩm chất và hành vi Mộ San San ghét nhất trên đời này như: Hút thuốc, nghiện rượu, háo sắc, lười nhác,…, Lâm Phi gần như chả thiếu cái gì.Mộ Hồng dường như không chút để tâm đến sự bất hòa giữa hai người, hai chân vắt chéo, nhìn thẳng Lâm Phi nói: “Nghe dì Quế nói nửa năm nay rồi con không về nhà, ở bên ngoài bận chuyện gì sao?”“Ban ngày nằm ngủ, tối đến suy nghĩ sự đời, tiện thể bán hàng rong kiếm vài đồng qua ngày.” Lâm Phi cười đáp.Mộ Hồng và Lâm Phi sớm đã chẳng tình nghĩa cha con gì, cũng từng là tinh anh của một công ty trinh sát, hôm nay ông ta hỏi như vậy, gần như chắc chắn đã cho người điều tra rồi, Lâm Phi cũng chẳng cần gì phải nói dối.Mộ Hồng cũng chẳng nói chẳng chỉ gật đầu, hình như là khá bằng lòng với thái độ thành thực của Lâm Phi, đương nhiên điều này không có nghĩa Mộ Hồng bỏ qua sự thật rằng Lâm Phi không chịu về nhà.Ông ta sớm đã biết hết mọi chuyện, kể cả việc trong một đêm cách đây mấy ngày, Lâm Phi cứu được một mỹ nữ, sau đó đã vui vẻ với cô ta ở quán rượu.Còn Mộ San San thì mắt chữ O mồm chữ A, đôi mắt đẹp đẽ ấy không một chớp mắt nhìn chằm chằm Lâm Phi, trên khuôn dung đẹp đẽ ấy tràn đầy sự sửng sốt: “Bán hàng rong?!”.“Trời ạ, sao sấm sét không đánh chết tên khốn này đi!”Mộ San San trợn ngược mắt, nhịn không được trong lòng gào lên một câu.Đôi mắt Mộ San San lạnh ngắt như băng giá, nhìn chăm chằm Lâm Phi, cô ta rất muốn chia đôi cái đầu của Lâm Phi xem xem, bên trong đó chứa cái gì?“Dù sao thì cũng đã là người có gia đình, không nên suốt ngày chơi bời lêu lổng.” Mộ Hồng khoan thai nói: “Bố sắp phải rời khỏi thành phố Trung Hải một thời gian, San San dù gì cũng là con gái, để nó một mình gánh vác công ty quả thật là làm khó nó quá. Con là chồng nó, cũng nên san sẻ gánh nặng này với nó. Đừng có cái gì mà ra đường đi bán hàng rong nữa, đi giúp vợ con làm việc đi.”"
            },
            { stt: 4,
              chuong: "Kết thúc",
              nd: "Cảm ơn các bạn đã đọc"
            },
          ],
          vote: 5,
          gioithieu:"Thiếu niên Đại Việt, Tiên Mệnh quấn thân, đánh đổi vận mệnh từng bước trưởng thành, bình định thiên hạ phong Lạc Đế.500 năm từ u mê thức tỉnh, đi Bắc Thiên, hạ Tây Thiên, sở trường trăm họ, Thiên Hư cảnh tụ mười hai loại căn nguyên thành Thần.Hậu phi thăng, bình nội loạn, phá vực ngoại, xuyên vị diện, đạp cửu kiều trảm Thần thành Đế!Chuyện không như nghĩ, đời không như mơ, gian nan có đủ, sau nhân sinh lại gặp nhân sinh, chỉ mong một kiếp an nhàn.",
          binhLuan: [{ ten: "Admin:", chat: "hay" }],
          seen: false,
        },

      ],
      searching: null,
      indexItem: '',
      chatChit:[{myName:"admin",chatChit:"Lorem"}]
    };
  },
  methods: {
    onOpenDrawerLeft() {
      this.$refs.drawerLeft.showDrawer();
    },
    onCloseDrawerLeft() {
      this.$refs.drawerLeft.closeDrawer()
    },
    showLocData() {
      this.$navigateTo(compLocData);
    },
    showLogin() {
      this.$showModal(compLogin).then(data => {
        this.indexItem = data
      })
    },
    showLogout() {
      this.indexItem=""
    },
    showChat() {
      this.$navigateTo(compChat,{
        props: {
          tenIndex:this.indexItem,
          chatChit:this.chatChit
        }
      });
    },
    showTruyenDoc() {
      this.$navigateTo(compTruyenDoc,{
        props: {
          item: this.products
        }
      });
    },
    showTruyenFollow() {
      this.$navigateTo(compTruyenFollow,{
        props: {
          item: this.products
        }
      });
    },
    showDetail(obj) {
      this.$navigateTo(compDetail,{
        props: {
          item: obj,
          indexTen:this.indexItem
        }
      })
    },
    update(e) {
      for (let i = 0; i < this.products.length; i++) {
        if (e.name == this.products[i].name) {
          this.products[i].follow = e.follow
        }
      }
    },
    btnShare() {
      alert({
        title:"thông báo",
        message:"Wait for update",
        okButtonText:"Ok"
      })
    }
  },
  computed: {
    filterName() {
      var danhsach = this.products
      var ten = this.searching
      var loc = this.data
      if (ten!=null) {
        ten = ten.trim().toUpperCase();
        danhsach=danhsach.filter(e => {
          if(e.name.toUpperCase().indexOf(ten) != -1) {
            return e
          }
        })
      }
      else if (loc!=null) {
        if (loc.status=="Tất cả"&&loc.category=="Tất cả") {
          return danhsach
        }
        else if (loc.status=="Tất cả" && loc.category!="Tất cả") {
          danhsach=danhsach.filter((e) => {
            if (e.category.indexOf(loc.category) != -1) {
              return e
            }
          })
        }
        else if (loc.status!="Tất cả" && loc.category=="Tất cả") {
          danhsach=danhsach.filter((e) => {
            if (e.status.indexOf(loc.status) != -1) {
              return e
            }
          })
        }
        else {
          danhsach=danhsach.filter((e) => {
            if (e.category.indexOf(loc.category) != -1 && e.status.indexOf(loc.status) != -1) {
              return e
            }
          })
        }
      }
      return danhsach
    }
  }
}
</script>

<style>
.borderTitle {
  background-color: rgba(253, 144, 144, 0);
  color: white;
  font-size: 20px;
  border-radius: 50px;
}
.textTitle {
  font-size: 25px;
  text-align: center;
}
.textDN {
  text-align: center;
  font-size: 15px;
  color: black;
}
.textLine {
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
}
.iconLine {
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
  text-align: center;
}
.txtlink {
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
  text-align: left;
  font-style:italic;
  text-decoration: solid white underline !important;
}
.txtNameVue {
  font-size: 20px;
  color: #03396c;
}
.imageSrc {
  border-radius: 30px;
  background-color: whitesmoke;
  border: black;
  border-width: 1px;
}
</style>