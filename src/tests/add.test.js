const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7)

    // if (result !== 7){
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`)
    // }
});

test('should generate greeting for name', () => {
    const result = generateGreeting('Andrea');
    expect(result).toBe(`Hello Andrea`)
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe(`Hello Anonymous`)
});

// echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p