import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Link,
    IconButton,
    Menu,
    MenuItem,
    Button,
    Avatar,
    Grid,
} from '@mui/material';
import NextLink from 'next/link';
import { Box } from '@mui/system';
import { SearchOutlined } from '@mui/icons-material';
import ButtonDropdown from './ButtonDropdown';

export const Navbar = () => {

    return (
        <AppBar
            sx={{
                backgroundColor: '#003f88',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                height: '80px',
            }}
            position="static"
        >
            <Toolbar>
                <NextLink href={'/'} passHref legacyBehavior>
                    <Link display={'flex'} alignItems={'center'}>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'white' }}>IngeniaNet</Typography>
                    </Link>
                </NextLink>
            </Toolbar>
            <Box flex={1} />
            <Box display={'flex'} width={'100%'} justifyContent={'end'} sx={{ marginRight: '15px' }}>

                <NextLink href={'#localizacion'} legacyBehavior passHref>
                    <Link sx={{ margin: '0px 10px' }}>
                        <Typography color={'white'} fontSize={21}>
                            Localizacion
                        </Typography>
                    </Link>
                </NextLink>

                <NextLink href={'#techos'} legacyBehavior passHref>
                    <Link sx={{ margin: '0px 10px' }}>
                        <Typography color={'white'} fontSize={21}>
                            Techos
                        </Typography>
                    </Link>
                </NextLink>

                <NextLink href={'#plantillas'} legacyBehavior passHref>
                    <Link sx={{ margin: '0px 15px' }}>
                        <Typography color={'white'} fontSize={21}>
                            Plantillas
                        </Typography>
                    </Link>
                </NextLink>
            </Box>
            <Box flex={1} />

            <Avatar
                sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#fdc500', // Color de fondo similar a Google
                    fontSize: '1.5rem', // Tamaño de la letra
                    fontWeight: 'bold', // Estilo de la letra
                    marginRight: '1rem', // Margen izquierdo
                }}
            >
                G
            </Avatar>
        </AppBar>
    );
}

