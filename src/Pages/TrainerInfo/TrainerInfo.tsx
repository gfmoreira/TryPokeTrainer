"use client";
import Image from "next/image";
import trainers from "@/_mocks/trainers.json";
import { useSelectedContext } from "@/contexts/SelectedContext";
import { useState } from "react";

export default function TrainerInfo() {
  const { character, setCharacter } = useSelectedContext();
  const [trainerInfo, setTrainerInfo] = useState<any>();

  function updateTrainerInfo(
    key: string,
    value: string | number | boolean | object | null
  ) {
    setTrainerInfo((prevState: any) => ({
      ...prevState,
      [key]: value,
    }));
  }

  return (
    <div className="flex items-center justify-center flex-col pt-4">
      <div className="rounded-md text-center bg-slate-700 w-1/2 min-h-min">
        <div className="grid grid-cols-2 gap-2 justify-items-center">
          <div className="m-1 grid grid-cols-5 gap-2 justify-items-center py -2">
            {trainers.map((inside: any) => {
              return (
                <div key={`context-poke-${inside.id}`}>
                  <div>
                    <button
                      className="text-stone-900"
                      onClick={() => {
                        setCharacter(inside);
                        updateTrainerInfo("trainerAvatar", inside);
                      }}
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
          <div className="grid grid-cols-2 gap-2 h-48">
            <div>
              <div>Trainer Name:</div>
              <input
                type="text"
                onChange={(event) =>
                  updateTrainerInfo("name", event.target.value)
                }
                className="mb-2 text-black"
              />
            </div>
            <div>
              <div>E-mail:</div>
              <input
                type="email"
                onChange={(event) =>
                  updateTrainerInfo("email", event.target.value)
                }
                className="mb-2 text-black"
              />
            </div>
            <div>
              <div>Password:</div>
              <input
                type="password"
                onChange={(event) =>
                  updateTrainerInfo("password", event.target.value)
                }
                className="mb-2 text-black"
              />
            </div>
            <div>
              <div>Phone:</div>
              <input
                onChange={(event) =>
                  updateTrainerInfo("phone", event.target.value)
                }
                className="mb-2 text-black"
              />
            </div>
            <div>
              <div>Trainer Id:</div>
              <input
                onChange={(event) =>
                  updateTrainerInfo("trainerId", event.target.value)
                }
                className="mb-2"
                value={"00001"}
                disabled={true}
              />
            </div>
            <div>
              <div>Trainer Avatar:</div>
              {character?.url ? (
                <div
                  key={`trainer-selected-${character?.id}`}
                  className="h-24 flex items-center justify-center"
                >
                  <Image
                    src={character?.url || ""}
                    alt=""
                    width={character?.width || 0}
                    height={character?.height || 0}
                  />
                </div>
              ) : (
                <div className="h-24">Select Your Avatar</div>
              )}
            </div>
            <div className="col-span-2">
              <button
                onClick={() => ""}
                className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
