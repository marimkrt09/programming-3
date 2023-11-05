class Child extends Parents{
    constructor(name,age,gen){
        super(name,age,gen)
        this.beautiful = true

    }


    walk(){
        super.walk()
        console.log(" I'm walking better than my parents");
    }


}