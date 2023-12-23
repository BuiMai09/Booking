import {
    Avatar,
    Button,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
    Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";
import { deepOrange } from "@mui/material/colors";
import RestoreIcon from "@mui/icons-material/Restore";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { HotelState } from "../../components/MyContext/MyContext";

function ContactPage() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState();
    const firstName = useSelector((state) => state.auth.user.firstName);
    const lastName = useSelector((state) => state.auth.user.lastName);
    const emailAuth = useSelector((state) => state.auth.user.email);
    useEffect(() => {
        if (firstName && lastName && emailAuth) {
            setFullName(lastName + " " + firstName);
            setEmail(emailAuth);
        }
    }, [firstName, lastName, emailAuth]);
    const [message, setMessage] = useState();
    const Contact = styled(ListItemText)({
        ".MuiListItemText-primary": {
            fontSize: "1.6rem",
            color: "#fff",
        },
        ".MuiListItemText-primary:hover": {
            color: deepOrange[500],
        },
    });
    const StyledListItemText = styled(ListItemText)({
        ".MuiListItemText-primary": {
            fontSize: "1.6rem",
            color: "#fff",
        },
    });
    const { setAlert } = HotelState();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post("/api/contact/create", {
            fullName,
            email,
            message,
        });
        if (response.status === 200) {
            setAlert({
                open: true,
                message: "Gửi thông tin liên hệ thành công!",
                type: "success",
                origin: { vertical: "bottom", horizontal: "center" },
            });
            setMessage("");
        }
    };

    return (
        <ContainerComponent>
            <Grid container>
                <Grid item lg={1} xs={0}></Grid>
                <Grid item lg={10} xs={12}>
                    <Box
                        sx={{
                            padding: { lg: "70px 0px 40px 100px", xs: "10px" },
                            margin: "20px 0px 50px",
                            boxShadow: "10px 0px 40px 0px #b4b4b4",
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item lg={6}>
                                <Typography sx={{ fontSize: "1.6rem", marginBottom: "12px" }}>
                                    Thông tin liên hệ
                                </Typography>
                                <Typography sx={{ fontSize: "1.6rem", marginBottom: "20px" }}>
                                    Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi. Chúng tôi sẽ
                                    trả lời bạn sau khi nhận được.
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        value={fullName}
                                        label="Họ và tên"
                                        sx={{ width: "100%", marginBottom: "20px" }}
                                        variant="standard"
                                        onChange={(e) => {
                                            setFullName(e.target.value);
                                        }}
                                        required
                                    />
                                    <TextField
                                        value={email}
                                        label="Email"
                                        sx={{ width: "100%", marginBottom: "20px" }}
                                        variant="standard"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        required
                                    />
                                    <TextField
                                        label="Nội dung"
                                        sx={{ width: "100%" }}
                                        multiline
                                        variant="standard"
                                        rows={1}
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                        }}
                                        required
                                    />
                                    <Button type="submit" sx={{ width: "100%", marginTop: "20px" }} variant="contained">
                                        gửi thông tin liên hệ
                                    </Button>
                                </form>
                            </Grid>
                            <Grid item lg={6}>
                                <Box
                                    sx={{
                                        height: "100%",
                                        backgroundImage: "url('/images/bg_footer_1.png')",
                                        backgroundSize: "cover",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {" "}
                                    <div>
                                        <Typography
                                            sx={{
                                                color: "#fff",
                                                fontSize: "2.2rem",
                                                fontWeight: "600",
                                                margin: "8px 0 0 12px",
                                            }}
                                        >
                                            Thông tin
                                        </Typography>
                                        <List
                                            sx={{
                                                bgcolor: "transparent",
                                            }}
                                        >
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                                        <LocationOnIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <StyledListItemText primary="Số 151-153 Hàng Bông, Quận Hoàn Kiếm, Hà Nội, Việt Nam" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                                        <CallIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <a href="tel:+8482847974">
                                                    <Contact primary="0123.456.789"></Contact>
                                                </a>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                                        <EmailIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <StyledListItemText primary="support@meritel_hotel.vn" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                                        <RestoreIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <StyledListItemText primary="Mở cửa 24/24" />
                                            </ListItem>
                                        </List>
                                    </div>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item lg={1} xs={0}></Grid>
                <Grid item lg={12} xs={12} sx={{ margin: "20px 0" }}>
                    <Box sx={{ width: "100%" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0841778387426!2d105.84288837417778!3d21.0293175806201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab966bc265db%3A0x8b722efeb8f65fbe!2zMTUxIFAuIEjDoG5nIELDtG5nLCBIw6BuZyBCw7RuZywgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1702490725472!5m2!1svi!2s"
                            width="100%"
                            height="450"
                            title="map"
                            style={{ border: "0" }}
                            allowfullscreen
                        ></iframe>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0841778387426!2d105.84288837417778!3d21.0293175806201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab966bc265db%3A0x8b722efeb8f65fbe!2zMTUxIFAuIEjDoG5nIELDtG5nLCBIw6BuZyBCw7RuZywgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1702490725472!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </Box>
                </Grid>
            </Grid>
        </ContainerComponent>
    );
}
export default ContactPage;
