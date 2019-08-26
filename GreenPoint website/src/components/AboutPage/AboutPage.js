import React, {Component} from 'react';
import {
    about0,
    aboutNew, aboutNew2
} from "./TextBlocks";
import '../Common/common.css'

class AboutPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            infoTitle: 'קצת יותר עלינו',
            infoNum: 0

        };
        window.scrollTo(0, 0);

    }

    changInfo = (e) => {
        this.setState({
            infoTitle: (e.target.value).substr(1, e.target.value.length - 1),
            infoNum: e.target.value.charAt(0)
        });
        console.log(this.state.infoNum)
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', height: '100%', paddingTop: '70'}}>
                <div className={'page_top_root'} style={
                    {
                        height: '30%',
                        backgroundImage: 'url(/images/GreenLogo.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',

                        backgroundSize: 'cover',

                    }
                }>
                    {/* <img className={'page_top_img'} src={'/images/AboutPic.jpg'} alt={''}/>*/}
                    <div className={'page_top_img2'}
                    >
                        <div style={{
                            width: '100%',
                            height: '20%',
                            alignment: 'center',
                            marginTop: '10%',
                            textAlign: 'center',
                        }}>
                            <p className={"title2"} style={{
                                width: '100%',
                                color: '#383838'
                            }}> <span style={{
                                width: '100%',
                                color: '#383838'
                            }}> ברוכים הבאים לבית החכם של </span><span style={{
                                width: '100%',
                                color: '#003f00'
                            }}>Green Point </span></p>
                            <p style={{
                                width: '100%',
                                fontSize: '1.3em',
                                color: '#6f6f6f',
                                marginTop: '0'
                            }}>{about0}</p>

                        </div>
                    </div>
                </div>
                <div className={"picClass"}>
                    <div className={"blackImage"}>
                        <span className={"titleAbout"} id={"titleFirst"}>אודות</span>


                        <div style={{
                            width: '90%',
                            height: '100%',
                            display: 'flex',
                            direction: 'rtl',
                            marginBottom: '10%'
                        }}>
                            <div style={{flex: 1, textAlign: 'rtl'}}>
                                {aboutNew2.split('\n').map((item, index) => (index === 0 ?
                                    <div key={index} style={{
                                        display: 'flex',
                                        width: '100%',
                                        direction: 'rtl',
                                        alignSelf: 'flex-end',

                                    }}>
                                        <p className={"aboutInfo"}
                                           style={{
                                               flex: 1,
                                               width: '100%',
                                               alignSelf: 'flex-start',
                                               direction: 'rtl',
                                               fontFamily: 'Assistant',fontWeight:'300'

                                           }}>{item}</p>

                                    </div>
                                    : <p className={"aboutInfo"}
                                         style={{width: '100%', direction: 'rtl', fontFamily: 'Assistant',fontWeight:'300'}}
                                         key={index}>{item}</p>))}
                            </div>

                        </div>

                    </div>

                    <img className={'cover largePic'} src={'/images/NewAbout.jpg'} alt={''} style={
                        {

                            opacity: '0.7',
                            minHeight: 0,
                            boxShadow: ' 0 0 5px 0 rgba(0,0,0,0.5)',
                        }

                    }
                    />
                </div>
                <div style={
                    {
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        marginTop: 0,
                        height: '100%',
                        width: '100%',
                        justifyContent: 'flex-start',
                        paddingRight: '7%',
                        paddingLeft: '5%',
                        marginBottom: '0%'

                    }
                }>
                    <div className={"aboutSecondInfo"}>
                        <p className={"titleAbout"}>{this.state.infoTitle}</p>

                        {aboutNew[this.state.infoNum].split('\n').map((item, index) =>

                            <p className={((index === 5 && this.state.infoNum === 1) || (index === 0 && this.state.infoNum === 2)) ? "aboutExplainSec" : "aboutExplain"}
                               style={{width: '100%'}} key={index}>{item}</p>)}
                    </div>
                    <div id={"lineContainer"} style={{
                        textAlign: 'right',
                        width: '50%',
                        height: '100%',
                        position: 'relative',
                        display: 'flex',
                        direction: 'rtl',
                        flexDirection: 'column'
                        ,
                    }}>

                        <div id={"line"}/>


                        <form action={" "} id={"buttonContainer"} onChange={this.changInfo} style={{}}>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'right',
                                marginTop: 70,
                                marginBottom: 20
                            }}>
                                <input type={"radio"} value={"0קצת יותר עלינו"} className={"radioOption"}
                                       defaultChecked={"true"} name={"info"}/>
                                <span className={"checkmark"}
                                      style={{marginRight: 18, color: '#6e6e6e'}}>קצת יותר עלינו</span>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'right',
                                marginTop: 20,
                                marginBottom: 20
                            }}>
                                <input type={"radio"} name={"info"} value={"1על המערכת"} className={"radioOption"}/>
                                <span className={"checkmark"}
                                      style={{marginRight: 18, color: '#6e6e6e'}}>על המערכת</span>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'right',
                                marginTop: 20,
                                marginBottom: 70
                            }}>
                                <input type={"radio"} name={"info"} value={"2למי אנחנו מתאימים?"}
                                       className={"radioOption"}/>
                                <span className="checkmark"
                                      style={{marginRight: 18, color: '#6e6e6e'}}>למי אנחנו מתאימים?</span>

                            </div>
                        </form>


                    </div>

                </div>

                {/* <div style={{
                    width: '100%',
                    display: 'flex',
                    paddingLeft: '20%',
                    paddingRight: '20%',
                    marginTop: 10
                }}>*/}
                {/*   <div style={{flex: 1, textAlign: 'justify'}}>
                        <SmallScreen>
                            {about2.split('\n').map((item, index) => (index === 0 ?
                                <div key={index} style={{display: 'flex', width: '100%'}}>
                                    <p
                                        style={{flex: 1, alignSelf: 'flex-end'}}>{item}</p>
                                    <ImgWithLoader src={'/images/intro.png'} alt={''} style={{
                                        marginLeft: 10,
                                        width: '40%',
                                        objectFit: 'scale-down',
                                        alignSelf: 'flex-start'
                                    }}/>
                                </div>
                                : <p
                                    style={{width: '100%'}}
                                    key={index}>{item}</p>))}
                        </SmallScreen>
                        <LargeScreen>
                            {about2.split('\n').map((item, index) => <p
                                style={{width: '100%'}} key={index}>{item}</p>)}
                        </LargeScreen>
                        <a href={'/docs/introduction-he.pdf'}>
                            <MatButton backgroundColor={'default'}
                                       style={{width: '30%', minWidth: 200, fontSize: '1em'}}>
                                להורדת פרוספקט
                            </MatButton>
                        </a>
                    </div>
                    <LargeScreen>
                        <ImgWithLoader src={'/images/intro.png'} alt={''} style={{
                            marginLeft: 10,
                            width: '40%',
                            objectFit: 'scale-down',
                            marginTop: 100,
                            alignSelf: 'flex-start'
                        }}/>
                    </LargeScreen>
                </div>



                <InfoPanel marginTop={0} even={true} text={aboutSupport}
                           title={'שירות ותמיכה'}
                           image={'support2.png'}/>
                <InfoPanel even={false} text={aboutCustomers} marginTop={0}
                           title={'מי הם הלקוחות הפוטנציאלים שלנו?'} image={'people2.png'}/>*/}
            </div>
        );
    }
}

export default AboutPage;