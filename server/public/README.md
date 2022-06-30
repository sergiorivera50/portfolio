This directory is used by the backend to store (and serve) static files such as the thumbnails that are uploaded when a project is created. This is so that you don't need to store the files themselves as part of the database which can easily create issues such as large requests from the client.

> The thumbnails of a project are not part of the model schema therefore the standard is to store them as `[ObjectID].png`
