import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './productNEW.css';
import {withRouter} from "react-router-dom";
import '../Common/common.css';
import './products.css';
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";
import ScreenButton from "../Common/ScreenButton";

class ProductsPage extends Component {

    scrollCorrectly = (hash, animated) => {
        const behavior = animated ? 'smooth' : undefined;
        if (!hash || hash.length === 0) {
            try {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior
                });
            } catch {
                window.scroll(0, 0);
            }

        } else {
            if (hash.length > 0) {
                let top = document.getElementById(hash.substring(1));
                if (top) {
                    top = top.offsetTop;

                    try {
                        window.scroll({
                            top: top - 40,
                            left: 0,
                            behavior
                        });
                    } catch {
                        window.scroll(0, top - 40);
                    }

                }
            }
        }
    };

    componentDidMount() {
        this.scrollCorrectly(this.props.location.hash, false);
    }

    componentDidUpdate(prevProps, prevState, _) {
        if (prevProps.shrinked === this.props.shrinked)
            this.scrollCorrectly(this.props.location.hash, true);

    }


    render() {
        return (
            <div style={{
                width: '100%',
                backgroundImage: 'url(/images/BackNew.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                zIndex: 1


            }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    paddingTop: '100px',
                    flexDirection: 'column',
                    direction: 'rtl',
                    justifyContent: 'space-between'
                }}>
                    <img alt={''} src={'images/NEWLOGOGREEN2.png'} style={{

                        alignSelf: 'center',
                        height: '100px',
                        opacity: '0.5'


                    }}/>
                    <p className={"titlePicFirst"}>
                        אנחנו שמחים להציג בפניכם את סדרת המוצרים של גרין פוינט. </p>
                    <div className={"textPicFirst"}>
                        <div>
                            סדרה איכותית בעלת עיצוב ייחודי למתן מראה חזק, חדשני ויוקרתי.

                        </div>

                    </div>

                        <img className={'productStart contain '} style={{alignSelf:'center',height:'100%'}} src={'/images/Pic.png'} alt={''}/>


                    <div className={"PicContainerRow"} style={{
                        marginTop: '30px',
                        backgroundColor: 'rgba(255,255,255,0.6)',


                    }}
                    >
                        <img className={'ItemsSwitch'} src={'/images/NEWSwitch.png'} alt={''}/>
                        <div style={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'center',
                            paddingBottom: 20
                        }}>
                            <p className={"titlePic"}>מפסקי המגע</p>
                            <div className={"textPic"}>קו עיצוב יוקרתי של מפסקי מגע מזכוכית קריסטלית
                                מחוסמת למתן מראה חדשני ויוקרתי.
                            </div>

                            <div className={"textPic"}>
                                למפסקי המגע מזכוכית אפשר להצמיד בצורה מאוד פשוטה סמלים בהתאם למטרת
                                המפסק.
                            </div>
                            <div className={"textPic"}>
                                מפסקי המגע מגיעים בגדלים שונים ממפסק אחד עד קבוצה של שישה מפסקים.
                            </div>

                        </div>


                    </div>

                    <div className={"PicContainerRowR"} style={{}}
                    >
                        <img className={'Items'} src={'/images/NEWSensor.png'} alt={''}/>
                        <div style={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'center',
                            paddingBottom: 20

                        }}>
                            <p className={"titlePic"}>החיישן החכם</p>
                            <div className={"textPic"}>החיישן החכם מזהה תנועה, מודד את כמות האור ואת
                                הטמפרטורה בחדר.
                            </div>
                            <div className={"textPic"}>
                                לאחר שהחיישן אוסף את המידע, הוא שולח אותו למפסקים החכמים שמקבלים החלטות
                                בצורה עצמאית
                            </div>
                            <div className={"textPic"}>
                                בהתאם למצב הנוכחי למצב הרצוי שהוגדר על ידי המשתמש.
                            </div>

                        </div>
                        <a href={"/docs/sensor_manual.pdf"}  style={{alignSelf:'center'}}>

                            <ScreenButton text={' מדריך הפעלה לחיישן'}  />
                        </a>

                    </div>
                    <div className={"PicContainerCol"} style={{
                        backgroundColor: 'rgba(255,255,255,0.5)',

                    }}
                    >
                        <a href={"/docs/smart_switch.pdf"}  style={{alignSelf:'center'}}>
                            <ScreenButton text={'המדריך להפעלת המפסק'}  />
                        </a>
                        <div className={"switches"} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <img className={'ItemsSmall'} src={'/images/NEWShutter.png'} alt={''}/>
                            <img className={'ItemsSmall'} src={'/images/NEWSense.png'} alt={''}/>
                            <img className={'ItemsSmall'} src={'/images/NEWPower.png'} alt={''}/>
                            <img className={'ItemsSmall'} src={'/images/NEWLight.png'} alt={''}/>
                        </div>
                        <div style={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'center',
                            paddingBottom: 20

                        }}>
                            <p className={"titlePic"}>המפסקים החכמים</p>
                            <div className={"textPic"}>מפסקים עצמאיים ואוטומטיים לשליטה ובקרה על
                                הפעלות החשמל כגון תאורה, תריסים,דוד, מזגן ועוד.
                                כל מפסק בעל יכולת למידה וקבלת החלטות באופן אוטומטי אשר הופכת אותו
                                לאוטונומי
                                לחלוטין ללא תלות בבקר מרכזי או רשת תקשורת.
                                ניתן לשנות את מצב המפסק בין אוטומטי וידני בכל עת.

                            </div>


                        </div>


                    </div>
                    <div className={"PicContainerRow"} style={{}}
                    >
                        <img className={'ItemsI'} src={'/images/NEWIrIghc.png'} alt={''}/>
                        <div style={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'center'
                        }}>
                            <p className={"titlePic"}>מגשרי האינפרה אדום והאינטרנט</p>
                            <div className={"textPic"}>המגשרים מחברים בין מוצרי החשמל בבית הנשלטים על ידי שלטים למערכת
                                וכן בין יחידות מערכת הבית החכם לאינטרנט.
                            </div>
                            <div className={"textPic"}>
                                בכך, מאפשרים המגשרים שליטה מלאה על הבית באמצעות מוצרי IGH או שליטה
                                מרחוק באמצעות האפליקציה.
                            </div>

                        </div>
                        <div style={{ display:'flex',flexDirection:'column',alignSelf:'center'}}>
                        <a href={"/docs/ir_manual.pdf"} style={{alignSelf:'center'}}>

                            <ScreenButton text={'מדריך הפעלה למגשר האינפרה אדום'}  />

                        </a>
                        <a href={"/docs/ighc_manual.pdf"} style={{alignSelf:'center'}}>
                            <ScreenButton text={'מדריך הפעלה למגשר האינטרנט'}  />

                        </a>
                        </div>

                    </div>
                    <div className={"PicContainerCol contain"} style={{
                        backgroundColor: 'rgba(255,255,255,0.5)',


                    }}
                    >
                        <img className={'ItemsSmall2 contain'} src={'/images/NEWKeypad.png'} alt={''}/>
                        <div style={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'center'
                        }}>
                            <p className={"titlePic"}>לוח המקשים</p>
                            <p className={"textPic"}>לוח מקשים אלחוטי המשמש להפעלת מכשירי החשמל בבית
                                בנוחות וקלות מכל מקום, ללא תלות ברשת WIFI.
                                בעזרת לוח המקשים ניתן להפעיל פעולה ספציפית או מספר פעולות בלחיצה אחת בלבד.
                            </p>

                        </div>


                    </div>
                    {/*
                <div className={'page_top_root'}>
                    <img className={'page_top_img'} src={'/images/product_banner1_2.jpg'} alt={''}/>
                    <div className={'page_top_bg'}>
                        <span className={'page_top_text'}>המוצרים שלנו</span>
                    </div>
                </div>
                <div>*/}

                    {/*
                    <Carousel showArrows={true} showThumbs={false} >
                        <div className={"imageHolderPic"}>
                            <img
                                 src={'/images/sensorblack.png'}/>
                        </div>
                        <div className={"imageHolderPic"}>
                            <img
                                 src={'/images/sensorblack.png'}/>
                        </div>
                        <div className={"imageHolderPic"}>
                            <img src={'/images/sensorblack.png'}/>
                        </div>
                    </Carousel>*/}

                    {/*
                </div>
*/}
                    {/*

                     <OurProducts />
                <LoadControl/>
                <SwitchComponent id={'light'} even={true} dark={false} src={'lightblack.png'}
                                 title={'מפסק תאורה'}
                                 preText={dimmerPre}
                                 listItems={dimmerItems}
                />
                <SwitchComponent id={'shutter'} even={true} dark={false} src={'shutterblack.png'}
                                 title={'מפסק תריס/וילון'}
                                 preText={shutterPre}
                                 listItems={shutterItems}
                />
                <SwitchComponent id={'power'} even={true} dark={false} src={'powerblack.png'}
                                 title={'מפסק כוח'}
                                 preText={powerPre}
                                 listItems={powerItems}
                />
                <SwitchComponent id={'sense'} even={true} dark={2} src={'senseblack.png'}
                                 title={'מפסק סנס'}
                                 preText={sensePre}
                                 listItems={senseItems}
                />
                <SwitchComponent id={'sensor'} even={true} dark={2} src={'sensorblack.png'}
                                 title={'חיישן סביבתי'}
                                 height={300}
                                 preText={sensorPre}
                >

                    <a href={'/docs/sensor_manual.pdf'}>
                        <MatButton backgroundColor={'default'}
                                   style={{
                                       alignSelf: 'center',
                                       marginTop: 30
                                   }}>{downloadSensor}</MatButton>
                    </a>
                </SwitchComponent>
                <SwitchComponent id={'irbridge'} even={true}
                                 dark={2}
                                 src={'irblack.png'}
                                 title={'מגשר אינפרה אדום'}
                                 preText={irPre}
                                 height={300}
                                 listItems={irItems}
                >
                    <a href={'/docs/ir_manual.pdf'}>
                        <MatButton backgroundColor={'default'}
                                   style={{
                                       alignSelf: 'center',
                                       marginTop: 30
                                   }}>{downloadIR}</MatButton>
                    </a>
                </SwitchComponent>
                <SwitchComponent id={'internetgateway'} even={true}
                                 dark={2}
                                 src={'ighcblack.png'}
                                 title={'מגשר האינטרנט'}
                                 preText={ighcStrings[0]}
                                 height={300}
                                 listItems={ighcItems}
                >
                    <a href={'/docs/ighc_manual.pdf'}>
                        <MatButton backgroundColor={'default'}
                                   style={{
                                       alignSelf: 'center',
                                       marginTop: 30
                                   }}>{downloadIGHC}</MatButton>
                    </a>
                </SwitchComponent>
                <SwitchComponent
                    id={'keypad'}
                    even={true}
                    dark={false}
                    src={'keypadblack.png'}
                    title={'לוח המקשים'}
                    preText={keypadPre}
                    listItems={keypadItems}
                >
                </SwitchComponent>
                <SwitchComponent
                    id={'glass'}
                    even={true}
                    dark={false}
                    src={'glassblack.png'}
                    title={'מפסקי מגע מזכוכית קריסטלית'}
                >
                    {glassText.split('\n').map((item, index) => <p className={'product_paragraph'} key={index}>{item}</p>)}
                    <ul>
                        {glassItems.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </SwitchComponent>
*/}


                </div>


            </div>
        );
    }
}

export default withRouter(ProductsPage);