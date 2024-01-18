import eventBus from "./event-bus";

describe("event-bus", () => {
  const EVENT_KEY = "MY_EVENT";

  it("deve registrar um evento com subscribe", async () => {
    const spyCallback = jest.fn();

    eventBus.subscribe(EVENT_KEY, spyCallback);
    document.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: true }));

    expect(spyCallback).toHaveBeenCalledTimes(1);
  });

  it("deve disparar um evento com dispatch", async () => {
    const spyCallback = jest.fn();

    eventBus.subscribe<boolean>(EVENT_KEY, spyCallback);
    eventBus.dispatch<boolean>(EVENT_KEY, true);

    expect(spyCallback).toHaveBeenCalledTimes(1);
  });

  it("deve remover um evento com unsubscribe", async () => {
    const spyCallback = jest.fn();
    const spyCallback2 = jest.fn();

    const { unsubscribe } = eventBus.subscribe<boolean>(EVENT_KEY, spyCallback);

    eventBus.subscribe<boolean>(EVENT_KEY, spyCallback2);

    eventBus.dispatch<boolean>(EVENT_KEY, true);

    expect(spyCallback).toHaveBeenCalledTimes(1);

    unsubscribe();

    eventBus.dispatch<boolean>(EVENT_KEY, true);

    expect(spyCallback).toHaveBeenCalledTimes(1);
    expect(spyCallback2).toHaveBeenCalledTimes(2);
  });
});
