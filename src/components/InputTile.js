import '../styles/inputtile.scss'

const InputTile = (props) => {
    return (
        <div className="input-tile">
            <div className="label">
                {props.fieldData.label}
            </div>
            {
            props.fieldData.value !== null ? 
            <input className="input-text" type="text" defaultValue={props.fieldData.value} id={props.fieldData.inputDivID}/>
            : <input className="input-text" type="text" id={props.fieldData.inputDivID} onChange={() => props.setFieldText()}/>
            }
        </div>
     );
}

export default InputTile;