import React from 'react';
import { useParams } from "react-router-dom";
import useRepoSearch from './useRepoSearch';

import {
  Button,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Typography,
  CardActions,
  Fade,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ComputerIcon from '@mui/icons-material/Computer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';
import ArticleIcon from '@mui/icons-material/Article';
import './Components.css';

function Repo() {
  // get the params in the route
  const { username, reponame } = useParams();

  // get the repo using hook
  const {
    loading,
    error,
    repo
  } = useRepoSearch(username, reponame);

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ margin: '0 0 10px 5px' }}>
        <Link underline="hover" color="inherit" href={"/users/" + username + "/repos"} sx={{ display: 'flex', alignItems: 'center' }}>
          <PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {username}
        </Link>
        <Link underline="hover" color="inherit" href={"/users/" + username + "/repos/" + reponame} sx={{ display: 'flex', alignItems: 'center' }}>
          <ComputerIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {reponame}
        </Link>
      </Breadcrumbs>
      <div className="font text text-center">{loading && 'Loading...'}</div>
      <div className="font text text-center">{error && 'Error'}</div>
      <Fade in={!loading}>
        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {repo?.full_name}
            </Typography>
            <Typography gutterBottom variant="caption" display="block" color="text.secondary">
              created at {repo?.created_at.split('T')[0]}
            </Typography>
            <List sx={{ width: '100%' }}>
              <ListItem sx={{ padding: '8px 0 8px 0' }}>
                <ListItemAvatar>
                  <Avatar><ArticleIcon /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Description" secondary={repo?.description || 'Not available'} />
              </ListItem>
              <Divider variant="inset" component="li" sx={{ marginLeft: '55px' }} />
              <ListItem sx={{ padding: '8px 0 8px 0' }}>
                <ListItemAvatar>
                  <Avatar><StarIcon /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Star Count" secondary={repo?.stargazers_count} />
              </ListItem>
              <Divider variant="inset" component="li" sx={{ marginLeft: '55px' }} />
              <ListItem sx={{ padding: '8px 0 8px 0' }}>
                <ListItemAvatar>
                  <Avatar><LanguageIcon /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Language" secondary={repo?.language || 'Not available'} />
              </ListItem>
              <Divider variant="inset" component="li" sx={{ marginLeft: '55px' }} />
              <ListItem sx={{ padding: '8px 0 8px 0' }}>
                <ListItemAvatar>
                  <Avatar><VisibilityIcon /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Visibility" secondary={repo?.visibility} />
              </ListItem>
            </List>
            <CardActions sx={{ justifyContent: 'end' }}>
              <Button size="small" color="primary" href={repo?.html_url} target="_blank">See More</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Fade>
    </>
  );
}

export default Repo;