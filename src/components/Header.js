import reactLogo from '../asset/images/reactjs-icon.png';

function Header() {
    return (
        <div className="header">
            <div className="logo-wrapper">
                <img src={reactLogo} alt="React Logo"/>
                <div className="title">ReactFacts</div>
            </div>
            <div className="pageHeaderTitle">React Course - Project 1</div>
        </div>
    );
}

export default Header;
