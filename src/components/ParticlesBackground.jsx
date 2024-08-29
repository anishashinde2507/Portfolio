import Particles from "react-tsparticles";
import ParticlesConfig from './Particles-config';
import "./particles.css"

const ParticlesBackground =()=>{
    return(
        <div className="particles-background">
             <Particles params={ParticlesConfig}></Particles>
        </div>
       
    )
}
export default ParticlesBackground
