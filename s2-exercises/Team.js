class Team {
    constructor() {
        this.teamname = 'Kanto Boys';
        this.trainername = 'Ash';
        this.roster = [];
    }

    describe() {
        `Team "${this.teamname}" with trainer "${this.trainername}"
        has the following pokemon: ${[...this.roster]}`;
    }
}