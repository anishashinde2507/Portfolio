import Particles from "react-tsparticles";
import ParticlesConfig from './Particles-config';
import "./particles.css"

const Background=()=>{
    return(
        <div className="particles-background">
             <Particles params={ParticlesConfig}></Particles>
        </div>
       
    )
}
export default Background