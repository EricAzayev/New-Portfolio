## FocusTube - Smart YouTube Focus Mode
Github: https://github.com/luoshuyi1124/google-project



**Timeline:** April 2026

### Original Description

Every studier has faced the challenge of the YouTube scroll - it may start with looking for the perfect background noise - getting hooked by a thumbnail, and then it an hour goes by and you've been watching a documentary about volcanoes right before you Computer Theory midterm.

With focustube and the Koala extension, you may suffer this fate no more!

During this project, I was responsible for the Koala Extension and Local-AI support.

The extension has 3 primary features:
- **Focus Mode** (which blocks YouTube thumbnails with Koalas)
- **Block Shorts Mode**
- **Custom Filters Mode** (the highly experimental feature which forces YouTube to only show videos relavent to the users filter. Therefore, no Calc2 study sessions will become 3 hour fishing binges again!)

Some future steps include training local models specifically for video categorization. This is because the current model struggle at accurately filtering for user-selected themes, and the smaller the AI (thus more scaleable and faster), the less predictable it is.

An additional next step can be to implement GPU support for the local models.