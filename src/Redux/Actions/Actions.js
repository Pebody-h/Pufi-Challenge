import { GET_PRODUCTS } from './Actions_Types'

const products = [
    {
        name: 'Pufi Rain',
        description: 'Descripción del producto. Este es un texto simulado',
        img: 'https://i.im.ge/2022/09/30/1Y76Uc.umbrella.png'
    },
    {
        name: 'Pufi Puff',
        description: 'Descripción del producto. Este es un texto simulado',
        img: 'https://i.im.ge/2022/09/30/1Y7jW0.puff-transparent.png'
    }, 
    {
        name: 'Pufi Cart',
        description: 'Descripción del producto. Este es un texto simulado',
        img: 'https://i.im.ge/2022/09/30/1Y7woT.Bolsa.png'
    }, 
    {
        name: 'Pufi Nap',
        description: 'Descripción del producto. Este es un texto simulado',
        img: 'https://i.im.ge/2022/09/30/1Y79jW.Snap.png'
    }
]

export const getProducts = () => dispatch => {
    try{
    dispatch({
        type:GET_PRODUCTS,
        payload: products
    })
    } catch(err){
        return alert(err)
    }
}