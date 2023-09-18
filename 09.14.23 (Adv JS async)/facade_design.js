
// Facade Pattern Demo Start \\
// This is a structural pattern
// This pattern comes to play when an internal subroutine is hidden and invoked by another function without being exposed (as in a facade).
// The purpose is to conceal or protect a larger piece of logic under a single function call that never exposes its internal workings to other developers.

class CPU {
	freeze() {
		// Code here
	}
	jump(position) {
		// Code here
	}
	execute() {
		// Code here
	}
}

class Memory {
	load(pos, data) {
		// Code Here
	}
}

class HardDrive {
	read(lba, size) {
		// Code Here
	}
}

class ComputerFacade {
	constructor() {
		this.processor = new CPU();
		this.ram = new Memory();
		this.hd = new HardDrive();
	}

	start() {
		this.processor.freeze();
		console.log('Processor Freeze Success');
		this.ram.load(this.BOOT_ADDRESS, this.hd.read(this.BOOT_SECTOR, this.SECTOR_SIZE));
		console.log('Ram Load Success');
		this.processor.jump(this.BOOT_ADDRESS);
		console.log('Processor Jump Success');
		// . . .
		this.processor.execute();
		console.log('Processor Execute Success');
	}
}

// Usage:
console.groupCollapsed('Facade Pattern');
let computer = new ComputerFacade();
computer.start();
console.groupEnd();