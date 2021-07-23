import '@wojtekmaj/enzyme-adapter-react-17';
import '../setupTests';
import { shallow } from 'enzyme';
import { GifGrid } from '../components/GifGrid';
import { useFetchGifs } from '../hooks/useFetchGifs';
import '@testing-library/jest-dom';
import { GiftGridItem } from '../components/GiftGridItem';
jest.mock('../hooks/useFetchGifs');

describe('testing <GifGrid /> component', () => {
    const category = 'naruto';
    let wrapper;
    beforeEach(() => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        wrapper = shallow(<GifGrid category={category} />);
    });
    afterEach(() => {
        wrapper.unmount();
    });
    test('should match <GifGrid category={cateogory}/>  with snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should load item after use fetch in customHook UseFetchGifts', () => {
        const imgs = [
            {
                id: 13123,
                title: category,
                url: 'htttps://www.gift/naruto.png',
            },
        ];

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false,
        });

        wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find(GiftGridItem)).toHaveLength(1);
    });
});
