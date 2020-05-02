import React from 'react'
import ThreeLayout from './components/common/Three/index'

export default function App() {
    return (
        <div>
            <ThreeLayout left={ <div style={{
                border:"2px solid #008c8c"
            }}>左边栏</div> } right={<div style={{
                border:"2px solid #008c8c"
            }}>右边栏</div>}>
                <div style={{
                    border:"2px solid #f40"
                }}>
                    <h1>主区域</h1>
                    <p>啦啦啦啦啦啦啦啦啦</p>
                </div>
            </ThreeLayout>
        </div>
    )
}
