import { AppBar, Badge, Button, IconButton, styled, Toolbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContainerComponent from "../ContainerComponent/ContainerComponent";
import RoomMenuComponent from "../RoomMenuComponent/RoomMenuComponent";
import CuisineMenuComponent from "../CuisineMenuComponent/CuisineMenuComponent";
import LeftDrawer from "../LeftDrawer/LeftDrawer";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useEffect, useState } from "react";
import axios from "axios";
import { getSocketInstance } from "../../socket";

function MainHeader() {
    const socket = getSocketInstance();
    const [refreshNotifications, setRefreshNotifications] = useState(false);
    useEffect(() => {
        socket.on("notification", () => {
            console.log("new notification");
            setRefreshNotifications((prev) => !prev); // Toggle giá trị để trigger re-render
        });

        return () => {
            // Đảm bảo remove event listener khi component bị unmount
            socket.off("notification");
        };
    }, [socket]);
    const [unread, setUnread] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        async function getUnreadNotifications() {
            const unreadNotifcations = await axios.get("api/userNotification/unread");
            setUnread(unreadNotifcations.data.length);
        }
        getUnreadNotifications();
    }, [refreshNotifications]);
    const getColor = (curr) => {
        if (window.location.pathname === curr) {
            return "var(--primary-color)";
        }
    };
    const StyledAppBar = styled(AppBar)({
        backgroundColor: "var(--white)",
    });

    const Logo = styled("img")({
        height: "70px",
        marginRight: "40px",
    });

    const StyledButton = styled(Button)({
        color: "#000",
        textTransform: "unset",
        backgroundColor: "transparent",
        fontSize: "1.5rem",
        fontWeight: "500",
        "&:hover": {
            backgroundColor: "transparent",
            color: "var(--primary-color)",
        },
        "&:hover .MuiPaper-root": {
            display: "block",
            transition: "all 2s",
        },
        ".MuiMenuItem-root:hover": {
            color: "var(--primary-color)",
            margin: "auto",
            height: "100%",
        },
    });
    const RightWrapper = styled("div")({
        display: "flex",
        alignItems: "center",
    });

    return (
        <StyledAppBar position="static">
            <ContainerComponent>
                <Toolbar
                    sx={{
                        paddingLeft: { xs: "10px", md: "10px", lg: "24px" },
                        minHeight: { md: "60px", md2: "67px", lg: "90px" },
                        justifyContent: { xs: "space-between", sm: "space-between", md: "unset" },
                        paddingRight: { xs: "0", sm: "14px", md: "14px", md2: "14px" },
                    }}
                >
                    <Link to={"/"}>
                            <Logo src="/images/logo-meritel.jpg" />
                    </Link>
                    <Link to={"/"}>
                        <StyledButton
                            style={{ color: getColor("/") }}
                            sx={{
                                display: { xs: "none", sm: "none", md: "block" },
                                padding: { md: "7px 8px", lg: "7px 15px" },
                            }}
                            disableRipple
                        >
                            Trang chủ
                        </StyledButton>
                    </Link>
                    <Link to={"/about"}>
                        <StyledButton
                            style={{ color: getColor("/about") }}
                            sx={{
                                display: { xs: "none", sm: "none", md: "block" },
                                padding: { md: "7px 8px", lg: "7px 15px" },
                            }}
                            disableRipple
                        >
                            Về chúng tôi
                        </StyledButton>
                    </Link>
                    <StyledButton
                        sx={{
                            display: { xs: "none", sm: "none", md: "flex" },
                            padding: { md: "7px 8px", lg: "7px 15px" },
                        }}
                        disableRipple
                        endIcon={<KeyboardArrowDownIcon />}
                        style={{ color: getColor("/room") }}
                    >
                        <Link style={{ fontSize: "1.5rem", color: "inherit" }} to={"/room"}>
                            Phòng
                        </Link>
                        <RoomMenuComponent />
                    </StyledButton>
                    {/* <StyledButton
                        sx={{
                            display: { xs: "none", sm: "none", md: "flex" },
                            padding: { md: "7px 8px", lg: "7px 15px" },
                        }}
                        disableRipple
                        endIcon={<KeyboardArrowDownIcon />}
                        style={{ color: getColor("/cuisine") }}
                    >
                        <Link style={{ fontSize: "1.5rem", color: "inherit" }} to={"/cuisine"}>
                            Ẩm thực
                        </Link>
                        <CuisineMenuComponent />
                    </StyledButton> */}

                    <Link to={"/contact"}>
                        <StyledButton
                            style={{ color: getColor("/contact") }}
                            sx={{
                                display: { xs: "none", sm: "none", md: "block" },
                                padding: { md: "7px 8px", lg: "7px 15px" },
                            }}
                            disableRipple
                        >
                            Liên hệ
                        </StyledButton>
                    </Link>
                    {/* <Link to={"/gallery"}>
                        <StyledButton
                            style={{ color: getColor("/gallery") }}
                            sx={{
                                display: { xs: "none", sm: "none", md: "block" },
                                padding: { md: "7px 8px", lg: "7px 15px" },
                            }}
                            disableRipple
                        >
                            Thư viện ảnh
                        </StyledButton>
                    </Link> */}
                    <RightWrapper
                        sx={{
                            visibility: { sm: "visible", md: "hidden" },
                        }}
                    >
                        <IconButton
                            onClick={() => {
                                navigate("/notification");
                            }}
                            size="large"
                            color="#000"
                        >
                            <Badge badgeContent={unread} color="error">
                                <NotificationsIcon
                                    sx={{
                                        fill: "black",
                                        width: "26px",
                                        height: "24px",
                                    }}
                                />
                            </Badge>
                        </IconButton>
                        <Link to={"/order"}>
                            <ShoppingCartIcon
                                sx={{
                                    fill: "black",
                                    width: "26px",
                                    height: "24px",
                                    margin: "6px",
                                }}
                            />
                        </Link>
                        <Link to={"/booking"}>
                            <MeetingRoomIcon
                                sx={{
                                    fill: "black",
                                    width: "26px",
                                    height: "24px",
                                    margin: "6px",
                                }}
                            />
                        </Link>

                        <LeftDrawer />
                    </RightWrapper>
                </Toolbar>
            </ContainerComponent>
        </StyledAppBar>
    );
}

export default MainHeader;
