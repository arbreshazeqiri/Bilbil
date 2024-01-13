import Group0 from '../assets/avatars/Group0';
import Group1 from '../assets/avatars/Group1';
import Group2 from '../assets/avatars/Group2';
import Group3 from '../assets/avatars/Group3';
import Group4 from '../assets/avatars/Group4';
import Group5 from '../assets/avatars/Group5';

export const getAvatar = (index, props) => {
    switch (index) {
        case 0:
            return <Group0 {...props} />;
        case 1:
            return <Group1 {...props} />;
        case 2:
            return <Group2 {...props} />;
        case 3:
            return <Group3 {...props} />;
        case 4:
            return <Group4 {...props} />;
        case 5:
            return <Group5 {...props} />;
        default:
            return <Group0 {...props} />;
    }

}