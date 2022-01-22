import { takeLatest, call, put } from 'redux-saga/effects';
import {
  postsComment,
  postsCommentSuccess,
  postsCommentFailed,
  createPostsComment,
  createPostsCommentSuccess,
  createPostsCommentFailed,
  updatePostsComment,
  updatePostsCommentSuccess,
  updatePostsCommentFailed,
  deletePostsComment,
  deletePostsCommentSuccess,
  deletePostsCommentFailed,
} from './postsCommentSlice';
import {
  getAllWithIdPosts,
  createOne,
  updateOne,
  deleteOne,
} from '../../api/posts-comment';

function* postsCommentSaga(action) {
  try {
    const { id } = action.payload;
    const postsComment = yield call(getAllWithIdPosts, id);
    if (postsComment.status >= 200 && postsComment.status < 400) {
      yield put(postsCommentSuccess(postsComment.data));
    } else {
      yield put(postsCommentFailed(postsComment.data));
    }
  } catch (error) {
    console.log(`error`, error);
  }
}

function* createPostsCommentSaga(action) {
  try {
    const postsComment = yield call(createOne, action.payload);
    if (postsComment.status >= 200 && postsComment.status < 400) {
      yield put(createPostsCommentSuccess(postsComment.data));
    } else {
      yield put(createPostsCommentFailed(postsComment.data));
    }
  } catch (error) {
    console.log(`error`, error);
  }
}

function* updatePostsCommentSaga(action) {
  try {
    const postsComment = yield call(updateOne, action.payload);
    if (postsComment.status >= 200 && postsComment.status < 400) {
      yield put(updatePostsCommentSuccess(postsComment.data));
    } else {
      yield put(updatePostsCommentFailed(postsComment.data));
    }
  } catch (error) {
    console.log(`error`, error);
  }
}

function* deletePostsCommentSaga(action) {
  try {
    const postsComment = yield call(deleteOne, action.payload);
    if (postsComment.status >= 200 && postsComment.status < 400) {
      yield put(deletePostsCommentSuccess(postsComment.data));
    } else {
      yield put(deletePostsCommentFailed(postsComment.data));
    }
  } catch (error) {
    console.log(`error`, error);
  }
}
export default function* mySaga() {
  yield takeLatest(postsComment, postsCommentSaga);
  yield takeLatest(createPostsComment, createPostsCommentSaga);
  yield takeLatest(updatePostsComment, updatePostsCommentSaga);
  yield takeLatest(deletePostsComment, deletePostsCommentSaga);
}
