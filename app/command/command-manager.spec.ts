import { CommandManager } from "./command-manager";
import { ICommand } from "./interface";

describe('Command Manager', () => {
  const writeCommand: ICommand = {
    execute: jest.fn(),
    undo: jest.fn()
  };

  it('should execute command', () => {
    const commandManager = new CommandManager();
    commandManager.execute(writeCommand);
    expect(writeCommand.execute).toHaveBeenCalled();
  })

  it('should undo command', () => {
    const commandManager = new CommandManager();
    commandManager.execute(writeCommand);
    commandManager.undo();
    expect(writeCommand.execute).toHaveBeenCalled();
    expect(writeCommand.undo).toHaveBeenCalled();
  })
});