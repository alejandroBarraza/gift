import '@wojtekmaj/enzyme-adapter-react-17';
import { GiftGridItem } from '../components/GiftGridItem';
import '../setupTests';
import { shallow } from 'enzyme';

describe('testing <GiftGridItem />', () => {
    let wrapper;
    const url = 'https://localhost:3000';
    const title = 'naruto';

    beforeEach(() => {
        wrapper = shallow(<GiftGridItem url={url} title={title} />);
    });
    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test(' <p /> should contain {title} given as prop', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

        
    })
    test('<img /> should contai a {url} and {title} given as prop', () => {
        const img = wrapper.find('img');
        expect(img.props()).toEqual({src:url, alt:title})
    })

    test('<div> from GifGridItem should contain classes given', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('card glassmorphismo')).toBe(true);
        
    })
    
    
    
});
