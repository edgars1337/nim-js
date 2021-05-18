import Node from "../../../nim/node";
import {RawNodeDatum} from "react-d3-tree/lib/types/common";

export const getChildren = (givenNode: Node): RawNodeDatum | any => {
    return {
        name: String(givenNode.getPiles()),
        attributes: {
            heuristicVal: String(givenNode.getHeuristicValue())
        },
    ...(givenNode.getChildList()?.length ? { children: givenNode.getChildList().map(getChildren)} : [])
    }
}