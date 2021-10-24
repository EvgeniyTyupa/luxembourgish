import { Button, IconButton } from "@material-ui/core"
import { makeStyles, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import classes from './ModalForm.module.css'
import CloseIcon from '@material-ui/icons/Close';
import { Controller, useForm } from 'react-hook-form';
import MuiPhoneNumber from 'material-ui-phone-number';

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

    const converter = {
        'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
    }

    const transliteration = (word) => {
        let answer = ''
        for(let i = 0; i < word.length; ++i) {
            if(converter[word[i]] == undefined){
                answer += word[i]
            }else {
                answer += converter[word[i]]
            }
        }
        return answer
    }

    const onSubmit = (data) => {
        data.url = url
        let first_name = data.first_name
        let last_name = data.last_name

        data.first_name = transliteration(first_name)
        data.last_name = transliteration(last_name)
        data.email = data.email.toLowerCase()

        // console.log(data)
        register(data)

        reset({
            first_name: "",
            last_name: "",
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
                            name="first_name"
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
                            name="last_name"
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
                                    label="Фамилия"
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
                                required: "Обязательное поле!",
                                pattern: {
                                    value:  /^.{16,20}$/,
                                    message: "Неправильный номер телефона!"
                                }
                            }} 
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <MuiPhoneNumber 
                                    defaultCountry={'lu'} 
                                    error={!!error} 
                                    helperText={error ? error.message : null}
                                    classes={material} 
                                    label="Номер телефона"
                                    variant="outlined"
                                    onChange={onChange}
                                    value={value}
                                />
                                // <TextField 
                                //     error={!!error} 
                                //     helperText={error ? error.message : null}
                                //     classes={material} 
                                //     label="Номер телефона"
                                //     variant="outlined"
                                //     onChange={onChange}
                                //     value={value}
                                // />
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