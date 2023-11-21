"use client"
import { Button } from "@mui/material"

const ControlPanel = () => {
    return (
        <div className="flex justify-center flex-col w-1/4 h-full bg-transparent p-6">
            <div className="flex flex-col items-center w-full h-full rounded-xl bg-slate-600 pt-4 p-2">
                <h1>Control Panel</h1>
                <div className="flex flex-col justify-start items-start w-full h-full">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                </div>
            </div>
        </div>
    )
}

export default ControlPanel;