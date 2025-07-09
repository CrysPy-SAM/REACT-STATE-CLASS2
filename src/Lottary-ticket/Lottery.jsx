import { useState } from "react"
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3, winningSum=15}) {
    let [ticket, setTicket]= useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

      let buyTicket = () =>{
        setTicket(genTicket(n));
      }

    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br />
            <button onClick={buyTicket}>buy New ticket</button>
            <h3>{isWinning && "Congrectulations, you won!"}</h3>
        </div>
    )
}