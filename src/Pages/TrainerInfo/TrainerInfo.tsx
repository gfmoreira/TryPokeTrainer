"use client";
import Image from "next/image";
import trainers from "@/_mocks/trainers.json";
import { useSelectedContext } from "@/contexts/SelectedContext";

export default function TrainerInfo() {
  const { character, setCharacter } = useSelectedContext();

  return (
    <div className="flex items-center justify-center flex-col pt-4">
      <div className="rounded-md text-center bg-slate-700 w-1/2 min-h-min">
        <div className="grid grid-cols-2 gap-2 justify-items-center">
          <div className="m-1 grid grid-cols-5 gap-2 justify-items-center  py-2">
            {trainers.map((inside: any) => {
              return (
                <div key={`context-poke-${inside.id}`}>
                  <div>
                    <button
                      className="text-stone-900"
                      onClick={() => setCharacter(inside)}
                    >
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
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div>
              <div>Trainer Name:</div> <input className="mb-2 text-black" />
            </div>
            <div>
              <div>Trainer Id:</div>{" "}
              <input className="mb-2" value={" 00001"} disabled={true} />
            </div>
            <div>
              <div>Trainer Avatar:</div>
              <div
                key={`trainer-selected-${character?.id}`}
                className="flex items-center justify-center"
              >
                <Image
                  src={character?.url || ""}
                  alt=""
                  width={character?.width || 0}
                  height={character?.height || 0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
