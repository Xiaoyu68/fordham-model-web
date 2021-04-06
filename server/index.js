app.set('port', (process.env.PORT || 8081))
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));