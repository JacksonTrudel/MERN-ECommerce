import User from "../types/User";

type UserComponentProps = {
    user: User;
}

function UserComponent(props: UserComponentProps) {
    return <div>Hi there, {props.user.name}</div>
}

export default UserComponent;