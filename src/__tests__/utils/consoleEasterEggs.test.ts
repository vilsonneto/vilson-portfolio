import {
  initConsoleEasterEggs,
  registerConsoleCommands,
} from '@/utils/consoleEasterEggs';

describe('initConsoleEasterEggs', () => {
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    jest.useFakeTimers();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should not execute on server-side', () => {
    const originalWindow = global.window;
    // @ts-ignore
    delete global.window;

    initConsoleEasterEggs();
    expect(consoleLogSpy).not.toHaveBeenCalled();

    global.window = originalWindow;
  });

  it('should log ASCII art on initialization', () => {
    initConsoleEasterEggs();

    expect(consoleLogSpy).toHaveBeenCalled();
    const firstCall = consoleLogSpy.mock.calls[0][0];
    // Check for ASCII art characters
    expect(firstCall).toContain('██');
  });

  it('should log easter eggs hints', () => {
    initConsoleEasterEggs();

    const allCalls = consoleLogSpy.mock.calls.map((call) => call[0]).join('');
    expect(allCalls).toContain('EASTER EGGS');
    expect(allCalls).toContain('Konami Code');
  });

  it('should log geek references', () => {
    initConsoleEasterEggs();

    const allCalls = consoleLogSpy.mock.calls.map((call) => call[0]).join('');
    expect(allCalls).toContain('REFERÊNCIAS GEEK');
    expect(allCalls).toContain('Naruto');
    expect(allCalls).toContain('One Piece');
  });

  it('should log contact information', () => {
    initConsoleEasterEggs();

    const allCalls = consoleLogSpy.mock.calls.map((call) => call[0]).join('');
    expect(allCalls).toContain('vilson.neto57@gmail.com');
    expect(allCalls).toContain('linkedin.com/in/vilson-neto');
  });

  it('should log Arthur C. Clarke quote', () => {
    initConsoleEasterEggs();

    const allCalls = consoleLogSpy.mock.calls.map((call) => call[0]).join('');
    expect(allCalls).toContain('Arthur C. Clarke');
  });

  it('should schedule random hint after 30 seconds', () => {
    initConsoleEasterEggs();
    const initialCallCount = consoleLogSpy.mock.calls.length;

    jest.advanceTimersByTime(30000);

    expect(consoleLogSpy).toHaveBeenCalledTimes(initialCallCount + 1);
  });

  it('should schedule exploration hint after 2 minutes', () => {
    initConsoleEasterEggs();
    const initialCallCount = consoleLogSpy.mock.calls.length;

    jest.advanceTimersByTime(120000);

    expect(consoleLogSpy.mock.calls.length).toBeGreaterThan(initialCallCount);
  });
});

describe('registerConsoleCommands', () => {
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('should not register commands on server-side', () => {
    const originalWindow = global.window;
    // @ts-ignore
    delete global.window;

    registerConsoleCommands();

    global.window = originalWindow;
    expect((window as any).vilson).toBeUndefined();
  });

  it('should register vilson command on window', () => {
    registerConsoleCommands();

    expect((window as any).vilson).toBeDefined();
    expect(typeof (window as any).vilson).toBe('function');
  });

  it('should log contact info when vilson command is called', () => {
    registerConsoleCommands();
    (window as any).vilson();

    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining('Você me encontrou'),
      expect.any(String)
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining('vilson.neto57@gmail.com'),
      expect.any(String)
    );
  });

  it('should register konamiHint command on window', () => {
    registerConsoleCommands();

    expect((window as any).konamiHint).toBeDefined();
    expect(typeof (window as any).konamiHint).toBe('function');
  });

  it('should log Konami Code hint when konamiHint is called', () => {
    registerConsoleCommands();
    (window as any).konamiHint();

    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining('↑ ↑ ↓ ↓'),
      expect.any(String)
    );
  });
});
