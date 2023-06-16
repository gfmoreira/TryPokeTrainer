"use client";
export default function TrainerInfo() {
  return (
    <div className="flex items-center justify-center flex-col pt-4">
      <div className="rounded-md text-center bg-slate-700 w-1/2 min-h-min pb-4">
        <div className="grid grid-cols-2 gap-2 justify-items-center">
          <div>
            <div>Trainer Name:</div> <input />
          </div>
          <div>
            <div>Trainer Id:</div> <input value={" 00001"} disabled={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
