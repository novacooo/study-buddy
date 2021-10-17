import { Wrapper } from './UsersListBadge.styles';

export interface IUsersListBadgeProps {
  score: number;
}

const UsersListBadge = ({ score }: IUsersListBadgeProps) => <Wrapper score={score}>{score}</Wrapper>;

export default UsersListBadge;
