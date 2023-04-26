import { createSignal, onMount } from 'solid-js'
import baijiayun from '../assets/images/logo.png'
import quic from '../assets/images/quic.jpg'

export default function () {
    const [logo, setLogo] = createSignal('')
    onMount(() => {
        const { hostname } = window.location
        if (
            ['xinaiguo', 'guoshenghuaxing', 'baijiayun'].some(item =>
                hostname.includes(item)
            )
        ) {
            setLogo(baijiayun)
        } else if (hostname.includes('quic')) {
            setLogo(quic)
        } else {
            setLogo(baijiayun)
        }
    })
    return <img src={logo()} alt="" />
}
