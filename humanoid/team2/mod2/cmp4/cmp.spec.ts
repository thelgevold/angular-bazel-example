
import { Cmp7224Component } from './cmp';
describe('Cmp7224Component', () => {
  it('should add', () => {
    expect(new Cmp7224Component().add7224(1)).toBe(7225);
  });
});