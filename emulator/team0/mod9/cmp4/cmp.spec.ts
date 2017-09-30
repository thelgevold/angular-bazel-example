
import { Cmp4094Component } from './cmp';
describe('Cmp4094Component', () => {
  it('should add', () => {
    expect(new Cmp4094Component().add4094(1)).toBe(4095);
  });
});