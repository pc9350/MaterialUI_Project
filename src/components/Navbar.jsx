import { AppBar, Toolbar, styled, Typography, Avatar, Box, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { CameraRoll, Notifications, Pets } from '@mui/icons-material';
import { InputBase } from '@mui/material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { deepOrange, deepPurple } from '@mui/material/colors';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "45%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        display: "flex!important",
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        display: "none",
    }
}));

const Navbar = () => {
    const[open,setOpen] = useState(false)
    return (
        <AppBar position='fixed'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: "block" } }}>ScrollHub</Typography>
                <CameraRoll sx={{ display: { xs: 'block', sm: "none" } }} />
                <Search><InputBase placeholder='Search' sx={{color: "black"}} /></Search>
                <Icons sx={{ display: { xs: 'none', sm: "block" } }}>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30, bgcolor: deepOrange[500] }} onClick={(e) => setOpen(true)}>P</Avatar>
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30, bgcolor: deepOrange[500] }}>P</Avatar>
                    <Typography variant='span'>Pranav</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar