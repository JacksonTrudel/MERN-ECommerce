import { PropsWithChildren } from 'react';
import commonStyles from './../styles/Common';

type PageWithMarginsProps = {};

function PageWithMargins({ children }: PropsWithChildren<PageWithMarginsProps>) {
    return (
        <div style={commonStyles.fullsizeContainerLight}>
            <div style={commonStyles.mainContainerLight}>{children}</div>
        </div>
    );
}

export default PageWithMargins;
