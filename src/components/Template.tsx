import { useUnsplash } from "../hooks/useUnsplash";

function Template({ name }: { name: string }){
  const selected = false // TODO ! Implement a selection state?
  const photoUrl = useUnsplash()

  // NOTE this styles are not great and are incomplete!
  return(<div className="bg-white shadow-lg rounded-lg p-4">
      <div className="h-32 bg-gray-200 mb-2"></div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-gray-600 text-sm">Category</p>
    </div>)
}

export default Template;