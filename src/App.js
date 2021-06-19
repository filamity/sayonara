import AOS from 'aos';
import { useEffect, useState } from 'react';
import './App.css'
import Quotes from './Quotes';
import './scroll.css'

function App() {
	useEffect(() => {
		AOS.init({
		  duration : 2000
		})
	}, [])
	const [scrollPos, setScrollPos] = useState(0)

	const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPos(position);
    }

	useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    }, [])

	if (scrollPos > 300) {
		if (document.getElementById("thankyou")) {
			document.getElementById("thankyou").style.marginTop = "0px"
		}
	} else {
		if (document.getElementById("thankyou")) {
			document.getElementById("thankyou").style.marginTop = "30%"
		}
	}

	if (scrollPos > 300) {
		if (document.getElementById("from")) {
			document.getElementById("from").style.opacity = 1
		}
	} else {
		if (document.getElementById("from")) {
			document.getElementById("from").style.opacity = 0
		}
	}

	if (scrollPos > 700) {
		if (document.getElementById("allofus")) {
			document.getElementById("allofus").style.opacity = 1
		}
	} else {
		if (document.getElementById("allofus")) {
			document.getElementById("allofus").style.opacity = 0
		}
	}

	if (scrollPos > 800) {
		if (document.getElementById("list")) {
			document.getElementById("list").style.opacity = 0.4
		}
	} else {
		if (document.getElementById("list")) {
			document.getElementById("list").style.opacity = 0
		}
	}

	if (scrollPos > 800) {
		if (document.getElementById("quotes")) {
			document.getElementById("quotes").style.opacity = 1
		}
	} else {
		if (document.getElementById("quotes")) {
			document.getElementById("quotes").style.opacity = 0
		}
	}

	return (
		<div className="all" style={{backgroundColor: "#000080"}}>

			<div className="ty" style={{top: "50%", textAlign: "center"}}>
				<h1 id="thankyou" style={{fontSize: "80px"}}>Thank You</h1>
				<div id="from" style={{marginTop: "-50px", fontSize: "30px"}}>from</div>
				<h1 id="allofus" style={{marginTop: "10px", fontSize: "45px"}}>All of Us</h1>
			</div>

			<div id="list" style={{opacity: "0"}}>
				<p className="listitem" id="leftdir" style={{marginTop: "5px"}}>Iggy Matthew Alex Sebastian Jan Morgan Krish Ademide Nicholas Zed Daniel Freddy Noble Q Ben Gareth Iggy Matthew Alex Sebastian Jan Morgan Krish Ademide Nicholas Zed Daniel Freddy Noble Q Ben Gareth</p>
				<p className="listitem" id="rightdir" style={{marginTop: "-70px"}}>Jake Hugo Freddie George Leon Alex Patrick George Shiraz Chike Sam Theo Aarav George Jake Hugo Freddie George Leon Alex Patrick George Shiraz Chike Sam Theo Aarav George</p>
				<p className="listitem" id="leftdir" style={{marginTop: "-70px"}}>Ben Tom Victor Sam Andre Max Dani Jake Caddy Henry Jonty Caddy Victor Sam Tom Andre Ben Tom Victor Sam Andre Max Dani Jake Caddy Henry Jonty Caddy Victor Sam Tom Andre</p>
				<p className="listitem" id="rightdir" style={{marginTop: "-70px"}}>Zane Tobi Algie Caspar Valentine Jonathan Harry George John Misha Tomiwa Sam Aaron Gus Zane Tobi Algie Caspar Valentine Jonathan Harry George John Misha Tomiwa Sam Aaron Gus</p>
				<p className="listitem" id="leftdir" style={{marginTop: "-70px"}}>Charlie Josh Oscar Awni Louis Charlie Freddie James Rory Freddie Harry Lucas Henry Freddie Charlie Josh Oscar Awni Louis Charlie Freddie James Rory Freddie Harry Lucas Henry Freddie</p>
			</div>

			<div id="quotes" style={{opacity: "0"}}>
				<Quotes />
			</div>

			<div style={{display: scrollPos > 100 ? "none" : "block"}}>
				<svg class="arrows">
					<path class="a1" d="M0 0 L30 32 L60 0"></path>
					<path class="a2" d="M0 20 L30 52 L60 20"></path>
					<path class="a3" d="M0 40 L30 72 L60 40"></path>
				</svg>
			</div>
		</div>
	)
}

export default App