import { Wrapper } from './UsersListBadge.styles';

export interface IUsersListBadgeProps {
  average: number;
}

const UsersListBadge = ({ average }: IUsersListBadgeProps) => <Wrapper average={average}>{average}</Wrapper>;

export default UsersListBadge;
