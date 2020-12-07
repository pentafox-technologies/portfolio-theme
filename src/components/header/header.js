import React from 'react';
import { HeaderWrapper } from './header.css';
import "scss/main.scss"
import profileImage from '../../images/cv-1.jpg';




const Header = () => {
  return (
    <HeaderWrapper>
	
	<header id="header">

					<div class="main-header">
					<div class="img-profile">
						<img src={profileImage} alt=""/>

						<div class="name-profile t-center">
							<h5 class="uppercase">Carlose smith</h5>
						</div>
					</div>			
						<nav id="main-nav" class="main-nav clearfix t-center uppercase tabbed">
						<ul class="clearfix">
							<li class="active"><a href="#about" class="active"><i class="icon-user"></i>About me<span>ho am i</span></a></li>
							<li><a href="#resume"><i class="icon-briefcase"></i>Resume<span>curriculum vita</span></a></li>
							<li><a href="#portfolio"><i class="icon-camera"></i>Portfolio<span>my works</span></a></li>
							<li><a href="#blog"><i class="icon-chat"></i>Blog<span>My toughts</span></a></li>
							<li><a href="#contact"><i class="icon-phone"></i>Contact<span>Say hello</span></a></li>
						</ul>
						</nav>		
				</div>		
		</header>
    </HeaderWrapper>
  );
};

export default Header;
