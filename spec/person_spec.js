const {Person} = require ("../src/person.js")


describe("Person", function() {
    let person = new Person('Ryan',30,'male',['hardarse, ','agile ', 'ssd hard drives'] )
    it("should have a name", function() {
        expect(person.name).toBe('Ryan');
    })

    it('should have an age', function(){
        expect(person.age).toBe(30);
    }) 

    it("should have a gender", function() {
        expect(person.gender).toBe('male');
    })

    it('should have interests', function(){
        expect(person.interests).toEqual(['hardarse, ','agile ', 'ssd hard drives']);
    })

    it ('should have a greeting', function() {
        expect(person.hello()).toEqual('Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives')
    })
})

