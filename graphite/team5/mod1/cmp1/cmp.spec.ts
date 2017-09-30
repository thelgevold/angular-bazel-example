
import { Cmp6511Component } from './cmp';
describe('Cmp6511Component', () => {
  it('should add', () => {
    expect(new Cmp6511Component().add6511(1)).toBe(6512);
  });
});