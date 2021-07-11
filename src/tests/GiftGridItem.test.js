import '@wojtekmaj/enzyme-adapter-react-17';
import { GiftGridItem } from '../components/GiftGridItem';
import '../setupTests';
import { shallow } from 'enzyme';

describe('testing gridGridItem in enzyme', () => {
    let wrapper;
    const url = 'https://localhost:3000';
    const title = 'naruto';

    beforeEach(() => {
        wrapper = shallow(<GiftGridItem url={url} title={title} />);
    });
    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
