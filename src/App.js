import { useState, useEffect } from 'react';
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Racers from './components/Racers';

function App(props) {
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ]

    // Set a state for count - initial state of 0 and setCount is function to change state value of count
    const [count, setCount] = useState(0);
    // Set a state for names - initial state of [] and setNames is function to change state value of names
    const [racers, setRacers] = useState([]);

    const [season, setSeason] = useState(2022)
    const [round, setRound] = useState(1)

    // Create an effect - function to execute after every render

    useEffect(() => {
        fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                setRacers(racerStandings)
            })

    },  [season, round])

    // Function to be executed when a button is clicked
    function handleClick(step){
        setCount(count + step);
    };

    // Function to be exectuted when the name form is submitteed
    function handleRacerSubmit(e){
        // Prevent default of refreshing page
        e.preventDefault();
        let newSeason = e.target.season.value
        let newRound = e.target.round.value
        setSeason(newSeason)
        setRound(newRound)
    }

    return (
        <>
            <Navbar name='Vlad' city='Khabarovsk'/>
            <div className='container'>
                <h1 className='text-center'>Hello World</h1>
                <h3 className='text-center'>Total: {count}</h3>
                {buttons.map((b, i) => <Button color={b.color} step={b.step} key={i} handleClick={handleClick} />)}
                <Racers handleRacerSubmit={handleRacerSubmit} racers={racers} />
            </div>
        </>
    )
}

export default App;