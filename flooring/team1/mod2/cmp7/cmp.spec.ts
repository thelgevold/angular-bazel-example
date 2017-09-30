
import { Cmp5127Component } from './cmp';
describe('Cmp5127Component', () => {
  it('should add', () => {
    expect(new Cmp5127Component().add5127(1)).toBe(5128);
  });
});