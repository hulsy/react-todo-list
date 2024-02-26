import { IconButton } from '@mui/material';
import { Create } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import TextField  from '@mui/material/TextField';
import { useState } from 'react';


export default function TodoForm({ addTodo }){
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText("")
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="New Todo" 
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="create todo" edge="end" type="submit">
                                <Create />
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    )
}