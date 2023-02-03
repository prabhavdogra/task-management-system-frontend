import '../styles/inputtile.scss'

const InputTile = (props) => {
    return (
        <div className="input-tile">
            <div className="label">
                {props.fieldData.label}
            </div>
            {
            props.fieldData.value !== null ? 
            <input class="input-text" type="text" value={props.fieldData.value}/>
            : <input class="input-text" type="text"/>
            }
        </div>
     );
}
 
export default InputTile;