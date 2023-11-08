"use client";
import Button from "@/components/ui/Button";
import { useReducer } from "react";

const initialData = {
  name: "",
  email: "",
  message: "",
};

interface FormAction {
  type: keyof typeof initialData;
  payload: string;
}

function formReducer(
  state: typeof initialData,
  action: FormAction
): typeof initialData {
  const { type, payload } = action;

  if (Object.keys(initialData).includes(type)) {
    var newState = { ...state };
    newState[type] = payload;
    return newState;
  }

  return state;
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(formReducer, initialData);
  return (
    <form className="flex flex-col gap-4">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(e) => {
            dispatch({ type: "name", payload: e.currentTarget.value });
          }}
          className="bg-white/5 p-2 px-3 text-white placeholder-white/40 rounded-xl w-full shadow-sm"
        />
        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) => {
            dispatch({ type: "email", payload: e.currentTarget.value });
          }}
          className="bg-white/5 p-2 px-3 text-white placeholder-white/40 rounded-xl w-full shadow-sm"
        />
      </div>
      <textarea
        placeholder="Message"
        value={state.message}
        onChange={(e) => {
          dispatch({ type: "message", payload: e.currentTarget.value });
        }}
        className="bg-white/5 p-2 px-3 text-white placeholder-white/40 rounded-xl w-full shadow-sm min-h-[10rem]"
      />
      <Button className="text-black bg-white w-full flex justify-center hover:text-black hover:bg-white/80">
        Send
      </Button>
    </form>
  );
}
