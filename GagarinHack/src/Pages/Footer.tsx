import '../Pages_css/Footer.css'
import {Link} from 'react-router-dom'

const element = document.getElementsByClassName('ChatWindow')

const Chat = () => {
    console.log('Chat')
}


function Footer(){
    return (<div className='TabBar'>
        <div className='ChatWindow' >

        </div>
        <button className="Chat" id="chat" onClick={Chat} type='button'>
            <img src="src/Icons/logoChat.png" alt="chat" />
        </button>
        <div className="frame">
                        <span className='left'>
                        <Link to="/News" className='TabBar-Item1'>
                            <span className="Home">
                            <svg width="67.000000" height="49.000000" viewBox="0 0 67 49" fill="none" xmlns="http://www.w3.org/2000/svg" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip40_4106">
			<rect id="fi-rr-home" width="16.000000" height="16.000000" transform="translate(29.000000 11.000000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="TabBar-item" width="67.000000" height="49.000000" fill="#FFFFFF" fill-opacity="0"/>
	<rect id="fi-rr-home" width="16.000000" height="16.000000" transform="translate(29.000000 11.000000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip40_4106)">
		<path id="Vector" d="M44.41 17.04L39.35 11.98C38.73 11.36 37.88 11.01 37 11.01C36.11 11.01 35.26 11.36 34.64 11.98L29.58 17.04C29.39 17.23 29.25 17.45 29.15 17.69C29.05 17.93 28.99 18.19 29 18.45L29 25C29 25.53 29.21 26.04 29.58 26.41C29.96 26.79 30.46 27 31 27L43 27C43.53 27 44.03 26.79 44.41 26.41C44.78 26.04 45 25.53 45 25L45 18.45C45 18.19 44.94 17.93 44.84 17.69C44.74 17.45 44.6 17.23 44.41 17.04ZM39 25.67L35 25.67L35 23.04C35 22.51 35.21 22 35.58 21.63C35.96 21.25 36.46 21.04 37 21.04C37.53 21.04 38.03 21.25 38.41 21.63C38.78 22 39 22.51 39 23.04L39 25.67ZM43.66 25C43.66 25.18 43.59 25.35 43.47 25.47C43.34 25.6 43.17 25.67 43 25.67L40.33 25.67L40.33 23.04C40.33 22.16 39.98 21.31 39.35 20.69C38.73 20.06 37.88 19.71 37 19.71C36.11 19.71 35.26 20.06 34.64 20.69C34.01 21.31 33.66 22.16 33.66 23.04L33.66 25.67L31 25.67C30.82 25.67 30.65 25.6 30.52 25.47C30.4 25.35 30.33 25.18 30.33 25L30.33 18.45C30.33 18.28 30.4 18.11 30.52 17.98L35.58 12.93C35.96 12.55 36.46 12.34 37 12.34C37.53 12.34 38.03 12.55 38.41 12.93L43.47 17.99C43.59 18.11 43.66 18.28 43.66 18.45L43.66 25Z" fill="#717171" fill-opacity="1.000000" fill-rule="nonzero"/>
	</g>
	<path id="✏️ Label" d="M29.24 36.03C28.89 36.69 28.71 37.6 28.71 38.77Q28.71 40.4 29.37 41.25C29.81 41.81 30.4 42.1 31.15 42.1C31.63 42.1 32.06 42 32.42 41.8C32.79 41.6 33.08 41.3 33.28 40.91C33.49 40.51 33.59 40.01 33.59 39.41C33.59 38.7 33.42 38.12 33.06 37.68C32.71 37.23 32.19 37 31.49 37C31.2 37 30.94 37.05 30.71 37.15C30.48 37.24 30.28 37.35 30.12 37.49C29.96 37.62 29.83 37.75 29.73 37.87L29.68 37.87C29.71 37.12 29.85 36.57 30.1 36.21Q30.28 35.96 30.53 35.79Q30.79 35.61 31.14 35.54C31.34 35.49 31.59 35.44 31.88 35.39C32.16 35.34 32.45 35.29 32.74 35.24Q33.18 35.16 33.54 35.12L33.38 34.35C33.02 34.4 32.64 34.47 32.22 34.55C31.81 34.62 31.39 34.7 30.96 34.8C30.17 34.96 29.6 35.37 29.24 36.03ZM18.96 35.89Q19.51 35.54 20.29 35.54C20.6 35.54 20.9 35.58 21.17 35.66C21.44 35.74 21.68 35.83 21.9 35.94L22.27 35.18C21.71 34.9 21.05 34.76 20.3 34.76Q19.19 34.76 18.42 35.22Q18.08 35.43 17.81 35.7Q17.48 36.05 17.26 36.51Q16.87 37.33 16.87 38.42Q16.87 39.53 17.23 40.36Q17.47 40.91 17.87 41.29Q18.07 41.49 18.33 41.65C18.81 41.95 19.42 42.1 20.14 42.1Q20.74 42.1 21.16 42.02C21.44 41.98 21.72 41.91 21.99 41.8L21.99 41.03C21.72 41.11 21.44 41.17 21.16 41.23C20.88 41.28 20.59 41.3 20.28 41.3Q19.32 41.3 18.74 40.84Q18.57 40.7 18.43 40.53Q17.82 39.75 17.82 38.43Q17.82 37.09 18.47 36.32Q18.69 36.06 18.96 35.89ZM27.2 41.33Q27.85 40.6 27.85 39.3Q27.85 38.42 27.53 37.8Q27.3 37.36 26.95 37.07Q26.82 36.95 26.66 36.86C26.29 36.64 25.86 36.54 25.37 36.54Q24.53 36.54 23.94 36.93Q23.73 37.07 23.55 37.26Q23.55 37.26 23.54 37.27Q22.88 37.99 22.88 39.3Q22.88 40.2 23.2 40.82C23.42 41.24 23.71 41.55 24.08 41.77C24.45 41.99 24.87 42.1 25.35 42.1Q26.17 42.1 26.76 41.72Q26.98 41.57 27.17 41.37Q27.18 41.35 27.2 41.33ZM34.74 36.64L34.74 42L36.98 42Q38.07 42 38.57 41.55C38.89 41.25 39.06 40.85 39.06 40.35Q39.06 39.8 38.79 39.45Q38.69 39.32 38.56 39.22C38.22 38.96 37.71 38.84 37.02 38.84L35.63 38.84L35.63 36.64L34.74 36.64ZM39.94 36.64L39.94 42L40.83 42L40.83 36.64L39.94 36.64ZM44.24 37.38L45.99 37.38L45.99 36.64L41.64 36.64L41.64 37.38L43.37 37.38L43.37 42L44.24 42L44.24 37.38ZM47.62 40.27C47.63 40.11 47.63 39.98 47.63 39.91L47.63 36.64L46.8 36.64L46.8 42L47.9 42L50.75 37.52C50.74 37.6 50.73 37.73 50.73 37.9C50.72 38.07 50.71 38.24 50.71 38.42C50.71 38.59 50.71 38.73 50.71 38.84L50.71 42L51.52 42L51.52 36.64L50.44 36.64L47.58 41.13C47.58 41.03 47.59 40.9 47.6 40.75C47.61 40.59 47.62 40.43 47.62 40.27ZM52.31 42L53.32 42L54.71 39.87L56 39.87L56 42L56.89 42L56.89 36.64L54.48 36.64C53.91 36.64 53.45 36.77 53.1 37.04Q52.95 37.16 52.84 37.32Q52.58 37.68 52.58 38.22C52.58 38.53 52.64 38.79 52.77 39Q52.91 39.25 53.12 39.41Q53.17 39.45 53.23 39.49C53.43 39.61 53.63 39.69 53.83 39.74L52.31 42ZM24.17 40.81Q23.8 40.25 23.8 39.3Q23.8 38.35 24.16 37.82C24.41 37.46 24.81 37.28 25.36 37.28C25.9 37.28 26.3 37.46 26.55 37.82Q26.93 38.35 26.93 39.3Q26.93 40.25 26.55 40.81C26.3 41.18 25.91 41.37 25.36 41.37Q24.77 41.37 24.41 41.08Q24.27 40.96 24.17 40.81ZM53.78 38.91C53.55 38.76 53.43 38.53 53.43 38.23Q53.43 38 53.53 37.82Q53.59 37.7 53.7 37.61C53.88 37.45 54.17 37.37 54.57 37.37L56 37.37L56 39.14L54.75 39.14Q54.13 39.14 53.78 38.91ZM32.26 40.95C32 41.23 31.65 41.37 31.21 41.37C30.89 41.37 30.63 41.29 30.42 41.15Q30.33 41.09 30.25 41.02Q30.06 40.83 29.93 40.57C29.81 40.33 29.73 40.05 29.68 39.75C29.64 39.44 29.61 39.12 29.61 38.79C29.68 38.68 29.79 38.54 29.95 38.38Q30.2 38.13 30.55 37.93C30.8 37.8 31.06 37.73 31.36 37.73Q31.86 37.73 32.16 37.98Q32.28 38.08 32.36 38.21C32.56 38.53 32.66 38.96 32.66 39.5Q32.66 40.53 32.26 40.95ZM37.82 41.09C37.58 41.22 37.27 41.28 36.9 41.28L35.63 41.28L35.63 39.57L36.91 39.57C37.32 39.57 37.64 39.62 37.86 39.74C38.07 39.86 38.18 40.08 38.18 40.41C38.18 40.73 38.06 40.96 37.82 41.09Z" fill="#717171" fill-opacity="1.000000" fill-rule="evenodd"/>
                            </svg>
                            </span>
                        </Link>
                        <Link to="/Faculties" className='TabBar-Item2'>
                            <span className="Group">
                                <svg width="56.000000" height="40.000000" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <desc>
                                            Created with Pixso.
                                    </desc>
                                    <defs>
                                        <clipPath id="clip40_4115">
                                            <rect id="Frame 39976" width="16.000000" height="16.000000" transform="translate(20.000000 4.000000)" fill="white" fill-opacity="0"/>
                                        </clipPath>
                                    </defs>
                                    <rect id="Frame 39976" width="16.000000" height="16.000000" transform="translate(20.000000 4.000000)" fill="#717171" fill-opacity="0"/>
                                    <g clip-path="url(#clip40_4115)">
                                        <path id="Vector" d="M24.14 7.05C22.07 7.47 21.03 9.78 22.11 11.58C22.29 11.89 22.7 12.32 22.97 12.51C23.13 12.61 23.15 12.63 23.09 12.65C22.33 12.93 21.78 13.26 21.25 13.76C20.71 14.28 20.32 14.87 20.11 15.54C19.88 16.22 20 16.75 20.44 17.07C20.87 17.38 22.36 17.73 22.63 17.59C22.72 17.54 22.84 17.35 22.84 17.26C22.84 17.14 22.73 16.97 22.62 16.92C22.56 16.89 22.43 16.86 22.32 16.84C21.86 16.78 21.15 16.59 20.97 16.47C20.92 16.44 20.86 16.37 20.82 16.32C20.77 16.24 20.77 16.22 20.82 15.99C21.16 14.6 22.47 13.48 24.04 13.25C24.35 13.2 24.49 13.13 24.59 12.97C24.68 12.82 24.68 12.58 24.59 12.43C24.51 12.31 24.29 12.19 24.13 12.19C23.99 12.19 23.59 11.99 23.33 11.79C22.97 11.52 22.72 11.15 22.56 10.66C22.47 10.34 22.46 9.8 22.54 9.47C22.88 8.21 24.16 7.51 25.4 7.9C25.74 8.01 26.04 8.2 26.35 8.5C26.61 8.75 26.74 8.79 26.94 8.7C27.08 8.63 27.13 8.53 27.13 8.34C27.13 7.99 26.36 7.38 25.62 7.14C25.16 6.99 24.6 6.96 24.14 7.05Z" fill="#717171" fill-opacity="1.000000" fill-rule="nonzero"/>
                                        <path id="Vector" d="M22.11 11.58C22.29 11.89 22.7 12.32 22.97 12.51C23.13 12.61 23.15 12.63 23.09 12.65C22.33 12.93 21.78 13.26 21.25 13.76C20.71 14.28 20.32 14.87 20.11 15.54C19.88 16.22 20 16.75 20.44 17.07C20.87 17.38 22.36 17.73 22.63 17.59C22.72 17.54 22.84 17.35 22.84 17.26C22.84 17.14 22.73 16.97 22.62 16.92C22.56 16.89 22.43 16.86 22.32 16.84C21.86 16.78 21.15 16.59 20.97 16.47C20.92 16.44 20.86 16.37 20.82 16.32C20.77 16.24 20.77 16.22 20.82 15.99C21.16 14.6 22.47 13.48 24.04 13.25C24.35 13.2 24.49 13.13 24.59 12.97C24.68 12.82 24.68 12.58 24.59 12.43C24.51 12.31 24.29 12.19 24.13 12.19C23.99 12.19 23.59 11.99 23.33 11.79C22.97 11.52 22.72 11.15 22.56 10.66C22.47 10.34 22.46 9.8 22.54 9.47C22.88 8.21 24.16 7.51 25.4 7.9C25.74 8.01 26.04 8.2 26.35 8.5C26.61 8.75 26.74 8.79 26.94 8.7C27.08 8.63 27.13 8.53 27.13 8.34C27.13 7.99 26.36 7.38 25.62 7.14C25.16 6.99 24.6 6.96 24.14 7.05C22.07 7.47 21.03 9.78 22.11 11.58Z" stroke="#717171" stroke-opacity="1.000000" stroke-width="0.400000"/>
                                        <path id="Vector" d="M30.64 7.06C30.07 7.18 29.53 7.48 29.12 7.89C28.84 8.18 28.77 8.32 28.82 8.51C28.86 8.68 29.01 8.78 29.21 8.78C29.32 8.78 29.37 8.75 29.61 8.53C29.93 8.22 30.19 8.06 30.54 7.95C31.58 7.59 32.75 8.09 33.23 9.08C33.4 9.41 33.46 9.67 33.46 10.07C33.46 10.57 33.34 10.96 33.05 11.37C32.78 11.76 32.22 12.15 31.82 12.22C31.71 12.24 31.58 12.28 31.52 12.31C31.21 12.48 31.22 13.04 31.54 13.19C31.6 13.22 31.79 13.27 31.97 13.3C33.25 13.52 34.3 14.25 34.85 15.31C34.93 15.48 35.04 15.75 35.09 15.93C35.18 16.22 35.18 16.24 35.12 16.34C35.1 16.4 35.04 16.47 34.99 16.5C34.76 16.65 34.13 16.83 33.63 16.89C33.38 16.92 33.32 16.94 33.24 17.03C33.07 17.2 33.08 17.51 33.28 17.64C33.46 17.76 34.02 17.7 34.75 17.47C35.4 17.27 35.68 17.07 35.87 16.66C36.01 16.36 36.03 16.1 35.94 15.73C35.76 15.06 35.36 14.36 34.84 13.84C34.29 13.29 33.7 12.94 32.88 12.65C32.84 12.64 32.89 12.59 33.01 12.51C33.29 12.32 33.7 11.89 33.88 11.58C34.18 11.07 34.34 10.39 34.3 9.82C34.15 7.96 32.44 6.68 30.64 7.06Z" fill="#717171" fill-opacity="1.000000" fill-rule="nonzero"/>
                                        <path id="Vector" d="M29.12 7.89C28.84 8.18 28.77 8.32 28.82 8.51C28.86 8.68 29.01 8.78 29.21 8.78C29.32 8.78 29.37 8.75 29.61 8.53C29.93 8.22 30.19 8.06 30.54 7.95C31.58 7.59 32.75 8.09 33.23 9.08C33.4 9.41 33.46 9.67 33.46 10.07C33.46 10.57 33.34 10.96 33.05 11.37C32.78 11.76 32.22 12.15 31.82 12.22C31.71 12.24 31.58 12.28 31.52 12.31C31.21 12.48 31.22 13.04 31.54 13.19C31.6 13.22 31.79 13.27 31.97 13.3C33.25 13.52 34.3 14.25 34.85 15.31C34.93 15.48 35.04 15.75 35.09 15.93C35.18 16.22 35.18 16.24 35.12 16.34C35.1 16.4 35.04 16.47 34.99 16.5C34.76 16.65 34.13 16.83 33.63 16.89C33.38 16.92 33.32 16.94 33.24 17.03C33.07 17.2 33.08 17.51 33.28 17.64C33.46 17.76 34.02 17.7 34.75 17.47C35.4 17.27 35.68 17.07 35.87 16.66C36.01 16.36 36.03 16.1 35.94 15.73C35.76 15.06 35.36 14.36 34.84 13.84C34.29 13.29 33.7 12.94 32.88 12.65C32.84 12.64 32.89 12.59 33.01 12.51C33.29 12.32 33.7 11.89 33.88 11.58C34.18 11.07 34.34 10.39 34.3 9.82C34.15 7.96 32.44 6.68 30.64 7.06C30.07 7.18 29.53 7.48 29.12 7.89Z" stroke="#717171" stroke-opacity="1.000000" stroke-width="0.400000"/>
                                        <path id="Vector" d="M27.56 9.04C27.21 9.1 26.99 9.18 26.66 9.35C26.27 9.56 25.96 9.81 25.71 10.13C24.87 11.2 24.82 12.64 25.59 13.77C25.74 13.98 26.16 14.4 26.35 14.52C26.42 14.56 26.48 14.61 26.48 14.62C26.48 14.64 26.42 14.67 26.34 14.69C26.08 14.77 25.33 15.17 25.04 15.4C24.25 15.99 23.68 16.78 23.44 17.65C23.22 18.4 23.43 18.91 24.06 19.21C24.9 19.61 26.08 19.78 28.03 19.78C30.07 19.78 31.27 19.6 32.09 19.17C32.38 19.03 32.57 18.82 32.67 18.55C32.73 18.39 32.74 18.31 32.73 18.1C32.68 17.54 32.38 16.77 31.99 16.26C31.5 15.6 30.67 15 29.86 14.71C29.76 14.67 29.68 14.64 29.68 14.63C29.68 14.62 29.78 14.53 29.9 14.44C30.54 13.97 30.98 13.21 31.09 12.38C31.17 11.73 31.02 11.05 30.67 10.45C30.49 10.14 29.95 9.61 29.64 9.43C29 9.06 28.25 8.91 27.56 9.04ZM28.5 9.83C29.64 10.05 30.44 11.14 30.29 12.3C30.18 13.18 29.59 13.89 28.73 14.17C28.51 14.24 28.39 14.26 28.1 14.26C27.66 14.26 27.4 14.2 27.03 14C26.52 13.74 26.12 13.27 25.95 12.73C25.86 12.48 25.85 12.39 25.85 12.03C25.85 11.68 25.86 11.58 25.94 11.34C26.24 10.43 27.09 9.81 28.05 9.78C28.15 9.78 28.35 9.8 28.5 9.83ZM28.97 15.28C30.22 15.54 31.27 16.33 31.76 17.39C31.9 17.7 32.02 18.15 31.99 18.25C31.96 18.37 31.87 18.45 31.64 18.55C31.01 18.84 29.78 18.99 28.08 18.99C26.32 18.99 25.15 18.84 24.45 18.53C24.13 18.39 24.1 18.29 24.22 17.86C24.36 17.31 24.74 16.7 25.17 16.31C26.18 15.38 27.58 15 28.97 15.28Z" fill="#717171" fill-opacity="1.000000" fill-rule="nonzero"/>
                                        <path id="Vector" d="M26.66 9.35C26.27 9.56 25.96 9.81 25.71 10.13C24.87 11.2 24.82 12.64 25.59 13.77C25.74 13.98 26.16 14.4 26.35 14.52C26.42 14.56 26.48 14.61 26.48 14.62C26.48 14.64 26.42 14.67 26.34 14.69C26.08 14.77 25.33 15.17 25.04 15.4C24.25 15.99 23.68 16.78 23.44 17.65C23.22 18.4 23.43 18.91 24.06 19.21C24.9 19.61 26.08 19.78 28.03 19.78C30.07 19.78 31.27 19.6 32.09 19.17C32.38 19.03 32.57 18.82 32.67 18.55C32.73 18.39 32.74 18.31 32.73 18.1C32.68 17.54 32.38 16.77 31.99 16.26C31.5 15.6 30.67 15 29.86 14.71C29.76 14.67 29.68 14.64 29.68 14.63C29.68 14.62 29.78 14.53 29.9 14.44C30.54 13.97 30.98 13.21 31.09 12.38C31.17 11.73 31.02 11.05 30.67 10.45C30.49 10.14 29.95 9.61 29.64 9.43C29 9.06 28.25 8.91 27.56 9.04C27.21 9.1 26.99 9.18 26.66 9.35ZM30.29 12.3C30.18 13.18 29.59 13.89 28.73 14.17C28.51 14.24 28.39 14.26 28.1 14.26C27.66 14.26 27.4 14.2 27.03 14C26.52 13.74 26.12 13.27 25.95 12.73C25.86 12.48 25.85 12.39 25.85 12.03C25.85 11.68 25.86 11.58 25.94 11.34C26.24 10.43 27.09 9.81 28.05 9.78C28.15 9.78 28.35 9.8 28.5 9.83C29.64 10.05 30.44 11.14 30.29 12.3ZM31.76 17.39C31.9 17.7 32.02 18.15 31.99 18.25C31.96 18.37 31.87 18.45 31.64 18.55C31.01 18.84 29.78 18.99 28.08 18.99C26.32 18.99 25.15 18.84 24.45 18.53C24.13 18.39 24.1 18.29 24.22 17.86C24.36 17.31 24.74 16.7 25.17 16.31C26.18 15.38 27.58 15 28.97 15.28C30.22 15.54 31.27 16.33 31.76 17.39Z" stroke="#717171" stroke-opacity="1.000000" stroke-width="0.400000"/>
                                    </g>
                                    <path id="✏️ Label" d="M4.59 29.64L4.59 28.76L3.69 28.76L3.69 29.64C2.93 29.65 2.32 29.78 1.87 30.03C1.43 30.27 1.11 30.59 0.92 30.99Q0.88 31.08 0.84 31.16Q0.64 31.69 0.64 32.29Q0.64 32.76 0.77 33.23Q0.79 33.29 0.82 33.36Q0.96 33.75 1.26 34.09C1.48 34.35 1.79 34.57 2.19 34.73Q2.79 34.97 3.69 34.99L3.69 36.1L4.59 36.1L4.59 34.99C5.18 34.98 5.67 34.89 6.06 34.74C6.46 34.58 6.77 34.37 7 34.11C7.24 33.85 7.4 33.57 7.5 33.25Q7.63 32.83 7.64 32.4Q7.64 32.35 7.64 32.29Q7.64 31.56 7.36 30.97C7.18 30.57 6.86 30.26 6.41 30.02C5.97 29.78 5.36 29.65 4.59 29.64ZM2.42 30.66C2.74 30.49 3.16 30.41 3.69 30.39L3.69 34.25C2.95 34.23 2.4 34.04 2.06 33.69Q1.96 33.59 1.88 33.47Q1.55 32.99 1.55 32.28Q1.55 31.73 1.74 31.31Q1.78 31.24 1.82 31.18Q2.02 30.86 2.42 30.66ZM6.24 33.68C5.91 34.04 5.36 34.23 4.59 34.25L4.59 30.39Q5.4 30.41 5.86 30.65C6.18 30.81 6.4 31.02 6.53 31.3C6.67 31.58 6.73 31.9 6.73 32.28Q6.73 32.97 6.42 33.45Q6.34 33.57 6.24 33.68ZM42.27 30.84C41.94 30.64 41.55 30.54 41.08 30.54Q40.48 30.54 40 30.78Q39.92 30.83 39.84 30.88C39.48 31.1 39.21 31.42 39.01 31.84C38.81 32.26 38.71 32.77 38.71 33.36C38.71 33.95 38.82 34.45 39.04 34.86C39.26 35.27 39.56 35.58 39.95 35.79C40.34 35.99 40.79 36.1 41.29 36.1C41.66 36.1 41.98 36.07 42.24 36.01C42.51 35.95 42.78 35.86 43.06 35.75L43.06 34.97C42.78 35.09 42.5 35.19 42.24 35.25C41.98 35.31 41.67 35.35 41.33 35.35Q40.69 35.35 40.27 35.04Q40.18 34.96 40.09 34.87C39.79 34.55 39.64 34.09 39.63 33.49L43.29 33.49L43.29 32.96C43.29 32.47 43.21 32.04 43.03 31.68C42.85 31.32 42.6 31.03 42.27 30.84ZM12.25 30.98C11.94 30.69 11.46 30.55 10.81 30.55Q10.29 30.55 9.8 30.68C9.48 30.77 9.21 30.88 8.97 31L9.25 31.66C9.47 31.56 9.7 31.46 9.95 31.38C10.21 31.3 10.47 31.25 10.75 31.25Q11.28 31.25 11.57 31.52C11.77 31.69 11.87 32 11.87 32.45L11.87 32.77L10.95 32.79Q9.65 32.84 9.01 33.27C8.59 33.56 8.38 33.97 8.38 34.51Q8.38 35.2 8.73 35.58Q8.79 35.65 8.86 35.71C9.19 35.97 9.59 36.1 10.08 36.1C10.53 36.1 10.88 36.03 11.14 35.89C11.4 35.75 11.64 35.53 11.88 35.24L11.91 35.24L12.09 36L12.72 36L12.72 32.35Q12.72 31.41 12.26 30.98Q12.26 30.98 12.25 30.98ZM18.28 30.64L17.32 30.64L15.03 33.24L15.03 30.64L14.14 30.64L14.14 36L15.03 36L15.03 33.28L17.45 36L18.47 36L15.99 33.21L18.28 30.64ZM19.29 30.64L18.35 30.64L20.52 36.01L20.23 36.73C20.13 37.01 19.98 37.24 19.79 37.41C19.6 37.59 19.35 37.67 19.05 37.67C18.93 37.67 18.82 37.67 18.72 37.66C18.62 37.64 18.53 37.63 18.45 37.62L18.45 38.31C18.54 38.34 18.64 38.35 18.76 38.37C18.89 38.39 19.03 38.39 19.18 38.39C19.71 38.39 20.11 38.24 20.41 37.94Q20.85 37.49 21.14 36.73L23.45 30.64L22.5 30.64L21.4 33.68C21.31 33.95 21.22 34.22 21.14 34.49C21.05 34.76 20.99 34.98 20.95 35.15L20.91 35.15C20.87 34.93 20.81 34.69 20.73 34.45C20.65 34.21 20.56 33.95 20.45 33.69L19.29 30.64ZM27.05 36L27.93 36L27.93 30.64L24.7 30.64C24.59 32.26 24.43 33.46 24.21 34.23Q23.91 35.28 23.43 35.37Q23.39 35.37 23.34 35.37Q23.28 35.37 23.21 35.37C23.16 35.36 23.11 35.35 23.08 35.34L23.08 36C23.13 36.02 23.2 36.04 23.28 36.05C23.36 36.06 23.45 36.07 23.53 36.07Q23.8 36.07 24.02 35.97Q24.29 35.85 24.49 35.6C24.75 35.28 24.95 34.78 25.1 34.09C25.26 33.4 25.38 32.49 25.47 31.37L27.05 31.37L27.05 36ZM33.71 33.49Q33.23 32.84 31.87 32.84L30.28 32.84L30.28 30.64L29.39 30.64L29.39 36L31.82 36Q32.93 36 33.44 35.55C33.79 35.25 33.96 34.85 33.96 34.35Q33.96 33.83 33.71 33.49ZM36.55 31.38L38.3 31.38L38.3 30.64L33.95 30.64L33.95 31.38L35.68 31.38L35.68 36L36.55 36L36.55 31.38ZM46.37 31.38L48.12 31.38L48.12 30.64L43.77 30.64L43.77 31.38L45.5 31.38L45.5 36L46.37 36L46.37 31.38ZM48.93 30.64L48.93 36L51.17 36Q52.26 36 52.76 35.55C53.08 35.25 53.25 34.85 53.25 34.35C53.25 33.85 53.08 33.47 52.75 33.22C52.41 32.96 51.9 32.84 51.21 32.84L49.82 32.84L49.82 30.64L48.93 30.64ZM54.13 30.64L54.13 36L55.02 36L55.02 30.64L54.13 30.64ZM40.31 31.46Q40.63 31.25 41.08 31.25C41.52 31.25 41.85 31.4 42.05 31.68C42.26 31.96 42.37 32.33 42.37 32.78L39.64 32.78C39.69 32.3 39.84 31.93 40.08 31.66Q40.19 31.54 40.31 31.46ZM9.68 33.73C9.94 33.54 10.4 33.43 11.06 33.4L11.86 33.38L11.86 33.85C11.86 34.37 11.71 34.76 11.4 35.01Q11.32 35.08 11.23 35.14Q10.83 35.38 10.28 35.38C9.99 35.38 9.75 35.31 9.57 35.17C9.39 35.03 9.29 34.82 9.29 34.52C9.29 34.18 9.42 33.91 9.68 33.73ZM32.73 33.74C32.96 33.86 33.07 34.08 33.07 34.41C33.07 34.72 32.95 34.95 32.71 35.08C32.47 35.22 32.16 35.28 31.78 35.28L30.28 35.28L30.28 33.57L31.77 33.57C32.18 33.57 32.5 33.62 32.73 33.74ZM52.01 35.09C51.77 35.22 51.46 35.28 51.09 35.28L49.82 35.28L49.82 33.57L51.1 33.57C51.51 33.57 51.83 33.62 52.05 33.74C52.26 33.86 52.37 34.08 52.37 34.41C52.37 34.73 52.25 34.96 52.01 35.09Z" fill="#717171" fill-opacity="1.000000" fill-rule="evenodd"/>
                                </svg>
                            </span>
                        </Link>
                        </span>
                        <Link to="/Navigator" className='TabBar-Item3'>
                            <span className="Nav">
                                <svg width="68.000000" height="49.000000" viewBox="0 0 68 49" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <desc>
                                            Created with Pixso.
                                    </desc>
                                    <defs/>
                                    <rect id="TabBar-item" width="68.000000" height="49.000000" fill="#FFFFFF" fill-opacity="0"/>
                                    <path id="path" d="M39.88 7.02C38.09 7.27 36.56 8.52 35.85 10.3C35.51 11.16 35.38 12.17 35.49 12.97C35.67 14.28 36.53 16.38 38.01 19.08C38.81 20.55 40.13 22.74 40.28 22.86C40.38 22.94 40.6 22.94 40.71 22.85C40.85 22.75 42.03 20.8 42.83 19.34C44.31 16.68 45.18 14.65 45.47 13.18C45.54 12.83 45.55 12.01 45.48 11.6C45.39 11 45.25 10.52 45.01 10.01C44.26 8.38 42.81 7.27 41.16 7.03C40.86 6.99 40.16 6.98 39.88 7.02ZM41.34 7.91C42.41 8.16 43.33 8.81 43.96 9.76C44.16 10.06 44.44 10.66 44.54 10.99C44.69 11.51 44.78 12.15 44.75 12.57C44.66 13.91 43.5 16.57 41.49 20.08C41.04 20.86 40.52 21.72 40.49 21.72C40.46 21.72 39.52 20.13 38.94 19.09C37.25 16.04 36.32 13.8 36.24 12.57C36.21 12.15 36.29 11.51 36.45 10.99C36.55 10.67 36.77 10.17 36.96 9.88C37.59 8.87 38.59 8.14 39.67 7.92C40.04 7.84 40.03 7.84 40.58 7.85C40.99 7.86 41.14 7.87 41.34 7.91Z" fill="#717171" fill-opacity="1.000000" fill-rule="nonzero"/>
                                    <path id="path" d="M35.85 10.3C35.51 11.16 35.38 12.17 35.49 12.97C35.67 14.28 36.53 16.38 38.01 19.08C38.81 20.55 40.13 22.74 40.28 22.86C40.38 22.94 40.6 22.94 40.71 22.85C40.85 22.75 42.03 20.8 42.83 19.34C44.31 16.68 45.18 14.65 45.47 13.18C45.54 12.83 45.55 12.01 45.48 11.6C45.39 11 45.25 10.52 45.01 10.01C44.26 8.38 42.81 7.27 41.16 7.03C40.86 6.99 40.16 6.98 39.88 7.02C38.09 7.27 36.56 8.52 35.85 10.3ZM43.96 9.76C44.16 10.06 44.44 10.66 44.54 10.99C44.69 11.51 44.78 12.15 44.75 12.57C44.66 13.91 43.5 16.57 41.49 20.08C41.04 20.86 40.52 21.72 40.49 21.72C40.46 21.72 39.52 20.13 38.94 19.09C37.25 16.04 36.32 13.8 36.24 12.57C36.21 12.15 36.29 11.51 36.45 10.99C36.55 10.67 36.77 10.17 36.96 9.88C37.59 8.87 38.59 8.14 39.67 7.92C40.04 7.84 40.03 7.84 40.58 7.85C40.99 7.86 41.14 7.87 41.34 7.91C42.41 8.16 43.33 8.81 43.96 9.76Z" stroke="#717171" stroke-opacity="1.000000" stroke-width="0.400000"/>
                                    <path id="path" d="M39.98 9.46C38.67 9.72 37.69 10.99 37.69 12.44C37.69 13.95 38.7 15.22 40.07 15.45C41.78 15.73 43.3 14.31 43.3 12.44C43.3 10.98 42.31 9.71 40.98 9.46C40.73 9.41 40.23 9.41 39.98 9.46ZM41.03 10.34C41.42 10.46 41.82 10.75 42.06 11.08C42.7 11.95 42.65 13.15 41.95 13.95C41.56 14.4 41.06 14.63 40.49 14.63C39.92 14.63 39.42 14.39 39.03 13.94C38.62 13.47 38.42 12.82 38.49 12.21C38.6 11.23 39.27 10.47 40.17 10.29C40.36 10.25 40.83 10.28 41.03 10.34Z" fill="#717171" fill-opacity="1.000000" fill-rule="nonzero"/>
                                    <path id="path" d="M37.69 12.44C37.69 13.95 38.7 15.22 40.07 15.45C41.78 15.73 43.3 14.31 43.3 12.44C43.3 10.98 42.31 9.71 40.98 9.46C40.73 9.41 40.23 9.41 39.98 9.46C38.67 9.72 37.69 10.99 37.69 12.44ZM42.06 11.08C42.7 11.95 42.65 13.15 41.95 13.95C41.56 14.4 41.06 14.63 40.49 14.63C39.92 14.63 39.42 14.39 39.03 13.94C38.62 13.47 38.42 12.82 38.49 12.21C38.6 11.23 39.27 10.47 40.17 10.29C40.36 10.25 40.83 10.28 41.03 10.34C41.42 10.46 41.82 10.75 42.06 11.08Z" stroke="#717171" stroke-opacity="1.000000" stroke-width="0.400000"/>
                                    <path id="path" d="M33.99 18.6C32.91 19.2 32.09 19.66 32.05 19.71C32 19.76 31.58 20.78 30.5 23.49C29.68 25.52 29 27.23 29 27.28C28.98 27.43 29.08 27.6 29.21 27.68C29.27 27.71 29.36 27.73 29.4 27.73C29.46 27.73 30.23 27.34 32.25 26.28C34.62 25.04 35.02 24.83 35.07 24.85C35.12 24.88 36.24 25.55 38.93 27.17L40.29 27.98L40.47 27.99C40.64 28 40.68 27.99 40.79 27.94C40.86 27.9 42.06 27.19 43.45 26.35C44.85 25.51 46 24.83 46.01 24.83C46.02 24.83 47.26 25.48 48.76 26.27C50.82 27.35 51.53 27.72 51.61 27.73C51.82 27.75 51.97 27.6 51.99 27.37C52 27.25 51.95 27.09 50.52 23.55C49.71 21.52 49.02 19.82 49 19.77C48.94 19.67 48.93 19.67 46.66 18.42C45.84 17.97 45.13 17.59 45.09 17.58C44.89 17.55 44.69 17.72 44.65 17.95C44.63 18.05 44.69 18.24 44.77 18.31C44.8 18.34 45.61 18.8 46.58 19.33C47.54 19.86 48.34 20.31 48.36 20.33C48.38 20.35 49.42 22.93 50.78 26.33L50.83 26.44L50.6 26.32C50.29 26.16 46.99 24.42 46.59 24.21L46.26 24.03L45.49 21.93C45.06 20.77 44.7 19.8 44.67 19.77C44.62 19.69 44.46 19.61 44.36 19.61C44.27 19.61 44.11 19.7 44.04 19.8C44 19.85 43.99 19.91 43.99 20.02C43.99 20.16 44.07 20.39 44.71 22.11C45.1 23.18 45.43 24.08 45.44 24.1C45.44 24.15 45.13 24.35 43.17 25.52L40.9 26.89L40.88 25.63C40.87 24.5 40.87 24.36 40.83 24.28C40.73 24.08 40.48 24.01 40.29 24.13C40.1 24.25 40.1 24.21 40.1 25.63C40.1 26.32 40.1 26.89 40.09 26.89C40.07 26.89 35.59 24.19 35.55 24.16C35.53 24.13 35.66 23.74 36.25 22.13C37.04 19.97 37.04 19.99 36.93 19.81C36.77 19.57 36.49 19.53 36.31 19.74C36.28 19.78 35.92 20.73 35.49 21.91C35.07 23.07 34.71 24.03 34.7 24.04C34.67 24.07 30.2 26.42 30.19 26.41C30.18 26.4 32.61 20.35 32.64 20.32C32.65 20.3 33.44 19.86 34.39 19.34C35.34 18.81 36.15 18.36 36.19 18.32C36.42 18.15 36.4 17.81 36.16 17.63C35.98 17.5 36.04 17.47 33.99 18.6Z" fill="#717171" fill-opacity="1.000000" fill-rule="nonzero"/>
                                    <path id="path" d="M32.05 19.71C32 19.76 31.58 20.78 30.5 23.49C29.68 25.52 29 27.23 29 27.28C28.98 27.43 29.08 27.6 29.21 27.68C29.27 27.71 29.36 27.73 29.4 27.73C29.46 27.73 30.23 27.34 32.25 26.28C34.62 25.04 35.02 24.83 35.07 24.85C35.12 24.88 36.24 25.55 38.93 27.17L40.29 27.98L40.47 27.99C40.64 28 40.68 27.99 40.79 27.94C40.86 27.9 42.06 27.19 43.45 26.35C44.85 25.51 46 24.83 46.01 24.83C46.02 24.83 47.26 25.48 48.76 26.27C50.82 27.35 51.53 27.72 51.61 27.73C51.82 27.75 51.97 27.6 51.99 27.37C52 27.25 51.95 27.09 50.52 23.55C49.71 21.52 49.02 19.82 49 19.77C48.94 19.67 48.93 19.67 46.66 18.42C45.84 17.97 45.13 17.59 45.09 17.58C44.89 17.55 44.69 17.72 44.65 17.95C44.63 18.05 44.69 18.24 44.77 18.31C44.8 18.34 45.61 18.8 46.58 19.33C47.54 19.86 48.34 20.31 48.36 20.33C48.38 20.35 49.42 22.93 50.78 26.33L50.83 26.44L50.6 26.32C50.29 26.16 46.99 24.42 46.59 24.21L46.26 24.03L45.49 21.93C45.06 20.77 44.7 19.8 44.67 19.77C44.62 19.69 44.46 19.61 44.36 19.61C44.27 19.61 44.11 19.7 44.04 19.8C44 19.85 43.99 19.91 43.99 20.02C43.99 20.16 44.07 20.39 44.71 22.11C45.1 23.18 45.43 24.08 45.44 24.1C45.44 24.15 45.13 24.35 43.17 25.52L40.9 26.89L40.88 25.63C40.87 24.5 40.87 24.36 40.83 24.28C40.73 24.08 40.48 24.01 40.29 24.13C40.1 24.25 40.1 24.21 40.1 25.63C40.1 26.32 40.1 26.89 40.09 26.89C40.07 26.89 35.59 24.19 35.55 24.16C35.53 24.13 35.66 23.74 36.25 22.13C37.04 19.97 37.04 19.99 36.93 19.81C36.77 19.57 36.49 19.53 36.31 19.74C36.28 19.78 35.92 20.73 35.49 21.91C35.07 23.07 34.71 24.03 34.7 24.04C34.67 24.07 30.2 26.42 30.19 26.41C30.18 26.4 32.61 20.35 32.64 20.32C32.65 20.3 33.44 19.86 34.39 19.34C35.34 18.81 36.15 18.36 36.19 18.32C36.42 18.15 36.4 17.81 36.16 17.63C35.98 17.5 36.04 17.47 33.99 18.6C32.91 19.2 32.09 19.66 32.05 19.71Z" stroke="#717171" stroke-opacity="1.000000" stroke-width="0.400000"/>
                                    <path id="✏️ Label" d="M20.98 40L21.88 40L21.88 32.85L20.98 32.85L20.98 35.87L17.32 35.87L17.32 32.85L16.42 32.85L16.42 40L17.32 40L17.32 36.66L20.98 36.66L20.98 40ZM58.41 39.37C58.86 38.88 59.09 38.19 59.09 37.3Q59.09 36.42 58.78 35.8Q58.55 35.36 58.2 35.07Q58.06 34.95 57.9 34.86C57.53 34.64 57.11 34.54 56.62 34.54C55.85 34.54 55.25 34.78 54.8 35.26C54.35 35.73 54.13 36.42 54.13 37.3C54.13 37.9 54.24 38.4 54.45 38.82C54.66 39.24 54.95 39.55 55.32 39.77C55.69 39.99 56.12 40.1 56.59 40.1Q57.42 40.1 58 39.72Q58.23 39.57 58.41 39.37ZM64.39 35.23C63.98 34.77 63.45 34.54 62.79 34.54C62.36 34.54 62.01 34.62 61.75 34.78C61.49 34.93 61.28 35.13 61.12 35.37L61.08 35.37L60.96 34.64L60.24 34.64L60.24 42.39L61.12 42.39L61.12 40.2C61.12 40.07 61.11 39.92 61.1 39.75C61.09 39.57 61.07 39.43 61.06 39.31L61.12 39.31C61.27 39.52 61.49 39.7 61.76 39.86Q62.16 40.1 62.78 40.1Q63.38 40.1 63.83 39.84Q64.14 39.67 64.39 39.38C64.79 38.91 64.99 38.22 64.99 37.3C64.99 36.38 64.79 35.69 64.39 35.23ZM26.95 34.98C26.64 34.69 26.15 34.55 25.5 34.55C25.15 34.55 24.82 34.59 24.5 34.68C24.18 34.77 23.9 34.88 23.67 35L23.94 35.66C24.16 35.56 24.4 35.46 24.65 35.38C24.9 35.3 25.17 35.25 25.45 35.25Q25.98 35.25 26.27 35.52C26.46 35.69 26.56 36 26.56 36.45L26.56 36.77L25.65 36.79Q24.34 36.84 23.71 37.27C23.29 37.56 23.08 37.97 23.08 38.51Q23.08 39.2 23.43 39.58Q23.49 39.65 23.56 39.71C23.88 39.97 24.28 40.1 24.77 40.1C25.22 40.1 25.58 40.03 25.84 39.89C26.09 39.75 26.34 39.53 26.57 39.24L26.61 39.24L26.78 40L27.42 40L27.42 36.35Q27.42 35.41 26.95 34.98Q26.95 34.98 26.95 34.98ZM48.12 34.98C47.81 34.69 47.32 34.55 46.67 34.55C46.32 34.55 45.99 34.59 45.67 34.68C45.35 34.77 45.07 34.88 44.84 35L45.11 35.66C45.33 35.56 45.57 35.46 45.82 35.38C46.07 35.3 46.34 35.25 46.62 35.25C46.97 35.25 47.25 35.34 47.44 35.52C47.63 35.69 47.73 36 47.73 36.45L47.73 36.77L46.82 36.79Q45.51 36.84 44.88 37.27C44.46 37.56 44.25 37.97 44.25 38.51Q44.25 39.2 44.6 39.58Q44.66 39.65 44.73 39.71C45.05 39.97 45.45 40.1 45.94 40.1C46.39 40.1 46.75 40.03 47.01 39.89C47.26 39.75 47.51 39.53 47.74 39.24L47.78 39.24L47.95 40L48.59 40L48.59 36.35C48.59 35.72 48.43 35.26 48.12 34.98ZM32.96 36.64Q33.15 36.38 33.15 35.99Q33.15 35.51 32.92 35.22Q32.9 35.2 32.89 35.18C32.71 34.98 32.47 34.84 32.16 34.76Q31.71 34.64 31.14 34.64L28.84 34.64L28.84 40L31.15 40Q32.31 40 32.81 39.55C33.15 39.25 33.32 38.88 33.32 38.43C33.32 38.02 33.2 37.73 32.95 37.54C32.7 37.35 32.41 37.23 32.08 37.18L32.08 37.15C32.39 37.08 32.65 36.95 32.85 36.77Q32.91 36.71 32.96 36.64ZM35.18 38.27C35.19 38.11 35.19 37.98 35.19 37.91L35.19 34.64L34.36 34.64L34.36 40L35.45 40L38.3 35.52C38.29 35.6 38.29 35.73 38.28 35.9C38.27 36.07 38.27 36.24 38.27 36.42C38.26 36.59 38.26 36.73 38.26 36.84L38.26 40L39.08 40L39.08 34.64L38 34.64L35.13 39.13C35.14 39.03 35.15 38.9 35.16 38.75C35.17 38.59 35.17 38.43 35.18 38.27ZM43.82 35.38L43.82 34.64L40.55 34.64L40.55 40L41.43 40L41.43 35.38L43.82 35.38ZM51.96 35.38L53.71 35.38L53.71 34.64L49.36 34.64L49.36 35.38L51.09 35.38L51.09 40L51.96 40L51.96 35.38ZM55.41 38.81Q55.04 38.25 55.04 37.3C55.04 36.67 55.16 36.18 55.41 35.82C55.66 35.46 56.05 35.28 56.6 35.28C57.15 35.28 57.55 35.46 57.8 35.82Q58.18 36.35 58.18 37.3Q58.18 38.25 57.8 38.81C57.55 39.18 57.15 39.37 56.61 39.37C56.06 39.37 55.66 39.18 55.41 38.81ZM61.48 35.74C61.7 35.43 62.08 35.28 62.63 35.28C63.12 35.28 63.49 35.46 63.72 35.83C63.96 36.19 64.08 36.68 64.08 37.29C64.08 37.7 64.03 38.05 63.92 38.36C63.82 38.67 63.66 38.92 63.45 39.1C63.25 39.28 62.98 39.37 62.65 39.37C62.06 39.37 61.66 39.19 61.45 38.83C61.23 38.47 61.12 37.97 61.12 37.3L61.12 37.14C61.13 36.51 61.25 36.04 61.48 35.74ZM31.98 35.54C32.17 35.66 32.26 35.84 32.26 36.1C32.26 36.59 31.82 36.84 30.93 36.84L29.72 36.84L29.72 35.37L31.09 35.37Q31.71 35.37 31.98 35.54ZM24.38 37.73C24.63 37.54 25.09 37.43 25.76 37.4L26.55 37.38L26.55 37.85C26.55 38.37 26.4 38.76 26.1 39.01Q26.01 39.08 25.92 39.14Q25.52 39.38 24.97 39.38C24.68 39.38 24.45 39.31 24.26 39.17C24.08 39.03 23.99 38.82 23.99 38.52C23.99 38.18 24.12 37.91 24.38 37.73ZM45.55 37.73C45.8 37.54 46.26 37.43 46.93 37.4L47.72 37.38L47.72 37.85C47.72 38.37 47.57 38.76 47.27 39.01Q47.18 39.08 47.09 39.14Q46.69 39.38 46.14 39.38C45.85 39.38 45.62 39.31 45.43 39.17C45.25 39.03 45.16 38.82 45.16 38.52C45.16 38.18 45.29 37.91 45.55 37.73ZM32.06 37.77C32.29 37.9 32.41 38.12 32.41 38.43C32.41 38.74 32.29 38.96 32.06 39.09C31.83 39.22 31.49 39.28 31.05 39.28L29.72 39.28L29.72 37.57L31.03 37.57C31.48 37.57 31.83 37.63 32.06 37.77Z" fill="#717171" fill-opacity="1.000000" fill-rule="evenodd"/>
                                </svg>

                            </span>

                        </Link>
                        <Link to="/Student" TabBar-Item4>
                            <span className="Student">
                                <svg width="68.000000" height="49.000000" viewBox="0 0 68 49" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <desc>
                                            Created with Pixso.
                                    </desc>
                                    <defs/>
                                    <rect id="TabBar-item" width="68.000000" height="49.000000" fill="#FFFFFF" fill-opacity="0"/>
                                    <path id="✏️ Label" d="M18.64 35.89Q19.19 35.54 19.97 35.54C20.28 35.54 20.58 35.58 20.85 35.66C21.12 35.74 21.36 35.83 21.58 35.94L21.95 35.18C21.39 34.9 20.73 34.76 19.98 34.76Q18.87 34.76 18.1 35.22Q17.76 35.43 17.49 35.7Q17.16 36.05 16.94 36.51Q16.55 37.33 16.55 38.42Q16.55 39.53 16.91 40.36Q17.15 40.91 17.55 41.29Q17.75 41.49 18.01 41.65C18.49 41.95 19.1 42.1 19.82 42.1Q20.41 42.1 20.84 42.02C21.12 41.98 21.4 41.91 21.66 41.8L21.66 41.03C21.4 41.11 21.12 41.17 20.84 41.23C20.56 41.28 20.27 41.3 19.96 41.3Q19 41.3 18.42 40.84Q18.25 40.7 18.11 40.53Q17.49 39.75 17.49 38.43Q17.49 37.09 18.15 36.32Q18.37 36.06 18.64 35.89ZM40.87 36.84C40.54 36.64 40.15 36.54 39.68 36.54Q39.08 36.54 38.6 36.78Q38.52 36.83 38.44 36.88C38.08 37.1 37.81 37.42 37.61 37.84C37.41 38.26 37.31 38.77 37.31 39.36Q37.31 40.24 37.64 40.86C37.86 41.27 38.16 41.58 38.55 41.79C38.94 41.99 39.39 42.1 39.89 42.1C40.26 42.1 40.58 42.07 40.84 42.01C41.11 41.95 41.38 41.86 41.66 41.75L41.66 40.97C41.38 41.09 41.1 41.19 40.84 41.25C40.58 41.31 40.27 41.35 39.93 41.35Q39.29 41.35 38.87 41.04Q38.78 40.96 38.69 40.87C38.39 40.55 38.24 40.09 38.22 39.49L41.89 39.49L41.89 38.96Q41.89 38.23 41.63 37.68C41.45 37.32 41.2 37.03 40.87 36.84ZM24.82 37.38L26.57 37.38L26.57 36.69L28.71 42.01L28.42 42.73C28.32 43.01 28.17 43.24 27.98 43.41C27.79 43.59 27.54 43.67 27.24 43.67C27.12 43.67 27.01 43.67 26.91 43.66C26.81 43.64 26.72 43.63 26.64 43.62L26.64 44.31C26.73 44.34 26.83 44.35 26.95 44.37C27.08 44.39 27.22 44.39 27.37 44.39Q28.02 44.39 28.44 44.08Q28.52 44.02 28.6 43.94C28.9 43.64 29.14 43.24 29.33 42.73L31.64 36.64L30.69 36.64L29.59 39.68C29.5 39.95 29.41 40.22 29.33 40.49C29.24 40.76 29.18 40.98 29.14 41.15L29.1 41.15C29.06 40.93 29 40.69 28.92 40.45C28.84 40.21 28.75 39.95 28.64 39.69L27.48 36.64L22.22 36.64L22.22 37.38L23.95 37.38L23.95 42L24.82 42L24.82 37.38ZM36.02 41.26L36.02 36.64L33.2 36.64C33.2 37.46 33.08 38.28 32.85 39.09C32.62 39.9 32.28 40.62 31.82 41.26L31.39 41.26L31.39 43.86L32.23 43.86L32.23 42L35.96 42L35.96 43.86L36.81 43.86L36.81 41.26L36.02 41.26ZM43.9 38.87L43.9 36.64L43.01 36.64L43.01 42L43.9 42L43.9 39.6L46.81 39.6L46.81 42L47.68 42L47.68 36.64L46.81 36.64L46.81 38.87L43.9 38.87ZM51.1 37.38L52.85 37.38L52.85 36.64L48.5 36.64L48.5 37.38L50.23 37.38L50.23 42L51.1 42L51.1 37.38ZM38.91 37.46Q39.23 37.25 39.68 37.25C40.12 37.25 40.45 37.4 40.65 37.68C40.86 37.96 40.97 38.33 40.97 38.78L38.24 38.78C38.29 38.3 38.44 37.93 38.68 37.66Q38.79 37.54 38.91 37.46ZM33.77 38.73Q33.94 38.01 33.99 37.32L35.17 37.32L35.17 41.26L32.73 41.26C32.96 40.93 33.16 40.55 33.34 40.12C33.52 39.68 33.66 39.21 33.77 38.73Z" fill="#717171" fill-opacity="1.000000" fill-rule="evenodd"/>
                                    <rect id="Calendar" width="44.666664" height="49.000000" transform="translate(12.000000 0.000000)" fill="#FFFFFF" fill-opacity="0"/>
                                    <path id="Vector" d="M33.61 9.08C32.98 9.18 32.58 9.32 31.99 9.63C31.28 9.98 30.72 10.43 30.26 10.99C28.74 12.88 28.65 15.41 30.04 17.4C30.31 17.78 31.08 18.52 31.43 18.73C31.56 18.8 31.66 18.88 31.66 18.91C31.66 18.93 31.55 18.99 31.41 19.03C30.93 19.17 29.58 19.88 29.05 20.27C27.62 21.31 26.59 22.72 26.14 24.24C25.76 25.56 26.12 26.46 27.26 26.99C28.8 27.69 30.94 28 34.47 28C38.17 28 40.34 27.68 41.84 26.92C42.35 26.66 42.7 26.29 42.89 25.82C42.99 25.54 43.01 25.4 42.99 25.03C42.9 24.05 42.35 22.7 41.65 21.79C40.75 20.62 39.27 19.57 37.79 19.07C37.61 19 37.46 18.93 37.46 18.91C37.46 18.9 37.64 18.75 37.86 18.59C39.03 17.76 39.83 16.41 40.01 14.95C40.16 13.81 39.89 12.61 39.26 11.56C38.93 11.02 37.94 10.07 37.4 9.75C36.23 9.1 34.87 8.85 33.61 9.08ZM35.31 10.47C37.4 10.86 38.84 12.77 38.57 14.82C38.37 16.37 37.3 17.61 35.74 18.1C35.34 18.24 35.12 18.27 34.59 18.27C33.81 18.27 33.33 18.16 32.65 17.82C31.74 17.35 31.02 16.53 30.69 15.57C30.54 15.14 30.52 14.97 30.52 14.34C30.52 13.72 30.54 13.55 30.69 13.13C31.23 11.52 32.76 10.43 34.51 10.38C34.69 10.38 35.05 10.42 35.31 10.47ZM36.17 20.07C38.44 20.52 40.34 21.92 41.23 23.79C41.49 24.33 41.71 25.12 41.66 25.29C41.59 25.51 41.43 25.65 41.02 25.83C39.88 26.34 37.64 26.6 34.56 26.6C31.38 26.6 29.25 26.34 27.98 25.79C27.4 25.54 27.34 25.37 27.56 24.6C27.83 23.64 28.51 22.56 29.28 21.88C31.12 20.24 33.66 19.57 36.17 20.07Z" fill="#717171" fill-opacity="1.000000" fill-rule="nonzero"/>
                                    <path id="Vector" d="M31.99 9.63C31.28 9.98 30.72 10.43 30.26 10.99C28.74 12.88 28.65 15.41 30.04 17.4C30.31 17.78 31.08 18.52 31.43 18.73C31.56 18.8 31.66 18.88 31.66 18.91C31.66 18.93 31.55 18.99 31.41 19.03C30.93 19.17 29.58 19.88 29.05 20.27C27.62 21.31 26.59 22.72 26.14 24.24C25.76 25.56 26.12 26.46 27.26 26.99C28.8 27.69 30.94 28 34.47 28C38.17 28 40.34 27.68 41.84 26.92C42.35 26.66 42.7 26.29 42.89 25.82C42.99 25.54 43.01 25.4 42.99 25.03C42.9 24.05 42.35 22.7 41.65 21.79C40.75 20.62 39.27 19.57 37.79 19.07C37.61 19 37.46 18.93 37.46 18.91C37.46 18.9 37.64 18.75 37.86 18.59C39.03 17.76 39.83 16.41 40.01 14.95C40.16 13.81 39.89 12.61 39.26 11.56C38.93 11.02 37.94 10.07 37.4 9.75C36.23 9.1 34.87 8.85 33.61 9.08C32.98 9.18 32.58 9.32 31.99 9.63ZM38.57 14.82C38.37 16.37 37.3 17.61 35.74 18.1C35.34 18.24 35.12 18.27 34.59 18.27C33.81 18.27 33.33 18.16 32.65 17.82C31.74 17.35 31.02 16.53 30.69 15.57C30.54 15.14 30.52 14.97 30.52 14.34C30.52 13.72 30.54 13.55 30.69 13.13C31.23 11.52 32.76 10.43 34.51 10.38C34.69 10.38 35.05 10.42 35.31 10.47C37.4 10.86 38.84 12.77 38.57 14.82ZM41.23 23.79C41.49 24.33 41.71 25.12 41.66 25.29C41.59 25.51 41.43 25.65 41.02 25.83C39.88 26.34 37.64 26.6 34.56 26.6C31.38 26.6 29.25 26.34 27.98 25.79C27.4 25.54 27.34 25.37 27.56 24.6C27.83 23.64 28.51 22.56 29.28 21.88C31.12 20.24 33.66 19.57 36.17 20.07C38.44 20.52 40.34 21.92 41.23 23.79Z" stroke="#717171" stroke-opacity="1.000000" stroke-width="0.400000"/>
                                </svg>

                            </span>
                        </Link>
            </div>
    </div>)
}

export default Footer