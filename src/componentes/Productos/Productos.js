import React , { Component } from 'react';

class Productos extends Component {

state ={
    products:[
        {
           id:1,
           name:'camisa unicornio',
           colors :[ '#467367' ,'#05fd88' ,'#a706ee' ], 
           price: 20    

        },
        {
            id:2,
           name:'camisa unicornio',
           colors :[ '#467367' ,'#05fd88' ,'#a706ee' ], 
           price: 40 
        },
        {
            id:3,
           name:'camisa unicornio',
           colors :[ '#D673FF' ,'#A5fdE9' ,'#a7C6ee' ], 
           price: 60 
        }

    ]

}


render(){
        return (
            <div>

                <h3>Iterando Listas de Objetos</h3>

                <div>

                    {this.state.products.map((product)=>{
                            return(

                                <div>{product.price}-{product.name}</div>
                            )


                    })}
                </div>

            </div>

        )




}
 




}


export default Productos;
