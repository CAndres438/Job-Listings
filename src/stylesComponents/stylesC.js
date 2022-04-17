import styled from 'styled-components'

export const Contenedor = styled.div`
background-color: #f0fafb;
margin: 0;
padding: 0%;
`

export const T = styled.h3`
color:var(--color-black);
font-weight: 700;
`
export const Header = styled.div`
    background-color: #5da4a4;
    background-image: url(https://res.cloudinary.com/daalu/image/upload/v1650045969/recursos_Job_listing/bg-header-desktop_suwcm4.svg);
    height: 9rem;
    margin: 0px;
    padding: 0;
`
export const Cards = styled.div`
display: flex;
background-color: var(--color-white);
    width: 70vw;
    height: 100%;
    padding: 1.5rem 2rem;
    border-radius: 5px;
    margin: 50px auto;
    border-left: 5px solid #5da4a4;

    box-shadow: 0px 4px 6px 4px rgba(91, 164, 164, 0.2);
`
export const Cards2 = styled.div`
display: flex;
background-color: var(--color-white);
    width: 70vw;
    height: 100%;
    padding: 1.5rem 2rem;
    border-radius: 5px;
    margin: 50px auto;

    box-shadow: 0px 4px 6px 4px rgba(91, 164, 164, 0.2);
`
export let Img = styled.div`
    width: 80px;
    height: 80px;
    margin: auto 20px;
    align-self: center;
    @media (max-width: 700px) {
    width: 0px;
    transform: scale(0.5);
    position: relative;
    bottom: 120px;
    }
    @media (max-width: 500px) {
    bottom: 130px;
    }
`
export let Content = styled.div`
width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    float: right;
    
`

//info
export let Title = styled.div`
color: #5da4a4;
font-weight: 700;
@media (max-width: 700px) {
    margin-top: 25px;
    }
`
export let Info = styled.div`
    width: 45%;
margin: auto 10px;
@media (max-width: 700px) {
    padding: 10px;
    width: 90%;
    border-bottom: 2px solid gray;
    }
`
export let Time = styled.div`
    color: gray;
    @media (max-width: 700px) {
    }
`

// lista
export let Tech = styled.div`
    width: 45%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: auto ;
    @media (max-width: 700px) {
        padding: 0;
    width: 95%;
    }
    `
export let Ultech = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
list-style: none;
align-items: center;
padding: 0;
`
export let ListTech = styled.span`
background-color: #f0fafb;
color: #5da4a4;
padding: 5px;
margin: 5px;
border-radius: 5px;
font-weight: 700;
&:hover{
    background-color: #5da4a4;
color: #f0fafb;
    }
`
export let ListTech2 = styled.span`
background-color: #f0fafb;
color: #5da4a4;
width: 120px;
padding: 5px;
margin: 5px;
border-radius: 5px;
font-weight: 700;
&:hover{
    background-color: #5da4a4;
color: #f0fafb;
    }
`

export let Bu = styled.button`
    background-color: var(--color-primary-desatured);
    float: right;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: .5rem;
    transition: all .2s;`

export let Clear= styled.button`
background-color:var(--color-white);
border: none;

`

export let New= styled.span`

    color: var(--color-white);
    background-color: var(--color-primary-desatured);
    border-radius: 1rem;
    padding: 0.3rem;
    margin-bottom: 0.3 rem;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 0.8rem;
`
export let Feat = styled.span`
 color: var(--color-white);
    background-color: var(--color-very-dark-grayish);
    border-radius: 1rem;
    padding: 0.3rem;
    margin-bottom: 0.3 rem;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 0.8rem;

`

