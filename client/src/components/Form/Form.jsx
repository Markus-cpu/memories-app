import React, { useState } from 'react'
import useStyles from './style'
import { Typography, TextField, Button, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'

const Form = () => {
    const classes = useStyles()
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '',
        selectedFile: ''
    })

    const handleSubmit = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete='off'
                noValidate
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <Typography variant='h6'>
                    Creating a Memory
                </Typography>
                <TextField
                    name='creator'
                    variant='outlined'
                    label='Creator'
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name='title'
                    variant='outlined'
                    label='title'
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name='message'
                    variant='outlined'
                    label='message'
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name='tags'
                    variant='outlined'
                    label='tags'
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant='container'
                    color='primary'
                    size='large'
                    type='submit'
                    fullWidth
                >
                    Submit
                </Button>
            </form>
        </Paper>
    )
}

export default Form