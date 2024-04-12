import { Routes, Route } from 'react-router-dom';
import News from './News';
import Student from './Student';

function Main(){
    return (
            <Routes>
                <Route path="/News" element={<News />} />
                <Route path="/Student" element={<Student />} />
            </Routes>
    )
}

export default Main