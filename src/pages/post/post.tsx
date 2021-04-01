import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import PostCardMolecule from "../../components/molecules/postCard";
import {useParams, useHistory} from 'react-router-dom';
import {usePost} from "../../hooks/usePost";
import LoadingAtom from "../../components/atoms/loading";
import styled from "@emotion/styled";
import {IoChevronBackCircle} from "react-icons/all";
import ButtomAtom from "../../components/atoms/button";
import {useComments} from "../../hooks/useComments";

const PostPageContainer = styled.div`
  * {
    transition: .2s all;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`

const GoBackButton = styled.div`
  margin: 2rem;

  svg {
    margin: 1rem;
    color: #333333;
    font-size: 2rem;
  }

`

const CommentContainer = styled.div`
  width: calc(100% - 14rem);
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 7rem;
`

const PostPage = () => {
    const {id} = useParams<any>()
    const {post} = usePost(id);
    let history = useHistory()
    const {comments, fetchComments} = useComments(id)

    const goBack = () => {
        history.goBack();
    }

    return (
        <PostPageContainer>
            <GoBackButton><ButtomAtom type={"button"} size={"l"} stetic={"soft"}
                                      onClick={() => goBack()}><IoChevronBackCircle/></ButtomAtom></GoBackButton>
            {!post ? <LoadingAtom/> :
                <PostCardMolecule fetchComments={fetchComments} message={post.message} id={(post.id as number)} profile={post.profile}
                                  isLiked={(post.isLiked as boolean)} own={(post.own as boolean)} single={true}
                />}
            <CommentContainer>
                {
                    comments.length > 0 && comments.reverse().map((e) => (
                        <PostCardMolecule fetchComments={fetchComments} single key={e.id} message={e.message} id={(e.id as number)} profile={e.profile}
                                          isLiked={(e.isLiked as boolean)} own={(e.own as boolean)}/>
                    ))
                }
            </CommentContainer>
        </PostPageContainer>
    );
};

export default PostPage;