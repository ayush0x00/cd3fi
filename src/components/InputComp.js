import React from 'react'

export default function InputComp() {
    return ( <
        div className = 'flex justify-center flex-col items-center' >
        <
        p className = 'text-white text-2xl' > 'They say money can’t buy happiness but it sure as hell bus everything else' < /p> <
        p className = 'text-[#99efff] text-lg' > -MAD MONEY < /p> <
        div className = 'flex bg-[#1d1236] py-2 px-4 rounded-xl' >
        <
        form action = "https://cinemadraft.us14.list-manage.com/subscribe/post?u=fcd503faf1285a57eea370664&amp;id=e3718094a2"
        method = "post" >
        <
        input className = 'w-[500px] bg-[#1d1236] text-[#99efff] text-sm py-2 px-3 focus:outline-0'
        placeholder = 'Enter email for NFB updates from CinemaDraft' / >

        <
        button className = 'text-[black] bg-[#99efff] w-[150px] rounded-xl py-3 ' > Subscribe < /button>  <
        /form> <
        /
        div >

        <
        /div>
    )
}
