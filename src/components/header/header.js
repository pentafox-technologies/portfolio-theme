import React from 'react';
import { HeaderWrapper } from './header.css';
import "scss/main.scss"
import profileImage from '../../images/cv-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/font-awesome';



const Header = () => {
	return (
		<HeaderWrapper>
			<header id="header">
				<div class="main-header">
					<div class="img-profile">
						<img src={profileImage} alt="" />
						<div class="name-profile t-center">
							<h5 class="uppercase">Madhuprasad</h5>
						</div>
					</div>
					<nav id="main-nav" class="main-nav clearfix t-center uppercase tabbed">
						<ul class="" style={{marginBottom:`2px`}}>
							<li><a className="active" href="/"><i><FontAwesomeIcon className="icon" icon={'user'} /></i>About me<span>who am i</span></a></li>
							<li><a className="active1" href="/resume"><i><FontAwesomeIcon className="icon" icon={'briefcase'} /></i>Resume<span>curriculam</span></a></li>
							<li><a className="active2" href="/portfolio"><i><FontAwesomeIcon className="icon" icon={'camera'} /></i>Portfolio<span>my works</span></a></li>
							<li><a className="active3" href="/blog"><i><FontAwesomeIcon className="icon" icon={'comments'} /></i>Blog<span>My toughts</span></a></li>
							<li><a className="active4" href="/contact"><i><FontAwesomeIcon className="icon" icon={'phone-alt'} /></i>Contact<span>Say hello</span></a></li>
						</ul>
					</nav>
				</div>
			</header>
		</HeaderWrapper>
	);
};

export default Header;
