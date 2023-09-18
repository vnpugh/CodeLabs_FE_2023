
// Composites Pattern Demo Start \\
// This is a structrual pattern
// This pattern is where objects are composed of multiple parts to create a single entity that becomes the access point for all the parts.
// Component Class

class Employee {
	constructor(name, position) {
		this.name = name;
		this.position = position;
	}
}

// Leaf Subclass
class SoftwareDeveloper extends Employee {
	constructor(name, position) {
		super(name, position);
	}
}
// Leaf Subclass
class FreelanceDesigner extends Employee {
	constructor(name, position) {
		super(name, position);
	}
}

// Composite Subclass
class DevTeamLead extends Employee {
	constructor(name, position) {
		super(name, position);
		this.teamMembers = [];
	}

	addMember(employee) {
		this.teamMembers.push(employee);
	}

	viewTeam() {
		let employeeNames = this.teamMembers.map((member) => member.name);
		return employeeNames;
	}
	// . . .
}

// Usage:
const seniorDev = new SoftwareDeveloper('Rachel', 'Senior Developer');
const companyDesigner = new FreelanceDesigner('Joey', 'Web Designer');
const teamLead = new DevTeamLead('Regina', 'Dev Team Lead');

teamLead.addMember(seniorDev);
teamLead.addMember(companyDesigner);

console.groupCollapsed('Composites Pattern');
console.log('Team members list:', teamLead.viewTeam());
console.groupEnd();