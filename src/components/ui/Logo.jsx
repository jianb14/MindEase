import { Brain } from "lucide-react"


export default function Logo() {
    return(

        <div className="flex">
            <div className="bg-blue-500 p-1.5 rounded-xl">
                <Brain className="text-white"/>
            </div>

            <h1 className="text-serif text-2xl font-bold">Mind<span>Ease</span></h1>
        </div>

    )
}