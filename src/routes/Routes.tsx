import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ProfileUserParticipant from '@pages/private/ProfileUserParticipant';
import Login from '@pages/public/Login';
import Registration from '@pages/public/Registration';
import Home from "@pages/public/Home.tsx";

const PagesRouter = () => {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="HACK2024" element={<Home/>}/>
                <Route path="HACK2024/participant" element={<ProfileUserParticipant />} />
                <Route path="HACK2024/participant" element={<ProfileUserParticipant />} />
                <Route path="HACK2024/sign-up" element={<Registration />} />
                <Route path="HACK2024/sign-in" element={<Login />} />
            </Routes>
        </Layout>
  </Router>
  )
}

export default PagesRouter