import Particles from 'react-tsparticles';
import Socials from './Socials';

const Banner: React.FC = () => {
	const config = {
		fpsLimit: 60,
		particles: {
			number: {
				value: 160,
				density: {
					enable: false
				}
			},
			color: {
				value: '#ffffff'
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#000000'
				},
				polygon: {
					nb_sides: 5
				}
			},
			opacity: {
				value: 0.1
			},
			size: {
				value: 5,
				random: true,
				anim: {
					speed: 4,
					size_min: 0.3
				}
			},
			line_linked: {
				enabled: false
			},
			move: {
				enable: true,
				random: true,
				speed: 1,
				direction: 'top',
				out_mode: 'out'
			}
		}
	};

	return (
		<div className='Banner'>
			<Particles className='particles' options={config} />
			<div className='jumbotron jumbotron-fluid'>
				<div className='banner-content'>
					<h1>
						<span className='color-theme'>Keaton</span> Sentak
					</h1>
					<h6>Full-Stack Developer</h6>
					<Socials />
				</div>
			</div>
		</div>
	);
};

export default Banner;