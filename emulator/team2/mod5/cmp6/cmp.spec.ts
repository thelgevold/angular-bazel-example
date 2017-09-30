
import { Cmp4256Component } from './cmp';
describe('Cmp4256Component', () => {
  it('should add', () => {
    expect(new Cmp4256Component().add4256(1)).toBe(4257);
  });
});