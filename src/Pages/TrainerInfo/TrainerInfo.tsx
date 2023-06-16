"use client";
import Image from "next/image";
import trainers from "@/_mocks/trainers.json";

export default function TrainerInfo() {
  return (
    <div className="flex items-center justify-center flex-col pt-4">
      <div className="rounded-md text-center bg-slate-700 w-1/2 min-h-min pb-4">
        <div className="grid grid-cols-2 gap-2 justify-items-center">
          <div>
            <div>Trainer Name:</div> <input className="pl-1 text-black" />
          </div>
          <div>
            <div>Trainer Id:</div> <input value={" 00001"} disabled={true} />
          </div>
          <div className="m-1 grid grid-cols-5 gap-2 justify-items-center">
            {trainers.map((inside: any) => {
              return (
                <div key={`context-poke-${inside.id}`}>
                  <div
                    key={`poke_${inside.id}`}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={inside?.url || ""}
                      alt=""
                      width={inside?.width || 0}
                      height={inside?.height || 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
