import '@wojtekmaj/enzyme-adapter-react-17';
import '../setupTests';
import { shallow } from 'enzyme';
import { AddCatagory } from '../components/AddCatagory';

describe('testing <AddCategory setCategories={setCategories} /> component', () => {
    let wrapper;
    const setcategories = () => {}

    beforeEach(() => {
        wrapper = shallow(<AddCatagory setcategories={setcategories} />);
    }),
    afterEach(() => {
        wrapper.unmount();
    });


    test('<AddCategory setCategories={setCategories}/> should match snapShot()', () => {
        expect(wrapper).toMatchSnapshot();
    })
    



    
})
