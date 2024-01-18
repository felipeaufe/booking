type Func<T> = (event: T) => unknown;

interface Subscribe {
  unsubscribe: () => void;
}

interface EventBus {
  subscribe<T>(eventName: string, receiver: Func<T>): Subscribe;
  dispatch<T>(eventName: string, subject: T): void;
}

/**
 * Remove um observador com a chave e função informados.
 *
 * @param eventName Nome do evento (Chave)
 * @param receiver Instância da função callback do evento criado;
 * @example
 * jsx```
 * function Component() {
 *  useEffect(() => {
 *    const receiver = function(data: MyInterface) {
 *      console.log(data);
 *    }
 *
 *    const { unsubscribe } = subscribe<MyInterface>(EventsKeys.MY_EVENT, receiver);
 *
 *    return () => {
 *      unsubscribe();
 *    }
 *  }, []);
 * }
 * ```
 */
function unsubscribe(eventName: string, receiver: Func<Event>) {
  document.removeEventListener(eventName, receiver);
}

/**
 * Um observador para o evento da chave informada.
 *
 * @param eventName Nome do evento (Chave)
 * @param receiver Callback com os dados enviados no evento.
 * @example
 * jsx````
 *
 * function receiver(data: MyInterface) {
 *   console.log(data);
 * }
 *
 * subscribe<MyInterface>(EventsKeys.MY_EVENT, receiver);
 *
 * ```
 */
export function subscribe<T>(eventName: string, receiver: Func<T>): Subscribe {
  function register(event: Event) {
    receiver((event as CustomEvent<T>).detail);
  }

  document.addEventListener(eventName, register);

  return {
    unsubscribe: () => unsubscribe(eventName, register),
  };
}

/**
 * Dispara um evento com os dados desejados para a chave informada;
 *
 * @param eventName Nome do evento (Chave)
 * @param subject Valores desejados.
 *
 * @example
 * jsx````
 * axios.get(path).then(({ data }) => {
 *   dispatch<MyInterface>(EventsKeys.MY_EVENT, data);
 * });
 * ```
 */
export function dispatch<T>(eventName: string, subject: T) {
  document.dispatchEvent(new CustomEvent(eventName, { detail: subject }));
}

const eventBus: EventBus = {
  subscribe,
  dispatch,
};

export default eventBus;
