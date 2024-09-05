import './RowItem.css';

/**
 * This component renders a search result as item  of list.
 *
 * @param {object} item The item with search result fields.
 * @returns {ReactNode} A React element that renders those fileds as item of list.
 */
const RowItem = ({item}) =>
{
    const { enteredDate, title, searchEngine, url } = item;

    return <div className="Row">
          <span>{enteredDate} </span>   
          <span>{title} </span>    
          <span>{searchEngine} </span>   
          <span>{url} </span>    
          </div>;
}

export default RowItem;
