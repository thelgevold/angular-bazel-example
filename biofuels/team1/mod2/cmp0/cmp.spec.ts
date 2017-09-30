
import { Cmp1120Component } from './cmp';
describe('Cmp1120Component', () => {
  it('should add', () => {
    expect(new Cmp1120Component().add1120(1)).toBe(1121);
  });
});