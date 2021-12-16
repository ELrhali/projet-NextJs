import React from 'react';
import { useSubscription, gql } from '@apollo/client';

interface Message {
  content: string;
}

interface News {
  test: Message;
}

const LATEST_NEWS = gql`
  subscription getLatestNews {
    test {
      content
    }
  }
`;

 function LatestNews() {
  const { loading, data } = useSubscription<News>(LATEST_NEWS);
  return (
    <div>
      <h5>Latest News</h5>
      <p>
        {loading ? 'Loading...' : data!.test.content}
      </p>
    </div>
  );
}
export default LatestNews; 