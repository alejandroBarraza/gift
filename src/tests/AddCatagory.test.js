import '@wojtekmaj/enzyme-adapter-react-17';
import '../setupTests';
import { shallow } from 'enzyme';
import { AddCatagory } from '../components/AddCatagory';

describe('testing <AddCategory setCategories={setCategories} /> component', () => {
    let wrapper;
    const setcategories = jest.fn()

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCatagory setcategories={setcategories} />);
    }),
    afterEach(() => {
        wrapper.unmount();
    });


    test('<AddCategory setCategories={setCategories}/> should match snapShot()', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should check if value change in input ', () => {
        const input = wrapper.find('input');
        const value = 'hola como estas'
        input.simulate('change',{target:{value}})
        //check if value change in input
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(value);
    })

    test('check after sent submit, setcategories have been called.', () => {
        const form = wrapper.find('form');
        form.simulate('submit',{preventDefault(){}})
        expect(setcategories).toHaveBeenCalled()
    
        
    })
    test('should check if after submit setcategories has benn called, and input value = " " ', () => {
        //debemos seleccionar el input value
        //debemos simular el input value mandandole un valor
        //luego debemos simular un evento submit
        //revisar si setcategories fue llamado
        //revisar si input value tiene la casilla vacia


        const value = "test"
        wrapper.find('input').simulate('change', {target:{value:value}})

        //simular evenyto submit
        wrapper.find('form').simulate('submit',{preventDefault(){}})
        expect(setcategories).toHaveBeenCalledWith(expect.any(Function));
        //check if input value has empty value after setcagories has ben called.
        
        expect(wrapper.find('input').prop('value')).toBe('')





        // const p = wrapper.find('p');
        // expect(p.text().trim()).toBe(value);
        // console.log(p.html())
        
    })
    
    
    
    



    
})
