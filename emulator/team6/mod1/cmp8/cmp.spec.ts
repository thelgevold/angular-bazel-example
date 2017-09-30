
import { Cmp4618Component } from './cmp';
describe('Cmp4618Component', () => {
  it('should add', () => {
    expect(new Cmp4618Component().add4618(1)).toBe(4619);
  });
});