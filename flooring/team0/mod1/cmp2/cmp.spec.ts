
import { Cmp5012Component } from './cmp';
describe('Cmp5012Component', () => {
  it('should add', () => {
    expect(new Cmp5012Component().add5012(1)).toBe(5013);
  });
});