import React from "react";

export default function Racers(props){
    let tableHeaders =['#', 'First', 'Last', 'Points', 'Wins', 'Nationallity', 'Constructor']
    return (
    <>    
    <div className="row py-3">
        <h4 className="text-center">Driver Standings</h4>
        <form onSubmit={props.handleRacerSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <input type="text" className='form-control' name="season" placeholder='Enter Season' />
                    </div>
                    <div className="col-12 col-md-6">
                        <input type="text" className='form-control' name="round" placeholder='Enter Round' />
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-3">
                        <input type="submit" value="Submit" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
     <table className='table table-primary table-striped mt-3'>
        <thead>
            <tr>
                {tableHeaders.map((th,i) => <th key={i}>{th}</th>)}
            </tr>
        </thead>
        <tbody>
            {props.racers.map((racer, idx) => {
            return (<tr key={idx}>
                <th>{racer.position}</th>
                <td>{racer.Driver.givenName}</td>
                <td>{racer.Driver.familyName}</td>
                <td>{racer.points}</td>
                <td>{racer.wins}</td>
                <td>{racer.Driver.nationality}</td>
                <td>{racer.Constructors[0].name}</td>
            </tr>)
        })}
        </tbody>
     </table>
    </div>
    </>
    )
  
}