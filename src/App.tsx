import './App.css'
import About from './components/About'
import Header from './components/Header'
import Introduction from './components/Introduction'
import ProfilePic from './components/ProfilePic'
import ProgressBar from './components/ProgressBar'
import Services from './components/Services'
import Sidebar from './components/Sidebar'

function App() {

	return (
		<>
			<Header />
			<Sidebar />
			<div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
				<div className='col-span-2'>
					<Introduction />
					<About />
					<Services />
				</div>
				<div className='hidden md:block'>
					<ProgressBar />
					<ProfilePic />
				</div>
			</div>
		</>
	)
}

export default App
