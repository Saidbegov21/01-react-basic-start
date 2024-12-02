import { useState } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"

export default function EffectSection(){
    const [modal, setModal] = useState(false)
    function openModal(){
        setModal(true)

    }

    return(
        <section>
            <h3>Effects</h3>

            <Button onClick = {openModal}>Открыть информацию</Button>

            <Modal open = {modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magnam, doloribus nobis nemo, excepturi rem explicabo ad deleniti eos sint veritatis assumenda eum minus quis qui deserunt laboriosam, quibusdam et!</p>
            </Modal> 
        </section>
    )
}