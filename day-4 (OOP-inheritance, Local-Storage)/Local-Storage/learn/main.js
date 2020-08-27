

// SPOT CHECK 1
let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}

// localStorage.userStorage = userStorage
localStorage.userStorage = JSON.stringify(userStorage)
let userStuff = JSON.parse(localStorage.userStorage || "[]")