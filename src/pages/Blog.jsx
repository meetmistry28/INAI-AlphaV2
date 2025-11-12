import { useNavigate } from 'react-router-dom';
import { LuBrainCircuit } from 'react-icons/lu';
import { LiaPersonBoothSolid } from 'react-icons/lia';
import { LiaRobotSolid } from 'react-icons/lia';
import '../styles/Careers.css';

const Blog = () => {
    const navigate = useNavigate();

    const handleBoxClick = (path) => {
        navigate(path);
    };


    return (
        <>
            <section className="tech-section" id="careers" style={{ padding: '4rem 2rem' }}>
                <h2 className="section-title">Blog Coming Soon</h2>
              
            </section>
        </>
    )
}

export default Blog
