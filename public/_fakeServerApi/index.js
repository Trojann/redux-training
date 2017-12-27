var _fakeServerApi = {
    increaseCount: (currentCount, cb) => setTimeout(() =>cb(currentCount + 1), 1000)
}