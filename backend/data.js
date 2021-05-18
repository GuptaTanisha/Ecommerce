// GOD IS GREAT
import bcrypt from 'bcryptjs';
const data={
    users: [
        {
            name: 'Admin1',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name: 'User1',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: false,
        }
    ],
    products: [

        {
            name: 'Lenovo Laptop',
            category: 'Laptop',
            image: '/images/p1.jpg',
            price: 27990,
            brand: 'Lenovo',
            rating: 4.7,
            countInStock: 5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
           
            name: 'ASUS VivoBook',
            category: 'Laptop',
            image: '/images/p2.jpg',
            price: 24990,
            brand: 'ASUS',
            countInStock: 6,
            rating: 4.8,
            numReviews: 10,
            description: 'high quality product'
        },
        {
          
            name: 'HP Laptop',
            category: 'Laptop',
            image: '/images/p3.jpg',
            price: 35990,
            brand: 'HP',
            rating: 4.3,
            numReviews: 10,
            countInStock: 10,
            description: 'high quality product'
        },
        {
          
            name: 'Lenovo Desktop',
            category: 'Desktop',
            image: '/images/p4.jpg',
            price: 47990,
            brand: 'Lenovo',
            rating: 4.6,
            numReviews: 10,
            countInStock: 9,
            description: 'high quality product'
        },
        {
           
            name: 'HP AIO Core',
            category: 'Desktop',
            image: '/images/p5.jpg',
            price: 64990,
            brand: 'HP',
            rating: 4.5,
            countInStock: 0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
          
            name: 'Lenovo New Desktop',
            category: 'Desktop',
            image: '/images/p6.jpg',
            price: 26999,
            brand: 'Lenovo',
            countInStock: 3,
            rating: 4.2,
            numReviews: 10,
            description: 'high quality product'
        }
    ]
}

export default data;