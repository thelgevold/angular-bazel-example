
import { Cmp7576Component } from './cmp';
describe('Cmp7576Component', () => {
  it('should add', () => {
    expect(new Cmp7576Component().add7576(1)).toBe(7577);
  });
});