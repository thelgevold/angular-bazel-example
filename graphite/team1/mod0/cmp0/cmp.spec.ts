
import { Cmp6100Component } from './cmp';
describe('Cmp6100Component', () => {
  it('should add', () => {
    expect(new Cmp6100Component().add6100(1)).toBe(6101);
  });
});