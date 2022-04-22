const dataPizza = [
  {
    id: 1,
    title: "Cheese Blast Pizza",
    description: "Loaded Mozzarella Cheese",
    price: 180,
    imageURL:
      "https://images.unsplash.com/photo-1629658440097-a3efe92c5b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    title: "Tangy Tomoto Pizza ",
    description: "Fusion of Freash Cheery Tomato",
    price: 200,
    imageURL:
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1236&q=80",
  },
  {
    id: 3,
    title: "Super Veg Loaded Pizza",
    description: "Pizza With Freash Farm Veggies",
    price: 250,
    imageURL:
      "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2002&q=80",
  },
  {
    id: 4,
    title: "Neapoli Pizza",
    description: "Pizza With Olive oil",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    id: 5,
    title: "Basil Pizza",
    description: "Pizza With Basil Leave",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 6,
    title: "Pineapple Pizza",
    description: "Pizza With Pineapple Odd-one ",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
  },
  {
    id: 7,
    title: "Cheese Jalapeno Pizza",
    description: "Pizza With Jalapeno & Spices",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1589840700256-f78d6ed1ae21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 8,
    title: "Italiano Pizza",
    description: "Pizza With italian spices",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1572299656126-f4c7862cd999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 9,
    title: "Garlic Bread",
    description: "Cheese Garlic Bread",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1619531040576-f9416740661b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
  },
  {
    id: 10,
    title: "Paneer Pizza",
    description: "Pizza With Panner cube",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1573821663912-569905455b1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 11,
    title: "Special Veg Pizza",
    description: "Pizza With Panner cube",
    price: 300,
    imageURL:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 12,
    title: "Paneer Pizza",
    description: "Pizza With Panner cube",
    price: 300,
    imageURL:
      "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: 13,
    title: "Paneer Pizza",
    description: "Pizza With Panner cube",
    price: 300,
    imageURL:
      "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?cs=srgb&dl=pexels-kristina-paukshtite-1146760.jpg&fm=jpg",
  },
  {
    id: 14,
    title: "Paneer Pizza",
    description: "Pizza With Panner cube",
    price: 300,
    imageURL:
      "https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 15,
    title: "Paneer Pizza",
    description: "Pizza With Panner cube",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG1hcmdoZXJpdGElMjBwaXp6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 16,
    title: "Paneer Pizza",
    description: "Pizza With Panner cube",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 17,
    title: "Paneer Pizza",
    description: "Pizza With Panner cube",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1607974347625-36a0bcb6a260?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwZG9udXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 18,
    title: "Paneer Pizza",
    description: "Pizza With Panner cube",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9udXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 19,
    title: "Paneer Pizza",
    description: "Pizza With Panner cube",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvbnV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 20,
    title: "Paneer Pizza",
    description: "Pizza With Panner cube",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1634215751955-5bdb12db6c0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhZmZsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 21,
    title: "Paneer Pizza",
    description: "Pizza With Panner cube",
    price: 300,
    imageURL:
      "https://images.unsplash.com/photo-1619015483078-6abcf9238311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFrbGF2YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
];

export default dataPizza;
