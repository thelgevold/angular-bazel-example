
import { Cmp6818Component } from './cmp';
describe('Cmp6818Component', () => {
  it('should add', () => {
    expect(new Cmp6818Component().add6818(1)).toBe(6819);
  });
});