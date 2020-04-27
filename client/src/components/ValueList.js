import React from "react";
import { connect } from "react-redux";
import { getValues } from "../actions";

const ValueList = props => {

    [state, setState] = useState([])

    return(
        <div>
            {props.values.map(item => (
                <div key={item.id}>
                    <h2>{item.value}</h2>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        values: state.values,
        error: state.error
    }
}

export default connect(mapStateToProps, { getValues })(ValueList);