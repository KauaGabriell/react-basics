export function useMessage() {
  function show(name: string) {
    console.log(`Olá meu nome é ${name}`);
  }

  return { show };
}
