import {NotebookIcon} from 'lucide-react'
const NotFound = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-3 mb-3 border border-gray-200">
      <div id="not-found-container" className="flex flex-col items-center justify-center p-10 space-y-6 text-center">
        <div className="bg-gray-200 rounded-full p-3">
            <NotebookIcon className="size-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">No TODOs yet</h3>
        <p className="text-base-content/70">
            Ready to organize your TODOs? Create your first TODO to get started on your journey.
        </p>
      </div>
    </div>
  )
}

export default NotFound
