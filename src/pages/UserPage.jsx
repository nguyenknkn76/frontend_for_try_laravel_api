import Users from "../components/Users/Users"

const UserPage = ({users}) => {
    return(
        <div>
            this is User
            <Users users={users}/>
        </div>
    )
}

export default UserPage