import '../styles/fixedinputtile.scss'

const FixedInputTile = (props) => {
    return (
        <div className="fixed-input-tile">
            <div className="label">
                {props.fieldData.label}
            </div>
            {
                props.fieldData.value !== null 
                ? 
                <input className="input-text" type="text" value={props.fieldData.value} id={props.fieldData.inputDivID} onChange={() => props.setFieldText()}/>
                : 
                <input className="input-text" type="text" id={props.fieldData.inputDivID} onChange={() => props.setFieldText()}/>
            }
        </div>
     );
}

export default FixedInputTile;