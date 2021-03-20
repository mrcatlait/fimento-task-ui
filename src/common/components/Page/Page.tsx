import React, { FC, useEffect } from 'react';

interface Props {
  title: string;
}

export const Page: FC<Props> = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children} </>;
};
