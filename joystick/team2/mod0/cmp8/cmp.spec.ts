
import { Cmp9208Component } from './cmp';
describe('Cmp9208Component', () => {
  it('should add', () => {
    expect(new Cmp9208Component().add9208(1)).toBe(9209);
  });
});