import styled from "styled-components";

export const JobCardDiv = styled.div`
    &:hover
    {
        box-shadow: none; /* Remove the box-shadow when the card is hovered */
    }
@media only screen and (min-width: 730.5px) 
{
    display: flex;
    position: relative;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 5.5rem;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.6rem;
    box-shadow: #ccc;
    cursor: pointer;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2); /* Set the box-shadow */
    transition: box-shadow 0.3s ease; /* Add a transition effect to the box-shadow */

    &:hover .applyButton
    {
        visibility: visible;
    }
}

@media only screen and (max-width: 730.49px) 
{
    display: grid;
    position: relative;
    grid-template-columns: 1fr 3fr 2fr 1fr;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 6rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.6rem;
    cursor: pointer;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2); /* Set the box-shadow */
    transition: box-shadow 0.3s ease; /* Add a transition effect to the box-shadow */
}

@media only screen and (max-width: 630px) 
{
    display: grid;
    position: relative;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 6rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.6rem;
    cursor: pointer;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2); /* Set the box-shadow */
    transition: box-shadow 0.3s ease; /* Add a transition effect to the box-shadow */
}

`
export const LogoTableColumn = styled.div`

@media only screen and (min-width: 730.5px) 
{
    display: flex;
    align-items: center;
}

@media only screen and (max-width: 730.49px) 
{
    display: flex;
    grid-column: 1 / 2;
    align-items: center;
}

@media only screen and (max-width: 630px) 
{
    display: flex;
    grid-column: 1 / 2;
    align-items: center;
}

`
export const CompanyLogo = styled.img`

@media only screen and (min-width: 730.5px) 
{
    position: absolute;
    max-width: 4.5rem;
    max-height: 4.5rem;
    left: auto;
    right: 0.7rem;
    border: solid 0.05px;
    border-color: grey;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
}

@media only screen and (max-width: 730.49px) 
{
    max-width: 4.5rem;
    max-height: 4.5rem;
    margin-left: auto;
    margin-right: auto;
    border: solid 0.05px;
    border-color: grey;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
}

@media only screen and (max-width: 630px) 
{
    max-width: 3.5rem;
    max-height: 3.5rem;
    margin-left: auto;
    margin-right: auto;
    border: solid 0.05px;
    border-color: grey;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
}
`