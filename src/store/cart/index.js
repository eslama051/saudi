import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

mutations;

export default {
  state: {
    cartState: false,
    wishState: false,
    items: [
      {
        id: "0",
        title: "تشيرت صيفي",
        type: "بيت الأزياء",
        oldPrice: "350",
        price: "250",
        img: "https://media.istockphoto.com/photos/beautiful-young-woman-eastern-type-fulllength-on-a-light-background-picture-id619727436?k=20&m=619727436&s=612x612&w=0&h=-eVV1bc4bHyx05MMjomB7ZkTp6DJnQntBCiopFOnq4M=",
        quantity: 3,
        colors: ["white", "black"],
        imgs: [
          "https://media.istockphoto.com/photos/beautiful-young-woman-eastern-type-fulllength-on-a-light-background-picture-id619727436?k=20&m=619727436&s=612x612&w=0&h=-eVV1bc4bHyx05MMjomB7ZkTp6DJnQntBCiopFOnq4M=",
          "https://images.pexels.com/photos/4626360/pexels-photo-4626360.jpeg?auto=compress&cs=tinysrgb&w=1600",
          "https://media.istockphoto.com/photos/beautiful-young-woman-eastern-type-fulllength-on-a-light-background-picture-id619727436?k=20&m=619727436&s=612x612&w=0&h=-eVV1bc4bHyx05MMjomB7ZkTp6DJnQntBCiopFOnq4M=",
          "https://media.istockphoto.com/photos/beautiful-young-woman-eastern-type-fulllength-on-a-light-background-picture-id619727436?k=20&m=619727436&s=612x612&w=0&h=-eVV1bc4bHyx05MMjomB7ZkTp6DJnQntBCiopFOnq4M=",
          "https://media.istockphoto.com/photos/beautiful-young-woman-eastern-type-fulllength-on-a-light-background-picture-id619727436?k=20&m=619727436&s=612x612&w=0&h=-eVV1bc4bHyx05MMjomB7ZkTp6DJnQntBCiopFOnq4M=",
        ],
      },

      {
        id: "1",
        title: "تشيرت صيفي",
        type: "بيت الأزياء",
        oldPrice: "350",
        price: "250",
        img: "https://media.istockphoto.com/photos/beautiful-young-woman-eastern-type-fulllength-on-a-light-background-picture-id619727436?k=20&m=619727436&s=612x612&w=0&h=-eVV1bc4bHyx05MMjomB7ZkTp6DJnQntBCiopFOnq4M=",
        quantity: 5,
        colors: ["pink", "green"],
        imgs: [
          "https://media.istockphoto.com/photos/beautiful-young-woman-eastern-type-fulllength-on-a-light-background-picture-id619727436?k=20&m=619727436&s=612x612&w=0&h=-eVV1bc4bHyx05MMjomB7ZkTp6DJnQntBCiopFOnq4M=",
          "https://images.pexels.com/photos/4626360/pexels-photo-4626360.jpeg?auto=compress&cs=tinysrgb&w=1600",
        ],
      },
      {
        id: "2",
        title: "تشيرت صيفي",
        type: "بيت الأزياء",
        oldPrice: "350",
        price: "250",
        img: "https://media.istockphoto.com/photos/beautiful-young-woman-eastern-type-fulllength-on-a-light-background-picture-id619727436?k=20&m=619727436&s=612x612&w=0&h=-eVV1bc4bHyx05MMjomB7ZkTp6DJnQntBCiopFOnq4M=",
        quantity: 2,
        colors: ["red", "yellow"],
        imgs: [
          "https://edia.istockphoto.com/photos/beautiful-young-woman-eastern-type-fulllength-on-a-light-background-picture-id619727436?k=20&m=619727436&s=612x612&w=0&h=-eVV1bc4bHyx05MMjomB7ZkTp6DJnQntBCiopFOnq4M=",
          "https://images.pexels.com/photos/4626360/pexels-photo-4626360.jpeg?auto=compress&cs=tinysrgb&w=1600",
        ],
      },
      {
        id: "3",
        title: "تشيرت صيفي",
        type: "بيت الأزياء",
        oldPrice: "350",
        price: "250",
        img: "https://media.istockphoto.com/photos/beautiful-young-woman-eastern-type-fulllength-on-a-light-background-picture-id619727436?k=20&m=619727436&s=612x612&w=0&h=-eVV1bc4bHyx05MMjomB7ZkTp6DJnQntBCiopFOnq4M=",
        quantity: 6,
        colors: ["white", "black"],
        imgs: [
          "https://media.istockphoto.com/photos/beautiful-young-woman-eastern-type-fulllength-on-a-light-background-picture-id619727436?k=20&m=619727436&s=612x612&w=0&h=-eVV1bc4bHyx05MMjomB7ZkTp6DJnQntBCiopFOnq4M=",
          "https://images.pexels.com/photos/4626360/pexels-photo-4626360.jpeg?auto=compress&cs=tinysrgb&w=1600",
        ],
      },
    ],
  },
  mutations,
  actions,
  getters,
};
