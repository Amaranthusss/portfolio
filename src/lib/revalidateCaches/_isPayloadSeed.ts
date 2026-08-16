export const isPayloadSeed = (): boolean => {
  return process.env.PAYLOAD_SEED === 'true';
};
