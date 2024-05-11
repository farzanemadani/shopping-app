export const fetchData = () => {
    return new Promise(resolve => {
      const dataArray = [
        { id: 1,img:'/product1.png', name: 'هدفون الجی مدل Mix Pro', price:'3100000', quantity:0 },
        { id: 2,img:'/product2.png', name: 'هدفون الجی مدل Mix Pro', price:'3100000' ,quantity:0},
        { id: 3,img:'/product3.png', name: 'هدفون الجی مدل Mix Pro', price:'3100000' ,quantity:0},
        // { id: 4,img:'/product3.png', name: 'هدفون الجی مدل Mix Pro', price:'3100000' ,quantity:0},
        // { id: 5,img:'/product3.png', name: 'هدفون الجی مدل Mix Pro', price:'3100000' ,quantity:0},

      ];
      resolve(dataArray);
    });
  };