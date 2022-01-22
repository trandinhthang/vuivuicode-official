import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';
import { AiOutlineComment } from 'react-icons/ai';
import {
  createPostsComment,
  updatePostsComment,
  selectPostsComment,
} from '../../../../features/posts-comment/postsCommentSlice';
import { selectLogin } from '../../../../features/auth/loginSlice';
import { selectPosts } from '../../../../features/posts/postsSlice';

const CommentInput = ({ content, onContent }) => {
  const dispatch = useDispatch();
  const { data: dataLogin } = useSelector(selectLogin);
  const { data: postsDetail } = useSelector(selectPosts);
  const { loading } = useSelector(selectPostsComment);

  const LoginSchema = Yup.object().shape({
    content: Yup.string().required('Content is required'),
  });

  const formik = useFormik({
    initialValues: {
      content: content.content || '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      const data = {
        ...values,
        posts_id: postsDetail._id,
        accessToken: dataLogin,
      };
      if (content.content) {
        const data = {
          ...values,
          id: content.id,
          accessToken: dataLogin,
        };
        dispatch(updatePostsComment(data));
        return;
      }
      dispatch(createPostsComment(data));
    },
  });
  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          name='content'
          label='Nội dung'
          id='content'
          multiline
          rows={4}
          {...getFieldProps('content')}
          error={Boolean(touched.content && errors.content)}
          helperText={touched.content && errors.content}
        />
        <LoadingButton
          size='small'
          type='submit'
          variant='outlined'
          sx={{
            textTransform: 'unset',
            color: 'primary.main',
            border: (theme) => `1px solid ${theme.palette.grey[200]}`,
          }}
          loading={loading === 'starting' ? isSubmitting : null}
          startIcon={<AiOutlineComment />}
        >
          Bình luận
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};
CommentInput.propTypes = {
  content: PropTypes.object,
  onContent: PropTypes.func,
};
export default CommentInput;
