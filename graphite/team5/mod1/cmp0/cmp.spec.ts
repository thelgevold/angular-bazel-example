
import { Cmp6510Component } from './cmp';
describe('Cmp6510Component', () => {
  it('should add', () => {
    expect(new Cmp6510Component().add6510(1)).toBe(6511);
  });
});