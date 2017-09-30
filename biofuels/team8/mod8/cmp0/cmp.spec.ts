
import { Cmp1880Component } from './cmp';
describe('Cmp1880Component', () => {
  it('should add', () => {
    expect(new Cmp1880Component().add1880(1)).toBe(1881);
  });
});