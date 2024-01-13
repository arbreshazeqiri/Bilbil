import Group0 from '../assets/avatars/Group0';
import Group1 from '../assets/avatars/Group1';
import Group2 from '../assets/avatars/Group2';
import Group3 from '../assets/avatars/Group3';
import Group4 from '../assets/avatars/Group4';
import Group5 from '../assets/avatars/Group5';

export const getAvatar = (index) => {
    switch (index) {
        case 0:
            return <Group0 />;
        case 1:
            return <Group1 />;
        case 2:
            return <Group2 />;
        case 3:
            return <Group3 />;
        case 4:
            return <Group4 />;
        case 5:
            return <Group5 />;

        default:
            return <Group0 />;
    }

}