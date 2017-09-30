
import { Cmp2095Component } from './cmp';
describe('Cmp2095Component', () => {
  it('should add', () => {
    expect(new Cmp2095Component().add2095(1)).toBe(2096);
  });
});