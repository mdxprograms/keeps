import React, { useState, useEffect } from "../web_modules/react.js";
import { render } from "../web_modules/react-dom.js";
import { Grid, Paper, makeStyles } from "../web_modules/@material-ui/core.js";
import { Prism as SyntaxHighlighter } from "../web_modules/react-syntax-highlighter.js";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const App = props => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    setPosts([{ id: 1, content: "Hey there first post" }]);
    setSnippets([{ id: 1, code: "<h1>hello snippet</h1>" }]);
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h3>Blog</h3>
            <ul>
              {posts.map(post => (
                <li key={post.id}>{post.content}</li>
              ))}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h3>Snippets</h3>
            <div>
              {snippets.map(snippet => (
                <SyntaxHighlighter language="javascript">
                  {snippet.code}
                </SyntaxHighlighter>
              ))}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

render(<App />, document.getElementById("app"));
