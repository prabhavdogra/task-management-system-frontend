import '../styles/inputtile.scss'

const InputTile = (props) => {
    return (
        <div className="input-tile">
            <div className="label">
                {props.fieldData.label}
            </div>
            <input class="input-tile" type="text" value={props.fieldData.value}/>
        </div>
     );
}
 
export default InputTile;