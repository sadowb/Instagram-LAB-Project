import Timeline from './timeline/Timeline.jsx'
import './Home.css';
import Nav from './Nav/Nav.jsx';
function Home() {
    return (
    <div className='home_wrapper'>

        <div className='left_wrapper'>
            <Nav/>
        </div>

        <div className='right_wrapper'>
            <Timeline/>

        </div>
    </div>
    );
}
export default Home;



