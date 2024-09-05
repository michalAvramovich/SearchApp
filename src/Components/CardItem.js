import './CardItem.css';

/**
 * This component renders a search result in card.
 *
 * @param {object} item The item with search result fields.
 * @returns {ReactNode} A React element that renders those fileds in card.
 */
const CardItem = ({item}) =>
    {
        const { enteredDate, title, searchEngine, url } = item;
    
        return <div className="Card">
               <p>{enteredDate} </p>  
               <p> {title}</p> 
               <p>{searchEngine} </p>   
               <p>{url}</p>   
              </div>;
    }
    
    export default CardItem;