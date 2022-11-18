const ProfileDisplay = () => {
    const [firstName, setfirstName] = useState('First Name')
    const [lastName, setlastName] = useState('Last Name')
    const [age, setAge] = useState('Age')
    const [gender, setGender] = useState('Gender')
    const [country, setCountry] = useState('Nationality')
    const [job, setJob] = useState('Occupation')

    const handleClick = () => {
        logout()
      }

    return(
        <form className="create">
            <h2>PROFILE PAGE</h2>
            <label>{firstName}</label>
            <label>{firstName}</label>
            <label>{firstName} </label>
            <label>{firstName}</label>
            <label>{firstName}</label>
            <label>{firstName}</label>

            <button>Edit</button>


        </form>
            
    )
}