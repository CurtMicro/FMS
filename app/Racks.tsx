
import { Environment } from "@react-three/drei";
import { RackModel } from "../public/models/rack/Scene"
import { BoxModel } from "../public/models/box/Scene"
import { useControls } from "leva";

const Racks = () => {
    const { x, y, z, rotation } = useControls({ x: 0, y: 0, z: 0, rotation: [0, 0, 0] })
    return (
        <>
            <RackModel position={[0, 0, 0]} />
            <RackModel position={[12, 0, 0]} />
            <RackModel position={[20, 0, 8]} rotation={[0, -Math.PI / 2, 0]} />
            <RackModel position={[20, 0, 20]} rotation={[0, -Math.PI / 2, 0]} />
            <BoxModel position={[x, y, z]} rotation={rotation} />
            <BoxModel position={[-4.5, 1.55, 0]} rotation={[0, -Math.PI / 2, 0]} />
            <BoxModel position={[-4.5, 4.75, 0]} rotation={[0, -Math.PI / 2, 0]} />
            <BoxModel position={[0, 6, 0]} rotation={[0, -Math.PI / 2, 0]} />
            <BoxModel position={[0, 9.2, 0]} rotation={[0, -Math.PI / 2, 0]} />
            <BoxModel position={[4.5, 10.35, 0]} rotation={[0, -Math.PI / 2, 0]} />

            <Environment preset="sunset" />
        </>
    );
}

export default Racks