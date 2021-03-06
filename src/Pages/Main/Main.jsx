import React, { useEffect, useState } from 'react'
import classes from './Main.module.css'

import Navbar from '../../Components/Navbar/Navbar'
import Container from '../../Components/UI/Container/Container'
import Button from '../../Components/UI/Container/Button/Button'

import flag from '../../Assets/flag.svg'
import speaker1 from '../../Assets/speaker1.jpg'
import speaker2 from '../../Assets/speaker2.jpg'
import people from '../../Assets/people.svg'
import if1 from '../../Assets/if1.jpg'
import if2 from '../../Assets/if2.jpg'
import if3 from '../../Assets/if3.jpg'
import SliderComments from '../../Components/Comment/Slider/Slider'
import Footer from '../../Components/Footer/Footer'
import Preloader from '../../Components/Preloader/Preloader'

import Aos from 'aos'
import 'aos/dist/aos.css'
import ModalForm from '../../Components/ModalForm/ModalForm'
import ThankyouModal from '../../Components/ThankyouModal/ThankyouModal'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { setIsRegistered } from '../../Redux/commonReducer'

const Main = (props) => {
    const { isRegistered, setIsRegistered, isFetching } = props

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [url, setUrl] = useState("")
    
    const history = useHistory()

    useEffect(() => {
        setUrl(window.location.href)
        Aos.init({ duration: 1000 })
    }, [])

    useEffect(() => {
        if(window.location.pathname === "/thankyou"){
            setIsRegistered(true)
        }
    }, [])

    useEffect(() => {
        if(isRegistered){
            setIsOpenModal(false)
            history.push('/thankyou')
        }
    }, [isRegistered])

    const handleModal = () => {
        setIsOpenModal(!isOpenModal)
    }

    const handleThankyou = () => {
        setIsRegistered(!isRegistered)
        history.push("/")
    }

    return(
        <div className={classes.main}>
            {isFetching && <Preloader/>}
            <Container>
                <Navbar handleModal={handleModal}/>
                {/* MODAL */}
                {isRegistered && <ThankyouModal handleThankyou={handleThankyou}/>}
                {isOpenModal && <ModalForm handleModal={handleModal} url={url}/>}
                {/* HOME */}
                <div className={classes.home}>
                    <div className={classes.homeSide} data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500">
                        <div className={classes.titleContainer}>
                            <div className={classes.title}>
                                <p>Групповой курс по подготовке к Sproochentest уровень А2<br/>
                                    <strong>с Викой Люнкес</strong>
                                </p>
                            </div>
                            <img src={flag} alt="flag" className={classes.flag}/>
                        </div>
                        <div className={classes.desktopContainer}>
                            <div className={classes.blackBlock}>
                                <h1>Как систематизировать свои знания</h1>
                                <p>и успешно пройти экзамен на гражданство</p>
                            </div>
                            <Button text="Записаться" className={classes.homeButt} action={handleModal}/>
                            <div className={classes.time}>
                                <p>13 | 11</p>
                                <p>09 : 30</p>
                            </div>
                        </div>  
                    </div>
                    <img src={speaker1} alt="speaker" className={classes.speaker} data-aos="fade-left" data-aos-duration="2500" data-aos-delay="1000"/>
                    <div className={classes.mobileContainer}>
                        <div className={classes.blackBlock}>
                            <h1>Как систематизировать свои знания</h1>
                            <p>и успешно пройти экзамен на гражданство</p>
                        </div>
                        <Button text="Записаться" className={classes.homeButt} action={handleModal}/>
                        <div className={classes.time}>
                            <p>13 | 11</p>
                            <p>09 : 30</p>
                        </div>
                    </div>  
                </div>
            </Container>
            {/* WHAT */}
            <div className={classes.what} data-aos="fade-up" data-aos-duration="1500">
                <h2>Чему вы научитесь на моем курсе:</h2>
                <ul>
                    <li>чувствовать себя уверенно для сдачи Sproochentest</li>
                    <li>описывать картинки любой сложности</li>
                    <li>вести грамотный диалог</li>
                    <li>расширите словарный запас</li>
                    <li>получите полный список вопросов по экзаменационным темам</li>
                </ul>
                <Button text="Принять участие"  className={classes.whatButt} action={handleModal}/>
            </div>
            {/* SPEAKER */}
            <Container>
                <div className={classes.speakerContainer}>
                    <div className={classes.speakerSide} data-aos="fade-up" data-aos-duration="1500">
                        <h2>Преподаватель</h2>
                        <p>Вика <br/>Люнкес</p>
                        <div className={classes.speakerBlackBlock}>
                            <ul>
                                <li>5 лет опыта в языковом обучении</li>
                                <li>10 000 часов проведенных уроков</li>
                                <li>98% студентов легко справляются с экзаменом</li>
                                <li>200+ студентов сдавших экзамен и получивших гражданство Люксембурга</li>
                            </ul>
                        </div>
                    </div>
                    <img src={speaker2} alt="speaker" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500"/>
                    <div className={classes.speakerBlackBlockMobile}>
                        <ul>
                            <li>5 лет опыта в языковом обучении</li>
                            <li>10 000 часов проведенных уроков</li>
                            <li>98% студентов легко справляются с экзаменом</li>
                            <li>200+ студентов сдавших экзамен и получивших гражданство Люксембурга</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.redLine}/>
            </Container>
            <div className={classes.why}>
                <div className={classes.whySide} data-aos="fade-up" data-aos-duration="1500">
                    <h2>Почему вам стоит посетить онлайн-курс?</h2>
                    <p>- вы познакомитесь с уникальной методологией изучения Люксембургского языка с целью получения гражданства</p>
                    <p>- Научитесь свободно говорить на разные темы и описывать экзаменационные картинки</p>
                    <p>- уже весной 2022 сможете сдать экзамен на гражданство</p>
                </div>
                <img src={people} alt="people"/>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
                <Button text="Занять место прямо сейчас" className={classes.orderBut} action={handleModal}/>
            </div>
            <Container>
                <div className={classes.dateAndTime} data-aos="fade" data-aos-duration="1500">
                    <div className={classes.date}>
                        <p>13</p>
                        <p>11</p>
                        <p>2021</p>
                    </div>
                    <div className={classes.clock}>
                        <p>09</p>
                        <span>:</span>
                        <p>30</p>
                    </div>
                </div>
                <div className={classes.if}>
                    <h2>Групповой курс уровень А2 для вас, если вы:</h2>
                    <div className={classes.ifWrapper} data-aos="fade-up" data-aos-duration="1500">
                        <div className={classes.ifBlock}>
                            <span>Давно задумываетесь о получении гражданства Люксембурга</span>
                            <div className={classes.grayBlock}/>
                            <img src={if1} alt="luxemburg"/>
                        </div>
                        <div className={classes.ifBlock + " " + classes.ifBlockLeft}>
                            <span>Работаете по контракту и вам надоело заниматься вопросами легального пребывания в стране</span>
                            <div className={classes.grayBlock + " " + classes.grayBlockLeft}/>
                            <img src={if2} alt="luxemburg"/>
                        </div>
                        <div className={classes.ifBlock}>
                            <span>Хотите обрести свой новый дом в самой благополучной стране Европы</span>
                            <div className={classes.grayBlock}/>
                            <img src={if3} alt="love"/>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1500">
                        <Button text="Забронировать место" className={classes.ifButt} action={handleModal}/>
                    </div>
                </div>
                <div className={classes.comments}>
                    <div className={classes.commentsBack}/>
                    <SliderComments/>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    isRegistered: state.common.isRegistered
})

export default connect(mapStateToProps, {
    setIsRegistered
})(Main)