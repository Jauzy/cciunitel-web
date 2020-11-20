import React from 'react'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const Footer = (props) => {
    return (
        <Paper className={"footer-bs " + props.className}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={5} lg={3} className="footer-brand">
                    <Typography variant='h2'><img src='https://cciunitel.com/front-website/img/logo.png' alt='cci-logo-nav' height='40em' />CCI</Typography>
                    <Typography variant='body2'>
                        Unit Kegiatan Mahasiswa di Telkom University yang berfokus pada bidang ICT (Information, Communication and Technology).                    </Typography>
                    <Typography variant='body2' style={{ marginTop: '1em' }}>© {new Date().getFullYear()} Central Computer Improvement, All rights reserved. Made by M Abdurrahman Al Jauzy.</Typography>
                </Grid>
                <Grid item xs={12} md={2} lg={4} className="footer-nav">
                    <Typography variant='h4'>Menu —</Typography>
                    <ul className="pages">
                        <li><Link to={'#divisions'}>Division</Link></li>
                        <li><Link to={'#products'}>Products</Link></li>
                        <li><Link to={'#gallery'}>Gallery</Link></li>
                        <li><Link to={'#news'}>News</Link></li>
                        <li><Link to={'#organization'}>Organization</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={2} lg={2} className="footer-nav">
                    <Typography variant='h4'>Follow Us</Typography>
                    <ul className='pages'>
                        <li><Link to={'#'}>Facebook</Link></li>
                        <li><Link to={'#'}>Twitter</Link></li>
                        <li><Link to={'#'}>Instagram</Link></li>
                        <li><Link to={'#'}>Line</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3} lg={3} className="footer-ns">
                    <Typography variant='h4'>Join Us</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Footer