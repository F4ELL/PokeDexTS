import styled from 'styled-components';

type TStyledCard = {
    bgColor: string
}

export const StyledCard = styled.div<TStyledCard>`
    .card--container{
        display: flex;
        flex-direction: column;
        width: 500px;
        background-color: #FFF;
        position: relative;
        border-radius: 10px;
        box-shadow: 4px 4px 20px rgba(0,0,0, .1);

    }

    .card--top{
        background-color: ${props => props.bgColor};
        padding: 40px;
        height: 330px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;        
    }

    .card--desc{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFF;
        font-size: 16px;
    }

    .card--desc h2{
        font-size: 24px;
        font-weight: 800;
    }

    .card--type{
        margin-top: 5px;
    }

    .card--type span{
        background-color: #FFF;
        font-size: 14px;
        color: #000;
        padding: 5px 15px;
        border-radius: 15px;
    }

    .card--image{
        position: absolute;
        width: 350px;
        top: 50px;
        left: calc(50% - 175px);
    }

    .card--image img{
        width: 100%;
    }

    .card--bottom{
        display: flex;
        justify-content: center;
        margin-top: 50px;
        gap: 20px;
        padding: 40px; 
    }

    .card--bottom h3{
        color: #5F5D5B;
        font-size: 20px;
        font-weight: 800;
        border-bottom: 1px solid #BBB9B8;       
    }

    .card--status{
        flex: 1;
    }

    .card--status ul,
    .card--skills ul{
        list-style: none;
        margin-top: 15px;
        text-transform: capitalize;
    }

    .card--status ul li,
    .card--skills ul li{
        margin-bottom: 5px;
    }

    .card--skills{
        flex: 1;
    }

`