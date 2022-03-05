import axios from "axios";

type bodyMessage = {
  text: string;
};

export const sendMessageToChannel = async (log: string): Promise<void> => {
  let body: bodyMessage = { text: log };
  await axios.post(`${process.env.HOOK_INFOS_URL}`, body);
};
