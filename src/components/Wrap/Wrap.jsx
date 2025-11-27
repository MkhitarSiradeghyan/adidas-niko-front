import React from 'react'
import s from './Wrap.module.sass';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Container from '../Container/Container';
import ProductCard from '../ProductCard/ProductCard';




const Wrap = ({heading, button}) => {
    return(
        <div className={s.wrap}>
            <Container>
                <div className={s.container}>
                    <Heading title={heading}/>
                    <div className={s.cards}>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                    <Button text={button}/>
                </div>
                
            </Container>
        </div>
    )
}


export default Wrap;