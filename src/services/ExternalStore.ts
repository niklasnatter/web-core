import { useSyncExternalStore } from 'react'

type Listener = () => void

// Singleton with getter/setter whose hook triggers a re-render
class ExternalStore<T extends unknown> {
  private store: T | undefined
  private listeners: Set<Listener> = new Set()

  constructor(initialValue?: T) {
    this.store = initialValue
  }

  public readonly getStore = () => {
    return this.store
  }

  public readonly setStore = (value: T): void => {
    if (value !== this.store) {
      this.store = value
      this.listeners.forEach((listener) => listener())
    }
  }

  private readonly subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  public readonly useStore = () => {
    return useSyncExternalStore(this.subscribe, this.getStore, this.getStore)
  }
}

export default ExternalStore
