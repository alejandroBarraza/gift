import '@wojtekmaj/enzyme-adapter-react-17';
import '../../setupTests';
import { shallow } from 'enzyme';
import { getGift } from '../../helpers/getGifts';

describe('testing helper funcion getGifts',() => {

    
    test('should return http request for each object fetched.', async() => {
        const giftData = await getGift('naruto');
        giftData.forEach( ({url}) => {
            expect(url.includes('https')).toBe(true);
        });
        
        
        
    }),
    test('GiftData should return longest 10 after fetch', async() => {
        const giftData = await getGift('naruto');
        expect(giftData.length).toBe(10);

    }),
    test('should return [] array if {category} is not given as props', async() => {
        const giftData = await getGift('');
        expect(giftData).toEqual([]);
    })
    
    
    
})
