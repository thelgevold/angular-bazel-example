
import { Cmp1599Component } from './cmp';
describe('Cmp1599Component', () => {
  it('should add', () => {
    expect(new Cmp1599Component().add1599(1)).toBe(1600);
  });
});