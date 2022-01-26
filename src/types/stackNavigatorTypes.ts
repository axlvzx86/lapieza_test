import { StackNavigationProp } from '@react-navigation/stack';

type AppStack = {
    Home: undefined;
    UserList: undefined;
    UserDetail:  { id?: number };
};

export type UseNavigationAppType = StackNavigationProp<AppStack, 'Home'>;
