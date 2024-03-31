import { AccountBox, Article, EmojiPeople, Group, Home, ModeNight, Settings, Storefront} from '@mui/icons-material'
import { Box, ListItemButton, ListItem, List, ListItemIcon, ListItemText, Switch  } from '@mui/material'
import React from 'react'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Sidebar = ({mode,setMode}) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: "block" } }}>
            <Box position="fixed">

            <List>
                <ListItem disablePadding>
                    <ListItemButton component = "a" href="#home">
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component = "a" href="#pages">
                        <ListItemIcon>
                            <Article/>
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component = "a" href="#groups">
                        <ListItemIcon>
                            <Group/>
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component = "a" href="#marketplace">
                        <ListItemIcon>
                            <Storefront/>
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component = "a" href="#friends">
                        <ListItemIcon>
                            <EmojiPeople/>
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component = "a" href="#settings">
                        <ListItemIcon>
                            <Settings/>
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component = "a" href="#profile">
                        <ListItemIcon>
                            <AccountBox/>
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component = "a" href="#darkmode">
                        <ListItemIcon>
                            <ModeNight/>
                        </ListItemIcon>
                        <Switch onChange={e=>setMode(mode == "light" ? "dark" : "light")} />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Box>
    )
}

export default Sidebar