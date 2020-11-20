import React from 'react'
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Chip from '@material-ui/core/Chip'
import Skeleton from '@material-ui/lab/Skeleton'
import Box from '@material-ui/core/Box'

const SteamGame = props => {
    const { data } = props
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const Card = () => (
        <div className={'steam-game-container'} id='card' >
            <div className="b-game-card">
                <div className="b-game-card__cover"
                    style={{ backgroundImage: `url('${data?.src}')`, borderRadius: '10px' }} />
            </div>
        </div>
    )

    return (
        <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            <Card />
            <Popper open={open} anchorEl={anchorEl} placement={'right-start'} style={{ zIndex: 99 }} transition
                modifiers={{
                    flip: {
                        enabled: true,
                    },
                    preventOverflow: {
                        enabled: true,
                        boundariesElement: 'scrollParent',
                    },
                }}>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <div style={{ display: 'flex' }}>
                            <ArrowLeftIcon style={{ fontSize: '4em', marginRight: '-0.45em' }} color='primary' />
                            <Paper style={{ padding: '2em' }} elevation={6}>
                                <div>
                                    {data ?
                                        <Typography variant='h6' style={{ marginRight: '1em' }}>
                                            {data.name}
                                        </Typography>
                                        : <Skeleton variant='text' width='200px' style={{ marginRight: '1em' }} />
                                    }
                                </div>
                                <Typography variant='body1' style={{ fontWeight: 'bold', marginTop: '0.5em' }}>
                                    {data.divisi}
                                </Typography>
                                {data && <Typography variant='body2' style={{ marginBottom: '0.5em' }}>
                                    {data.jurusan}  •  {data.angkatan}
                                </Typography>}
                                {!data && <Box style={{ display: 'flex' }}>
                                    <Skeleton variant='text' style={{ marginRight: '1em' }} width='50px' /> •
                                    <Skeleton variant='text' style={{ marginLeft: '1em' }} width='50px' />
                                </Box>}
                                <div>
                                    {data?.tags?.map(tags => (
                                        <Chip label={tags} key={tags} color='primary' style={{ margin: '0.5em 0.5em 0 0' }} />
                                    ))}
                                </div>
                            </Paper>
                        </div>
                    </Fade>
                )}
            </Popper>
        </div>
    )
}

export default SteamGame