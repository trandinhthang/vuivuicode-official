import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Tabs, Tab, Typography, Box, Avatar } from '@mui/material';
import { selectUser } from '../../../features/user/userSlice';
import TabPanel from '../tab-panel';
import CommentItem from './item';
import CommentInput from './input';

const Comment = ({ comments }) => {
  const navigate = useNavigate();
  const { data: dataUser } = useSelector(selectUser);
  const [indexTab, setIndexTab] = useState(0);
  const [content, setContent] = useState({ content: '', id: '' });

  const handleChangeTab = (event, newValue) => {
    setIndexTab(newValue);
  };
  return (
    <Grid item sx={{ mt: 4, mb: 3 }}>
      <Typography variant='h5'>Bình luận</Typography>
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs
            value={indexTab}
            onChange={handleChangeTab}
            aria-label='comment tabs'
          >
            <Tab
              label='Đọc bình luận'
              sx={{
                textTransform: 'capitalize',
              }}
            />

            <Tab
              label='Viết bình luận'
              sx={{
                textTransform: 'capitalize',
              }}
            />
          </Tabs>
        </Box>
        <TabPanel value={indexTab} index={0}>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <Grid container key={comment._id}>
                <Avatar
                  alt={comment.created_by.username}
                  src={comment.created_by.avatar}
                  sx={{ width: 28, height: 28, cursor: 'pointer', mt: 2 }}
                />

                <CommentItem
                  comment={comment}
                  onIndexTab={setIndexTab}
                  onContent={setContent}
                />
              </Grid>
            ))
          ) : (
            <Typography>Chưa có bình luận nào!</Typography>
          )}
        </TabPanel>
        <TabPanel value={indexTab} index={1}>
          {!dataUser?.role ? (
            <Typography>
              Bạn chưa đăng nhập{' '}
              <Typography
                variant='button'
                sx={{ cursor: 'pointer', color: 'primary.main' }}
                onClick={() => navigate('/login')}
              >
                Đăng nhập
              </Typography>
            </Typography>
          ) : (
            <CommentInput content={content} onContent={setContent} />
          )}
        </TabPanel>
      </Box>
    </Grid>
  );
};
Comment.propTypes = {
  comments: PropTypes.array.isRequired,
};
export default Comment;
