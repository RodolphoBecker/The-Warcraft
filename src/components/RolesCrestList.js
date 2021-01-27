import './styles/RolesCrestList.css';
import React, {} from 'react';
import { Link } from 'react-router-dom';
import { selectRole } from '../actions/';
import { connect } from 'react-redux';

const RolesCrestList = (props) => {
	const mappedRolesList = props.rolesList.map((role) =>{
		var emptySpace = '';

		if(props.pageIndex === role.id){
			emptySpace = 'd-none';
		}

		return(
			<div key={role.id} className={`col-12 col-lg-2 ${emptySpace}`} style={{ textAlign: "center" }}>
				<Link to={role.page}>
					<button onClick={()=> props.selectRole(role.id)} className="crest-button default-hover">
						<img className="img-fluid" alt={role.role} src={role.crest}></img>
					</button>
				</Link>
				<div className="role main-text">
					<p style={{ textTransform: "uppercase" }}>{role.role}</p>
				</div>
			</div>
		);
	});

	return(
		<React.Fragment>
			{mappedRolesList}
		</React.Fragment>
	)
}
const mapStateToProps = (state) => {
	return { rolesList: state.rolesList, selectRole: selectRole}
}
export default connect(mapStateToProps, {
	selectRole: selectRole
})(RolesCrestList);
