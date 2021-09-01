import { Button, IconButton } from "@material-ui/core"
import { makeStyles, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import classes from './ModalForm.module.css'
import CloseIcon from '@material-ui/icons/Close';
import { Controller, useForm } from 'react-hook-form';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { connect } from "react-redux";
import { register } from "../../Redux/commonReducer";

const useStyles = makeStyles((theme) => ({
    root:{
        '& label.Mui-focused': {
            color: '#fc0d21'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fc0d21' 
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 8,
        },
        '& .MuiFormHelperText-contained': {
            marginLeft: 5
        }
    }
}));

const ModalForm = (props) => {
    const { handleModal, url, register } = props

    const material = useStyles();
    const { handleSubmit, control, reset, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        data.url = url
        register(data)
        reset({
            name: "",
            phone: "",
            email: ""
        })
    }

    useEffect(() => {
        Aos.init({ duration: 1000 });
    })

    return(
        <div className={classes.main} data-aos="fade" data-aos-duration="300">
            <div className={classes.window} data-aos="zoom-in" data-aos-duration="200">
                <div className={classes.header}>
                    <IconButton onClick={handleModal}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <form onSubmit={handleSubmit(data => onSubmit(data))}>
                    <div className={classes.field}>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: {
                                    value: true,
                                    message: "Обязательное поле!"
                                }
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    classes={material}
                                    label="Имя"
                                    variant="outlined"
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                    </div>
                    <div className={classes.field}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: {
                                    value: true,
                                    message: "Обязательное поле!"
                                },
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
                                    message: "Неправильный email!"
                                }
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField 
                                    error={!!error} 
                                    helperText={error ? error.message : null}
                                    classes={material} 
                                    label="Email"
                                    variant="outlined"
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                    </div>
                    <div className={classes.field}>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: {
                                    value: true,
                                    message: "Обязательное поле!"
                                }
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField 
                                    error={!!error} 
                                    helperText={error ? error.message : null}
                                    classes={material} 
                                    label="Номер телефона"
                                    variant="outlined"
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                    </div>
                    <Button type="submit" className={classes.submit}>Отправить</Button>
                </form>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching
})

export default connect(mapStateToProps, {
    register
})(ModalForm)