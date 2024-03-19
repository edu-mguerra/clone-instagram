import { Story } from '@/componets/storys'
import './style.css'
import { Post } from '../post'
import { Suggestions } from '../suggestion'

export const Layout = () => {
    return (
        <>
            <div className='main-grid'>
                <div className='first-column' style={{ gridArea: 'firstColumn' }}>
                    <div className="box">
                        <Story />
                    </div>

                    <div className="box">
                        <Post />
                    </div>
                </div>

                <div style={{ gridArea: 'secondColumn' }}>
                    <div className="suggestion-box">
                        <Suggestions />
                    </div>

                </div>
            </div>
        </>
    )
}