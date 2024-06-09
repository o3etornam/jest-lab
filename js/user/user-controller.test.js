const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
});

test('remove user from userController', () => {    
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
});

test('findByEmail returns correct user', () => {    
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findByEmail(user.getEmail())).toStrictEqual(user);
});

test('findByEmail returns null for non-existent email', () => {    
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findByEmail("nonexistent@generation.org")).toBe(undefined);
});

test('findById returns correct user', () => {    
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findById(user.getId())).toStrictEqual(user);
});

test('findById returns null for non-existent id', () => {    
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findById(9999)).toBe(undefined);
});
