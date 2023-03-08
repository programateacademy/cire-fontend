import React from 'react'
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

export default function BackButton () {
  return (
    <div className=" sm:block mr-28" aria-hidden="true">
    <div className="py-5">
      <ArrowLeftCircleIcon className="h-10 ml-8 mb-3 cursor-pointer" />
    </div>
  </div>
  )
}

