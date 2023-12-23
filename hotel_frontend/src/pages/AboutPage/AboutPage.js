import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";

function AboutPage() {
    return (
        <div style={{ margin: "20px 0" }}>
            <ContainerComponent>
                <Box sx={{ padding: "0 30px" }}>
                    <Typography sx={{ fontWeight: "600", marginBottom: "10px" }} fontSize="1.6rem" variant="h2">
                        VỀ CHÚNG TÔI
                    </Typography>
                    <Typography sx={{ marginBottom: "20px", marginTop: "20px" }} fontSize="1.6rem">
                    Meritel Hanoi có hồ bơi ngoài trời, trung tâm thể dục, sân hiên và quầy bar ở Hà Nội. Các điểm tham quan nổi tiếng gần đó có Hồ Hoàn Kiếm, Hoàng thành Huế và Văn Miếu - Quốc Tử Giám. Chỗ nghỉ cung cấp lễ tân 24/24, dịch vụ đưa đón sân bay, dịch vụ tiền sảnh và Wi-Fi miễn phí ở toàn bộ chỗ nghỉ.
                        <img src="/images/banner.jpg" alt="" width="100%" style={{ marginTop: "15px" }} />
                    </Typography>
                    <Typography sx={{ marginBottom: "20px", marginTop: "20px" }} fontSize="1.6rem">
                    Các phòng được trang bị điều hòa, TV có truyền hình cáp, tủ lạnh, ấm đun nước, vòi sen, đồ vệ sinh cá nhân miễn phí và bàn làm việc. Phòng khách có phòng tắm riêng, máy sấy tóc và ga trải giường.
                    </Typography>
                    <Typography sx={{ marginBottom: "15px", marginTop: "20px" }} fontSize="1.6rem">
                    Chỗ nghỉ có phục vụ bữa sáng mỗi sáng, gồm các lựa chọn thực đơn buffet, kiểu Mỹ và kiểu Á. Tại chỗ nghỉ, khách sẽ tìm thấy nhà hàng phục vụ ẩm thực Anh, Việt và địa phương. Bên cạnh đó, họ có thể yêu cầu món chay, không chứa sữa và món thuần chay.{" "}
                    </Typography>
                    <div> 
                        <img src="/images/banner2.jpg" alt="" width="44.5%" style={{ marginTop: "15px", marginRight: "60px" }} />

                        <img src="/images/banner1.jpg" alt="" width="50%" style={{ marginTop: "15px" }} />
                    </div>
                    <Typography sx={{ marginBottom: "15px", marginTop: "20px" }} fontSize="1.6rem">
                        Cùng với đội ngũ nhân viên được tuyển chọn và đào tạo chuyên nghiệp, chu đáo và thân thiện,{" "}
                        <strong>Meritel  Hotel</strong> hứa hẹn sẽ mang đến cho Quý khách sự thoải mái và hài lòng nhất.
                    </Typography>
                    <Typography sx={{ marginBottom: "15px", marginTop: "20px" }} fontSize="1.6rem">
                        Đến với <strong>Meritel  Hotel</strong> là đến với sư tinh tế nhất về chất lượng, dịch vụ và sự thân
                        thiện như chính ngôi nhà của bạn.
                    </Typography>
                    <Typography
                        sx={{ fontWeight: "600", marginBottom: "10px",marginTop: "20px", fontStyle: "italic" }}
                        fontSize="1.6rem"
                        variant="h2"
                    >
                        HÃY ĐẾN MERITEL HOTEL ĐỂ TRẢI NGHIỆM SỰ KHÁC BIỆT!
                    </Typography>
                </Box>
            </ContainerComponent>
        </div>
    );
}

export default AboutPage;
