
import { Cmp1095Component } from './cmp';
describe('Cmp1095Component', () => {
  it('should add', () => {
    expect(new Cmp1095Component().add1095(1)).toBe(1096);
  });
});