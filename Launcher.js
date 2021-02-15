class Launcher{
    constructor(bodyA, pointB)
    {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);

    }
    attach()
    {
        this.launcher.bodyA = bodyA;
    }
    fly()
    {
        this.launcher.bodyA = null;
    }

    
}

