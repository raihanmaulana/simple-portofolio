import { PaperClipIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="container mx-auto">
      <div className="px-4 sm:px-0">
        <div className="text-4xl pt-8 pb-3 text-center font-bold ">
          About Me
        </div>
        <p className="mt-1 max-w-2xl text-white-500 pt-4">
          Personal details and application.
        </p>
      </div>
      <div className="mt-6 border-t border-white-100">
        <dl className="divide-y divide-white-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">
              Muhammad Raihan Maulana
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">
              Application for
            </dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">
              Backend Developer
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">
              raihanmaulana09@gmail.com
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">
              Salary expectation
            </dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">
              $120,000
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">
              About
            </dt>
            <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white-900">
              Attachments
            </dt>
            <dd className="mt-2 text-sm text-white-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-white-100 rounded-md border border-white-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-shrink-0 text-white-400"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        CV Muhammad Raihan Maulana.pdf
                      </span>
                      <span className="flex-shrink-0 text-white-400">
                        GDrive
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="https://drive.google.com/file/d/1jkVaFygszqF77HEC6jEJ2pfnr4ojvhdV/view"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-shrink-0 text-white-400"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        coverletter_back_end_developer.pdf
                      </span>
                      <span className="flex-shrink-0 text-white-400">
                        4.5mb
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
