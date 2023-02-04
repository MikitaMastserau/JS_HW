// Дан сайт https://jsonplaceholder.typicode.com/. Cделать 2 запроса на эндпоинты /posts и /users
// Результат - массив пользователей. У каждого объекта пользователя должно появиться поле
// myPosts: [<в этом массиве будут посты, которые сделал этот пользователь>].
// Поле массив, так как у одного пользователя может быть более 1-го поста.

const BASE_URL = "https://jsonplaceholder.typicode.com";

const showUsersPosts = async () => {
    try {
        const [users, posts] = await Promise.all([
            fetch(`${BASE_URL}/users`).then((response) => response.json()),
            fetch(`${BASE_URL}/posts`).then((response) => response.json()),
        ]);

        const UsersPostsMap = new Map();

        posts.forEach((post) => {
            if (!UsersPostsMap.has(post.userId)) {
                UsersPostsMap.set(post.userId, []);
            };

            UsersPostsMap.get(post.userId).push(post);
        });

        return users.map((user) => ({
            ...user,
            myPosts: UsersPostsMap.get(user.id),
        }));
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Our Users and their Posts");
    };
};

(async() => {
    const data = await showUsersPosts();

    console.log(data);
})();