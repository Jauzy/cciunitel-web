import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Layout from '../Components/Layout'

const Testing = props => {
    const [state, setState] = React.useState({
        gender: 'fm'
    });

    const handleChange = (e) => {
        console.log(e)
        setState({ ...state, [e.target.id]: e.target.value });
    };
    return (
        <Layout style={{ margin: '5em 0' }}>
        </Layout>
    )
}

export default Testing