
import { Cmp1583Component } from './cmp';
describe('Cmp1583Component', () => {
  it('should add', () => {
    expect(new Cmp1583Component().add1583(1)).toBe(1584);
  });
});