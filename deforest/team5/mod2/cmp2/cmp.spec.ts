
import { Cmp3522Component } from './cmp';
describe('Cmp3522Component', () => {
  it('should add', () => {
    expect(new Cmp3522Component().add3522(1)).toBe(3523);
  });
});