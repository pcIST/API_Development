db = db.getSiblingDB('pcist-shop')
db.createUser(
    {
        user: "pcist",
        pwd: 'telbechbo00',
        roles: [
            {role: "readWrite", db: "pcist-shop"}
        ]
    }
);
