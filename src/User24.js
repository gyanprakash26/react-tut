import User24Ap from './User24Ap' 
export default function User24(){
    const user = [{
        name:"Gyan",
        email:"gyan@gmail.com",
        no:17623547
    },
    {
        name:"Yu han",
        email:"yuhan@gmail.com",
        no:66553547
    },
    {
        name:"lee",
        email:"leeah@gmail.com",
        no:653547
    }
]
return(
    <>
    <h1>24. Passing props in the component inside the map()</h1>
    {user.map((item)=>
     <User24Ap data = {item}/>
    )}
    </>
)
}