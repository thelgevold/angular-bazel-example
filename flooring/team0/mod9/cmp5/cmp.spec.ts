
import { Cmp5095Component } from './cmp';
describe('Cmp5095Component', () => {
  it('should add', () => {
    expect(new Cmp5095Component().add5095(1)).toBe(5096);
  });
});