
import { Cmp7503Component } from './cmp';
describe('Cmp7503Component', () => {
  it('should add', () => {
    expect(new Cmp7503Component().add7503(1)).toBe(7504);
  });
});