import {FC, MutableRefObject, useRef} from 'react';
import Tree from 'react-d3-tree';
import {RawNodeDatum} from "react-d3-tree/lib/types/common";

export interface TreeProps {
    data: RawNodeDatum,
    hide: () => void
}

export const OrgChartTree: FC<TreeProps> = ({data, hide}) => {
    const treeWrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    return (
        <div ref={treeWrapperRef} id="treeWrapper" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, background: 'white' }}>
            <div>Tree by default is collapsed, clicking on nodes opens them up</div>
            <div>You can drag the tree around</div>
            <div>Tree will only appear after computer haas done the move and the tree has generated</div>
            <div>Even though the tree is from last computer move, the top node is the current state</div>
            <button onClick={hide}>Click here to return to game</button>
            <Tree data={data} orientation={'vertical'} collapsible={true} initialDepth={1} translate={{x: 250, y: 250}} />
        </div>
    );
}

export default OrgChartTree