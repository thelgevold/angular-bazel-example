
import { Cmp4260Component } from './cmp';
describe('Cmp4260Component', () => {
  it('should add', () => {
    expect(new Cmp4260Component().add4260(1)).toBe(4261);
  });
});