
import { Cmp4910Component } from './cmp';
describe('Cmp4910Component', () => {
  it('should add', () => {
    expect(new Cmp4910Component().add4910(1)).toBe(4911);
  });
});