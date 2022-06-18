import{
    MediaDiv,
    Header,
    TitleLogoDiv,
    TitleBig,
    TitleSmall,
    SubHeaderDiv,
    Main,
    SlogunSection,
    SlogunBig,
    SlogunSmall,
    PostSection,
    PostTitleDiv,
    PostTitle,
    PostListDiv,
    EachPostLi,
    PostLink,
    PostRepl,
    PagingSection,
    PafenumberDiv,
    Footer,
    FooterBig,
    FooterSmall,
    LoadingDiv,
    LoadingImg,
} from './styledComponent';
import {ThemeProvider} from 'styled-components';
import{darkTheme,GlobalStyles,lightTheme} from './ styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{
    faArrowsRotate,
    faPenToSquare,
    faLocationPin,
    faArrowLeft,
    faArrowRight,
}from '@fortawesome/free-solid-svg-icons';
import { faReact} from '@fortawesome/free-brands-svg-icons';

function App(){
    const darkMode=true;
    const loading=true;
    const isPost=true;

    return (
        <>
        <ThemeProvider theme={darkMode ? darkTheme: lightTheme}>
            <GlobalStyles/>
            <MediaDiv>
                <Header/>
                <Main>
                    <Slogun/>
                    <ShowPostList/>

                </Main>
                <Footer>
                    <FontAwesomeIcon icon={faReact} />
                    <FooterBig> for react study </FooterBig>
                    <FooterSmall> 2022. by chans</FooterSmall>


                </Footer>
            </MediaDiv>
        </ThemeProvider>
        </>
    );
}
