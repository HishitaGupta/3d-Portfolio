import { Route , BrowserRouter as Router , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home , About , Projects , Contact} from './pages';

const App = () => {
    return (
        <main className='bg-slate-300/20 h-full bg-[image:var(https://www.bing.com/images/search?view=detailV2&ccid=fZlv2F%2fq&id=93016CEA4631C5F3A377E029401A3CEE4D98520C&thid=OIP.fZlv2F_qL6Ti_yZBqTonsAHaEK&mediaurl=https%3a%2f%2fimg.freepik.com%2fpremium-vector%2fliquid-blue-white-gradient-blurred-abstract-background_619119-322.jpg&exph=352&expw=626&q=blue+color+gradient++pattern+with+white+bacjground&simid=608031099173863719&FORM=IRPRST&ck=0B91D6E4B15714EAFB6F3BDC6DABF8EA&selectedIndex=7&itb=0)]'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={< About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes>
            </Router>
        </main>
    );
}

export default App;
