
import { Cmp7370Component } from './cmp';
describe('Cmp7370Component', () => {
  it('should add', () => {
    expect(new Cmp7370Component().add7370(1)).toBe(7371);
  });
});